import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import PortfolioCard from "./PortfolioComponent/PortfolioCard";
import CustomSelect from "../../common component/CustomSelect";
import black from "../../assets/icons/black.svg";
import blue from "../../assets/icons/blue.svg";
import bg from "../../assets/Images/bgTools&tech.png";
import map from "../../assets/Images/map.png";
const Portfolio = () => {
  return (
    <div className="container mx-auto px-10 py-10 lg:py-20">
      <div className="flex flex-col items-center gap-5">
        <MainSubHeading text={"Port"} gradientText={"folio"} />
        <div className="md:flex gap-5 hidden">
            <button className="px-[30px] py-[10px] rounded-sm cursor-pointer hover:shadow-lg bg-primary text-white">
              All
            </button>
          <div className="px-[30px] py-[10px] rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]  ">
            <button className="cursor-pointer hover:shadow-lg">
              Social Media Marketing
            </button>
          </div>
          <div className="px-[30px] py-[10px] rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]  ">
            <button className="cursor-pointer hover:shadow-lg">
              Content Marketing
            </button>
          </div>
          <button className="px-[30px] py-[10px] rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px] ">
            Hire A Developer
          </button>

          <div className="px-[30px] py-[10px] rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]  ">
            <button className="cursor-pointer hover:shadow-lg">
              Hire A Team
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <CustomSelect />
        </div>
      </div>
      <div className="mt-10 mb-10 mx-auto">
        <PortfolioCard />
      </div>
      <div className="flex justify-center">
        <img className="h-[92%] absolute" src={bg} alt="" />{" "}
        <img className="w-[1440px] absolute" src={map} alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
