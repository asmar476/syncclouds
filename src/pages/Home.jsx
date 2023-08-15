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
    <div className="">
      <Layout>
        <Hero />
        <OurClients />
        <OfferCard />
        <Portfolio />
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
