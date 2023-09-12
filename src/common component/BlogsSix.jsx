import React from "react";
import Card from "./Card";
import { blogdatasix } from "../constant/BlogsData";
import ReadMoreArticles from "../component/blog/ReadMoreArticles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const BlogsSix = ({ pagetitle, pageSubTitle }) => {
  return (
    <div className="max-w-[1200px] xl:max-w-[1400px]  mx-auto px-10 mt-16">
      <div className="  flex flex-col justify-center items-center">
        <h1 className="text-primary font-[700] text-[20px] md:text-[35px] lg:text-[41px] ">
          {pagetitle}
        </h1>
        <p className="text-center text-body font-[500] text-[16px] leading-[24px] lg:max-w-[800px] mt-5">
          {pageSubTitle}
        </p>
        {/* ==================================== `card web view` ============================== */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 ">
          {blogdatasix.map((card, index) => (
            <div key={index} className="md:col-span-1">
              <Card
                author={card.authorName}
                date={card.date}
                title={card.title}
                content={card.content}
                pText={card.p}
              />
            </div>
          ))}
        </div>
        {/* ==================================== `card mob view slider` ============================== */}
        <div className="lg:hidden md:py-10 md:mt-5 perspective-1000 h-[400px] w-[350px] lg:w-[450px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={1}
            loop={true}
            draggable={true}
            autoplay={{ delay: 1000 }}
          >
            {blogdatasix.map((card, index) => (
              <SwiperSlide
                key={index}
                style={{ "& .Swiper__slide": { width: "0%" } }}
              >
                <Card
                  author={card.authorName}
                  date={card.date}
                  title={card.title}
                  content={card.content}
                  pText={card.p}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ReadMoreArticles />
      </div>
    </div>
  );
};

export default BlogsSix;
