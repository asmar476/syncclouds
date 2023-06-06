import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import aboutIllustration from "../assets/About illustration/Group.svg";
import HeroComponent from "../common component/HeroComponent";
import ExpandYourHorizon from "../pages-component/AboutPage/ExpandYourHorizon";
import InnovativeServices from "../pages-component/AboutPage/InnovativeServices";
import OurTeam from "../pages-component/AboutPage/OurTeam";
import ProjectProcedure from "../pages-component/AboutPage/ProjectProcedure";

const About = () => {
  return (
    <Layout>
      {/* / / / // /  hero section  /  / / // / /  */}
      <HeroComponent
        title1={"About"}
        title2={"Us"}
        description={
          "Are you embracing the power of digital transformation and beyond to stay competitive? We are at the forefront of Advanced technology and Software development services. Innovative development company providing full-fledged tech services across the globe, that help businesses streamline their processes and drive business growth."
        }
        buttonText={"Let's Talk"}
        Illustration={aboutIllustration}
      />
      {/* expand your digitsal horizon  */}
      <ExpandYourHorizon />
      {/* innvative services */}
      <InnovativeServices />
      {/* Our Team  */}
      <OurTeam />
      {/* project procedure */}
      <ProjectProcedure />
      {/* / / / / / / / get synced  / / / // /  / / */}
      <GetSynced />
      {/*  / // /  // /  contact from  / // / / / / / */}
      <ContactForm />
    </Layout>
  );
};

export default About;
