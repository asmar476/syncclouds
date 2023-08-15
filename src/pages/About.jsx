import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import InnovativeServices from "../pages-component/AboutPage/InnovativeServices";
import OurTeam from "../pages-component/AboutPage/OurTeam";
import ProjectProcedure from "../pages-component/AboutPage/ProjectProcedure";
import AboutHero from "../pages-component/AboutPage/AboutHero";
const About = () => {
  return (
    <Layout>
      {/* / / / // /  hero section  /  / / // / /  */}
      <AboutHero />
      {/* / / / // /  InnovativeServices  /  / / // / /  */}
      <InnovativeServices />
      {/* Our Team  */}
      {/* <OurTeam /> */}
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
