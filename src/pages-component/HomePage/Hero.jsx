import { Link, useNavigate } from "react-router-dom";
import clouds from "../../assets/Images/Main.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import bluearrowRight from "../../assets/icons/blue-arrow-right.svg";
import blurPlus from "../../assets/home illustration/Ellipse 196.svg";
import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
const scrollToBottom = () => {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;
  const scrollPosition = bodyHeight - windowHeight;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};
const Hero = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(0, 38, 128, 0) 0%, rgba(0, 38, 128, 0.05) 100%)",
      }}
    >
      <div>
        <div className=" flex items-center justify-center right-[5%] top-[70%] fixed z-[100] bg-gray-300  h-[50px]  w-[50px]  rounded-full">
          <Tooltip title="Scroll to Top">
            <img
              onClick={scrollToBottom}
              className="cursor-pointer  fixed z-[100]"
              src={arrowUp}
              alt="arrow up"
              width={40}
            />
          </Tooltip>
        </div>
      </div>
      <div className="max-w-[1200px] xl:max-w-[1440px] w-[100%] mx-auto lg:flex flex-col md:flex-row items-center justify-center px-10  sm:px-20 py-28 lg:pb-10">
        <div className="flex-1 sm:w-[500px] md:w-[622px] space-y-5 2xl:space-y-10 ">
          <h1 className="text-[24px] sm:text-[30px] xl:text-[50px] font-[800] leading-[38px] xl:leading-[65px] sm:leading-[45px]">
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
            className=" flex w-[230px] sm:w-[390px] xl:w-[440px] px-2 sm:px-5 py-2 gap-1 sm:gap-2.5"
          >
            <p className="text-[#434343] text-[12.5px] sm:text-[22px] xl:text-[25.89px] font-[600] ">
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
          <div className="flex gap-3 sm:gap-5 mt-5 sm:mt-10">
            <Link to={"/contact"}>
              <button
                className="bg-[#00315A] text-white text-[14px] sm:text-[18px] min-w-[120px] md:min-w-[170px]
                font-[500] px-[5px] sm:px-3 py-1 sm:py-2 rounded-[0.18rem]"
              >
                Book my call
              </button>
            </Link>
            <div className="flex gap-2 sm:gap-3 items-center  px-[3px] sm:px-3 py-[2px] sm:py-2 rounded-sm border border-[#002680] min-w-[120px] md:min-w-[170px]">
              <Link to={"/services"}>
                <button className="text-[12px] sm:text-[18px] font-[550] text-[#002680]">
                  Our Services
                </button>
              </Link>
              <Link to={"/contact"}>
                <img className=" cursor-pointer" src={bluearrowRight} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden lg:inline-block">
          <img className="hidden md:block min-w-[580px]" src={clouds} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
