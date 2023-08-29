import React, { useRef, useState } from "react";
import PortfolioImage from "../../assets/PortfolioPage/porfolioHero.svg";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ContactForm from "../../common component/ContactForm";
import MainSubHeading from "../../common component/MainSubHeading";
import vid from "../../assets/vid.mp4";
import {
  portfolioData,
  VidPortfolioData,
} from "../../constant/PortfolioPageData";
import chevronRight from "../../assets/icons/Vector.svg";
import { useInView } from "react-intersection-observer";
import arrowUp from "../../assets/icons/black_arrow-up.svg";
import arrowDown from "../../assets/icons/black-arrow-down.svg";
import Header from "../../layout/Header";
import PortfolioCard from "../../pages-component/HomePage/PortfolioComponent/PortfolioCard";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
function PortfolioHero() {
  const [isIntersectingHero, setIsIntersectingHero] = useState(true);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  const scrollToBottom = () => {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    const scrollPosition = bodyHeight - windowHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };
  const heroRef = useRef();
  const headerFunc = (entries, observer) => {
    setIsIntersectingHero(entries[0].isIntersecting);
  };
  const options = {
    root: null,
    threshold: 0,
  };
  const observer = new IntersectionObserver(headerFunc, options);

  heroRef?.current && observer.observe(heroRef?.current);
  const gaEventTracker = useAnalyticsEventTracker("Portfolio");
  return (
    <div>
      {inView ? (
        <div className=" flex items-center justify-center right-[2%] bottom-[5%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
          <img
            onClick={() => {
              scrollToBottom();
              gaEventTracker("Scroll Down");
            }}
            className="scroll-img cursor-pointer  fixed z-[100]"
            src={arrowDown}
            alt="arrow up"
            width={40}
          />
          <p className="scroll-text text-[12px] font-bold absolute -bottom-5  text-black">
            Scroll Down
          </p>
        </div>
      ) : (
        <div className=" flex items-center justify-center right-[2%] bottom-[0%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
          <p className=" scroll-text text-[12px] font-bold absolute top-0 text-black">
            Scroll Up
          </p>
          <img
            onClick={() => {
              gaEventTracker("Scroll Up");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="scroll-img-2 cursor-pointer  fixed z-[100]"
            src={arrowUp}
            alt="arrow up"
            width={40}
          />
        </div>
      )}
      {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
      <div className="flex flex-col space-y-12 justify-between items-center  sm:mt-20 pt-20">
        <div ref={ref}>
          <div ref={heroRef}>
            <img className="hidden sm:block w-[100%]" src={PortfolioImage} />
            <MainSubHeading text={"Port"} gradientText={"folio"} />
            <div className="flex flex-wrap items-center justify-center  px-1 gap-3 lg:gap-20">
              <button
                onClick={() => gaEventTracker("All")}
                className="hover:font-semibold px-7 text-[18px] font-semibold py-2 rounded-sm cursor-pointer border border-primary hover:shadow-lg bg-primary text-white"
              >
                All
              </button>
              <button
                onClick={() => gaEventTracker("Social Media Marketing")}
                className="hover:font-semibold px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
              >
                Social Media Marketing
              </button>
              <button
                onClick={() => gaEventTracker("Cyber Security")}
                className="hover:font-semibold px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
              >
                Cyber Security
              </button>
              <button
                onClick={() => gaEventTracker("Hire a Developer")}
                className="hover:font-semibold rounded-sm px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
              >
                Hire A Developer
              </button>
              <button
                onClick={() => gaEventTracker("Hire a Team")}
                className="hover:font-semibold px-4 py-2 py-rounded-sm cursor-pointer hover:shadow-lg border border-primary text-primary font-[500] text-[18px]"
              >
                Hire A Team
              </button>
            </div>
          </div>
        </div>
        {/* __________________________________________________________________________________________________ */}

        {/* <video controls width="640" height="360">
          <source src={vid} type="video/mp4" />
          <source src={otherFormatVid} type="video/webm" />
          Your browser does not support the video tag.
        </video> */}
        {/* __________________________________________________________________________________________________ */}
        {/* <div className="md:hidden"><CustomSelect /></div> */}
        <div className="max-w-[1440px] w-[100%] px-10">
          {/* {portfolioData?.map((data, index) => (
            <div
              key={index}
              className={`${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              } md:flex rounded-br-[100px] md:gap-10   mb-14`}
            >
              <div className="w-[100%] md:w-[50%]">
                <img
                  className="mt-3 mb-7 rounded-lg "
                  width={"100%"}
                  alt="portfoliocard"
                  src={data.imgPortfolio}
                />
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  draggable={true}
                  width={500}
                >
                  {data?.img?.map((img, index) => (
                    <SwiperSlide
                      key={index}
                      style={{ "& .Swiper__slide": { width: "0%" } }}
                    >
                      <img
                        className="mt-3 mb-7 rounded-lg "
                        width={"100%"}
                        alt="portfoliocard"
                        src={img}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[100%] md:w-[50%]">
                <div className="flex items-center ">
                  <img
                    className="h-[50px]"
                    src={data.icon}
                    alt="portfoliocard"
                  />
                  <h4 className="text-left font-[600] text-[20px]">
                    {data.title}
                  </h4>
                </div>
                <p>{data.description}</p>
              </div>
              <div className="flex mt-10 gap-5">
            <button className="font-[] text-[]">Read more</button>
            <img src={chevronRight} alt="" />
          </div>
            </div>
          ))} */}
          <PortfolioCard />
        </div>
        {/* <div>
          {VidPortfolioData.map((data, index) => (
            <div
              key={index}
              className={`mx-5 px-5 md:px-0 md:mx-0 md:flex items-center gap-20 md:items-start justify-center rounded-br-[100px]    ${
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
        </div> */}

        {/* <button
          onClick={() => {
            console.log("more case studies shown");
          }}
          className="cursor-pointer hover:drop-shadow-md border border-[#E2E8F0] rounded-md py-2 px-3 text-[14px] sm:text-[18px] text-[#2D3748] font-[600] flex items-center  gap-2"
        >
          Show More Case Studies <img src={arrowDown} />
        </button> */}
      </div>
      <ContactForm />
    </div>
  );
}

export default PortfolioHero;
