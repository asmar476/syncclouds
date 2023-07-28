import { Link } from "react-router-dom";
import clouds from "../../assets/Images/Main.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import bluearrowRight from "../../assets/icons/blue-arrow-right.svg";
import blurPlus from "../../assets/home illustration/Ellipse 196.svg";
import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
const Hero = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(0, 38, 128, 0) 0%, rgba(0, 38, 128, 0.05) 100%)",
      }}
      className="px-10 mt-20 sm:mt-0 md:py-28 mb-10"
    >
      <div className="max-w-[1440px] w-[100%] mx-auto flex md:flex-row flex-col lg:flex-row items-center justify-center gap-0  lg:gap-10">
        <div className="sm:w-[500px] md:w-[622px] space-y-10 ">
          <h1 className="text-[30px] lg:text-[50px] font-[800] md:leading-[65px] leading-[45px]">
            Unlock your Business's Potential&nbsp;
            <span className="text-[#002680]">
              with the best Software Company
            </span>
          </h1>
          <div
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 202, 122, 0.21) 0%, rgba(194, 226, 254, 0.2) 46.94%, rgba(115, 141, 185, 0.22) 96.13%)",
            }}
            className=" flex w-[300px] lg:w-[440px] px-5 py-2 gap-2.5"
          >
            <p className="text-[#434343] lg:text-[25.89px] font-[600] ">
              Innovation at your fingertips
            </p>
            <img src={arrowRight} />
          </div>
          <div className="mb-20">
            <p className="text-[13px] sm:text-[16px] xl:text-[18px] sm:leading-[30px]">
              Experience unmatched excellence in digital solutions with the best
              software company and transform your business with cutting-edge
              technology.
            </p>
          </div>
          <div className="flex gap-5 my-10">
            <Link to={"/contact"}>
              <button
                className="bg-[#00315A] text-white text-[18px]
                font-[500] px-3 py-2 rounded-[0.18rem]"
              >
                Book my call
              </button>
            </Link>
            <div className="flex gap-3 items-center px-3 py-2 rounded-sm border border-[#002680]">
              <Link to={"/contact"}>
                <button className=" text-[18px] font-[550] text-[#002680]">
                  Our Services
                </button>
              </Link>
              <Link to={"/contact"}>
                <img className=" cursor-pointer" src={bluearrowRight} />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[580px]" src={clouds} alt="" />
          <div className=" flex items-center justify-center right-[5%] top-[70%] fixed z-[100] bg-gray-300  h-[50px]  w-[50px]  rounded-full">
            <Tooltip title="Scroll to Top">
              <img
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="cursor-pointer  fixed z-[100]"
                src={arrowUp}
                alt="arrow up"
                width={40}
              />
            </Tooltip>
          </div>
        </div>{" "}
        {/* <img
          className="absolute right-0 top-[100px] opacity-100"
          src={blurPlus}
          alt=""
        /> */}
      </div>
      {/* <div className="lg:hidden">
        <p className=" text-[14px] sm:text-[16px] xl:text-[18px] leading-[24px] text-justify sm:text-center sm:leading-[30px]">
          Experience unmatched excellence in digital solutions with the best
          software company and transform your business with cutting-edge
          technology. We help global brands to design, develop, and market
          businesses digitally-provided with 24/7 professional support.
        </p>{" "}
        <div className="flex justify-end">
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-[30px] cursor-pointer left-[41%] top-[25%] fixed z-[100]"
            src={arrowUp}
            alt="scrol up icon"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
