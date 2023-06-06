import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { servicesSoftwareSteps } from "../../constant/ServicesSoftwaredevelopmentStepsData";
import SDLCIllustration from "../../assets/Services illustration/Group.svg";

const BuildingVision = () => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const [quesIndex, setQuesIndex] = useState([]);
  return (
    <div className="container mx-auto px-10 py-20">
      <div className="flex items-center justify-center flex-col text-center">
        <MainSubHeading text={"Building Your Vision, One Step at a Time"} />
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[800px] my-5 text-center">
          Our 8-step development process brings your software vision to life,
          ensuring every step is thoughtfully crafted and executed.
        </p>
      </div>

      <div className="flex  justify-between my-20">
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
                    <BsChevronUp className="text-xl text-white" />
                  ) : (
                    <BsChevronDown className="text-xl " />
                  )}
                </div>
              </div>
              {quesIndex.includes(index) && (
                <div className="py-3 px-5">
                  <p className="text-[14px] leading-[21px] font-[400]">
                    {arr.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <img src={SDLCIllustration} />
        </div>
      </div>
    </div>
  );
};

export default BuildingVision;
