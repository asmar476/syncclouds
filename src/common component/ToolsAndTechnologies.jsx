import React, { useState } from "react";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
import react from "../assets/Tools and Technologies Icons/Framework Icons/Reactive.svg";
import vue from "../assets/Tools and Technologies Icons/Web Icons/Vue.svg";
import angular from "../assets/Tools and Technologies Icons/Web Icons/angular.svg";
import sass from "../assets/Tools and Technologies Icons/Web Icons/saas.svg";
import blackIcon from "../assets/icons/black.svg";
import blueIcon from "../assets/icons/blue.svg";
import bg from "../assets/Images/bgTools&tech.png";
import map from "../assets/Images/map.png";

const techArray = [
  {
    tech: "Frontend",
    array: [
      { name: "React", icon: react },
      { name: "Vue", icon: vue },
      { name: "Angular", icon: angular },
      { name: "Sass", icon: sass },
    ],
  },
  {
    tech: "Backend",
    array: [
      { name: "Vue", icon: vue },
      { name: "Angular", icon: angular },
      { name: "React", icon: react },
      { name: "Sass", icon: sass },
    ],
  },
  {
    tech: "Mobile",
    array: [
      { name: "Angular", icon: angular },
      { name: "Sass", icon: sass },
      { name: "React", icon: react },
      { name: "Vue", icon: vue },
    ],
  },
  {
    tech: "Cyber Security",
    array: [
      { name: "Sass", icon: sass },
      { name: "React", icon: react },
      { name: "Vue", icon: vue },
      { name: "Angular", icon: angular },
    ],
  },
  {
    tech: "Other",
    array: [
      { name: "Vue", icon: vue },
      { name: "Angular", icon: angular },
      { name: "React", icon: react },
      { name: "Sass", icon: sass },
    ],
  },
];

const ToolsAndTechnologies = ({ text, gradientText, description }) => {
  const [selectedTech, setSelectedTech] = useState(techArray[0].tech);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div className=" container relative flex justify-center mx-auto py-5 sm:py-10 h-[794px] lg:py-20">
      {" "}
      <img className="w-[1440px]" src={bg} alt="" />{" "}
      <img className="absolute top-16" src={map} alt="" />
      <div className="absolute top-40">
        <div className="flex flex-col items-center justify-center">
          <MainSubHeading text={text} gradientText={gradientText} />
          <p className="text-[#434343] font-[500] text-[16px] leading-[24px] mb-10 max-w-[1000px] my-5 text-center">
            {description}
          </p>
        </div>
        {/* =========================================================================================================== */}
        <div>
          <div className="flex justify-around">
            {techArray.map((item) => (
              <button
                key={item.tech}
                className={`flex items-center font-bold${
                  selectedTech === item.tech ? " selected text-primary" : ""
                }`}
                onClick={() => handleTechClick(item.tech)}
              >
                <img
                  src={selectedTech === item.tech ? blueIcon : blackIcon}
                  alt="Icon"
                />
                &nbsp; {item.tech}
              </button>
            ))}
          </div>
          <div className="flex justify-around">
            {selectedTech &&
              techArray
                .find((item) => item.tech === selectedTech)
                ?.array.map((techItem, index) => (
                  <div
                    className="flex gap-5 items-center bg-white px-3 py-2 mt-20 rounded-md"
                    key={index}
                  >
                    <img width={50} src={techItem.icon} alt="Tech Icon" />
                    <p className="text-[#212529] font-[600] text-[24px]">
                      {techItem.name}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* ========================================================================================================== */}
      {/* <div className="hidden lg:block shadow-xl border-t border-l border-l-gray-200 border-t-gray-200 rounded-md px-[40px] py-[30px] mt-10">
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
      </div> */}
      {/* <div className=" lg:hidden shadow-xl border-t border-l border-l-gray-200 border-t-gray-200 rounded-md px-[20px] md:px-[40px] mt-5 sm:mt-20">
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
      </div> */}
      {/* <img key={index} src={icon} alt="Tech Icon" className="tech-icon" /> */}
    </div>
  );
};

export default ToolsAndTechnologies;
