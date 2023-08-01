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
      <div className="hidden sm:flex flex-col items-center justify-center">
        <h2
          className={`text-[#171923] font-[700] text-[20px] md:text-[25.89px] leading-[62.83px]`}
        >
          Tools & Technologies Our
          <span className="gradient-text"> Software Developers Use</span>
        </h2>
        <p className="text-body text-center text-[16px] md:text-[20px] font-[500] w-[800px]">
          "With extensive knowledge in every field required for dependable
          software development, Sync Clouds has developed into a competitor on a
          global scale in the field of software engineering."
        </p>
        <div className="p-5 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Images.map((img, ind) => (
            <div key={ind}>
              <img src={img} alt="" />
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
              <img src={img} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ToolsAndTech;
