import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cocaCola from "../assets/homeSliderImage/coca-cola-logo-svgrepo-com 1.svg";
import kia from "../assets/homeSliderImage/Kia_Motors-Logo.wine 1.svg";
import tesla from "../assets/homeSliderImage/Tesla,_Inc.-Logo.wine 1.svg";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
const OurClients = () => {
  return (
    <div className="container mx-auto px-10  ">
      <div className="flex flex-col items-center">
        <MainSubHeading text={"Our"} gradientText={"Clients"} ml={"ml-2"} />
        <BoldParagraph
          text={"We have been working with some Fortune 500+ clients"}
        />
      </div>
      <div className="flex justify-between md:py-10 md:mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          breakpoints={{
            1236: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            400: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          draggable={true}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={cocaCola}
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={kia}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={tesla}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={cocaCola}
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={kia}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={tesla}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={cocaCola}
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={kia}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>
          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={tesla}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>

          <SwiperSlide style={{ "& .Swiper__slide": { width: "calc(0%)" } }}>
            <img
              src={tesla}
              alt=""
              className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurClients;
