import React from "react";
import techImage from "../../assets/TechnologiesPage/technologiesHero.svg";
import MainSubHeading from "../../common component/MainSubHeading";
import { frontend, backend, Mobile } from "../../constant/TechData";

function TechnologiesHero() {
  return (
    <div className="px-20 space-y-8 pt-20">
      <img className="w-[100%]" src={techImage} />
      <MainSubHeading text={"Techno"} gradientText={"logies"} />
      <p className="sm:text-[20px] text-[14px] text-center text-[#434343]">
        We Love using latest tech to our advantage.
      </p>
      {/* ============================================== Back end ============================================== */}
      <div className="px-5 items-center space-x-12  flex">
        <div className="w-[175px]">
          <h1 className=" font-semibold text-[20px] lg:text-[26px] text-body">
            Backend End
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {backend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>

        {/* ============================================== front end ============================================== */}
      </div>{" "}
      {/* ============================================== front end ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            Front End
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {frontend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* ============================================== Mobile ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            Mobile
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {Mobile.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* ============================================== Related ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            Related
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {frontend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* ============================================== Cloud ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            Cloud
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {frontend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* ============================================== CMS ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            CMS
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {frontend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* ============================================== E-commerce ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            E-commerce
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {frontend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* ============================================== AI ============================================== */}
      <div className="px-5 items-center space-x-12 flex">
        <div className="w-[175px]">
          <h1 className="  font-semibold text-[20px] lg:text-[26px] text-body">
            AI
          </h1>
        </div>
        <div className="flex items-center  space-y-2  flex-wrap mr-1">
          {frontend.map((logo, index) => (
            <div
              key={index}
              className=" overflow-hidden whitespace-no-wrap mr-3 flex items-center  space-x-2 bg-white s rounded-lg justify-center px-5 py-1  "
            >
              <img className="w-[50px] md:w-[40px]" src={logo.image} alt="" />

              <p className="font-[600] text-body text-[14px] ">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default TechnologiesHero;
