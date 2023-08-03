import React from "react";
import Testimonials from "./Testimonials";
import bg from "../../assets/Images/ourAimBg.svg";
import bgCircle from "../../assets/Images/halfCircle.svg";
import ourAimData from "../../constant/OurAimData";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const OurAim = () => {
  const itemsPerRowMedium = 3;
  const itemsPerRowSmall = 2;
  const totalSections = ourAimData.length;
  const totalRowsMedium = Math.ceil(totalSections / itemsPerRowMedium);
  const totalRowsSmall = Math.ceil(totalSections / itemsPerRowSmall);

  return (
    <>
      <div className="relative bg-[#F0F8FF] z-[1]  sm:pb-0 ">
        <img className="absolute right-5 z-[-1]" src={bg} />
        <img
          width={330}
          className="hidden md:block absolute top-[17%] left-0"
          src={bgCircle}
        />
        <div className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto sm:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-[41.89px] font-[0700] leading-[62.83px max-w-[787px] my-20">
              Our Aim: From Disruptive Creativity to{" "}
              <span className="text-primary">Tangible Solution</span>{" "}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
            {ourAimData.map((section, index) => (
              <div
                key={index}
                className={`${
                  index === 1 || index === 4
                    ? "md:border-x border-x-primary"
                    : "border-none"
                }  flex flex-col items-center justify-center text-center gap-1 md:gap-6 pb-5`}
              >
                <div>
                  <img src={section.icon} alt="icon" width={62} />
                </div>
                <p className="flex items-center justify-center gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[62.83px] text-primary">
                  <CountUp
                    start={section.count}
                    end={section.end}
                    redraw={true}
                    duration={5}
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span>+</span>
                </p>
                <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" z-[100] ">
          <Testimonials />
        </div>
      </div>
    </>
  );
};
export default OurAim;
