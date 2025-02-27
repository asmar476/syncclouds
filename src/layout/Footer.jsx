import logo from "../assets/SyncCloudsLogo/updated SyncClouds-logo white.svg";
import InnerPageHeading from "../common component/InnerPageHeading";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { socialMediaLinks } from "../constant/Data";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
const Footer = () => {
  const navigate = useNavigate();
  const handleTermsConditions = () => {
    navigate("/terms-conditions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleAboutUsClick = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const gaEventTracker = useAnalyticsEventTracker("Footer");
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #002680 58.76%, #1C67A6 106.96%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto w-[100%] text-white">
        <Row className=" p-10 sm:p-16" justify="center" gutter={[16, 16]}>
          <Col xs={24} md={12} lg={6} className="">
            <img className="sm:w-[258px] mb-5" src={logo} alt="small" />
            <p className="pr-16 text-[16px] font-[400]">
              SyncClouds is the only way for your business solution in digital
              marketing that allows businesses to accept process.
            </p>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <h2 className="font-[600] text-[18px] my-2">SERVICES</h2>
            <div className=" space-y-1 font-[400] text-[14px]">
              <p>Web App Development</p>
              <p>Mobile App Development</p>
              <p>UI/UX Designing</p>
              <p>Cyber Security</p>
              <p>Digital Marketing</p>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <h2 className="font-[600] text-[18px]  my-2">COMPANY</h2>
            <div className="space-y-1 font-[400] text-[14px] ">
              <p>
                <Link
                  to="/about"
                  onClick={() => {
                    gaEventTracker("About Us");
                    handleAboutUsClick();
                  }}
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  to={"/Contact"}
                  onClick={() => {
                    gaEventTracker("Contact Us");
                    handleAboutUsClick();
                  }}
                >
                  Contact Us
                </Link>
              </p>
              <p>Career</p>
              <p>Life at SyncClouds</p>
              <Link
                to={"/blog"}
                onClick={() => {
                  gaEventTracker("Blog");
                  handleAboutUsClick();
                }}
              >
                View and Blogs
              </Link>
              <br />
              <Link
                to={"/web-dev"}
                onClick={() => {
                  gaEventTracker("Web Developement");
                  handleAboutUsClick();
                }}
              >
                Web Developement
              </Link>
              {/* <p>View and Blogs</p> */}
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <h2 className="font-[600] text-[18px] my-2">OFFICE</h2>
            <div className=" ">
              {/* <img
            className="w-[30px] md:w-[55px]"
            src={locationIcon}
            width="55px"
          />{" "} */}
              {/* <img className='hidden sm:block' src={locationIcon} />{' '} */}

              <p className="text-sm sm:text-[14px] font-[500]">
                Office No. M-35,36. Mezzanine Floor, Gold Point Shoping Mall,
                Rawalpindi, Pakistan
              </p>
            </div>
            <br />
            <h2 className="font-semibold text-lg">Emails</h2>
            <div className="text-sm sm:text-[14px] font-[500]">
              <p>Contact Us at:</p>
              <a href="contact@syncclouds.com">contact@syncclouds.com</a>
            </div>
            <br />
            <div className="text-sm sm:text-[14px] font-[500]">
              <p>We are hiring:</p>
              <p>hr@syncclouds.com</p>
            </div>
          </Col>
        </Row>
        {/* +++++++++++++++++++++++++++++++++++++++++ web view +++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="hidden border-t-2 border-white mx-0 sm:mx-16 font-semibold text-[12px] md:text-base text-white   py-3 md:flex justify-between">
          <div className="flex items-center justify-between gap-16 lg:gap-32">
            <p
              className="cursor-pointer"
              onClick={() => {
                gaEventTracker("Term and Conditions");
                handleTermsConditions();
              }}
            >
              Terms & Conditions
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                handlePrivacyPolicyClick();
                gaEventTracker("Privacy Policy");
              }}
            >
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center justify-between lg:gap-24 ">
            <p className="">Follow Us On</p>
            <div className="flex">
              {socialMediaLinks.map((link, index) => (
                <a
                  onClick={() => {
                    gaEventTracker("Social Media");
                  }}
                  key={index}
                  href={link.url}
                  className="cursor-pointer ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img title={link.name} src={link.icon} alt={link.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* +++++++++++++++++++++++++++++++++++++++++ mobile view +++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="md:hidden border-t-2 font-semibold  border-white text-[12px] sm:text-[16px] text-white px-10  pt-3">
          <div className="flex items-center   justify-between">
            <p
              className="cursor-pointer"
              onClick={() => {
                handleTermsConditions();
                gaEventTracker("Terms & Conditions");
              }}
            >
              Terms & Conditions
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                handlePrivacyPolicyClick();
                gaEventTracker("Privacy Policy");
              }}
            >
              Privacy Policy
            </p>
          </div>
          <div className=" mt-5 pb-5 flex justify-between items-center">
            <p className="">Follow Us On</p>
            <div className="flex">
              {socialMediaLinks.map((link, index) => (
                <a
                  onClick={() => {
                    gaEventTracker("Social Media");
                  }}
                  key={index}
                  href={link.url}
                  className="cursor-pointer ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[16px] sm:w-[25px]"
                    src={link.icon}
                    alt={link.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
