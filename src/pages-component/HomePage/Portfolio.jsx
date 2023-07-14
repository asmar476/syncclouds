import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import PortfolioCard from "./PortfolioComponent/PortfolioCard";
import CustomSelect from "../../common component/CustomSelect";
import black from "../../assets/icons/black.svg";
import blue from "../../assets/icons/blue.svg";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-10 py-10 lg:py-20">
      <div className="flex flex-col items-center gap-5">
        <MainSubHeading text={"Port"} gradientText={"folio"} />
        <div className="md:flex gap-5 hidden">
          <div className="px-[30px] py-[10px] rounded-sm bg-primary text-white">
            <p>All</p>
          </div>
          <div className="px-[30px] py-[10px] rounded-sm border border-primary text-primary font-[500] text-[18px]  ">
            <p>Social Media Marketing</p>
          </div>
          <div className="px-[30px] py-[10px] rounded-sm border border-primary text-primary font-[500] text-[18px]  ">
            <p>Content Marketing</p>
          </div>
          <div className="px-[30px] py-[10px] rounded-sm border border-primary text-primary font-[500] text-[18px]  ">
            <p>Hire A Developer</p>
          </div>
          <div className="px-[30px] py-[10px] rounded-sm border border-primary text-primary font-[500] text-[18px]  ">
            <p>Hire A Team</p>
          </div>
        </div>
        <div className="md:hidden">
          <CustomSelect />
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
