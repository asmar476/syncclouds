import Layout from "../layout/Layout";
import servicesIllustration from "../assets/Services illustration/servicesIllustration.svg";
import HeroComponent from "../common component/HeroComponent";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import FaqSection from "../common component/FaqSection";
import OurClients from "../common component/OurClients";
import SoftwareSolution from "../pages-component/Services/SoftwareSolution";
import ExprtIdeation from "../pages-component/Services/ExprtIdeation";
import WhySyncClouds from "../pages-component/Services/WhySyncClouds";
import ToolsAndTechnologies from "../common component/ToolsAndTechnologies";
import BuildingVision from "../pages-component/Services/BuildingVision";
import WhatComesNext from "../pages-component/Services/WhatComesNext";
import EntireCatalog from "../pages-component/Services/EntireCatalog";

const Services = () => {
  return (
    <Layout>
      <div className="pb-20">
        {/*  Hero component */}
        <HeroComponent
          title1={"Elevate Your Business with "}
          title2={"Premium Software Services - Unleash Your"}
          title3={" Efficiency and Productivity"}
          description={
            "At Sync Clouds, we transform your business with high-end software solutions that simplify complex processes and enhance efficiency. With our expert guidance and support, you can harness the full potential of software solutions to achieve your business goals and stay ahead of the competition."
          }
          buttonText={"Let’s discuss"}
          Illustration={servicesIllustration}
        />
      </div>
      {/* software solution */}
      <SoftwareSolution />
      {/* Expert Ideation */}
      <ExprtIdeation />
      {/* Why syncClouds */}
      <WhySyncClouds />
      {/* tools and texchnologies */}
      <ToolsAndTechnologies
        text={"Tools & Technologies Our "}
        gradientText={"Software Developers Use"}
        description={
          "With extensive knowledge in every field required for dependable software development, Sync Clouds has developed into a competitor on a global scale in the field of software engineering."
        }
      />
      {/* Building vision */}
      <BuildingVision />
      {/* our client */}
      <OurClients />
      {/* WhatComesNext  */}
      <WhatComesNext />
      {/* <EntireCatalog /> */}
      <EntireCatalog />
      {/* FAQ Section */}
      <FaqSection />
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
