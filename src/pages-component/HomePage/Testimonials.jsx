import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import TestimonialCard from "./TestimonialsCards/TestimonialCard";
import bgLines from "../../assets/Images/abstracts.png";
const Testimonials = () => {
  return (
    <div className="relative  mx-auto pr-20 pb-10 mb-20 z-0">
      <img
        className="absolute right-0 top-0 z-[-1] xl:hidden"
        src={bgLines}
        alt=""
      />
      <div className="z-[1] ">
        <div className=" pl-28 pt-20 flex 2xl:flex-row items-center gap-20 2xl:items-start flex-col justify-center lg:justify-between">
          <div className="w-[408px] text-center 2xl:text-left">
            <MainSubHeading text={"Testi"} gradientText={"monials"} />
            <p className=" mt-10 w-[408px]">
              From startups to enterprise giants, our software solutions have
              revolutionized businesses worldwide. Discover why our clients rave
              about the transformative power of our software in driving their
              growth.
            </p>
          </div>
          <div className="space-y-10 pr-10">
            <div className="space-y-10 lg:space-y-0 lg:flex gap-10">
              <div className="w-[408px] ">
                <TestimonialCard />
              </div>
              <div className="w-[408px]">
                <TestimonialCard />
              </div>
            </div>{" "}
            <div className="space-y-10 lg:space-y-0 lg:flex gap-10">
              <div className="w-[408px]">
                <TestimonialCard />
              </div>
              <div className="w-[408px]">
                <TestimonialCard />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
