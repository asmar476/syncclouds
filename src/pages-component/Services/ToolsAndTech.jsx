import React from "react";
import languages from "../../assets/Images/TandT1.svg";
import db from "../../assets/Images/TandT3.svg";
import cloud from "../../assets/Images/TandT2.svg";
import web from "../../assets/Images/TandT6.svg";
import mobile from "../../assets/Images/TandT4.svg";
import framwork from "../../assets/Images/TandT5.svg";
import Carousel from "react-elastic-carousel";
const Images = [web, db, cloud, languages, framwork, mobile];
function ToolsAndTech() {
  return (
    <div>
      <div className="px-10 flex flex-col items-center justify-center">
        <h2
          className={`text-[#171923] text-center font-[700] text-[16px] md:text-[25.89px] `}
        >
          Tools & Technologies Our
          <span className="gradient-text"> Software Developers Use</span>
        </h2>
        <p className="text-body text-center text-[14px] md:text-[20px] font-[500] md:w-[670px] mb-7">
          "With extensive knowledge in every field required for dependable
          software development, Sync Clouds has developed into a competitor on a
          global scale in the field of software engineering."
        </p>
        <div className="p-5 hidden sm:grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Images.map((img, ind) => (
            <div key={ind}>
              <img className="" src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <Carousel
          className="lg:block hidden"
          // ref={carouselRef}
          itemsToShow={1}
          pagination={false}
          showArrows={true}
          // enableAutoPlay
          // autoPlaySpeed={1000}
          // isRTL={false}
        >
          {Images.map((img, ind) => (
            <div key={ind}>
              <img className="w-[100%]" src={img} alt="image" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ToolsAndTech;
