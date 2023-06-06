import React from "react";

const MainHeading = ({ text1, gradientText, text2 }) => {
  return (
    <div>
      <h1 className="main-Heading text-3xl font-[700]  xl:text-[41.89px]  ">
        <span className="leading-[3.5rem]"> {text1}</span>{" "}
        <span className="gradient-text leading-[3.5rem]">{gradientText}</span>{" "}
        <span className="leading-[3.5rem]">{text2}</span>
      </h1>
    </div>
  );
};

export default MainHeading;
