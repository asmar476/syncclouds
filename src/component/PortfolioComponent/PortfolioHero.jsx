import React from "react";
import PortfolioImage from "../../assets/PortfolioPage/porfolioHero.svg";
import Portfolio from "../../pages-component/HomePage/Portfolio";
import ContactForm from "../../common component/ContactForm";
import MainSubHeading from "../../common component/MainSubHeading";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vid from "../../assets/vid.mp4";
import {
  portfolioData,
  VidPortfolioData,
} from "../../constant/PortfolioPageData";
import chevronRight from "../../assets/icons/Vector.svg";
function PortfolioHero() {
  return (
    <div>
      <div className="flex flex-col space-y-12 justify-between items-center  pt-20">
        <img className="w-[100%]" src={PortfolioImage} />
        <MainSubHeading text={"Port"} gradientText={"folio"} />
        <div className="flex flex-wrap items-center justify-center  px-1 gap-3 lg:gap-20">
          <button
            onClick={() => ""}
            className="hover:font-semibold px-7 text-[18px] font-semibold py-2 rounded-sm cursor-pointer border border-primary hover:shadow-lg bg-primary text-white"
          >
            All
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Social Media Marketing
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Cyber Security
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold rounded-sm px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Hire A Developer
          </button>
          <button
            onClick={() => ""}
            className="hover:font-semibold px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
          >
            Hire A Team
          </button>
        </div>
        {/* __________________________________________________________________________________________________ */}

        {/* <video controls width="640" height="360">
          <source src={vid} type="video/mp4" />
          <source src={otherFormatVid} type="video/webm" />
          Your browser does not support the video tag.
        </video> */}
        {/* __________________________________________________________________________________________________ */}
        {/* <div className="md:hidden"><CustomSelect /></div> */}
        <div>
          {portfolioData.map((data, index) => (
            <div
              key={index}
              className={`md:flex gap-20 items-start rounded-br-[100px] mt-10 py-10 hover:bg-slate-100 lg:hover:bg-white  ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="">
                <img className="mx-5 " src={data.img} />
              </div>
              <div className="max-w-[500px]">
                <div className="flex items-center mb-2 gap-6">
                  <img width={40} src={data.icon} alt="portfoliocard" />
                  <h4 className="text-left font-[600] text-[18px]">
                    {data.title}
                  </h4>
                </div>

                <p>{data.description}</p>
                <div className="flex mt-10 gap-5">
                  <button className="font-[] text-[]">Read more</button>
                  <img src={chevronRight} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {VidPortfolioData.map((data, index) => (
            <div
              key={index}
              className={`mx-5 px-5 md:px-0 md:mx-0 md:flex items-center gap-20 md:items-start justify-center rounded-br-[100px] mt-10 py-10 hover:bg-slate-100 lg:hover:bg-white  ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row-"
              }`}
            >
              <div className="">
                <video controls className="w-[622px] h-[229px]" src={vid} />
              </div>
              <div className="max-w-[500px]">
                <div className="flex items-center mb-2 gap-6">
                  <img width={40} src={data.icon} alt="portfoliocard" />
                  <h4 className="text-left font-[600] text-[18px]">
                    {data.title}
                  </h4>
                </div>

                <p>{data.description}</p>
                <div className="flex mt-10 gap-5">
                  <button className="font-[] text-[]">Read more</button>
                  <img src={chevronRight} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            console.log("more case studies shown");
          }}
          className="cursor-pointer hover:drop-shadow-md border border-[#E2E8F0] rounded-md py-2 px-3 text-[14px] sm:text-[18px] text-[#2D3748] font-[600] flex items-center  gap-2"
        >
          Show More Case Studies <img src={arrowDown} />
        </button>
      </div>
      <ContactForm />
    </div>
  );
}

export default PortfolioHero;
