import React, { useState } from "react";
import chevronRight from "../../../assets/icons/Vector.svg";
import { portfolioData } from "../../../constant/PortfolioPageData";
const PortfolioCard = () => {
  return (
    <div className="flex justify-center items-center gap-0 lg:gap-16 flex-wrap ">
      {/* {portfolioData.map((data, index) => (
        <div
          key={index}
          className="max-w-[408px] rounded-br-[100px] mt-10 py-10 px-10 hover:bg-[#DAE2EA]"
        >
          <div className="flex items-center gap-6">
            <img width={40} src={data.icon} alt="portfoliocard" />
            <h4 className="text-left font-[500] text-[18px]">{data.title}</h4>
          </div>
          <img className="my-8" width={"100%"} src={data.img} />
          <p>{data.description}</p>
          <div className="flex mt-10 gap-5">
            <button className="font-[] text-[]">Read more</button>
            <img src={chevronRight} alt="" />
          </div>
        </div>
      ))} */}

      {/* {cardData.map((data, index) => (
        <div
          key={index}
          className="relative bg-grayLight lg:h-[400px] overflow-hidden rounded-md"
          onMouseEnter={() => {
            setShowOverlay(true);
            setShowIndex(index);
          }}
          onMouseLeave={() => {
            setShowOverlay(false);
            setShowIndex("");
          }}
        >
          <img
            src={data.img}
            className={`w-[100%] h-[100%] ${
              showOverlay && showIndex === index
                ? "scale-125 transition-all ease-in duration-200"
                : "scale-100 transition-all ease-in  duration-200"
            }`}
          />
          {showOverlay && showIndex === index && (
            <div className="flex items-center justify-center absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000069]">
              <p className="absolute h-[100px] w-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg">
                {" "}
                Design {index + 1}
              </p>
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default PortfolioCard;
