import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import chevronRight from "../../../assets/icons/Vector.svg";
import { portfolioData } from "../../../constant/PortfolioPageData";
import { Link } from "react-router-dom";
const PortfolioCard = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      {portfolioData?.map((data, index) => (
        <div key={index} className="max-w-[550px] rounded-br-[100px]  mb-14">
          <div className="flex items-center ">
            <img
              className="h-[50px] mr-4"
              src={data.icon}
              alt="portfoliocard"
            />
            <h4 className="text-left font-[600] text-[20px]">{data.title}</h4>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            draggable={true}
            width={500}
            autoplay={{ delay: 2000 }}
          >
            {data?.img?.map((img, index) => (
              <div>
                <SwiperSlide key={index}>
                  <img
                    className="w-[90%] mt-3 mb-7 text-center rounded-lg "
                    alt="portfoliocard"
                    src={img}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
          <h1 className="font-[600] text-[22px] ">App name: {data.projName}</h1>
          <p className="my-3">Description: {data.description}</p>
          <Link to={data.link}>
            <button className="text-white bg-blue-600 p-2.5 text-[10px] font-semibold rounded-lg hover:shadow-lg">
              Available on Googleplay
            </button>
          </Link>

          {/* <div className="flex mt-10 gap-5">
            <button className="font-[] text-[]">Read more</button>
            <img src={chevronRight} alt="" />
          </div> */}
        </div>
      ))}
      {/* {cardData.map((data, index) => (
        <div
          key={index}
          className="relative bg-grayLight lg:h-[400px] overflow-hidden rounded-md"
          onMouseEnter={() => {
            setShowOverlay(true);
            setShowIndex(index);
          }}
          onMouseLeave={() => {
            setShowOverlay(false);
            setShowIndex("");
          }}
        >
          <img
            src={data.img}
            className={`w-[100%] h-[100%] ${
              showOverlay && showIndex === index
                ? "scale-125 transition-all ease-in duration-200"
                : "scale-100 transition-all ease-in  duration-200"
            }`}
          />
          {showOverlay && showIndex === index && (
            <div className="flex items-center justify-center absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000069]">
              <p className="absolute h-[100px] w-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg">
                {" "}
                Design {index + 1}
              </p>
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default PortfolioCard;
