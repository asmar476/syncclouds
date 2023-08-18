import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import ExpandCard from "./AboutExpandCard/ExpandCard";
// import aboutHorizon from "../../assets/Images/Expand Your Digital Horizons With SyncClouds.svg";
import aboutHorizon from "../../assets/About illustration/SVG 1.svg";

const ExpandYourHorizon = () => {
  return (
    <div className="max-w-[1200px] xl:max-w-[1400px]  mx-auto px-10 mt-16">
      <div className="flex flex-col items-center justify-center text-center ">
        <MainSubHeading
          text={"Expand Your Digital "}
          gradientText={" Horizons With SyncClouds"}
        />
        <p className="text-body font-[500] text-[16px] leading-[24px] max-w-[1000px] mt-5">
          For our clients, the services we provide can increase productivity and
          speed up growth. We have vowed to raise the bar for our client’s
          performance continually.
        </p>
        <img className="hidden md:block" src={aboutHorizon} alt="" />
        <ExpandCard />
      </div>
    </div>
  );
};

export default ExpandYourHorizon;
