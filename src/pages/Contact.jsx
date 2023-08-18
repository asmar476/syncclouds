import HeroComponent from "../common component/HeroComponent";
import Layout from "../layout/Layout";
import contactIllustration from "../assets/contact/Contact-Us-03.svg";
import ContactDetailForm from "../pages-component/Contact/ContactDetailForm";
import WhyChoseUs from "../pages-component/Contact/WhyChoseUs";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../layout/Header";

const Contact = () => {
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
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Sync Clouds -Software Development Company</title>
        <meta
          name="description"
          content="Have business questions? Reach out to us at 
contact@syncclouds.com for expert insights and tailored solutions."
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
      {!isIntersectingHero ? <Header fixed={true} /> : <Header />}
      <div ref={ref}>
        <div ref={heroRef}>
          <HeroComponent
            title1={"Alternatives For Custom Software "}
            title2={"That Modify Your Enterprise"}
            description={
              "With our proficient team, you can stop sailing through turbulence and start making an impact! Link up with Sync Clouds and begin laying the groundwork for your company right away."
            }
            Illustration={contactIllustration}
            buttonText={""}
          />
        </div>
      </div>
      <ContactDetailForm />
      <WhyChoseUs />
    </Layout>
  );
};
export default Contact;
