import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

interface CustomError {
  customError: boolean;
  errors: Record<string, string>;
}

export const handleError = (error: AxiosError | CustomError | Error) => {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
    if (
      error.response?.status === 400 &&
      error.response?.data?.errors?.length > 0 &&
      error.response?.data?.errors[0]?.msg
    ) {
      let delay = 0;
      for (const err of error.response?.data?.errors) {
        setTimeout(() => {
          toast.error(err.msg);
        }, delay);
        delay += 300;
      }
    } else {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  } else if ("customError" in error && error.customError) {
    let delay = 0;
    for (const err in error.errors) {
      setTimeout(() => {
        toast.error(error.errors[err]);
      }, delay);
      delay += 300;
    }
  } else {
    toast.error("An unexpected error occurred");
    console.error(error);
  }
  throw error;
};
