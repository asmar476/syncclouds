import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import ButtonLight from "../../common component/ButtonLight";

const WhySyncClouds = () => {
  return (
    <div className="my-20">
      <div className="flex items-cente justify-center my-10">
        <MainSubHeading text={"Why Choose "} gradientText={"SyncClouds"} />
      </div>
      <div className="grid grid-cols-4 container mx-auto px-10  my-5">
        <div className="flex items-center justify-center">
          {" "}
          <InnerPageHeading text={"100+ Industry Experts"} />
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <InnerPageHeading text={"Supportive Staff Augmentation"} />
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <InnerPageHeading text={"5X Cost-Effective Solutions"} />
        </div>
        <div className="flex items-center justify-center">
          <InnerPageHeading text={"Best Offers & Discounts"} />
        </div>
      </div>
      <div className="bg-grayLight flex flex-col items-center justify-center my-10 space-y-3 py-5">
        <p className="text-[16px] font-[400] leading-[24px]">CONTACT US</p>
        <h4 className="text-[25.89px] font-[500] leading-[38.83px] max-w-[1000px] text-center">
          Get The Perfect Combination of Passionate Engineers, Top-Notch Skills,
          And Brilliant Project Ideas
        </h4>
        <ButtonLight text={"Contact Us"} />
      </div>
    </div>
  );
};

export default WhySyncClouds;
