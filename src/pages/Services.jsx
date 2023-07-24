import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import OurClients from "../common component/OurClients";
import SoftwareSolution from "../pages-component/Services/SoftwareSolution";
import ExprtIdeation from "../pages-component/Services/ExprtIdeation";
import WhySyncClouds from "../pages-component/Services/WhySyncClouds";
import BuildingVision from "../pages-component/Services/BuildingVision";
import WhatComesNext from "../pages-component/Services/WhatComesNext";
import EntireCatalog from "../pages-component/Services/EntireCatalog";
import ToolsAndTech from "../pages-component/Services/ToolsAndTech";
import ServicesHero from "../pages-component/Services/ServicesHero";
import TwoColFAQs from "../pages-component/Services/TwoColFAQs";
const Services = () => {
  return (
    <Layout>
      <ServicesHero />
      {/* software solution */}
      <SoftwareSolution />
      {/* Expert Ideation */}
      <ExprtIdeation />
      {/* Why syncClouds */}
      <WhySyncClouds />
      {/* tools and technologies */}
      <ToolsAndTech />
      {/* Building vision */}
      <BuildingVision />
      {/* our client */}
      <OurClients />
      {/* WhatComesNext  */}
      <WhatComesNext />
      {/* <EntireCatalog /> */}
      <EntireCatalog />
      {/* FAQ Section */}
      <TwoColFAQs />
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
