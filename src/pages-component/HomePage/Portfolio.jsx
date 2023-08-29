import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import { DataportfolioHome } from "../../constant/PortfolioPageData";
import HomePorfolio from "./PortfolioComponent/HomePorfolio";
import PortfolioCard from "./PortfolioComponent/PortfolioCard";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
const Portfolio = () => {
  const gaEventTracker = useAnalyticsEventTracker("Portfolio");
  return (
    <div id="portfolio" className="  mx-auto  p-10">
      <div className="pt-5 max-w-[1440px] w-[100%] mx-auto">
        <MainSubHeading text={"Port"} gradientText={"folio"} />
        {/* <div className="flex items-center justify-between">
          <h1 className="font-[600] text-body text-[16px] sm:text-[20px] md:text-[25.89px]">
            Our Case Studies
          </h1>
          <div className="flex text-left flex-col sm:flex-row space-x-5">
            <button className="font-[500] text-[11px] md:text-[14] text-primary">
              All
            </button>
            <button className="font-[500] text-[11px] md:text-[14] text-[#434343]">
              Social Media Marketing
            </button>
            <button className="font-[500] text-[11px] md:text-[14] text-[#434343]">
              Content Marketing
            </button>
          </div>
        </div> */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-9 lg:gap-20">
          <button
            onClick={() => gaEventTracker("All")}
            className="hover:font-semibold px-7 text-[18px] font-semibold py-2 rounded-sm cursor-pointer border border-primary hover:shadow-lg bg-primary text-white"
          >
            All
          </button>
          <button
            onClick={() => gaEventTracker("Social Media Marketing")}
            className="hover:font-semibold px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Social Media Marketing
          </button>
          <button
            onClick={() => gaEventTracker("Cyber Security")}
            className="hover:font-semibold px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Cyber Security
          </button>
          <button
            onClick={() => gaEventTracker("Hire A Developer")}
            className="hover:font-semibold rounded-sm px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Hire A Developer
          </button>
          <button
            onClick={() => gaEventTracker("Hire A Team")}
            className="hover:font-semibold px-5 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Hire A Team
          </button>
        </div>
        {/* <div className="md:hidden"><CustomSelect /></div> */}
      </div>
      {/* <div className="flex flex-col justify-center  items-center ">
        <div className=" grid lg:grid-cols-2">
          {DataportfolioHome.map((data, index) => (
            <HomePorfolio
              key={index}
              arr={data.arr}
              index={index + 1}
              category={data.Category}
              projName={data.projName}
              projDesc={data.projDesc}
            />
          ))}
        </div>
      </div> */}
      <div className="flex flex-col items-center gap-5 justify-center">
        <PortfolioCard />
      </div>
    </div>
  );
};
export default Portfolio;
