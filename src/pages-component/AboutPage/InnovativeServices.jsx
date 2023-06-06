import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import ButtonLight from "../../common component/ButtonLight";
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
const InnovativeServices = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          {" "}
          <div className="flex">
            <MainSubHeading
              text={"Transforming"}
              gradientText={" Ideas Into Reality  "}
            />{" "}
            <MainSubHeading text={" Through Our"} />
          </div>
          <MainSubHeading text={""} gradientText={"  Innovative Services"} />
        </div>
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[1000px] mt-10">
          Together, Our Team Brings a Diverse Range Of Services To Our Clients.
        </p>
      </div>

      <div className="my-20 flex items-center justify-between gap-32">
        <div className="space-y-5">
          <InnerPageHeading text={"You Think. We Build."} />
          <p className="text-[#335775] font-[400] text-[16px] leading-[24px] max-w-[600px]">
            We create cutting-edge services and implement data-driven marketing
            campaigns that drive customer engagement, enhance brand awareness,
            and deliver measurable results that help our clients achieve their
            business goals.
          </p>
          <ButtonLight text={"Let’s get started"} />
        </div>
        <div className="w-[50%] space-y-[10px]">
          {questionArray.map((arr, index) => (
            <div>
              {index < 6 && (
                <div className="accordian">
                  <div
                    className={`flex items-center gap-3 h-[60px]${
                      quesIndex === index
                        ? "  bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  "
                        : "bg-white"
                    } rounded-tl-md rounded-tr-md justify-between p-[10px]`}
                  >
                    <InnerPageHeading
                      text={"What is a software company?"}
                      textColor={`${
                        quesIndex === index ? "text-white" : "text-black"
                      }`}
                    />
                    <div
                      className={`${
                        quesIndex === index
                          ? "bg-purpleDark bg-opacity-[0.2]"
                          : ""
                      } rounded-full p-1`}
                      onClick={() => {
                        if (quesIndex === index) {
                          setQuesIndex("");
                        } else {
                          setQuesIndex(index);
                        }
                      }}
                    >
                      {quesIndex === index ? (
                        <BsChevronUp className="text-xl text-white" />
                      ) : (
                        <BsChevronDown className="text-xl " />
                      )}
                    </div>
                  </div>
                  {quesIndex === index && (
                    <div className="px-4 py-2">
                      <p className="text-[14px] leading-[21px] font-[400] ">
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

export default InnovativeServices;
