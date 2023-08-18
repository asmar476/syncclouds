import Layout from "../layout/Layout";
import Hero from "../pages-component/HomePage/Hero";
import OfferCard from "../pages-component/HomePage/OfferCard";
import Portfolio from "../pages-component/HomePage/Portfolio";
import OurClients from "../common component/OurClients";
import OurAim from "../pages-component/HomePage/OurAim";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import ToolsAndTechnologies from "../common component/ToolsAndTechnologies";
import HomeFaq from "../pages-component/HomePage/HomeFaq";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";

import Particales from "../component/ParticalesOverlay";

import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import Header from "../layout/Header";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const [isIntersectingHero, setIsIntersectingHero] = useState(true);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
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
  return (
    <div className="">
      <Layout>
        <Helmet>
          <title>Sync Clouds: Software Development Company</title>
          <meta
            name="description"
            content="Elevate your projects with top-tier software development services. Discover new horizons of digital transformation. Learn more and get started today!"
          />
        </Helmet>
        {inView ? (
          <div className=" flex items-center justify-center right-[2%] bottom-[5%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
            <img
              onClick={scrollToBottom}
              className="w-[25px] sm:w-[35px] scroll-img cursor-pointer  fixed z-[100]"
              src={arrowDown}
              alt="arrow up"
            />
            <p className="scroll-text text-[9px] font-bold absolute -bottom-3  text-black">
              Scroll to Bottom
            </p>
          </div>
        ) : (
          <div className=" flex items-center justify-center right-[2%] bottom-[0%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
            <p className=" hidden sm:block scroll-text text-[10px] font-bold absolute top-0 text-black">
              Scroll To Top
            </p>
            <img
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-[25px] md:w-[35px] scroll-img-2 cursor-pointer  fixed z-[100] bottom-[85px]"
              src={arrowUp}
              alt="arrow up"
            />
          </div>
        )}
        <div ref={ref}>
          {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
          <div ref={heroRef} className="home-hero">
            <Hero />
          </div>
          <OurClients />
          <OfferCard />
        </div>
        <Portfolio />
        <ToolsAndTechnologies />
        <HomeFaq />
        <OurAim />
        <GetSynced />
        <ContactForm />
      </Layout>
    </div>
  );
};

export default Home;
