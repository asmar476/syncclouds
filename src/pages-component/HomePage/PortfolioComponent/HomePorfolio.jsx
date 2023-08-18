import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomePorfolio({ category, arr, projName, projDesc, index }) {
  return (
    <div className="w-[327px] sm:w-[400px] 2xl:w-[500px] drop-shadow-lg bg-white pb-3 m-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        draggable={true}
        autoplay={{ delay: 1000 * index }}
      >
        {arr.map((img, ind) => (
          <SwiperSlide>
            <div key={ind}>
              <img src={img} alt="img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-1.5">
        <h1 className="text-[12px]">
          <span className="font-[600] text-[14px]">Service:</span> {category}
        </h1>
        <h1 className="text-[12px] ">
          <span className="font-[600] text-[14px]">Project Name:</span>{" "}
          {projName}
        </h1>{" "}
        <p className="text-body text-[12px]">
          {" "}
          <span className="text-black font-[600] text-[14px]">
            Description:
          </span>{" "}
          {projDesc}
        </p>
      </div>
    </div>
  );
}
export default HomePorfolio;
