import React from "react";
import IndustryImage from "../../assets/Images/IndustriesHero.svg";
import { IndustriesPageData } from "../../constant/IndustriesPageData";
import MainSubHeading from "../../common component/MainSubHeading";

function IndustriesHero() {
  return (
    <div className=" mx-auto max-w-[1200px] xl:max-w-[1440px] w-[100%] flex items-center justify-center flex-col px-10 md:pt-20 lg:mt-20">
      <img className="hidden  md:block" src={IndustryImage} />

      <div className="w-full text-center mt-8">
        <h1 className="hidden sm:block font-[700] text-[28px] md:text-[41.89px] leading-[62.83px] text-[#171923]">
          Industries
        </h1>{" "}
        {/* ================================mobile===================================== */}
        <MainSubHeading
          className="sm:hidden text-center w-full lg:text-left lg:max-w-[400px] "
          text={"Indu"}
          gradientText={"stries"}
        />
        {/* ============================================================================= */}
        <p className="text-[#4A5568] font-[400] text-[14px] sm:text-[20px] leading-[30.83px] px-9 mb-10 sm:px-20">
          Our teams love to find new ways how to reduce complexity and speed up
          delivery.
        </p>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="w-full grid  gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {IndustriesPageData.map((item, index) => (
              <div
                key={index}
                className="mx-auto bg-[#F7FAFC]  p-4 text-center  w-full h-[110px] sm:h-[176px] max-w-[170px] sm:max-w-[301px] flex flex-col items-center justify-center rounded"
              >
                <img
                  src={item.image}
                  alt="Image"
                  className="max-w-full h-[50px] sm:h-auto mx-auto"
                />
                <p className="font-[500] text-[12px] sm:text-base sm:font-[600] mt-2">
                  {item.heading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesHero;
