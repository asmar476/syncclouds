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
const PortfolioCard = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 mt-10">
      {portfolioData?.map((data, index) => (
        <div key={index} className="max-w-[607px] rounded-br-[100px]  mb-14">
          <div className="flex items-center ">
            <img
              className="h-[50px] mx-4"
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
          <p>{data.description}</p>
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
