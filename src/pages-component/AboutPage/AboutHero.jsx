import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
import aboutIllustration from "../../assets/About illustration/About Us-02.svg";
import ExpandYourHorizon from "../AboutPage/ExpandYourHorizon";
import { Link } from "react-router-dom";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
const AboutHero = () => {
  const gaEventTracker = useAnalyticsEventTracker("About Hero");
  return (
    <>
      <div className="w-full px-10 max-w-[1200px] pt-10 md:pt-20 xl:max-w-[1400px]  mx-auto ">
        <div className="   pt-5 flex flex-col  items-center justify-between  space-y-10 md:space-y-0 md:flex-row">
          <div className=" md:space-y-5 text-center  md:text-left ">
            <div>
              <h1 className="text-[28px] md:text-[50px] text-[#002680] font-[700] leading-[65px]">
                About Us
              </h1>
            </div>
            <div className=" text-body font-500 leading-[27px] text-[14px] lg:text-[18px] text-sm md:text-left sm:w-[327px] md:w-[350px] lg:w-[550px]">
              {/* Digital Transformation and Engineering Firm*/}

              <p className="mb-10 ">
                SyncClouds is an industry-leading{" "}
                <span className="italic">Global Solution Provider </span>
                offering end-to-end software development solutions to
                Enterprises, Digital Agencies, and Startups worldwide.
              </p>
              <p>
                SyncClouds bring together a team of brilliant minds to support
                you in realizing your ambitions and delivering a superior
                digital experience.
              </p>
            </div>
            <Link to={"/contact"}>
              <button
                onClick={() => {
                  gaEventTracker("About Hero");
                }}
                className="bg-[#00315A] mt-10 text-white font-semibold
              px-3 py-2 rounded-[0.18rem]"
              >
                Get In Touch
              </button>
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              className="min-w-[350px] w-[550px]"
              src={aboutIllustration}
              alt="Hero Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutHero;
