import React from "react";
import one from "../../assets/Services/SC Icons White SVG/Advance Process.svg";
import two from "../../assets/Services/SC Icons White SVG/Customer Software Solution.svg";
import three from "../../assets/Services/SC Icons White SVG/Success Stories.svg";
import four from "../../assets/Services/SC Icons White SVG/Amplified Business.svg";
import CountUp from "react-countup";
const data = [
  { icon: one, title: "Advanced Process", start: 10, end: 150 },
  { icon: two, title: "Costumer Software Solution", start: 10, end: 150 },
  { icon: three, title: "Success Stories", start: 10, end: 150 },
  { icon: four, title: "Amplified Business", start: 10, end: 150 },
];
const ExprtIdeation = () => {
  return (
    <div className="flex items-center justify-between flex-col bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight">
      <div className=" mt-10 ">
        <h2 className="text-[20px] md:text-[25.89px] font-[600] leading-[30px] md:leading-[38.83px] text-white mt-10">
          Expert Ideation At Positions
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  my-10">
        {data.map((position, index) => (
          <div
            key={index}
            className="flex items-center justify-between  space-y-[10px] flex-col my-10"
          >
            <img width={67} src={position.icon} alt={`icon ${index}`} />
            <h3 className="text-white text-[25.89px] font-[600] leading-[38.83px]">
              <CountUp
                start={position.start}
                end={position.end}
                redraw={true}
                duration={5}
              >
                {({ countUpRef, start }) => <span ref={countUpRef} />}
              </CountUp>{" "}
              +
            </h3>
            <p className="text-[16px] font-[600] leading-[24px] text-white">
              {position.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExprtIdeation;
