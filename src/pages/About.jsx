import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import InnovativeServices from "../pages-component/AboutPage/InnovativeServices";
import ProjectProcedure from "../pages-component/AboutPage/ProjectProcedure";
import AboutHero from "../pages-component/AboutPage/AboutHero";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import { useRef, useState } from "react";
import Header from "../layout/Header";
import ExpandYourHorizon from "../pages-component/AboutPage/ExpandYourHorizon";
import OurTeamNew from "../pages-component/AboutPage/AboutExpandCard/OurTeamNew";
import Halmet from "../common component/Halmet";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
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
  const gaEventTracker = useAnalyticsEventTracker("About");
  return (
    <Layout>
      <Halmet
        title={"About Company-SyncClouds"}
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
