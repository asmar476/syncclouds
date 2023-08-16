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

import { useInView } from "react-intersection-observer";
import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
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
        {inView ? (
          <div className=" flex items-center justify-center right-[2%] bottom-[5%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
            <img
              onClick={scrollToBottom}
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
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="scroll-img-2 cursor-pointer  fixed z-[100]"
              src={arrowUp}
              alt="arrow up"
              width={40}
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
