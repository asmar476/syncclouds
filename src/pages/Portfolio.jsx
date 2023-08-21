import React from "react";
import Layout from "../layout/Layout";
import PortfolioHero from "../component/PortfolioComponent/PortfolioHero";
import { Helmet } from "react-helmet-async";
import Halmet from "../common component/Halmet";
function Portfolio() {
  return (
    <div>
      <Layout>
        <Halmet
          title={"Our Achievements-SyncClouds"}
          description={
            "Discover SyncClouds remarkable achievements. Witness innovation, expertise, and impact converge in every project. Explore our journey!"
          }
        />
        <PortfolioHero />
      </Layout>
    </div>
  );
}
export default Portfolio;
