import React, { useState } from "react";
import heroImage from "../../assets/WebDev/HeroImage.svg";
import Calendalycomp from "../../common component/CalendlyComp";
import webBg from "../../assets/WebDev/Mesh-Grad Web Development Page.png";

import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
function WebDevHero() {
  const [isOpen, setIsOpen] = useState(false);
  const closeCalendaly = () => {
    setIsOpen(false);
  };
  const gaEventTracker = useAnalyticsEventTracker("Services Hero");
  return (
    <>
      <div className=" relative ">
        <img
          className="hidden sm:block w-full h-[100%] z-[-1] absolute opacity-60"
          src={webBg}
          alt="bgImage"
        />
        {/* <img
          className="sm:hidden w-full h-[40%] z-[-1] absolute"
          src={mobBg}
          alt=""
        /> */}
        <div className=" w-full max-w-[1200px] xl:max-w-[1450px] px-10 width-[100%] pt-10 lg:pt-20 mx-auto">
          {/* <img
            className="hidden md:block w-[] absolute z-[-1]"
            src={webBg}
            alt="services hero section bg image"
          /> */}
          <div className="  flex  flex-col  items-center justify-between  space-y-10 lg:space-y-0 lg:flex-row">
            <div className="space-y-10 text-center w-full  flex-1 md:text-left ">
              <h1 className="text-body text-[25px] md:text-[35px] xl:text-[41.89px] font-[700] xl:leading-[65px]">
                Crafting Bespoke
                <span className="text-[#002680]">
                  &nbsp;Web App Development Services
                </span>
                &nbsp;To Redefine Your Online Success.
              </h1>
              <div className=" text-body font-500 leading-[22px] xl:leading-[27px] md:text-[18px] text-[14px] ">
                <p className="">
                  Web app development Service Company is dedicated to delivering
                  excellent web solutions for startups to entrepreneurs
                  worldwide.
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    gaEventTracker("Let's Get Started");
                  }}
                  className=" font-bold pulse bg-[#00315A] mt-10 text-white px-5 py-2.5 rounded-[0.18rem] mb-10"
                >
                  Book My Discovery Call
                </button>
                <Calendalycomp isOpen={isOpen} close={closeCalendaly} />
              </div>
            </div>
            <div className="flex-1 hidden lg:block">
              <img
                src={heroImage}
                alt="Hero Illustration"
                className="min-w-[350px] w-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDevHero;
