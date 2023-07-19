import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import TestimonialCard from "./TestimonialsCards/TestimonialCard";
import grayoverlay from "../../assets/overlay image/Frame  gray 14534.svg";
// import bg_lines from "../../assets/Images/Group.svg";
const Testimonials = () => {
  return (
    <div className="relative container mx-auto px-10 py-20 lg:py-40 z-0">
      {/* <img className=" top-32 h-[80%] right-0" src={bg_lines} alt="" /> */}
      <div className=" top-0">
        <div className="flex justify-between">
          <div className="w-[408px]">
            <MainSubHeading text={"Testi"} gradientText={"monials"} />
          </div>
          <p className="w-[408px]">
            From startups to enterprise giants, our software solutions have
            revolutionized businesses worldwide. Discover why our clients rave
            about the transformative power of our software in driving their
            growth.
          </p>
          <div className="w-[408px]">
            <TestimonialCard />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[408px]">
            <TestimonialCard />
          </div>
          <div className="w-[408px]">
            <TestimonialCard />
          </div>
          <div className="w-[408px]">
            <TestimonialCard />
          </div>
        </div>
      </div>
      {/* <img
        src={grayoverlay}
        className="absolute hidden md:block top-[108px] left-0 sm:left-10 z-[-10] mt-[-20px]"
  /> */}
    </div>
  );
};

export default Testimonials;
