import React from "react";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
import react from "../assets/Tools and Technologies Icons/Framework Icons/Reactive.svg";
import vue from "../assets/Tools and Technologies Icons/Web Icons/Vue.svg";
import angular from "../assets/Tools and Technologies Icons/Web Icons/angular.svg";
import sass from "../assets/Tools and Technologies Icons/Web Icons/saas.svg";

const techArrary = [
  { tech: "Frontend", array: [react, vue, angular, sass] },
  { tech: "Backend", array: [react, vue, angular, sass] },
  { tech: "Mobile ", array: [react, vue, angular, sass] },
  { tech: "Cyber Security", array: [react, vue, angular, sass] },
  { tech: "other", array: [react, vue, angular, sass] },
];

const ToolsAndTechnologies = ({ text, gradientText, description }) => {
  return (
    <div className="container mx-auto px-10 py-5 sm:py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center">
        <MainSubHeading text={text} gradientText={gradientText} />
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[1000px] my-5 text-center">
          {description}
        </p>
      </div>
      <div className="hidden lg:block shadow-xl border-t border-l border-l-gray-200 border-t-gray-200 rounded-md px-[40px] py-[30px] mt-10">
        {techArrary.map((arr, index) => (
          <div key={index} className="flex items-center ">
            <div className=" flex items-center justify-center p-[10px] min-w-[200px] bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  my-5 rounded-md text-white">
              {" "}
              <h3 className="font-[600]">{arr.tech}</h3>
            </div>
            <div className=" flex items-center justify-around w-full">
              {arr.array.map((icon, index) => (
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="flex items-center justify-center h-[60px] w-[60px] rounded-lg bg-primaryBgColor">
                    <img key={index} src={icon} className="h-[50px] w-[50px]" />
                  </div>
                  <p className="">react</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className=" lg:hidden shadow-xl border-t border-l border-l-gray-200 border-t-gray-200 rounded-md px-[20px] md:px-[40px] mt-5 sm:mt-20">
        {techArrary.map((arr, index) => (
          <div
            key={index}
            className="flex flex-col justify-evenly border-b border-b-gray-300"
          >
            <div className=" flex items-center p-[5px] md:p-[10px] min-w-[200px]   my-5 rounded-md ">
              <h3 className="font-[600]">{arr.tech}</h3>
            </div>
            <div className=" flex items-center justify-between w-full mb-2">
              {arr.array.map((icon, index) => (
                <div className="flex items-center justify-between gap-1 md:gap-3">
                  {" "}
                  <div className="flex items-center md:justify-center h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-lg bg-primaryBgColor">
                    <img
                      key={index}
                      src={icon}
                      className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndTechnologies;
