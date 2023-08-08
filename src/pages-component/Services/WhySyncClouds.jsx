import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import ButtonLight from "../../common component/ButtonLight";
import { features } from "../../constant/Data";
const WhySyncClouds = () => {
  return (
    <div className="my-20">
      <div className="flex items-cente justify-center my-10">
        <MainSubHeading text={"Why Choose "} gradientText={"SyncClouds"} />
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 container mx-auto lg:px-10  my-5">
        {features.map((data, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <img width={106} src={data.image} alt="data.alt" />
            <p
              className="text-[8px] mt-2 mb-10 font-semibold sm:text-[18px]"
              text={data.text}
            >
              {data.text}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="bg-grayLight flex flex-col items-center justify-center my-10 space-y-3 py-5">
        <p className="text-[16px] font-[400] leading-[24px]">CONTACT US</p>
        <h4 className="text-[25.89px] font-[500] leading-[38.83px] max-w-[1000px] text-center">
          Get The Perfect Combination of Passionate Engineers, Top-Notch Skills,
          And Brilliant Project Ideas
        </h4>
        <ButtonLight text={"Contact Us"} />
      </div> */}
    </div>
  );
};

export default WhySyncClouds;
