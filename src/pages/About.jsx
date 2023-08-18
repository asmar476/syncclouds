import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import InnovativeServices from "../pages-component/AboutPage/InnovativeServices";
import OurTeam from "../pages-component/AboutPage/OurTeam";
import ProjectProcedure from "../pages-component/AboutPage/ProjectProcedure";
import AboutHero from "../pages-component/AboutPage/AboutHero";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import ExpandYourHorizon from "../pages-component/AboutPage/ExpandYourHorizon";

import OurTeamNew from "../pages-component/AboutPage/AboutExpandCard/OurTeamNew";

import { Helmet } from "react-helmet-async";

const About = () => {
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
  return (
    <Layout>
      <Helmet>
        <title>About Company-Sync Clouds</title>
        <meta
          name="description"
          content="Explore the heart of Sync Clouds: Pioneering 
excellence in software development services. Join our journey towards 
innovation. Discover more now!"
        />
      </Helmet>
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
            Scroll To Top
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
      {/* / / / // /  hero section  /  / / // / /  */}
      {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
      <div ref={ref}>
        <div ref={heroRef} className="about-hero">
          <AboutHero />
        </div>
        <ExpandYourHorizon />
        {/* / / / // /  InnovativeServices  /  / / // / /  */}
        <InnovativeServices />
      </div>
      {/* Our Team  */}
      <OurTeamNew />
      {/* project procedure */}
      <ProjectProcedure />
      {/* / / / / / / / get synced  / / / // /  / / */}
      <GetSynced />
      {/*  / // /  // /  contact from  / // / / / / / */}
      <ContactForm />
    </Layout>
  );
};

export default About;
