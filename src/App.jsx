import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BookMyCall from "./common component/BookMyCall";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Technologies from "./pages/Technologies";
import WebDevelopment from "./pages/WebDevelopment";

import { HelmetProvider } from "react-helmet-async";
import Halmet from "./common component/Halmet";
import ReactGA from "react-ga";
import { useEffect } from "react";
const TRACKING_ID = "G-BH639MYS1Q"; // OUR_TRACKING_ID
import TagManager from "react-gtm-module";
import Blog from "./pages/Blog";
const tagManagerArgs = {
  gtmId: "GTM-TK2SJZ3W",
};
TagManager.initialize(tagManagerArgs);
ReactGA.initialize(TRACKING_ID);
const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.dataLayer.push({
      event: "pageview",
    });
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Halmet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/web-dev" element={<WebDevelopment />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </HelmetProvider>
    </div>
  );
};
export default App;
