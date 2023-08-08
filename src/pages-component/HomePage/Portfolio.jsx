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
    <div id="portfolio" className="container mx-auto mt-12 p-5">
      <div className="flex flex-col justify-between items-center">
        <MainSubHeading text={"Port"} gradientText={"folio"} />
        <div className="flex flex-wrap items-center justify-center gap-9 lg:gap-20">
          <button
            onClick={() => ""}
            className="hover:font-semibold px-7 text-[18px] font-semibold py-2 rounded-sm cursor-pointer border border-primary hover:shadow-lg bg-primary text-white"
          >
            All
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Social Media Marketing
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Cyber Security
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold rounded-sm px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Hire A Developer
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Hire A Team
          </button>
        </div>
        {/* <div className="md:hidden"><CustomSelect /></div> */}
      </div>
      <div className=" mx-auto">
        <PortfolioCard />
      </div>
      <center> </center>
    </div>
  );
};
export default Portfolio;
