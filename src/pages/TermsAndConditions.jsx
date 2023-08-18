import React, { useRef, useState } from "react";
import image from "../assets/privacyPloicy/headerImage.png";
import Layout from "../layout/Layout";
import PrivacyHeading from "../common component/PrivacyHeading";

import {
  termsCondition1,
  termsCondition2,
} from "../constant/PrivacyAndTermsData";
import { useInView } from "react-intersection-observer";
import arrowUp from "../assets/icons/black_arrow-up.svg";
import arrowDown from "../assets/icons/black-arrow-down.svg";
import Header from "../layout/Header";
import { Helmet } from "react-helmet-async";
function TermsAndConditions() {
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
        <title>Terms & Conditions-Sync Clouds</title>
        <meta
          name="description"
          content="Understanding our partnership terms is essential. 
Explore Sync Clouds Terms and Conditions for transparent collaboration."
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
      <div className="bg-[#EDF2F7] pb-5 md:py-7">
        <div
          ref={heroRef}
          className="lg:flex justify-between items-center py-3 md:py-5 lg:py-0  px-3 bg-primary text-center font-[700] text-[] md:text-[35px] xl:text-[41.89px] text-white my-5"
        >
          <img className="hidden lg:block" src={image} alt="" />
          <h1>SyncClouds Terms And Conditions</h1>
          <img className="hidden lg:block" src={image} alt="" />
        </div>
        <div className="bg-white rounded mx-5 md:mx-24 border px-7 py-5 md:mb-0 md:py-10 border-gray-300">
          <div ref={ref}>
            <h3 className="border-b border-gray-300 italic text-sm md:text-[20px] mb-6 font-[500]">
              Last Updated: 25 July 2023
            </h3>
            <PrivacyHeading
              h="Terms and Conditions"
              p="The access, use, and browsing of this website 
          and its contents are all governed by the legally enforceable terms of this agreement
           between you and SyncClouds. Additionally, 
           it regulates how you utilize all of the written, numerical,
            and graphic content that we offer.
             Nothing in this text is meant to confer any rights
              or advantages upon any third party.
   We advise reading these terms 
          carefully before using this website.
           You affirm that you have read, 
           comprehended, and accepted these 
           conditions in its entirety and that 
           you will abide by all rules, regulations,
            and laws by using this website.
             You won't be allowed to use this website
              if you don't accept these terms.
               We imply that you agree to these terms and conditions using this Website.
                If you disagree with all of the terms and conditions listed on this page,
                 do not use SyncClouds further. "
            />
            <PrivacyHeading
              h="Disclaimer"
              p={`The terms "Client," "You," and "“Your" refer to the user who visits this Website and complies with the terms and conditions set forth by the Company and which are referenced in these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements. Our Company is referred to as "The Company," "Ourselves," "We," "Ours," and "Us." The terms "Party," "Parties," or "Us" include both the Client and us. The provision of our support to the Client in the most suitable manner for the explicit purpose of meeting the Client's needs with the condition of the Company's specified services, in line with and subject to applicable law, is referred to in all terms.`}
            />
            <PrivacyHeading
              h="Cookies"
              p="We use cookies in our operations. You consented to the usage of cookies by SyncClouds Company's Privacy Policy by accessing SyncClouds."
            />
            <PrivacyHeading
              h="License"
              p="The Website and its content are the property of SyncClouds or its licensors unless otherwise specified. They all have reserved intellectual property rights"
            />
            <div className="font-[400] text-[12px] md:text-[18px] text-body  leading-[20px] md:leading-[27px] mb-5">
              <p>You are not allowed to:</p>
              <ul>
                {termsCondition2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <PrivacyHeading
              h="User Content"
              p="By submitting content to SyncClouds, you provide the Company a non-exclusive, copyright, perpetual, irrevocable, and fully sublicensable license to use, distribute, publish, edit, adapt, publish, interpret, create derivative works from, and display the content anywhere in the world in any format.
          In addition, SyncClouds has the right to review any user-generated content and to delete any that it considers offensive or improper.
"
            />
            <PrivacyHeading
              h="Prohibition Activity"
              p="You acknowledge that you won't:
          "
            />
          </div>
          <div className="font-[400] text-[12px] md:text-[18px] text-body  leading-[20px] md:leading-[27px] mb-5">
            <ul>
              {termsCondition1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <PrivacyHeading
            h="Other Sites Links"
            p="Links to third-party websites or services that are not within the ownership or control of SyncClouds Company are not permitted on the Website. The SyncClouds Corporation has no control over and accepts no liability for third-party websites or services, including their content, privacy policies, or practices. Furthermore, you understand and acknowledge that SyncClouds Company is not responsible or liable, directly or indirectly, for any loss or damage that may result from the use of or reliance on any such content, products, or services available on or through any such websites or services"
          />{" "}
          <PrivacyHeading
            h="Other Sites Links"
            p="Links to third-party websites or services that are not within the ownership or control of SyncClouds Company are not permitted on the Website. The SyncClouds Corporation has no control over and accepts no liability for third-party websites or services, including their content, privacy policies, or practices. Furthermore, you understand and acknowledge that SyncClouds Company is not responsible or liable, directly or indirectly, for any loss or damage that may result from the use of or reliance on any such content, products, or services available on or through any such websites or services"
          />
          <PrivacyHeading
            h="Terms & Conditions Modifications"
            p="The SyncClouds Company retains the right to alter or amend these terms and conditions at any time and for any reason. Any adjustments will be considered OK as long as you use SyncClouds"
          />
          <PrivacyHeading
            h="Rule of Law"
            p="The laws of the country where SyncClouds Corporation is based shall govern and be applied in interpreting these terms and conditions."
          />
        </div>
      </div>
    </Layout>
  );
}
export default TermsAndConditions;
