import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { aboutFaq } from "../../constant/FAQS";
import FaqSection from "../../common component/FaqSection";
const InnovativeServices = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  return (
    <div className="container flex flex-col justify-center mx-auto px-10">
      <h1 className="text-center text-[41.89px]  font-[700] leading-[65px]">
        Transforming
        <span className="text-[#002680]"> Ideas Into Reality</span>
        &nbsp;Through Our <br />
        <span className="text-[#002680]"> Innovative Services</span>
      </h1>

      <div className="flex mt-10 justify-between">
        <div className="space-y-5">
          {" "}
          <p className=" font-[600] text-[18px] leading-[24px] max-w-[1000px] mt-10">
            Together, Our Team Brings a Diverse Range Of Services To Our
            Clients.
          </p>
          <InnerPageHeading text={"You Think. We Build."} />
          <p className="text-body font-[400] text-[18px] leading-[24px] max-w-[622px]">
            We create cutting-edge services and implement data-driven marketing
            campaigns that drive customer engagement, enhance brand awareness,
            and deliver measurable results that help our clients achieve their
            business goals.
          </p>
          <Link to={"/contact"}>
            <button className=" text-[18px] font-[500] bg-[#002680] text-white px-3 py-2 rounded mt-10">
              Let's Get Started
            </button>
          </Link>
        </div>
        <div className="w-[700px]">
          <FaqSection faqData={aboutFaq} />
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices;
