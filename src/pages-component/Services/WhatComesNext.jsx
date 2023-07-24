import React from "react";
import Group1 from "../../assets/Services/1Group.svg";
import Group2 from "../../assets/Services/2Group.svg";
import Group3 from "../../assets/Services/3Group.svg";


function WhatComesNext() {
  return (
    <>
      <div className="mt-16 mb-10 mx-auto flex flex-col items-center justify-center">
        {" "}
        <h3 className="font-semibold text-center text-md md:text-2xl ">
          What Comes Next?
        </h3>
        <div className="mt-10 sm:flex items-center justify-center">
          <img className="mr-60" src={Group1} alt="" />
          <img className="mr-60" src={Group2} alt="" />
          <img src={Group3} alt="" />
        </div>
      </div>
    </>
  );
}
export default WhatComesNext;
