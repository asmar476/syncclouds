import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import ButtonLight from "../../common component/ButtonLight";
import { features } from "../../constant/Data";
const WhySyncClouds = () => {
  return (
    <div className="my-10 mx-auto md:my-20 w-full max-w-[1200px] xl:max-w-[1400px] px-10">
      <div className="flex items-cente justify-center my-10">
        <MainSubHeading text={"Why Choose "} gradientText={"SyncClouds"} />
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 container mx-auto lg:px-10  my-5">
        {features.map((data, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <img width={106} src={data.image} alt="data.alt" />
            <p
              className="text-center text-[12px] mt-2 mb-10 font-semibold sm:text-[18px]"
              text={data.text}
            >
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySyncClouds;
