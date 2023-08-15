import React from "react";
import Group1 from "../../assets/Services/1Group.svg";
import Group2 from "../../assets/Services/2Group.svg";
import Group3 from "../../assets/Services/3Group.svg";
import s1 from "../../assets/Services/small screen/s1.svg";
import s2 from "../../assets/Services/small screen/s2.svg";
import s3 from "../../assets/Services/small screen/s3.svg";
const largeScreen = [Group1, Group2, Group3];
const smallScreen = [s1, s2, s3];
const dataArray = [
  {
    img: s1,
    heading: "Evaluation",
    text: "Following an evaluation of your business requirements, our sales manager contacts you quickly.",
  },
  {
    img: s2,
    heading: "NDA",
    text: "In the interim, we affix an NDA to ensure the highest level of privacy.",
  },

  {
    img: s3,
    heading: "Budget",
    text: "Our pre-sale manager provides project budgets and a rough schedule.",
  },
];

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
        <div className="lg:hidden flex flex-wrap justify-center mt-10">
          {dataArray.map((dataSm, i) => (
            <div
              className={`w-[53%] text-center flex flex-col justify-center space-y-2 items-center ${
                i === dataArray.length - 1 ? "" : "mb-10"
              }`}
            >
              <img className="w-[200px]" key={i} src={dataSm.img} alt="img" />
              <h1 className="text-primary font-semibold text-[18px]">
                {dataSm.heading}
              </h1>
              <p>{dataSm.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default WhatComesNext;
