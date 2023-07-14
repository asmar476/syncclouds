import React, { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import MainSubHeading from "./MainSubHeading";
import InnerPageHeading from "./InnerPageHeading";
import qMark from "../assets/Images/questionMark.svg";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

const questionArray = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const FaqSection = () => {
  const [questionOpen, setQuestionOpen] = useState(0);
  const [quesIndex, setQuesIndex] = useState([]);
  console.log("index-------", quesIndex);
  return (
    <div className="container mx-auto px-10 py-5 sm:py-10 lg:py-20">
      <div className="relative sm:flex  justify-center ">
        <div className=" text-[#434343] sm:w-[540px]">
          {" "}
          <MainSubHeading
            text={"Frequently Asked "}
            gradientText={"Questions"}
          />
          <p className="leaing-[27px] text-[18px] my-5 font-[600] text-[#434343]">
            Discover the power of Sync Clouds with our FAQs section!
          </p>
          <p>
            Discover the power of Sync Clouds with our FAQs section! Explore
            commonly asked questions, gain valuable insights, and visit our
            Services & Solutions to revolutionize your data synchronization
            experience. Don't wait, and connect with us for more information!
          </p>
          <img className="absolute top-20 left-[20%]" src={qMark} alt="" />
        </div>

        <div className="w-[100%] lg:w-[50%] space-y-5">
          {questionArray.map((arr, index) => (
            <div>
              {index < 6 && (
                <div className="accordian">
                  <div
                    className={`flex items-center gap-3 h-[60px]${
                      quesIndex.includes(index)
                        ? "  text-primary "
                        : "text-black"
                    } rounded-tl-md rounded-tr-md justify-between p-[10px]`}
                  >
                    <InnerPageHeading
                      text={"What is a software company?"}
                      textColor={`${
                        quesIndex.includes(index)
                          ? " text-primary"
                          : "text-black"
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
                        <img src={minus} className="text-xl text-white" />
                      ) : (
                        <img src={plus} className="text-xl " />
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

        {/* <div className="w-[100%] lg:w-[50%]">
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
        </div> */}
      </div>
    </div>
  );
};

export default FaqSection;
