import React from "react";
import IndustryImage from "../../assets/Images/IndustriesHero.svg";
import { IndustriesPageData } from "../../constant/IndustriesPageData";
import MainSubHeading from "../../common component/MainSubHeading";

function IndustriesHero() {
  return (
    <div className="mx-auto max-w-[1440px] w-[100%] flex items-center justify-center flex-col pt-20 mt-20">
      <img className="hidden  sm:block" src={IndustryImage} />

      <div className="text-center mt-8">
        <h1 className="hidden sm:block font-[700] text-[41.89px] leading-[62.83px] text-[#171923]">
          Industries
        </h1>{" "}
        {/* ================================mobile===================================== */}
        <MainSubHeading
          className="sm:hidden text-center w-full lg:text-left lg:max-w-[400px] "
          text={"Indu"}
          gradientText={"stries"}
        />
        {/* ============================================================================= */}
        <p className="text-[#4A5568] font-[400] text-[14px] sm:text-[20px] leading-[30.83px] px-9 sm:px-20">
          Our teams love to find new ways how to reduce complexity and speed up
          delivery.
        </p>
        <div className="flex justify-center flex-col items-center">
          <div className="grid grid-cols-2  xl:grid-cols-4 ">
            {IndustriesPageData.map((item, index) => (
              <div
                key={index}
                className="bg-[#F7FAFC] p-4 text-center mb-4 mx-2 h-[176px] max-w-[301px] flex flex-col items-center justify-center rounded"
              >
                <img
                  src={item.image}
                  alt="Image"
                  className="max-w-full h-auto mx-auto"
                />
                <p className="font-[600] mt-2">{item.heading}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesHero;
