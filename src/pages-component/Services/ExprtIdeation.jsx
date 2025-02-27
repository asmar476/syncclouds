import React from "react";
import one from "../../assets/Services/SC Icons White SVG/Advance Process.svg";
import two from "../../assets/Services/SC Icons White SVG/Customer Software Solution.svg";
import three from "../../assets/Services/SC Icons White SVG/Success Stories.svg";
import four from "../../assets/Services/SC Icons White SVG/Amplified Business.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const data = [
  { icon: one, title: "Advanced Process", start: 10, end: 150 },
  { icon: two, title: "Customer Software Solution", start: 10, end: 150 },
  { icon: three, title: "Success Stories", start: 10, end: 150 },
  { icon: four, title: "Amplified Business", start: 10, end: 150 },
];
const ExprtIdeation = () => {
  return (
    <div className="pt-8 bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight ">
      <div className="w-full max-w-[1200px] xl:max-w-[1400px] px-10 mx-auto">
        <div className=" mt-10 ">
          <h2 className="text-[20px] text-center md:text-[25.89px] font-[600] leading-[30px] md:leading-[38.83px] text-white my-10">
            Expert Ideation At Positions
          </h2>
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-x-3 gap-y-10  md:my-10 py-5 md:py-10 ">
          {data.map((position, index) => (
            <div
              key={index}
              className="flex items-center justify-between  space-y-[10px] flex-col   "
            >
              <img width={67} src={position.icon} alt={`icon ${index}`} />
              <h3 className="text-white text-[25.89px] font-[600] leading-[38.83px]">
                <CountUp
                  start={position.start}
                  end={position.end}
                  redraw={true}
                  duration={5}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p className="text-center text-[12px] sm:text-[16px] font-[600] leading-[24px] text-white">
                {position.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExprtIdeation;
