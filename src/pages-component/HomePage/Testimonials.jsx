import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import TestimonialCard from "./TestimonialsCards/TestimonialCard";
import grayoverlay from "../../assets/overlay image/Frame  gray 14534.svg";

const Testimonials = () => {
  return (
    <div className="relative container mx-auto px-10 py-20 lg:py-40 z-0">
      <div className="flex items-center justify-center">
        <MainSubHeading text={"Testi"} gradientText={"monials"} />
      </div>
      <img
        src={grayoverlay}
        className="absolute hidden md:block top-[108px] left-0 sm:left-10 z-[-10] mt-[-20px]"
      />
      <div className="z-[10] mt-10 lg:mt-20">
        <div className=" flex flex-col lg:flex-row gap-10 ">
          <TestimonialCard /> <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
