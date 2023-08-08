import React from "react";
import Layout from "../layout/Layout";
import TechnologiesHero from "../component/TechnologiesComponent.jsx/TechnologiesHero";
import TechnologiesArea from "../component/IndustryComponent/TechnologiesArea";
function Technologies() {
  return (
    <div>
      <Layout>
        <TechnologiesHero />
        <TechnologiesArea />
      </Layout>
    </div>
  );
}

export default Technologies;
