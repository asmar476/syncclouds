import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { visionData } from "../../constant/VisionGoalData";
import ExpandCard from "./AboutExpandCard/ExpandCard";
// import aboutHorizon from "../../assets/Images/Expand Your Digital Horizons With SyncClouds.svg";
import aboutHorizon from "../../assets/About illustration/SVG 1.svg";

const ExpandYourHorizon = () => {
  return (
    <div className="container mx-auto px-10 mt-16">
      <div className="flex flex-col items-center justify-center text-center ">
        <MainSubHeading
          text={"Expand Your Digital "}
          gradientText={" Horizons With SyncClouds"}
        />
        <p className="text-body font-[500] text-[16px] leading-[24px] max-w-[1000px] my-5">
          For our clients, the services we provide can increase productivity and
          speed up growth. We have vowed to raise the bar for our client’s
          performance continually.
        </p>
        <img className="" src={aboutHorizon} alt="" />

        <div className="grid grid-cols-2 md:grid-cols-4 md:flex-2 flex-1 gap-2 lg:gap-20 mb-10 ">
          {visionData.map((data, index) => (
            <ExpandCard id={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandYourHorizon;
