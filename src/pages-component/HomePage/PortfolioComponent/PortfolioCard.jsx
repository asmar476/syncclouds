import React, { useState } from "react";
import cardImage from "../../../assets/overlay image/image 33.png";
import "./PortfolioCard.css";

const cardData = [
  { img: cardImage },
  { img: cardImage },
  { img: cardImage },
  { img: cardImage },
  { img: cardImage },
  { img: cardImage },
];

const PortfolioCard = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showIndex, setShowIndex] = useState("");
  return (
    <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {cardData.map((data, index) => (
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
      ))}
    </div>
  );
};

export default PortfolioCard;
