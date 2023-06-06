import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { projectProcedureData } from "../../constant/ProjectProcedure";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { BsDot } from "react-icons/bs";

const ProjectProcedure = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showIndex, setShowIndex] = useState("");
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center flex">
          <MainSubHeading
            text={"SyncClouds  "}
            gradientText={"Blueprint for Software"}
          />
          <MainSubHeading text={"Success"} />
        </div>

        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[1000px] mt-5">
          Our 3-step process ensures that every task is completed efficiently,
          accurately, and with attention to detail.
        </p>
      </div>
      <div className="grid grid-cols-3 my-32 gap-10 ">
        {projectProcedureData.map((data, index) => (
          <div
            onMouseEnter={() => {
              setShowOverlay(true);
              setShowIndex(index);
            }}
            onMouseLeave={() => {
              setShowOverlay(false);
              setShowIndex("");
            }}
            key={index}
            className={`relative z-0 ${
              showOverlay && index === showIndex ? "bg-blueDark" : "bg-white"
            } p-3 text-center space-y-3 procedure-cards rounded`}
          >
            <InnerPageHeading
              text={data.title}
              textColor={`${
                showOverlay && index === showIndex ? "text-white" : ""
              }`}
            />
            <p
              className={`${
                showOverlay && index === showIndex ? "text-white" : ""
              } `}
            >
              {data.description}
            </p>
            <ul
              className={`${
                showOverlay && index === showIndex ? "text-white" : ""
              } `}
            >
              {data.listData.map((li, index) => (
                <div id={index} className="flex justify-start text-left">
                  <BsDot className="text-lg" /> <li>{li.li}</li>
                </div>
              ))}
            </ul>
            <img
              src={data.img}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProcedure;
