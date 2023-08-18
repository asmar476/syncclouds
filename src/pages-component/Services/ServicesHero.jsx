import React, { useState } from "react";
import servicesIllustration from "../../assets/Services/servicesIllustration.svg";
import SoftwareSolution from "./SoftwareSolution";
import Calendalycomp from "../../common component/CalendlyComp";
function ServicesHero() {
  const [isOpen, setIsOpen] = useState(false);
  const closeCalendaly = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className=" relative max-w-[1450px] px-3 width-[100%] pt-20 mx-auto">
        <div className="">
          <div className="  flex px-10 flex-col xl:gap-32 items-center justify-center  space-y-10 lg:space-y-0 lg:flex-row">
            <div className="space-y-10 text-center  w-[327px] md:w-[550px] md:text-left ">
              <h1 className="text-[25px] md:text-[35px] max-w-[750px] xl:w-[750px] xl:text-[41px] font-[700] xl:leading-[65px]">
                Elevate Your Business with{" "}
                <span className="text-[#002680]">
                  Premium Software Services- Unleash Your
                </span>
                &nbsp;Efficiency and Productivity
              </h1>
              <div className=" text-body font-500 leading-[27px] md:text-[18px] text-[14px] ">
                <p className="">
                  At Sync Clouds, we transform your business with high-end
                  software solutions that simplify complex processes and enhance
                  efficiency. With our expert guidance and support, you can
                  harness the full potential of software solutions to achieve
                  your business goals and stay ahead of the competition.
                </p>
              </div>

              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="pulse bg-[#00315A] mt-10 text-white px-3 py-2 rounded-[0.18rem] mb-10"
                >
                  Let's Get Started
                </button>
                <Calendalycomp isOpen={isOpen} close={closeCalendaly} />
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={servicesIllustration}
                alt="Hero Illustration"
                className="min-w-[350px] w-[700px]"
              />
            </div>
          </div>
        </div>
        <SoftwareSolution />
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
