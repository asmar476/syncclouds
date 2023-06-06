import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { softwareSolutionData } from "../../constant/SoftwareSolutionData";
import { BsDot } from "react-icons/bs";
const SoftwareSolution = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showIndex, setShowIndex] = useState("");

  return (
    <div className="container mx-auto px-10  my-20">
      <div className="flex flex-col items-center justify-center ">
        <MainSubHeading
          text={"Our Experts Craft Custom "}
          gradientText={"Software Solutions"}
        />
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[800px] my-5 text-center">
          Skyrocket your sales by providing 24/7 access to your business with
          our best-in-class services for everyone.
        </p>
      </div>
      <div className="text-center grid grid-cols-3">
        {softwareSolutionData.map((data, index) => (
          <div
            onMouseEnter={() => {
              setShowOverlay(true);
              setShowIndex(index);
            }}
            onMouseLeave={() => {
              setShowOverlay(false);
              setShowIndex("");
            }}
            key={index}
            className="relative z-0 max-w-[400px] min-h-[400px] flex items-center justify-center flex-col gap-10 box-shadow  pb-5 my-5"
          >
            {showOverlay && index === showIndex ? (
              <img src={data.img} className="h-[260px] w-[250px]" />
            ) : (
              <img src={data.img} className={`h-[164px] w-[156px]`} />
            )}
            {
              <div
                className={`${
                  showOverlay && index === showIndex
                    ? "translate-y-[20px] transition-all duration-200 ease-in"
                    : "translate-y-[0px] transition-all duration-200 ease-in"
                }`}
              >
                <MainSubHeading gradientText={data.title} />
              </div>
            }

            {showOverlay && index === showIndex && (
              <div className="absolute inset-0 bg-white bg-opacity-90  text-black w-full h-full flex">
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
      </div>
    </div>
  );
};

export default SoftwareSolution;
