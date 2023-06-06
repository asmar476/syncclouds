import React from "react";
import InnerPageHeading from "../common component/InnerPageHeading";
import yelloMap from "../assets/overlay image/Yellow iamge.png";
import mob from "../assets/SC Icons SVG/IOS App.svg";
import UIUX from "../assets/SC Icons SVG/Designer.svg";
import web from "../assets/SC Icons SVG/Web & Mobile Development.svg";
import DM from "../assets/SC Icons SVG/Digital Marketing.svg";
import CS from "../assets/SC Icons SVG/cyber Security-01.svg";
import BC from "../assets/SC Icons SVG/Block Chain 1.svg";
import AIML from "../assets/SC Icons SVG/AI-&-ML.svg";
import WEB3 from "../assets/SC Icons SVG/Web 3.0.svg";
import MV from "../assets/SC Icons SVG/Meta Verse.svg";
import cloud from "../assets/SC Icons SVG/Clouds Devops.svg";
import NFTs from "../assets/SC Icons SVG/NFTs.svg";
const Services = () => {
  return (
    <div className=" z-0 bg-white services-drop-down w-full rounded-md px-20 py-10 mt-1 ">
      <div className="relative flex items-center justify-between z-0">
        <div className="space-y-10">
          <InnerPageHeading
            textColor={"text-gradientBlueLight"}
            text={"The Services We Provide to Solve Your Problems"}
          />
          <div className="flex gap-20">
            <div className="space-y-5">
              <div className="flex gap-2 items-center ">
                <img src={web} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Web Development</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={mob} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Mobile Development</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={UIUX} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">UI/UX Designing</h6>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center ">
                <img src={DM} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Digital Marketing</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={CS} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Cyber Security</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <InnerPageHeading
            text={"Feature Services Comming Soon"}
            textColor={"text-gradientBlueLight"}
          />
          <div className="flex gap-20">
            <div className="space-y-5">
              <div className="flex gap-2 items-center ">
                <img src={BC} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Block Chain</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={AIML} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">AI/ML</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={WEB3} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Web 3.0</h6>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center ">
                <img src={MV} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Meta verse</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={cloud} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">Cloud(DevOps)</h6>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={NFTs} className="h-[35px] w-[35px]" />
                <h6 className="text-gradientBlueLight">NFTs</h6>
              </div>
            </div>
          </div>
        </div>
        <img src={yelloMap} className=" absolute  right-10 z-[-1] h-[300px]" />
      </div>
    </div>
  );
};

export default Services;
