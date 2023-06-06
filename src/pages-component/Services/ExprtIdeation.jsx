import React from "react";

const data = [
  { title: "Advanced Process", count: 10 },
  { title: "Costumer Software Solution", count: 10 },
  { title: "Success Stories", count: 10 },
  { title: "Amplified Business", count: 10 },
];

const ExprtIdeation = () => {
  return (
    <div className="bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight">
      <div className="container mx-auto px-10  my-20">
        <div className="flex items-center justify-center ">
          <h2 className="text-[20px] md:text-[25.89px] font-[600] leading-[30px] md:leading-[38.83px] text-white mt-10">
            Expert Ideation At Positions
          </h2>
        </div>
        <div className="grid grid-cols-4 my-10">
          {data.map((position, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col my-10 max-w-[180px] text-center"
            >
              <h3 className="text-white text-[25.89px] font-[600] leading-[38.83px]">
                {position.count} +
              </h3>
              <p className="text-[16px] font-[600] leading-[24px] text-white">
                {position.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExprtIdeation;
