import React from "react";
import Group1 from "../../assets/Services/1Group.svg";
import Group2 from "../../assets/Services/2Group.svg";
import Group3 from "../../assets/Services/3Group.svg";
function WhatComesNext() {
  return (
    <>
      <div className="mt-16 mb-10 container mx-auto">
        {" "}
        <h3 className="font-semibold text-center text-xl md:text-2xl ">
          What Comes Next?
        </h3>
        <div className="mt-10 space-y-10 md:space-y-0 flex flex-col md:flex-row justify-center lg:justify-between ">
          <img src={Group1} alt="" />
          <img src={Group2} alt="" />
          <img src={Group3} alt="" />
        </div>
      </div>
    </>
  );
}
export default WhatComesNext;
