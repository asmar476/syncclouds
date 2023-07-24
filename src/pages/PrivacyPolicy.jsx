import React from "react";
import image from "../assets/privacyPloicy/headerImage.png";
import Layout from "../layout/Layout";
import PrivacyHeading from "../common component/PrivacyHeading";
import arrowUp from "../assets/icons/arrow-up-circle.svg";
import { Tooltip } from "antd";
function PrivacyPolicy() {
  return (
    <Layout>
      <div className="bg-[#EDF2F7] py-7">
        <div className=" flex items-center justify-center right-[1%] top-[70%] fixed z-[100] bg-gray-300  h-[50px]  w-[50px]  rounded-full">
          <Tooltip title="Scroll to Top">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer  fixed z-[100]"
              src={arrowUp}
              alt="arrow up"
              width={40}
            />
          </Tooltip>
        </div>{" "}
        <div className="lg:flex justify-between items-center py-10 lg:py-0 px-3 bg-primary text-center font-[700] text-[] md:text-[35px] xl:text-[41.89px] text-white my-5">
          <img className="hidden lg:block" src={image} alt="" />
          <h1>SyncClouds Privacy Statement</h1>
          <img className="hidden lg:block" src={image} alt="" />
        </div>
        <div className="bg-white rounded mx-24 border px-7 py-10 border-gray-300">
          <h3 className="border-b border-gray-300 italic text-[18px] mb-6 font-[500]">
            Last Updated: 6 July 2023
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
          <h5 className="font-[500] text-[#171923] text-[18px]">
            Personal Information
          </h5>
          <p className="font-[400] text-[18px] text-body leading-[27px] mb-[27px]">
            When you sign up for an account or contact us through one of our
            services, we may gather your name, email address, and other contact
            details.
          </p>
          <h5 className="font-[500] text-[#171923] text-[18px]">
            Usage Information
          </h5>
          <p className="font-[400] text-[18px] text-body leading-[27px] mb-[27px]">
            We may keep track of the pages you view, the features you use, and
            the activities you do when using our services
          </p>
          <h5 className="font-[500] text-[#171923] text-[18px]">
            Device Information
          </h5>
          <p className="font-[400] text-[18px] text-body leading-[27px] mb-[27px]">
            WWe may compile data about the type of device, operating system, and
            browser that you use to access our services
          </p>
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
