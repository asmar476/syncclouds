import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import bgImage from "../../assets/Services/Vector.svg";
import { softwareSolutionData } from "../../constant/SoftwareSolutionData";
import { BsDot } from "react-icons/bs";
const SoftwareSolution = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showIndex, setShowIndex] = useState("");
  return (
    <div className="relative z-[0] ">
      <img
        className="hidden lg:block lg:w-full top-36 absolute z-[-1]"
        src={bgImage}
        alt="imge"
      />
      <div className=" flex flex-col items-center justify-center container mx-auto mb-10 xl:mb-20">
        <div className="flex flex-col items-center justify-center">
          <MainSubHeading
            text={"Our Experts Craft Custom "}
            gradientText={"Software Solutions"}
          />
          <p className="text-body font-[500] text-[16px] leading-[24px] md:w-[650px] my-5 text-center">
            Skyrocket your sales by providing 24/7 access to your business with
            our best-in-class services for everyone.
          </p>
        </div>
        <div className="flex mt-10 lg:mt-32 flex-wrap items-center justify-center">
          {softwareSolutionData.map((data, index) => (
            <div
              key={index}
              className="mb-5 py-10 bg-white lg:mx-3 w-full sm:w-[408px] flex items-center justify-center  flex-col box-shadow  lg:mb-5"
            >
              <img src={data.img} width={98} alt="icon" />
              <h1 className="font-[600] text-[18px] gradient-text">
                {data.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SoftwareSolution;

{
  /* <div className="flex flex-wrap lg:justify-between items-center justify-center">
          {softwareSolutionData.map((data, index) => (
            <div
              // onMouseEnter={() => {
              //   setShowOverlay(true);
              //   setShowIndex(index);
              // }}
              // onMouseLeave={() => {
              //   setShowOverlay(false);
              //   setShowIndex("");
              // }}
              key={index}
              className=" bg-white mx-3 w-[400px] py-10 h-[193px] flex items-center justify-center gap-5 flex-col box-shadow  pb-5 my-5"
            >
              {showOverlay && index === showIndex ? (
                <img src={data.img} width={98} alt="icon" />
              ) : (
                <img src={data.img} width={98} alt="icon" />
              )}
              {
                <div
                  className={`${
                    showOverlay && index === showIndex
                      ? "translate-y-[20px] transition-all duration-200 ease-in"
                      : "translate-y-[0px] transition-all duration-200 ease-in"
                  }`}
                >
                  <h1 className="font-[600] text-[18px] gradient-text">
                    {data.title}
                  </h1>
                </div>
              }
              {showOverlay && index === showIndex && (
                <div className=" bg-white bg-opacity-90  text-black w-full h-full flex">
                  <div className="space-y-5 mt-10">
                    {data.list1.map((li, index) => (
                      <div>
                        <li className="text-[16px] font-[400] text-gradientBlueLight">
                          {li.li}
                        </li>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-5 mt-10">
                    {data.list2.map((li, index) => (
                      <div>
                        <li className="text-[16px] font-[400] text-gradientBlueLight">
                          {li.li}
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>{" "} */
}
