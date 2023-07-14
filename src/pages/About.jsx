import Layout from "../layout/Layout";
import GetSynced from "../common component/GetSynced";
import ContactForm from "../common component/ContactForm";
import aboutIllustration from "../assets/About illustration/aboutIllustration.svg";
import HeroComponent from "../common component/HeroComponent";
import ExpandYourHorizon from "../pages-component/AboutPage/ExpandYourHorizon";
import InnovativeServices from "../pages-component/AboutPage/InnovativeServices";
import OurTeam from "../pages-component/AboutPage/OurTeam";
import ProjectProcedure from "../pages-component/AboutPage/ProjectProcedure";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* / / / // /  hero section  /  / / // / /  */}
      <div className="container bg-[#f6f7fa] mx-auto  px-10 py-10 md:py-32 md:mt-10">
        <div className="flex flex-col xl:gap-10 items-center justify-between space-y-10 lg:space-y-0 lg:flex-row">
          <div className="space-y-10 text-center  lg:text-left ">
            <h1 className="text-[50px] text-[#002680] font-[800] leading-[65px]">
              About Us
            </h1>
            <div className=" text-body font-500 leading-[27px] md:text-[18px] text-sm text-justify lg:text-left  max-w-[750px]">
              <p className="">
                SyncClouds is an industry-leading Digital Transformation and
                Engineering Firm offering end-to-end software development
                solutions to Enterprises, Digital Agencies, and Startups
                worldwide.
              </p>
              <br />
              <p>
                Sync clouds bring together a team of brilliant minds to support
                you in realizing your ambitions and delivering a superior
                digital experience. Get In Touch
              </p>
            </div>

            <Link to={"/contact"}>
              <button
                className="bg-[#00315A] mt-10 text-white
            px-3 py-2 rounded-[0.18rem]"
              >
                Get In Touch
              </button>
            </Link>
          </div>
          <img
            src={aboutIllustration}
            alt="Hero Illustration"
            className="max-w-[516px] max-h-[550px] w-[100%] h-[100%]"
          />
        </div>
        <ExpandYourHorizon />
      </div>
      {/* expand your digitsal horizon  */}
      {/* <ExpandYourHorizon /> */}
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
