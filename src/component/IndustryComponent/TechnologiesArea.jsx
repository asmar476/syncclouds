import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { TechArea } from "../../constant/TechnologiesPageData";

function TechnologiesArea() {
  return (
    <div className="flex flex-col space-y-12 justify-between items-center mb-16  pt-20">
      <div
        className="text-center
     "
      >
        <MainSubHeading text={"Techno"} gradientText={"logies Area"} />
        <p className="max-w-[495px] sm:text-[20px] text-[14px] text-[#434343]">
          Give your customers a new user experience when presenting your
          products and services.
        </p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="grid grid-cols-2  xl:grid-cols-4  mt-10">
          {TechArea.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7FAFC] p-4 text-center mb-4 mx-2 h-[176px] w-[301px] flex flex-col items-center justify-center rounded"
            >
              <img
                src={item.image}
                alt="Image"
                className="max-w-full h-auto mx-auto"
              />
              <p className="font-[600] mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TechnologiesArea;
