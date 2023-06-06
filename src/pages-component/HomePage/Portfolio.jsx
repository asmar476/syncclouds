import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import PortfolioCard from "./PortfolioComponent/PortfolioCard";
import CustomSelect from "../../common component/CustomSelect";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-10 py-10 lg:py-20">
      <div className="flex flex-col items-center gap-5">
        <MainSubHeading text={"Port"} gradientText={"folio"} />
        <div className="md:flex gap-5 hidden">
          <div className="px-[30px] py-[10px] rounded-md bg-gradientBlueLight text-white">
            <p>All</p>
          </div>
          <div className="px-[30px] py-[10px] rounded-md border border-primaryColor ">
            <p>Social Media Marketing</p>
          </div>{" "}
          <div className="px-[30px] py-[10px] rounded-md border border-primaryColor ">
            <p>Content Marketing</p>
          </div>{" "}
          <div className="px-[30px] py-[10px] rounded-md border border-primaryColor ">
            <p>Hire A Developer</p>
          </div>{" "}
          <div className="px-[30px] py-[10px] rounded-md border border-primaryColor ">
            <p>Hire A Team</p>
          </div>
        </div>

        <div className="md:hidden">
          {" "}
          <CustomSelect />
        </div>
      </div>
      <div className="my-10 mx-auto">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
