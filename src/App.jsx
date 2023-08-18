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
export const maintenancePage = () => {
  return <h1>Under Maintenance</h1>;
};
const App = () => {
  return (
    <div>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />\
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/web_dev" element={<WebDevelopment />} />
        </Routes>
      </HelmetProvider>
    </div>
  );
};
export default App;
