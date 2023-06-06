import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className=" rounded-3xl px-[15px] sm:px-[20px] py-[6px] sm:py-[8px]  text-white text-sm  md:text-base  bg-grayDark">
      {text}
    </button>
  );
};

export default PrimaryButton;
