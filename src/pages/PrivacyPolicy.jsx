import React from "react";
import Layout from "../layout/Layout";
import HeroComponent from "../common component/HeroComponent";
import ContactForm from "../common component/ContactForm";
import GetSynced from "../common component/GetSynced";
import privacyIllustration from "../assets/privacyPloicy/privacyIllustration.svg";
import InformationCollect from "../pages-component/PrivacyPolicy/InformationCollect";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div>
        <HeroComponent
          title2={"Privacy Policy"}
          description={
            "Synccloud is dedicated to offering services that adhere to privacy regulations. So that you are aware of how your personal information is handled and safeguarded, we work to make our Privacy Policy as simple, transparent, and understandable as possible."
          }
          description2={
            " At Syncclouuds, we take the privacy of our users very seriously. This Privacy Policy explains how we collect, use, and protect the information you provide through our services."
          }
          buttonText={""}
          Illustration={privacyIllustration}
        />
        {/* information we collect */}
        <InformationCollect />
        {/* get synced */}
        <GetSynced />
        {/* contact form */}
        <ContactForm />
      </div>
      ;
    </Layout>
  );
};

export default PrivacyPolicy;
