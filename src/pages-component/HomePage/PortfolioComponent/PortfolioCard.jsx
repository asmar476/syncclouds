import React, { useState } from "react";
import cardImage from "../../../assets/Images/Mask group.svg";
import "./PortfolioCard.css";
import chevronRight from "../../../assets/icons/Vector.svg";

import web from "../../../assets/SC Icons SVG/Web & Mobile Development.svg";
import mob from "../../../assets/SC Icons SVG/Mobile App Development.svg";
import UIUX from "../../../assets/SC Icons SVG/User Experience & Design.svg";

const cardData = [
  {
    icon: UIUX,
    title: "UIUX  Designing",
    img: cardImage,
    description:
      "Great design can speak to your users in thousands of ways that you can't. Get magnetic UX/UI design followed by a robust UX strategy to grab your user’s attention instantly.",
  },
  {
    icon: mob,
    title: "IOS App Development",
    img: cardImage,
    description:
      "Great design can speak to your users in thousands of ways that you can't. Get magnetic UX/UI design followed by a robust UX strategy to grab your user’s attention instantly.",
  },
  {
    icon: web,
    title: "Web & Mobile Applications",
    img: cardImage,
    description:
      "Great design can speak to your users in thousands of ways that you can't. Get magnetic UX/UI design followed by a robust UX strategy to grab your user’s attention instantly.",
  },
];
const PortfolioCard = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showIndex, setShowIndex] = useState("");
  return (
    <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="w-[408px] rounded-br-[100px] p-10 hover:bg-[#DAE2EA]"
        >
          <div className="flex items-center gap-6">
            <img width={40} src={data.icon} alt="kdlj" />
            <h4 className="font-[500] text-[18px]">{data.title}</h4>
          </div>
          <img className="my-10" width={"100%"} src={data.img} />
          <p>{data.description}</p>
          <div className="flex mt-10 gap-5">
            <button className="font-[] text-[]">Read more</button>
            <img src={chevronRight} alt="" />
          </div>
        </div>
      ))}

      {/* {cardData.map((data, index) => (
        <div
          key={index}
          className="relative bg-grayLight lg:h-[400px] overflow-hidden rounded-md"
          onMouseEnter={() => {
            setShowOverlay(true);
            setShowIndex(index);
          }}
          onMouseLeave={() => {
            setShowOverlay(false);
            setShowIndex("");
          }}
        >
          <img
            src={data.img}
            className={`w-[100%] h-[100%] ${
              showOverlay && showIndex === index
                ? "scale-125 transition-all ease-in duration-200"
                : "scale-100 transition-all ease-in  duration-200"
            }`}
          />
          {showOverlay && showIndex === index && (
            <div className="flex items-center justify-center absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000069]">
              <p className="absolute h-[100px] w-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg">
                {" "}
                Design {index + 1}
              </p>
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default PortfolioCard;
