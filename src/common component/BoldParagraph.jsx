import React from "react";

const BoldParagraph = ({ text, mt }) => {
  return (
    <p className={`w-[800px]    text-center text-[16px] md:text-[20px] font-[500] ${mt}`}>
      {text}
    </p>
  );
};

export default BoldParagraph;
