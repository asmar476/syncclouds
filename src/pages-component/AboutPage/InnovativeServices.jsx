import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { aboutFaq } from "../../constant/FAQS";
import FaqSection from "../../common component/FaqSection";
import Calendalycomp from "../../common component/CalendlyComp";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
const InnovativeServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeCalendaly = () => {
    setIsOpen(false);
  };
  const [quesIndex, setQuesIndex] = useState(0);
  const gaEventTracker = useAnalyticsEventTracker("Innovative Services");
  return (
    <div className="max-w-[1200px] xl:max-w-[1400px] flex flex-col items-center justify-center mx-auto px-10">
      <h1 className="text-center text-[14px] sm:text-[30px] sm:w-[327px] md:w-[622px] lg:w-[622px]  font-[700]">
        Transforming
        <span className="text-[#002680]"> Ideas Into Reality </span>
        <span>Through Our</span>
        <span className="text-[#002680]"> Innovative Services</span>
      </h1>
      <div className="flex gap-5  md:mt-10 items-center flex-col lg:flex-row justify-center lg:justify-between ">
        <div className="text-center lg:text-left md:w-[402px] lg:w-[622px] sm:space-y-5">
          <p className=" font-[600] text-[12px] sm:text-[18px] leading-[20px] sm:leading-[24px] mt-3 sm:mt-5 ">
            Together, Our Team Brings a Diverse Range Of Services To Our
            Clients.
          </p>
          <div className="mt-5">
            <InnerPageHeading text={"You Think. We Build."} />
          </div>
          <p className="text-body font-[400] text-[12px] md:text-[16px] lg:[18px] leading-[20px] sm:leading-[24px] ">
            We create cutting-edge services and implement data-driven marketing
            campaigns that drive customer engagement, enhance brand awareness,
            and deliver measurable results that help our clients achieve their
            business goals.
          </p>

          <div>
            <button
              onClick={() => {
                setIsOpen(true);
                gaEventTracker("Let's Get Started");
              }}
              className=" my-5 md:my-10 text-[14px] md:text-[18px] font-[500] bg-[#00315A]
 text-white px-[16px] py-[6px] md:px-[24px] md:py-[12px] rounded-[2px] "
            >
              Let's Get Started
            </button>{" "}
            <Calendalycomp isOpen={isOpen} close={closeCalendaly} />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <FaqSection faqData={aboutFaq} />
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices;
