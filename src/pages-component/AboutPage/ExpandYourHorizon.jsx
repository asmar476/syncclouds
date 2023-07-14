import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { visionData } from "../../constant/VisionGoalData";
import ExpandCard from "./AboutExpandCard/ExpandCard";
import aboutHorizon from "../../assets/About illustration/aboutHorizon.svg";

const ExpandYourHorizon = () => {
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="flex flex-col items-center justify-center text-center ">
        <MainSubHeading
          text={"Expand Your Digital "}
          gradientText={" Horizons With SyncClouds"}
        />
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[1000px] my-5">
          For our clients, the services we provide can increase productivity and
          speed up growth. We have vowed to raise the bar for our client’s
          performance continually."
        </p>
        <img src={aboutHorizon} alt="" />
      </div>
      {/*  / // / / / expand card / // / /  */}
      <div className="grid grid-cols-4 gap-5 mt-20">
        {visionData.map((data, index) => (
          <ExpandCard id={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExpandYourHorizon;