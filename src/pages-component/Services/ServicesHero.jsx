import React from "react";
import { Link } from "react-router-dom";
import servicesIllustration from "../../assets/Services/servicesIllustration.svg";
import bg_services from "../../assets/Services/OBJECTS.svg";
import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
import SoftwareSolution from "./SoftwareSolution";
function ServicesHero() {
  return (
    <>
      <div className=" relative mx-auto">
        <div className=" flex items-center justify-center right-[5%] top-[70%] fixed z-[100] bg-[#EAEEF7]  h-[50px]  w-[50px]  rounded-full">
          <Tooltip title="Scroll to Top">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer  fixed z-[100]"
              src={arrowUp}
              alt="arrow up"
              width={40}
            />
          </Tooltip>
        </div>{" "}
        <img
          className="absolute z-[-1] top-0 w-full"
          src={bg_services}
          alt="bg-images"
        />
        <div className="">
          <div className="  flex p-20 flex-col xl:gap-32 items-center justify-center  space-y-10 lg:space-y-0 lg:flex-row">
            <div className="space-y-10 text-center w-[622px] lg:text-left ">
              <h1 className="text-[41.89px]  font-[700] leading-[65px]">
                Elevate Your Business with{" "}
                <span className="text-[#002680]">
                  {" "}
                  Premium Software Services - Unleash Your
                </span>
                &nbsp;Efficiency and Productivity
              </h1>
              <div className=" text-body font-500 leading-[27px] md:text-[18px] text-sm text-justify lg:text-left  max-w-[750px]">
                <p className="">
                  At Sync Clouds, we transform your business with high-end
                  software solutions that simplify complex processes and enhance
                  efficiency. With our expert guidance and support, you can
                  harness the full potential of software solutions to achieve
                  your business goals and stay ahead of the competition.
                </p>
              </div>
              <Link to={"/contact"}>
                <button className="bg-[#00315A] mt-10 text-white px-3 py-2 rounded-[0.18rem]">
                  Get In Touch
                </button>
              </Link>
            </div>
            <img
              src={servicesIllustration}
              alt="Hero Illustration"
              className="w-[700px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHero;

// npm install react-scroll
// import React from 'react';
// import { animateScroll as scroll } from 'react-scroll';

// const ScrollToTopButton = () => {
//   const scrollToTop = () => {
//     scroll.scrollToTop({
//       duration: 1000, // Customize the duration in milliseconds (e.g., 1000ms = 1 second)
//       smooth: true,   // Enable smooth scrolling
//     });
//   };

//   return (
//     <button onClick={scrollToTop}>Scroll to Top</button>
//   );
// };

// export default ScrollToTopButton;
