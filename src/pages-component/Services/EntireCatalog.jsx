import React, { useState } from "react";
import arrowRight from "../../assets/icons/blue-arrow-right.svg";
import { servicesCatalog } from "../../constant/Data";
function EntireCatalog() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className=" flex flex-col items-center mt-16">
      <div className="mb-8 space-y-3">
        <h2 className="font-[600] text-center text-[18px] md:text-[25px]">
          Entire Catalog of Services
        </h2>
        <p className="text-center px-4  lg:w-[923px] text-body">
          Our service offerings include system integration, complete lifecycle
          management of custom products, apps, and services, and strategic IT
          and technology consulting.
        </p>
      </div>
      <div className="w-full text-[11px] sm:text-[14px] md:text-[18px]  pt-3 bg-gray-200  flex  justify-between max-w-[900px] px-3">
        {/* <div className="w-full text-[11px] sm:text-[14px] md:text-[18px] bg-gray-100 pt-3 flex flex-wrap justify-center gap-2.5 md:space-x-10 lg:space-x-20 "> */}
        {servicesCatalog.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-[10px] sm:[] md:text-[16px] cursor-pointer px-[2px] ${
              activeTab === index
                ? "font-semibold transition-duration-3s pb-3 border-b-2 border-primary"
                : ""
            }`}
          >
            {service.title}
          </div>
        ))}
      </div>
      <div className="mt-8 md:mt-0 px-3 max-w-[900px]">
        {servicesCatalog.map((service, index) => (
          <div
            key={index}
            className={`md:flex-row flex-col flex items-center justify-between ${
              activeTab == index ? "block" : "hidden"
            }`}
          >
            <div className=" md:w-[50%]">
              {" "}
              <h3 className="text-xl font-bold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="mb-4 text-[16px]">{service.content}</p>
            </div>
            <div>
              {" "}
              <img
                src={service.img}
                alt={service.title}
                className=" mx-auto   "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className='flex items-center justify-center'>
          {cardsData.map((card, index) => (
          <div key={index} className='h-[300px] w-full md:w-1/2 xl:w-1/3 p-4'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='text-lg font-semibold mb-4'>{card.title}</h3>
              <p className='text-gray-700'>{card.content}</p>
            </div>
          </div>
        ))}
        </div> */
}

{
  /* <div className="flex flex-col items-center justify-center">
          {" "}
          <div className="card  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`w-[350px] mx-1 p-5 rounded shadow-lg hover:text-white card-container ${
                  isHovered && cardIndex === index
                    ? "hover:bg-[#2261A2]"
                    : "bg-white"
                }`}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setCardIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setCardIndex("");
                }}
              >
                <div className=" group inline-block">
                  {/* <img
                  src={
                    isHovered && cardIndex === index
                      ? card.whiteIcon
                      : card.icon
                  }
                  alt={card.title}
                  width='40px'
                /> */
}
{
  /* </div>
                <h3 className="font-semibold  md:text-[18px] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px]">{card.content}</p>
              </div>
            ))}
          </div> 
        </div> */
}
export default EntireCatalog;
