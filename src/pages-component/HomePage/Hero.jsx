
import HeroComponent from "../../common component/HeroComponent"
import logo2 from '../../assets/dummy logos/logo2.png'
import logo5 from '../../assets/dummy logos/logo5.png'
import logo6 from '../../assets/dummy logos/logo6.png'
import logo7 from '../../assets/dummy logos/logo7.png'
import logo8 from '../../assets/dummy logos/logo8.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination, Scrollbar,Navigation } from "swiper"
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Hero = () => {
  return (
    <div className='container mx-auto px-10 py-32 '>

        <HeroComponent title1={'Innovation Beyond Digital'} title2={'Transformation'} description={"Are you embracing the power of digital transformation and beyond to stay competitive? We are at the forefront of Advanced technology and Software development services. Innovative development company providing full-fledged tech services across the globe, that help businesses streamline their processes and drive business growth."}
        buttonText={"Let's discuss you project"} Illustration={'heroIllutration'}/>

        <div className='flex justify-between py-10 mt-5'>
          <Swiper 
                  modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                  spaceBetween={50}
                  slidesPerView={5}
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
                  loop={true}
                  draggable={true}
                  autoplay ={{delay: 2000}}
                  
           
           >
            <SwiperSlide style={{'& .Swiper__slide':{width: 'calc(0%)'}}}>
              <div className=' bg-gray-200 p-2'><img src={logo8} alt="" /></div>
            </SwiperSlide>

            <SwiperSlide style={{'& .Swiper__slide':{width: 'calc(0%)'}}}>
              <div className=' bg-gray-200 p-2'><img src={logo8} alt="" /></div>
            </SwiperSlide>

            <SwiperSlide style={{'& .Swiper__slide':{width: 'calc(0%)'}}}>
              <div className=' bg-gray-200 p-2'><img src={logo8} alt="" /></div>
            </SwiperSlide>

            <SwiperSlide style={{'& .Swiper__slide':{width: 'calc(0%)'}}}>
              <div className=' bg-gray-200 p-2'><img src={logo8} alt="" /></div>
            </SwiperSlide>

            <SwiperSlide style={{'& .Swiper__slide':{width: 'calc(0%)'}}}>
              <div className=' bg-gray-200 p-2'><img src={logo8} alt="" /></div>
            </SwiperSlide>


            <SwiperSlide>
              <div className=' bg-gray-200 p-2'><img src={logo2} alt="" /></div> 
            </SwiperSlide>

            <SwiperSlide>
              <div className=' bg-gray-200 p-2'><img src={logo6} alt="" /></div> 
            </SwiperSlide>

            <SwiperSlide>
              <div className=' bg-gray-200 p-2'><img src={logo7} alt="" /></div> 
            </SwiperSlide>

            <SwiperSlide>
              <div className=' bg-gray-200 p-2'><img src={logo2} alt="" /></div> 
            </SwiperSlide>

            <SwiperSlide>
              <div className=' bg-gray-200 p-2'><img src={logo5} alt="" /></div>
            </SwiperSlide>
          </Swiper>
            
        </div>
    </div>
  )
}

export default Hero