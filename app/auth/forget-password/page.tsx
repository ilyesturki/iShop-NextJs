import CustomAuthPage from "@/components/Auth/CustomAuthPage";
import ForgetPassword from "@/components/Auth/Form/ForgetPassword/ForgetPassword";

const page = () => {
  return (
    <CustomAuthPage title="Recover account" subTitle="get back your account.">
      <ForgetPassword AuthButtonTitle="Send Code" />
    </CustomAuthPage>
  );
};

export default page;
