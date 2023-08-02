import React from "react";
import Group1 from "../../assets/Services/1Group.svg";
import Group2 from "../../assets/Services/2Group.svg";
import Group3 from "../../assets/Services/3Group.svg";
import s1 from "../../assets/Services/small screen/s1.svg";
import s2 from "../../assets/Services/small screen/s2.svg";
import s3 from "../../assets/Services/small screen/s3.svg";
const largeScreen = [Group1, Group2, Group3];
const smallScreen = [s1, s2, s3];

function WhatComesNext() {
  return (
    <>
      <div className="mt-16 container mx-auto">
        {" "}
        <h3 className="font-semibold text-center text-xl md:text-2xl ">
          What Comes Next?
        </h3>
        <div className="hidden mt-10 lg:flex justify-between ">
          {largeScreen.map((dataLg, i) => (
            <img key={i} src={dataLg} alt="img" />
          ))}
        </div>
        <div className="lg:hidden flex flex-wrap mt-10 justify-center sm:gap-20 md:gap-40">
          {smallScreen.map((dataSm, i) => (
            <img
              className="w-[65%] sm:w-[40%] mb-14 sm:mb-0"
              key={i}
              src={dataSm}
              alt="img"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default WhatComesNext;
