import React from "react";

const BoldParagraph = ({ text, mt }) => {
  return (
    <p
      className={`text-center max-w-[800px] text-[16px] md:text-[20px] font-[500] ${mt}`}
    >
      {text}
    </p>
  );
};

export default BoldParagraph;
