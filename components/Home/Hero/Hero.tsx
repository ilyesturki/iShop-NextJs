import React from "react";
import CategoryCollapsible from "../../Collapsible/CategoryCollapsible";
import LandingSwiper from "../../Swipers/LandingSwiper/LandingSwiper";

const categorys = [
  {
    title: "Woman's Fashion",
    content: ["Elegant Dress", "Chic Blouse"],
  },
  {
    title: "Men's Fashion",
    content: ["Tailored Suit", "Casual Shirts"],
  },
  {
    title: "Electronics",
    content: [],
  },
  {
    title: "Home & Lifestyle",
    content: [],
  },
  {
    title: "Medicine",
    content: [],
  },
  {
    title: "Sports & Outdoor",
    content: [],
  },
  {
    title: "Baby's & Toys",
    content: [],
  },
  {
    title: "Groceries & Pets",
    content: [],
  },
];

const Hero = () => {
  return (
    <div className=" lg:container flex ">
      <div className=" hidden lg:block w-1/5  border-r-[1px] border-grayscale-500 overflow-hidden">
        <div className=" flex flex-col w-full h-full text-grayscale-900 mt-16 pb-28  overflow-y-scroll scroll">
          {categorys.map((c, i) => {
            return (
              <CategoryCollapsible
                key={i}
                title={c.title}
                content={c.content}
              />
            );
          })}
        </div>
      </div>

      <div className=" w-full lg:w-4/5 lg:pt-[50px] lg:pb-[100px] lg:pl-12">
        <LandingSwiper />
      </div>
    </div>
  );
};

export default Hero;
