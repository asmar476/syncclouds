import React, { useState } from "react";
import InnerPageHeading from "./InnerPageHeading";
import { chevronUp, chevrondown } from "./Images";
const FaqSection = ({ faqData }) => {
  const [quesIndex, setQuesIndex] = useState([0]);
  return (
    <div className="space-y-5">
      {faqData.map((arr, index) => (
        <div key={index}>
          <div className="accordian ">
            <div
              className={`flex items-center gap-3${
                quesIndex.includes(index)
                  ? "  text-white transition-all duration-500 delay-3 bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight "
                  : "text-black"
              } rounded-tl-md rounded-tr-md justify-between p-[10px]`}
            >
              <div className="w-[90%]">
                <InnerPageHeading
                  text={arr.h}
                  textColor={`${
                    quesIndex.includes(index) ? "  text-white" : "text-black"
                  }`}
                />
              </div>

              <div
                className={`${
                  quesIndex.includes(index)
                    ? "bg-secondryColor bg-opacity-[0.2] transition-all duration-500 ease-in"
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
                  <img
                    src={chevronUp}
                    className="w-[22px] text-xl transition-all duration-700 delay-3 text-white"
                  />
                ) : (
                  <img src={chevrondown} className="text-xl w-[22px]" />
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
              <p className="text-[14px] leading-[21px] font-[400]">{arr.p}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
