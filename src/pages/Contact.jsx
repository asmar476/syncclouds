import HeroComponent from "../common component/HeroComponent";
import Layout from "../layout/Layout";
import contactIllustration from "../assets/contact/Contact-Us-03.svg";
import ContactDetailForm from "../pages-component/Contact/ContactDetailForm";
import WhyChoseUs from "../pages-component/Contact/WhyChoseUs";
import ContactForm from "../common component/ContactForm";
const Contact = () => {
  return (
    <Layout>
      <HeroComponent
        title1={"Alternatives For Custom Software "}
        title2={"That Modify Your Enterprise"}
        description={
          "With our proficient team, you can stop sailing through turbulence and start making an impact! Link up with Sync Clouds and begin laying the groundwork for your company right away."
        }
        Illustration={contactIllustration}
        buttonText={""}
      />
      <ContactDetailForm />
      <WhyChoseUs />
    </Layout>
  );
};
export default Contact;
