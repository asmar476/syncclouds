import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import TestimonialCard from "./TestimonialsCards/TestimonialCard";
import bgLines from "../../assets/Images/abstracts.png";
const Testimonials = () => {
  return (
    <div className="relative w-full  mx-auto pr-5  pb-10 mb-10 z-0">
      <div>
        <img
          className="absolute lg:h-[580px] right-0 top-0 z-[-1]"
          src={bgLines}
          alt=""
        />
        <div className="z-[1] ">
          <div className=" pl-16 pt-12 flex lg:flex-row  gap-2 items-center lg:items-start flex-col justify-center lg:justify-around">
            <div className="w-[350px] text-center lg:text-left">
              <MainSubHeading text={"Testi"} gradientText={"monials"} />
              <p className=" mt-5 w-[350px]">
                <span className="font-semibold">Client Stories of Success</span>
                <br />
                From startups to enterprise giants, our software solutions have
                revolutionized businesses worldwide. Discover why our clients
                rave about the transformative power of our software in driving
                their growth.
              </p>
            </div>
            <div className="space-y-2 xl:space-y-10  ">
              <div className="space-y-10 lg:space-y-0 lg:flex gap-2 xl:gap-10">
                {/* <di className="w-[408px] "> */}

                <TestimonialCard />
                <TestimonialCard />
              </div>{" "}
              <div className="space-y-10 lg:space-y-0 lg:flex gap-2 2xl:gap-10">
                <TestimonialCard />
                <TestimonialCard />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
