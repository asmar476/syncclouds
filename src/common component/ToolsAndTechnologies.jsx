import React from "react";
import MainSubHeading from "./MainSubHeading";
import { frontend, backend, cyber, Other } from "../constant/TechData";
import bg from "../assets/Images/bgTools&tech.png";
import { DualMarqueeSlider, LeftToRightMarquee } from "./DualMarqueeSlider";
function ToolsAndTechnologies() {
  return (
    <div id="technologies" className="relative pb-10 my-16">
      <img className="w-full h-[100%] z-[-1] absolute" src={bg} alt="" />
      <div className="max-w-[1440px] w-[100%] mx-auto  px-5  sm:px-10  ">
        <div className="flex flex-col items-center mt-10 pt-20 pb-5">
          <MainSubHeading text={"Techno"} gradientText={"logies"} ml={"ml-2"} />
          <p className="pt-1.5">
            {"We Love using latest tech to our advantage."}
          </p>
        </div>
        <LeftToRightMarquee category={"Front End"} dataArray={frontend} />
        <DualMarqueeSlider category={"Back End"} dataArray={backend} />
        <LeftToRightMarquee category={"Cyber Security"} dataArray={cyber} />
        <DualMarqueeSlider category={"Other"} dataArray={Other} />
      </div>
    </div>
  );
}
export default ToolsAndTechnologies;
