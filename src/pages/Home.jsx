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
import { useRef, useState } from "react";
import Header from "../layout/Header";
import Halmet from "../common component/Halmet";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
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
  const gaEventTracker = useAnalyticsEventTracker("Home");
  return (
    <div className="">
      <Layout>
        <Halmet
          title={"SyncClouds: Software Development Company"}
          description={
            "Elevate your projects with top-tier software development services. Discover new horizons of digital transformation. Learn more and get started today!"
          }
        />
        {inView ? (
          <div className=" flex items-center justify-center -right-6 lg:right-[2%] bottom-[5%] fixed z-[100]   h-[90px]  w-[90px]  rounded-full">
            <img
              onClick={() => {
                scrollToBottom();
                gaEventTracker("Arrow Up");
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
        <div ref={ref}>
          {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
          <div ref={heroRef} className="home-hero">
            <Hero />
          </div>
          <OurClients />
          <OfferCard />
        </div>
        {/* <Portfolio /> */}
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
