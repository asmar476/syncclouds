import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
import aboutIllustration from "../../assets/About illustration/aboutIllustration.svg";
import ExpandYourHorizon from "../AboutPage/ExpandYourHorizon";
import { Link } from "react-router-dom";
const   AboutHero = () => {
  return (
    <>
      <div className=" flex items-center justify-center right-[5%] top-[70%] fixed z-[100] bg-gray-300  h-[50px]  w-[50px] rounded-full">
        <Tooltip title="Scroll to Top">
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer fixed z-[100]"
            src={arrowUp}
            alt="arrow up"
            width={40}
          />
        </Tooltip>
      </div>
      <div className="container mx-auto  px-10 py-10 md:py-32 md:mt-10">
        <div className="flex flex-col xl:gap-10 items-center justify-between space-y-10 lg:space-y-0 lg:flex-row">
          <div className="space-y-10 text-center  lg:text-left ">
            <h1 className="text-[50px] text-[#002680] font-[800] leading-[65px]">
              About Us
            </h1>
            <div className=" text-body font-500 leading-[27px] md:text-[18px] text-sm text-justify lg:text-left  max-w-[750px]">
              <p className="">
                SyncClouds is an industry-leading Digital Transformation and
                Engineering Firm offering end-to-end software development
                solutions to Enterprises, Digital Agencies, and Startups
                worldwide.
              </p>
              <br />
              <p>
                Sync clouds bring together a team of brilliant minds to support
                you in realizing your ambitions and delivering a superior
                digital experience. Get In Touch
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
            src={aboutIllustration}
            alt="Hero Illustration"
            className="max-w-[516px] max-h-[550px] w-[100%] h-[100%]"
          />
        </div>
        <ExpandYourHorizon />
      </div>
    </>
  );
};
export default AboutHero;
