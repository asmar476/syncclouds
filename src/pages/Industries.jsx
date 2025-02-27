import ContactForm from "../common component/ContactForm";
import IndustriesHero from "../component/IndustryComponent/IndustriesHero";
import Layout from "../layout/Layout";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import Header from "../layout/Header";
import Halmet from "../common component/Halmet";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
function Industries() {
  const [isIntersectingHero, setIsIntersectingHero] = useState(true);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
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
  const gaEventTracker = useAnalyticsEventTracker("Industries");
  return (
    <div>
      <Layout>
        <Halmet
          title={"Transforming Diverse Industries with Expert Solutions"}
          description={
            "Explore how we tailor technology for various sectors. Your journey to industry-specific excellence begins with SyncClouds"
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
        {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
        <div ref={ref}>
          <div ref={heroRef}>
            <IndustriesHero />
          </div>
        </div>
        <ContactForm />
      </Layout>
    </div>
  );
}

export default Industries;
