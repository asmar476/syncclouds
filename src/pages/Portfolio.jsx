import React from "react";
import Layout from "../layout/Layout";
import PortfolioHero from "../component/PortfolioComponent/PortfolioHero";
import { Helmet } from "react-helmet-async";
function Portfolio() {
  return (
    <div>
      <Layout>
        <Helmet>
          <title>Our Achievements-Sync Clouds</title>
          <meta
            name="description"
            content="Discover Sync Clouds remarkable achievements. 
            Witness innovation, expertise, and impact converge in every project. Explore
            our journey!"
          />
        </Helmet>
        <PortfolioHero />
      </Layout>
    </div>
  );
}
export default Portfolio;
