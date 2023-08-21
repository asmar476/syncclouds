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
      <div className=" relative w-full max-w-[1200px] xl:max-w-[1450px] px-10 width-[100%] pt-10 lg:pt-20 mx-auto">
        <div className="">
          <div className="  flex  flex-col  items-center justify-between  space-y-10 lg:space-y-0 lg:flex-row">
            <div className="space-y-10 text-center w-full  flex-1 md:text-left ">
              <h1 className="text-[25px] md:text-[35px] xl:text-[41px] font-[700]  xl:leading-[65px]">
                Elevate Your Business with{" "}
                <span className="text-[#002680]">
                  Premium Software Services- Unleash Your
                </span>
                &nbsp;Efficiency and Productivity
              </h1>
              <div className=" text-body font-500 leading-[22px] xl:leading-[27px] md:text-[18px] text-[14px] ">
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
            <div className="flex-1 hidden lg:block">
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
