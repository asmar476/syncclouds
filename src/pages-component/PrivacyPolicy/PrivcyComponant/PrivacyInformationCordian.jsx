import React, { useState } from "react";
import InnerPageHeading from "../../../common component/InnerPageHeading";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
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
const PrivacyInformationCordian = () => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const [quesIndex, setQuesIndex] = useState([]);
  return (
    <div>
      <div className="w-[100%]  space-y-5">
        {questionArray.map((arr, index) => (
          <div key={index} className="accordian mt-10">
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
              {/* <p className="text-[25.58px] font-[600] leading-[38.83px]">
                What is a software company?
              </p> */}
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  inventore quidem dolores deserunt magnam maxime quasi non
                  dignissimos, fugit magni.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyInformationCordian;
