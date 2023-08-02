import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
import aboutIllustration from "../../assets/About illustration/aboutIllustration.svg";
import ExpandYourHorizon from "../AboutPage/ExpandYourHorizon";
import { Link } from "react-router-dom";
const AboutHero = () => {
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
      <div className="container mx-auto py-10">
        <div className="ml-5 flex flex-col xl:gap-10 items-center justify-center md:gap-5 lg:gap-0 space-y-10 md:space-y-0 md:flex-row">
          <div className="max-w-[622px] md:space-y-5 text-center  md:text-left ">
            <div>
              <h1 className="text-[28px] md:text-[50px] text-[#002680] font-[700] leading-[65px]">
                About Us
              </h1>
            </div>
            <div className=" text-body px-4font-500 leading-[27px] md:text-[18px] text-sm md:text-left w-[327px] md:w-[450px] lg:w-[600px]">
              <p className="mb-10 ">
                SyncClouds is an industry-leading Digital Transformation and
                Engineering Firm offering end-to-end software development
                solutions to Enterprises, Digital Agencies, and Startups
                worldwide.
              </p>

              <p>
                Sync clouds bring together a team of brilliant minds to support
                you in realizing your ambitions and delivering a superior
                digital experience.
              </p>
            </div>
            <Link to={"/contact"}>
              <button
                className="bg-[#00315A] mt-10 text-white font-semibold
              px-3 py-2 rounded-[0.18rem]"
              >
                Get In Touch
              </button>
            </Link>
          </div>
          <div className="hidden md:block">
            <img src={aboutIllustration} alt="Hero Illustration" className="" />
          </div>
        </div>
        <ExpandYourHorizon />
      </div>
    </>
  );
};
export default AboutHero;
