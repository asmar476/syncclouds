import React from "react";
import checkIcon from "../assets/reviewStar/Group 12839.svg";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight mt-20 h-[700px] md:h-[750px] lg:h-[100%] mb-96 sm:mb-72 md:mb-96 lg:mb-20">
      <div className="container mx-auto px-10 py-20 flex flex-col lg:flex-row  justify-between gap-14 lg:gap-32">
        <div className="space-y-[20px] md:space-y-[30px] w-[100%] lg:w-[50%]">
          <h2 className="text-[20px] md:text-[25.89px] font-[600] leading-[30px] md:leading-[38.83px] text-white max-w-[300px]">
            Interested in our services? Tell us about your project
          </h2>
          <h5 className="flex flex-col md:flex-row">
            <span className=" text-[14px] md:text-[16px] font-[600] leading-[24px] text-white">
              or call us at
            </span>
            <span className="text-[20px] md:text-[25.89px] font-[600] leading-[38.83px] text-white">
              +92-311-591-0778
            </span>
          </h5>
          <h5 className=" text-[14px] md:text-[16px] font-[600] leading-[27px] text-white">
            What happens Next?
          </h5>
          <ul className="space-y-5">
            <li className=" text-[14px] md:text-[16px] font-[400] leading-[24px] text-white flex items-center gap-3">
              <span>
                <img src={checkIcon} />
              </span>{" "}
              <span> We do a discovery and consultation meeting </span>
            </li>
            <li className=" text-[14px] md:text-[16px] font-[400] leading-[24px] text-white flex items-center gap-3">
              <span>
                <img src={checkIcon} />
              </span>{" "}
              <span> Schedule a call</span>
            </li>
            <li className=" text-[14px] md:text-[16px] font-[400] leading-[24px] text-white flex items-center gap-3">
              <span>
                <img src={checkIcon} />
              </span>{" "}
              <span> We prepare a proposal</span>
            </li>
          </ul>
        </div>
        <div className="bg-white w-[100%] lg:w-[50%] rounded-md border border-gray-100 contact-form">
          <form className="px-[10px] md:px-[30px] py-[20px] md:py-[40px] ">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
              />
            </div>
            <div>
              <input
                className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
                type="textArea"
                placeholder="Description"
              />
            </div>
            <div>
              <input
                className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
                type="textArea"
                placeholder="Whats your budget?"
              />
            </div>
            <div className="mt-5">
              <button className="font-[600] leading-[24px] bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight w-full text-white py-[5px] md:py-[10px] rounded">
                Send a request
              </button>
              <div className="flex  md:items-center justify-center gap-3 mt-3">
                <input
                  className="h-[20px] w-[20px] mt-1 md:mt-0"
                  type="checkbox"
                />
                <p className="text-[14px] md:text-[16px] font-[400] leading-[24px] ">
                  I want an NDA to protect my idea
                </p>
              </div>
              <p className="text-center text-[14px] md:text-[16px] font-[400] leading-[24px] mt-5">
                We will get back to you within 24 hours,guaranted
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
