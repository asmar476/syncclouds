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
      <Hero />
      <OurClients />
      <OfferCard />
      <Portfolio />
      <ToolsAndTechnologies
        text={"Techno"}
        gradientText={"logies"}
        description={"We Love using latest tech to our advantage."}
      />
      <HomeFaq />
      <div className="relative">
        <OurAim />
      </div>
      <GetSynced />
      <ContactForm />
    </Layout>
  );
};

export default Home;
