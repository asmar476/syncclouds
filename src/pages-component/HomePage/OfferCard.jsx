import React, { useState } from "react";
import { offerData } from "../../constant/Data";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { Link } from "react-router-dom";
import line from "../../assets/Images/line.svg";
import transform from "../../assets/Images/Transform Digital Experience with SyncClouds-01.svg";
import linesHero from "../../assets/Images/lines-hero 1.svg";
import curlArrow from "../../assets/Images/Frame.svg";
import arrowDown from "../../assets/icons/black-arrow-down.svg";
import arrowUp from "../../assets/icons/black_arrow-up.svg";
import s from "../../assets/Images/S.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Pagination,
  Scrollbar,
  Navigation,
} from "swiper";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation]);
const style = {
  background:
    "linear-gradient(180deg, rgba(0, 38, 128, 0) 0%, rgba(0, 38, 128, 0.05) 100%)",
};

const OfferCard = () => {
  const [hover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  const gaEventTracker = useAnalyticsEventTracker("Offer Cards");
  return (
    <>
      <div style={style} className="relative ">
        <div className="overflow-hidden hidden lg:block">
          <img
            className="absolute opacity-60 max-h-[1250px] z-0 w-full"
            src={s}
            alt=""
          />
        </div>
        <div className="max-w-[1200px] xl:max-w-[1440px] w-[100%] mx-auto  px-10 sm:px-20  pb-20  sm:my-10">
          <div className="hidden lg:block">
            <div className="relative flex items-center lg:items-start text-center lg:text-left lg:justify-between flex-col gap-5 xl:gap-0  lg:flex-row w-full my-10 pr-10">
              <div className="relative mb-10 sm:mb-20 lg:mb-0 max-w-full md:max-w-[600px] lg:max-w-full">
                <h1 className="text-[28px] xl:text-[41.89px] font-[700]">
                  {"Bespoke IT Services By "}
                  <span className="text-primary"> SyncClouds</span>
                </h1>
                <p className="  mt-5 text-body w-full lg:w-[300px]  xl:w-[350px] xl:max-w-full">
                  Make a statement and drive revenue with our trusted IT
                  services to deliver ultimate profitability."
                </p>
              </div>
              <div className="hidden lg:block">
                {" "}
                <img
                  className="absolute bottom-5 -left-[110px] xl:top-[8%]   xl:-left-[130px] w-[52%]  xl:w-[58%]     "
                  src={linesHero}
                  alt=""
                />
              </div>
              {/* ============================================= ~ vertical swiper cards ~ ============================================== */}
              <Swiper
                direction={"vertical"}
                slidesPerView={2}
                modules={[Navigation, Scrollbar, Autoplay]}
                loop={true}
                draggable={true}
                spaceBetween={20}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                autoplay={{ delay: 1000 }}
                className="mySwiper"
              >
                {offerData.map((card, index) => (
                  <SwiperSlide>
                    <div
                      key={card.id}
                      onMouseEnter={() => {
                        setHover(true), setCurrentIndex(index);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                        setCurrentIndex("");
                      }}
                    >
                      <div className="  flex flex-col p-2 lg:p-5 max-w-[500px] h-[230px] xl:h-[250px] xl:max-w-[600px] bg-white z-[100] rounded shadow-lg hover:bg-blueDark hover:text-white  ">
                        <div className="  w-[50px] rounded-full ">
                          <img
                            src={
                              hover && currentIndex === index
                                ? card.iconWhite
                                : card.icon
                            }
                          />
                        </div>
                        <div className=" pt-5">
                          <InnerPageHeading text={`${card.title}`} />
                          <p className="text-[15px] xl:text-[16px]  leading-[23px] xl:leading-[30px] mb-3 xl:mb-10">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => {
                  gaEventTracker("Arrow Up");
                }}
                className="swiper-button-prev absolute z-[100] top-[5%] left-[100%] "
              >
                <img className={` `} src={arrowUp} alt="" />
              </button>
              <button
                onClick={() => {
                  gaEventTracker("Arrow Down");
                }}
                className="swiper-button-next  absolute z-[100] top-[87.5%] left-[100%]"
              >
                <img className={` `} src={arrowDown} alt="" />
              </button>{" "}
            </div>
          </div>
          <div className="lg:hidden">
            <div className="">
              <div className="relative mt-20 mb-10 flex flex-col items-center text-center">
                <h1 className="text-[28px] md:text-[41.89px] font-[700]">
                  Bespoke IT Services By
                  <span className="text-primary"> SyncClouds</span>
                </h1>
                <p className="  mt-3 text-body w-full lg:w-[300px]  xl:w-[350px] xl:max-w-full">
                  Make a statement and drive revenue with our trusted IT
                  services to deliver ultimate profitability.
                </p>
              </div>
              <div className="hidden lg:block">
                {" "}
                <img
                  className="absolute bottom-5 -left-[110px] xl:top-[8%]   xl:-left-[130px] w-[52%]  xl:w-[55%]     "
                  src={linesHero}
                  alt=""
                />
              </div>
              {/* ============================================= ~ mobile slider ~ ============================================== */}
              <div className="flex justify-center my-10">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                  slidesPerView={1}
                  loop={true}
                  draggable={true}
                  autoplay={{ delay: 1000 }}
                >
                  {offerData.map((card, index) => (
                    <SwiperSlide
                      key={index}
                      style={{ "& .Swiper__slide": { width: "0%" } }}
                    >
                      <div
                        onMouseEnter={() => {
                          setHover(true), setCurrentIndex(index);
                        }}
                        onMouseLeave={() => {
                          setHover(false);
                          setCurrentIndex("");
                        }}
                      >
                        <div className="mb-5 md:h-[300px] flex flex-col p-2 lg:p-5 max-w-[500px] xl:max-w-[600px] bg-white z-[100] rounded shadow-lg hover:bg-blueDark hover:text-white  ">
                          <div className="w-[50px] rounded-full ">
                            <img
                              src={
                                hover && currentIndex === index
                                  ? card.iconWhite
                                  : card.icon
                              }
                            />
                          </div>
                          <div className="pt-5 xl:pt-10">
                            <InnerPageHeading text={`${card.title}`} />
                            <p className="text-[14px] md:text-[16px]  leading-[20px] md:leading-[30px] mb-5 xl:mb-10">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/* ===================================================================================== */}
          <div className=" relative  flex flex-col lg:flex-row mt-20 xl:-mt-5 lg:-mt-28 2xl:mt-0   gap-10">
            <div className="flex-1 text-center lg:text-left relative ">
              <div className="hidden lg:block">
                <img
                  className="absolute -left-[45px] top-[26%]  xl:-left-[38px] xl:top-[39.5%]"
                  src={line}
                  alt="line"
                />
              </div>
              <MainSubHeading
                className="text-center w-full lg:text-left lg:max-w-[400px] "
                my={"lg:my-5"}
                ml={"lg:ml-2"}
                text={"Transform digital experience with"}
                gradientText={" SyncClouds"}
              />
              <div className=" flex">
                <div className="">
                  <h4 className="text-primary leading-[38px] xl:mt-4 mb-7 text-[22px] xl:text-[25.89px] font-[600]">
                    Boost Your business Expansion!
                  </h4>
                  <p>
                    SyncClouds is committed to providing everyone with complete
                    custom software development services. No matter what, there
                    is always a chance to flourish, stand out, acquire, and
                    rise..
                  </p>
                  <h6 className="my-5 font-[600] ">
                    Future Building Using Software, Innovation, And Technology
                  </h6>
                  <p>
                    Today's world is dominated by technology, so businesses and
                    people can survive. We have a global clientele because of
                    our unmatched solutions and innovative methods.
                  </p>
                  <Link to={"/contact"}>
                    <button
                      onClick={() => gaEventTracker("Get In Touch")}
                      className=" border border-primary rounded-sm py-2 px-4 mt-5 xl:mt-10 hover:bg-primary hover:text-white hover:text-bold text-primary"
                    >
                      Get In Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center w-full lg:self-end lg:pt-32 xl:pt-0">
              <img
                className="w-[100%] h-[100%]  sm:w-[400px] sm:h-[400px]  lg:w-[100%] lg:h-[100%]"
                src={transform}
                alt="tranform image"
              />
            </div>
            <div className=" hidden xl:flex">
              <img
                className="absolute left-[49%] xl:left-[50%] translate-x-[-60%] top-[30%] xl:top-[20%]  "
                src={curlArrow}
                alt="curl arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
