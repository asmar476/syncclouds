import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import OurClients from "../common component/OurClients";
import SoftwareSolution from "../pages-component/Services/SoftwareSolution";
import ExprtIdeation from "../pages-component/Services/ExprtIdeation";
import WhySyncClouds from "../pages-component/Services/WhySyncClouds";
import BuildingVision from "../pages-component/Services/BuildingVision";
import WhatComesNext from "../pages-component/Services/WhatComesNext";
import EntireCatalog from "../pages-component/Services/EntireCatalog";
import ToolsAndTech from "../pages-component/Services/ToolsAndTech";
import ServicesHero from "../pages-component/Services/ServicesHero";
import TwoColFAQs from "../pages-component/Services/TwoColFAQs";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import { Helmet } from "react-helmet-async";
import Halmet from "../common component/Halmet";
const Services = () => {
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
    <Layout>
      <Halmet
        title={"Explore Our Services at SyncClouds"}
        description={
          "Dive into a spectrum of exceptional services at Sync Clouds. Explore expert solutions for optimal Impact--your gateway to tailored solutions. Explore more here!"
        }
      />
      {inView ? (
        <div className=" flex items-center justify-center -right-6 lg:right-[2%] bottom-[5%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
          <img
            onClick={scrollToBottom}
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
            }}
            className="scroll-img-2 cursor-pointer  fixed z-[100] lg:w-[40px]"
            src={arrowUp}
            alt="arrow up"
          />
        </div>
      )}
      {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
      <div ref={ref}>
        <div ref={heroRef}>
          <ServicesHero />
        </div>
        {/* Expert Ideation */}
        <ExprtIdeation />
        {/* Why syncClouds */}
        <WhySyncClouds />
        {/* tools and technologies */}
        {/* <ToolsAndTech /> */}
        {/* Building vision */}
        {/* <BuildingVision /> */}
      </div>
      {/* our client */}
      <OurClients />
      {/* WhatComesNext  */}
      <WhatComesNext />
      {/* <EntireCatalog /> */}
      <EntireCatalog />
      {/* FAQ Section */}
      {/* get synced */}
      <GetSynced />
      {/* contact form  */}
      <ContactForm />
      {/*/////////////////// Capabilities section //////////////////// */}
      {/* <ServicesCapibilities/> */}
    </Layout>
  );
};

export default Services;
