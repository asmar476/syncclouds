import React from "react";
import { Link } from "react-router-dom";
import servicesIllustration from "../../assets/Services/servicesIllustration.svg";
import bg_services from "../../assets/Services/OBJECTS.svg";

function ServicesHero() {
  return (
    <div className="container mx-auto">
      <div className="absolute flex p-20 flex-col xl:gap-10 items-center justify-between space-y-10 lg:space-y-0 lg:flex-row">
        <div className="space-y-10 text-center  lg:text-left ">
          <h1 className="text-[50px]  font-[800] leading-[65px]">
            Elevate Your Business with{" "}
            <span className="text-[#002680]">
              {" "}
              Premium Software Services - Unleash Your
            </span>{" "}
            Efficiency and Productivity
          </h1>
          <div className=" text-body font-500 leading-[27px] md:text-[18px] text-sm text-justify lg:text-left  max-w-[750px]">
            <p className="">
              At Sync Clouds, we transform your business with high-end software
              solutions that simplify complex processes and enhance efficiency.
              With our expert guidance and support, you can harness the full
              potential of software solutions to achieve your business goals and
              stay ahead of the competition.
            </p>
          </div>
          <Link to={"/contact"}>
            <button
              className="bg-[#00315A] mt-10 text-white
      px-3 py-2 rounded-[0.18rem]"
            >
              Get In Touch
            </button>
          </Link>
        </div>
        <img
          src={servicesIllustration}
          alt="Hero Illustration"
          className="max-w-[516px] max-h-[550px] w-[100%] h-[100%]"
        />
      </div>{" "}
      <img width={"100%"} src={bg_services} alt="bg-images" />
    </div>
  );
}

export default ServicesHero;
