import React, { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import MainSubHeading from "./MainSubHeading";
import InnerPageHeading from "./InnerPageHeading";

const questionArray = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

const FaqSection = () => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const [quesIndex, setQuesIndex] = useState([]);
  console.log("index-------", quesIndex);
  return (
    <div className="container mx-auto px-10 py-5 sm:py-10 lg:py-20">
      <div className="flex items-center justify-center">
        <MainSubHeading text={"FA"} gradientText={"QS"} />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="w-[100%] lg:w-[50%] space-y-5">
          {questionArray.map((arr, index) => (
            <div>
              {index < 6 && (
                <div className="accordian">
                  <div
                    className={`flex items-center gap-3 h-[60px]${
                      quesIndex.includes(index)
                        ? "  bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  "
                        : "bg-white"
                    } rounded-tl-md rounded-tr-md justify-between p-[10px]`}
                  >
                    <InnerPageHeading
                      text={"What is a software company?"}
                      textColor={`${
                        quesIndex.includes(index) ? "text-white" : "text-black"
                      }`}
                    />
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
                    <div className="p-2">
                      <p className="text-[14px] leading-[21px] font-[400]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nam inventore quidem dolores deserunt magnam
                        maxime quasi non dignissimos, fugit magni.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-[100%] lg:w-[50%]">
          {questionArray.map((arr, index) => (
            <div>
              {index >= 6 && (
                <div className="accordian mb-5">
                  <div
                    className={`flex items-center gap-3 h-[60px]${
                      quesIndex.includes(index)
                        ? "  bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  "
                        : "bg-white"
                    } rounded-tl-md rounded-tr-md justify-between p-[10px]`}
                  >
                    <InnerPageHeading
                      text={"What is a software company?"}
                      textColor={`${
                        quesIndex.includes(index) ? "text-white" : "text-black"
                      }`}
                    />
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
                    <div className="p-2">
                      <p className="text-[14px] leading-[21px] font-[400]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nam inventore quidem dolores deserunt magnam
                        maxime quasi non dignissimos, fugit magni.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
