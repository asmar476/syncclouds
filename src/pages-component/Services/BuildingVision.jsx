import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { chevronUp, chevrondown } from "../../common component/Images";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { servicesSoftwareSteps } from "../../constant/ServicesSoftwaredevelopmentStepsData";
import SDLCIllustration from "../../assets/Services/SDLC.svg";
import smallsdlc from "../../assets/Services/smlSdlc.svg";
import mobBg from "../../assets/Services/mobileService.svg";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
const BuildingVision = () => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const [quesIndex, setQuesIndex] = useState([]);
  const gaEventTracker = useAnalyticsEventTracker("Building Vision");
  return (
    <div className="container mx-auto px-2 sm:px-10 pt-10">
      <div className="flex items-center justify-center flex-col text-center">
        <h3 className="font-[600] text-14px ">
          Building Your Vision, One Step at a Time
        </h3>
        <p className="text-[#335775] font-[400] text-[12px] md:font-[500] md:text-[16px] leading-[24px] max-w-[800px] my-5 text-center">
          Our 8-step development process brings your software vision to life,
          ensuring every step is thoughtfully crafted and executed.
        </p>
      </div>
      <div className="flex space-y-4 lg:space-y-0 lg:flex-row flex-col justify-center lg:justify-between px-3 mb-20">
        <div className="w-[100%] lg:w-[40%] space-y-5">
          {servicesSoftwareSteps.map((arr, index) => (
            <div key={index} className="accordian rounded-md">
              <div
                className={`flex items-center gap-3 h-[60px]${
                  quesIndex.includes(index)
                    ? "  bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  "
                    : "bg-white"
                } rounded-tl-md rounded-tr-md justify-between p-[10px]`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={quesIndex.includes(index) ? arr.whiteIcon : arr.icon}
                    className="h-[30px] w-[30px]"
                  />
                  <InnerPageHeading
                    text={arr.title}
                    textColor={`${
                      quesIndex.includes(index)
                        ? "text-white"
                        : "text-purpleLight"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    quesIndex.includes(index)
                      ? "bg-secondryColor bg-opacity-[0.2]"
                      : ""
                  } rounded-full p-1`}
                  onClick={() => {
                    gaEventTracker("click");
                    setQuesIndex((prev) => {
                      if (prev.includes(index)) {
                        const filterIndex = prev.filter(
                          (prevInd) => prevInd !== index
                        );

                        return [...filterIndex];
                      } else {
                        return [...prev, index];
                      }
                    });
                  }}
                >
                  {quesIndex.includes(index) ? (
                    <img src={chevronUp} className="text-xl text-white" />
                  ) : (
                    <img src={chevrondown} className="text-xl " />
                  )}
                </div>
              </div>
              <div
                className={` transition-all duration-200 ease-in overflow-hidden${
                  quesIndex.includes(index)
                    ? "open transition-all duration-500 pl-4 py-3 "
                    : " pl-4 h-[0] py-0" /* Add the 'open' class when the accordion is open */
                } `}
              >
                <p className="text-[14px] leading-[21px] font-[400]">
                  {arr.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img className="hidden lg:block" src={SDLCIllustration} />
        </div>
        <div>
          <img className="w-full lg:hidden" src={smallsdlc} />
        </div>
      </div>
    </div>
  );
};

export default BuildingVision;
