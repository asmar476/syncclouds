import ContactForm from "../common component/ContactForm";
import IndustriesHero from "../component/IndustryComponent/IndustriesHero";
import Layout from "../layout/Layout";
import React from "react";
function Industries() {
  return (
    <div>
      <Layout>
        <IndustriesHero />
        <ContactForm />
      </Layout>
    </div>
  );
}

export default Industries;
