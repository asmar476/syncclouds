import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { TechArea } from "../../constant/TechnologiesPageData";
function TechnologiesArea() {
  return (
    <div className="w-full max-w-[1200px] xl:max-w-[1400px] mx-auto flex flex-col space-y-12 justify-between items-center mb-16 px-10 lg:pt-20">
      <div className="text-cente">
        <MainSubHeading text={"Techno"} gradientText={"logies Area"} />
        <p className="max-w-[495px] sm:text-[20px] text-[14px] text-[#434343]">
          Give your customers a new user experience when presenting your
          products and services.
        </p>
      </div>
      <div className="w-full flex justify-center flex-col items-center">
        <div className="w-full  grid gap-5 grid-cols-2  xl:grid-cols-4  sm:mt-10">
          {TechArea.map((item, index) => (
            <div
              key={index}
              className="w-full mx-auto bg-[#F7FAFC] p-4 text-center sm:mb-4 h-[150px] sm:h-[176px] sm:max-w-[301px] flex flex-col items-center justify-center rounded"
            >
              <img
                src={item.image}
                alt="Image"
                className="max-w-full h-auto mx-auto"
              />
              <p className="font-[500] text-[12px] sm:text-base sm:font-[600] mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TechnologiesArea;
