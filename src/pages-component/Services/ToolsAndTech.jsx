import React from "react";
import webIcon from "../../assets/Services/servicesTandT/Web/coding-icon(1) 1.svg";
import dbmsIcon from "../../assets/Services/servicesTandT/DBMS/database-checkmark-icon 1.svg";
import cloudIcon from "../../assets/Services/servicesTandT/Cloud/cloud-download-icon 1.svg";
import fwIcon from "../../assets/Services/servicesTandT/Frameworks/big-data-icon 1.svg";
import languagesIcon from "../../assets/Services/servicesTandT/Language/programmer-icon 1.svg";
import mobileIcon from "../../assets/Services/servicesTandT/Mobile/programmer-icon 1.svg";
import {
  languagesServices,
  web,
  dbmsServices,
  cloud,
  Mobile,
  fwServices,
} from "../../constant/TechData";
import Carousel from "react-elastic-carousel";
import ServicesTechsCommon from "./ServicesTechsCommon";
const techCategories = [
  { icon: webIcon, data: web, category: "Web" },
  { icon: dbmsIcon, data: dbmsServices, category: "DBMS" },
  { icon: cloudIcon, data: cloud, category: "Cloud" },
  { icon: languagesIcon, data: languagesServices, category: "Languages" },
  { icon: fwIcon, data: fwServices, category: "Frameworks" },
  { icon: mobileIcon, data: Mobile, category: "Mobile" },
];
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
        <p className="text-body text-center text-[10px] md:text-[15pxte] lg:text-[18px] font-[500] md:w-[750px] lg:w-[858px] mb-7">
          "With extensive knowledge in every field required for dependable
          software development, Sync Clouds has developed into a competitor on a
          global scale in the field of software engineering."
        </p>

        <div className="hidden sm:grid grid-cols-2 gap-5 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <ServicesTechsCommon
              key={index}
              CategoryIcon={category.icon}
              categoryData={category.data}
              Category={category.category}
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <Carousel
          // ref={carouselRef}
          itemsToShow={1}
          pagination={false}
          showArrows={true}
          // enableAutoPlay
          // autoPlaySpeed={1000}
          // isRTL={false}
        >
          {techCategories.map((category, index) => (
            <ServicesTechsCommon
              key={index}
              CategoryIcon={category.icon}
              categoryData={category.data}
              Category={category.category}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ToolsAndTech;
