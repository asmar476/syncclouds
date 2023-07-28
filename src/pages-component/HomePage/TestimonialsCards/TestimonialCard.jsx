import React from "react";
import start from "../../../assets/reviewStar/Vector.svg";
import halfStart from "../../../assets/reviewStar/material-symbols_star-half-rounded.svg";
import profile from "../../../assets/Images/Vector.svg";

const TestimonialCard = () => {
  return (
    <>
      <div className="p-4 w-[300px] lg:w-[350px] testimonial-card bg-white">
        <div className="flex items-center justify-between">
          <h5 className="text-[16px] text-primary md:text-[14px] font-[600] leading-[24px]">
            Asmar Tamjid
          </h5>{" "}
          <img src={profile} alt="" />
        </div>
        <div>
          <p className="text-[14px] md:text-[14px] font-[400] leading-[22px] md:leading-[24px] border-b border-b-black">
            Everything melancholy uncommonly but solicitude inhabiting
            projection off. Connection stimulated estimating long. departure
            ourselves very extreme.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-between md:mt-5">
            <div className="flex flex-col gap-2">
              <p className="text-purpleLight text-[14px] md:text-[14px] ">
                front end developer
              </p>
            </div>
            <div className="flex gap-2">
              <img src={start} />
              <img src={start} /> <img src={start} /> <img src={start} />
              <img src={halfStart} />
            </div>
          </div>
        </div>
      </div>

      {/*  / / / / / // / / / / / //  mob view  / / //   / / /  / */}

      {/* <div className="hidden lg:flex xl:hidden flex-col items-start gap-5 px-[50px] py-[40px]  testimonial-card">
        <div className="flex items-center justify-center h-20 w-24 bg-slate-200 rounded-full">
          <img src={start} className=" rounded-full bg-slate-100" />
        </div>
        <div>
          <p className="text-[16px] font-[400] leading-[24px] pb-5 border-b border-b-black">
            Everything melancholy uncommonly but solicitude inhabiting
            projection off. Connection stimulated estimating long. departure
            ourselves very extreme.
          </p>
          <div className="flex items-start justify-between my-5">
            <div className="flex flex-col gap-2">
              <h5 className="text-[16px] font-[600] leading-[24px]">
                Ryan Donnelly
              </h5>{" "}
              <p className="text-purpleLight">Product Designer</p>
            </div>
            <div className="flex gap-2">
              <img src={start} />
              <img src={start} /> <img src={start} /> <img src={start} />
              <img src={halfStart} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TestimonialCard;
