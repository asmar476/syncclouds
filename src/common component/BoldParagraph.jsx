import React from "react";

const BoldParagraph = ({ text, mt, className }) => {
  return (
    <p
      className={`w-[800px]  ${className}  text-center text-[16px] md:text-[20px] font-[500] ${mt}`}
    >
      {text}
    </p>
  );
};

export default BoldParagraph;
