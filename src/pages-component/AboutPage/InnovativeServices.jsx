import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { aboutFaq } from "../../constant/FAQS";
import FaqSection from "../../common component/FaqSection";
const InnovativeServices = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-10">
      <h1 className="text-center text-[14px] sm:text-[30px] w-[327px] md:w-[622px] lg:w-[622px]  font-[700]">
        Transforming
        <span className="text-[#002680]"> Ideas Into Reality </span>
        <span>Through Our</span>
        <span className="text-[#002680]"> Innovative Services</span>
      </h1>

      <div className="flex gap-5  md:mt-10 items-center flex-col lg:flex-row justify-center lg:justify-between ">
        <div className="text-center lg:text-left md:w-[402px] lg:w-[622px] space-y-5">
          <p className=" font-[600] text-[12px] sm:text-[18px] leading-[24px] mt-5 ">
            Together, Our Team Brings a Diverse Range Of Services To Our
            Clients.
          </p>
          <InnerPageHeading text={"You Think. We Build."} />
          <p className="text-body font-[400] text-[12px] md:text-[14px] lg:[18px] leading-[24px] ">
            We create cutting-edge services and implement data-driven marketing
            campaigns that drive customer engagement, enhance brand awareness,
            and deliver measurable results that help our clients achieve their
            business goals.
          </p>
          <Link to={"/contact"}>
            <button
              className=" mb-10 text-[18px] font-[500] bg-[#00315A]
 text-white px-[24px] py-[12px] rounded-[2px] mt-10"
            >
              Let's Get Started
            </button>
          </Link>
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <FaqSection faqData={aboutFaq} />
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices;
