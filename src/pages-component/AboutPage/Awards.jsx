import TextBadgeHeading from "../../common component/TextBadgeHeading"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination, Scrollbar,Navigation } from "swiper"
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Awards = () => {
  return (
    <div className='container mx-auto px-10'>
    <div className='flex flex-col items-center justify-center  space-y-10'>
      <TextBadgeHeading badge={'AWARDS & HONORS'} headingPart1={'The awards won by our project.'}/>
      <p className='max-w-[900px] text-base lg:text-lg text-center'>Our clients describe us as a product team which creates amazing Web & Mobile App Development,
           by crafting top-notch user experience.</p>
    </div>

    <Swiper 
     modules={[Navigation, Pagination, Scrollbar,Autoplay]}
     spaceBetween={50}
     slidesPerView={5}
     loop={true}
     draggable={true}
     autoplay ={{delay: 2000}}
     breakpoints={{
      1236:{
        slidesPerView: 5,
      },
      1024:{
        slidesPerView: 4,
      },
      600:{
        slidesPerView: 3,
      },
      400:{
        slidesPerView: 2,
      },
      200:{
        slidesPerView: 1,
      }
     
    }}
    className='flex flex-col gap-10 md:flex-row justify-around items-center py-10'>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>1</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>2</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>3</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>4</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>5</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>6</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>7</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>8</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>8</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>9</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>10</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>11</SwiperSlide>
      <SwiperSlide className='h-[200px] w-[200px] bg-gray-300'>12</SwiperSlide>
    </Swiper>

    <div className='flex items-center justify-center pb-20'>
    <p className='max-w-[900px] text-base lg:text-lg text-center'>We Are Among The Top Developing,Designing And Digital Marketing Companies.</p>
    </div>

</div>
  )
}

export default Awards