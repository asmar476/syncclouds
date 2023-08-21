import React from "react";
import image from "../assets/privacyPloicy/headerImage.png";
import Layout from "../layout/Layout";
import PrivacyHeading from "../common component/PrivacyHeading";

import { Tooltip } from "antd";
import { privacy } from "../constant/PrivacyAndTermsData";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import { useRef, useState } from "react";
import Header from "../layout/Header";
import Halmet from "../common component/Halmet";
function PrivacyPolicy() {
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
      <Halmet
        title={"Privacy Policy-SyncClouds"}
        description={
          "Your privacy matters to us. Dive into our Privacy Policy at SyncClouds. Learn how we safeguard your information and ensure a secure digital environment."
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
      <div className="bg-[#EDF2F7] pb-5 md:py-7">
        <div
          ref={heroRef}
          className="lg:flex justify-between items-center py-3 md:py-5 lg:py-0  px-3 bg-primary text-center font-[700] text-[] md:text-[35px] xl:text-[41.89px] text-white my-5"
        >
          <img className="hidden lg:block" src={image} alt="" />
          <h1>SyncClouds Privacy Statement</h1>
          <img className="hidden lg:block" src={image} alt="" />
        </div>
        <div className="bg-white rounded mx-5 md:mx-24 border px-7 py-5 md:mb-0 md:py-10 border-gray-300">
          <div ref={ref}>
            <h3 className="border-b border-gray-300 italic text-sm md:text-[20px] mb-6 font-[500]">
              Last Updated: 25 July 2023
            </h3>
            <PrivacyHeading
              h="Introduction"
              p="SyncClouds is dedicated to offering services that adhere to privacy regulations. So that you are aware of how your personal information is handled and safeguarded, we work to make our Privacy Policy as simple, transparent, and understandable as possible.
            At SyncClouds, we take the privacy of our users very seriously. This Privacy Policy explains how we collect, use, and protect the information you provide through our services."
            />
            <PrivacyHeading
              h="Information We Collect"
              p="We may collect certain information from you when you use our services. This information may include the following:"
            />
            {privacy.map((item, index) => (
              <div key={index}>
                <h5 className="font-[600] text-[#171923] text-[12px] md:text-[18px]">
                  {item.heading}
                </h5>
                <p className="font-[400] text-[12px] md:text-[18px] text-body leading-[20px] md:leading-[27px] mb-5">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
          <PrivacyHeading
            h="How We Use Your Information"
            p="When you sign up for an account or contact us through one of our services, we may gather your name, email address, and other contact details."
          />
          <PrivacyHeading
            h="Data Retention"
            p="As long as it takes us to perform our services or as long as it takes the law, we shall keep your personal information on file. Please contact us at [contact email] if you would like us to erase your personal information."
          />
          <PrivacyHeading
            h="Security"
            p="We take appropriate precautions to guard your information against unauthorised access, disclosure, modification, or destruction. Unfortunately, no technique of electronic storage or transmission over the Internet is 100 percent secure. As a result, we are unable to ensure that your information is completely secure."
          />
          <PrivacyHeading
            h="Do we use cookies?"
            p="When you visit our website, Sync Clouds may collect cookies and other analytical codes on your computer, browser, or webpage to customize your experience, track usage trends, and provide, enhance, and secure our website.
Cookies are tiny text files that websites put on your computer or device when you visit them. This way, the website's content can be altered to reflect your preferences the next time you visit.
In addition, the information obtained via cookies may be linked to personal information that we store about you, even though cookies typically do not contain any information that personally identifies a person."
          />
          <PrivacyHeading
            h="Adaptations to this Privacy Policy"
            p="We might occasionally change our privacy statement. Any updates will be published on this page. If there are significant changes, we will give a more obvious notice (including, for certain services, email notification of Privacy Policy changes). You accept the updated Privacy Policy by using our services after any modifications have been made to it."
          />
          <PrivacyHeading
            h="Contact Us"
            p="If you have any queries or worries about our privacy Policy, please get in touch with us at inquiry@synclouds.com."
          />
        </div>
      </div>
    </Layout>
  );
}
export default PrivacyPolicy;

// import React from "react";
// import Layout from "../layout/Layout";
// import HeroComponent from "../common component/HeroComponent";
// import ContactForm from "../common component/ContactForm";
// import GetSynced from "../common component/GetSynced";
// import privacyIllustration from "../assets/privacyPloicy/privacyIllustration.svg";
// import InformationCollect from "../pages-component/PrivacyPolicy/InformationCollect";

// const PrivacyPolicy = () => {
//   return (
//     <Layout>
//       <div>
//         <HeroComponent
//           title2={"Privacy Policy"}
//           description={
//             "Synccloud is dedicated to offering services that adhere to privacy regulations. So that you are aware of how your personal information is handled and safeguarded, we work to make our Privacy Policy as simple, transparent, and understandable as possible."
//           }
//           description2={
//             " At Syncclouuds, we take the privacy of our users very seriously. This Privacy Policy explains how we collect, use, and protect the information you provide through our services."
//           }
//           buttonText={""}
//           Illustration={privacyIllustration}
//         />
//         {/* information we collect */}
//         <InformationCollect />
//         {/* get synced */}
//         <GetSynced />
//         {/* contact form */}
//         <ContactForm />
//       </div>
//       ;
//     </Layout>
//   );
// };

// export default PrivacyPolicy;
