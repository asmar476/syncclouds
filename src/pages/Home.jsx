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
const Home = () => {
  return (
    <Layout>
      {/* ////////////////// hero content //////////////////// */}
      <Hero />
      {/* our client */}
      <OurClients />
      {/* //////////////// offer section ///////////////////////////////////////// */}
      <OfferCard />
      {/* ////////////////////////  get in touch section ////////////////// */}
      {/* <GetInTouch /> */}
      {/* Portfolio */}
      <Portfolio />
      {/* technologies */}
      <ToolsAndTechnologies
        text={"Techno"}
        gradientText={"logies"}
        description={"We Love using latest tech to our advantage."}
      />
      {/* faq  */}
      <HomeFaq />
      {/* our aim */}
      <div className="relative">
        <OurAim />
      </div>
      {/* testimonials */}
      {/* <Testimonials /> */}
      {/* Get Synced */}
      <GetSynced />
      {/* contact form */}
      <ContactForm />
    </Layout>
  );
};

export default Home;
