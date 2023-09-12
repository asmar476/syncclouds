import React from "react";
import Layout from "../layout/Layout";
import ContactForm from "../common component/ContactForm";
import Header from "../layout/Header";
import Halmet from "../common component/Halmet";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import arrowUp from "../assets/icons/black_arrow-up.svg";

import arrowDown from "../assets/icons/black-arrow-down.svg";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
import Testimonials from "../pages-component/HomePage/Testimonials";
import TwoColFAQs from "../pages-component/Services/TwoColFAQs";
import WebDevHero from "../component/webDev/WebDevHero";
import WebDevTranformServices from "../component/webDev/WebDevTranformServices";
import WebAndMobile3 from "../component/webDev/WebAndMobile3";
import FindBestWebApp from "../component/webDev/FindBestWebApp";
import RobustWebApp from "../component/webDev/RobustWebApp";
import WebAppProficiency5 from "../component/webDev/WebAppProficiency5";
import FlawlessApp from "../component/webDev/FlawlessApp";
const WebDevelopment = () => {
  const [isIntersectingHero, setIsIntersectingHero] = useState(true);
  const { ref, inView, entry } = useInView({
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
  const gaEventTracker = useAnalyticsEventTracker("Web Development");
  return (
    <Layout>
      <Halmet
        title={"WebDevelopment Company-SyncClouds"}
        description={
          "Explore the heart of SyncClouds: Pioneering excellence in software development services. Join our journey towards innovation. Discover more now!"
        }
      />
      {inView ? (
        <div className=" flex items-center justify-center -right-6 lg:right-[2%] bottom-[5%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
          <img
            onClick={() => {
              scrollToBottom();
              gaEventTracker("Scroll Down");
            }}
            className="scroll-img cursor-pointer  fixed z-[100] lg:w-[40px]"
            src={arrowDown}
            alt="arrow up"
          />
          <p className="hidden lg:block scroll-text text-[12px] font-bold absolute bottom-5  text-black">
            Scroll Down
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center -right-6 lg:right-[2%] bottom-[9%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
          <p className="hidden lg:block scroll-text text-[12px] font-bold absolute top-0 text-black">
            Scroll To Top
          </p>
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              gaEventTracker("Arrow Up");
            }}
            className="scroll-img-2 cursor-pointer  fixed z-[100] lg:w-[40px]"
            src={arrowUp}
            alt="arrow up"
          />
        </div>
      )}
      {/* / / / // /  hero section  /  / / // / /  */}
      {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
      <div ref={ref}>
        <div ref={heroRef} className="about-hero">
          <WebDevHero />
        </div>
      </div>
      <WebDevTranformServices />
      <WebAndMobile3 />
      <FindBestWebApp />
      <WebAppProficiency5 />
      <RobustWebApp />
      <FlawlessApp />
      <TwoColFAQs />
      <Testimonials />
      <ContactForm />
    </Layout>
  );
};

export default WebDevelopment;
