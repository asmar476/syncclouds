import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/icons/x.svg";
import { MenuOutlined } from "@ant-design/icons";
import SC_logo from "../assets/Images/Navbar/navlogo.svg";
import { useNavigate } from "react-router-dom";
import Calendalycomp from "../common component/CalendlyComp";
import whiteTimes from "../assets/white icons/whitetimes.jpg";
import whiteLogo from "../assets/SyncCloudsLogo/updated SyncClouds-logo white.svg";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
const Header = ({ fixed }) => {
  const navigate = useNavigate();
  const [arrow, setArrow] = useState(false);
  const [arrowCompany, setArrowCompany] = useState(false);
  const click = () => {
    setArrow(!arrow);
  };
  const [showServices, setShowServices] = useState(false);
  const [calendalyOpen, setcalendalyOpen] = useState(false);

  const closeCalendaly = () => {
    setcalendalyOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["About Us", "Company Profile", "Settings"];
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const items = [
    {
      key: "1",
      label: <p>About</p>,
    },
  ];
  const gaEventTracker = useAnalyticsEventTracker("Header");
  return (
    <>
      <div className="">
        {" "}
        <div
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          className="  bg-white flex  justify-center w-full"
        >
          {fixed ? (
            <div className="w-full fixed top-0 left-0 bg-white shadow-lg z-[1000]">
              <nav
                className={` flex z-[100] w-full   max-w-[1200px] xl:max-w-[1440px] mx-auto  justify-between items-center px-10   py-3 min-h-[8vh]`}
              >
                <div className="flex items-center">
                  <Link to="/">
                    <img
                      src={SC_logo}
                      alt="Logo"
                      className="h-[20px] lg:h-10  mr-2"
                    />
                  </Link>
                </div>
                <div>
                  <ul className=" text-[10px] text-primary font-[500] lg:text-[16px] hidden sm:flex items-center space-x-3 lg:space-x-5">
                    <li className="">
                      <Link to="/about">About Us</Link>
                    </li>{" "}
                    <li className="flex justify-center   items-center text-grey-600">
                      <Link
                        to={"/services"}
                        className=" flex items-center gap-1 hover:text-primaryColor "
                        onClick={() => {
                          click();
                          gaEventTracker("Services");
                        }}
                        onMouseEnter={() => {
                          setShowServices(true);
                        }}
                        onMouseLeave={() => {
                          setShowServices(false);
                        }}
                      >
                        <div>Services</div>{" "}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="">
                      <Link to="/technologies">Technologies</Link>
                    </li>
                    <li className="">
                      <Link to="/industries">Industry</Link>
                    </li>
                    <li className="flex justify-center   items-center text-grey-600">
                      <Link
                        to={"/about"}
                        className=" flex items-center gap-1 hover:text-primaryColor "
                        onClick={() => {
                          click();
                          gaEventTracker("About");
                        }}
                        onMouseEnter={() => {
                          setShowServices(true);
                        }}
                        onMouseLeave={() => {
                          setShowServices(false);
                        }}
                      ></Link>
                    </li>
                    <li className="">
                      <button
                        className="pulse bg-[#00315A] text-white px-3 py-2 rounded-[0.18rem]"
                        onClick={() => {
                          setcalendalyOpen(true);
                          gaEventTracker("Book My Call");
                        }}
                      >
                        Book My Call
                      </button>
                      <Calendalycomp
                        isOpen={calendalyOpen}
                        close={closeCalendaly}
                      />
                    </li>
                  </ul>

                  {/* =============================================== ~ MOBILE NAVBAR ~ ================================================ */}
                  <div className="sm:hidden">
                    {!isOpen && (
                      <MenuOutlined
                        className="text-[20px] mt-2 z-[1000]"
                        onClick={() => {
                          openNav();
                          gaEventTracker("Open Navbar");
                        }}
                      />
                    )}
                    <div
                      className={`shadow-lg h-screen overlayNav bg-opacity-5 ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      <div className="flex justify-between px-10">
                        <Link to="/">
                          <img
                            src={whiteLogo}
                            alt="Logo"
                            className="h-10 mt-3"
                          />
                        </Link>
                        <a
                          href="#!"
                          onClick={() => {
                            closeNav();
                            gaEventTracker("Close Navbar");
                          }}
                        >
                          <img
                            src={whiteTimes}
                            className="float-right mt-5  h-[20px] w-[20px]"
                          />
                        </a>
                      </div>
                      <div className=" text-primary space-y-7 font-[600] py-12 overlayNav-content">
                        <Link
                          onClick={() => {
                            gaEventTracker("About Us");
                          }}
                          className={`${
                            isOpen ? "link-ani" : ""
                          }   text-white cursor-pointer font-[700]`}
                          to="/about"
                        >
                          About Us
                        </Link>

                        <Link
                          onClick={() => {
                            gaEventTracker("Services");
                          }}
                          className={`${isOpen ? "link-ani-servce" : ""} `}
                          to="/services"
                        >
                          Services
                        </Link>

                        <Link
                          onClick={() => {
                            gaEventTracker("Portfolio");
                            setcalendalyOpen(true);
                            setIsOpen(false);
                          }}
                          className={`${isOpen ? "link-ani-protfolio" : ""} `}
                          to="/portfolio"
                        >
                          Portfolio
                        </Link>
                        <Link
                          onClick={() => {
                            gaEventTracker("Technologies");
                            setcalendalyOpen(true);
                            setIsOpen(false);
                          }}
                          className={`${isOpen ? "link-ani-tech" : ""} `}
                          to="/technologies"
                        >
                          Technologies
                        </Link>
                        <Link
                          onClick={() => {
                            gaEventTracker("Industries");
                            setcalendalyOpen(true);
                            setIsOpen(false);
                          }}
                          className={`${isOpen ? "link-ani-industry" : ""} `}
                          to="/industries"
                        >
                          Industry
                        </Link>
                        <div>
                          <button
                            className="pulse bg-white text-primary px-3 py-2 rounded-[0.18rem]"
                            onClick={() => {
                              gaEventTracker("Book My Call");
                              setcalendalyOpen(true);
                              setIsOpen(false);
                            }}
                          >
                            Book My Call
                          </button>
                          <Calendalycomp
                            isOpen={calendalyOpen}
                            close={closeCalendaly}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          ) : (
            <nav
              className={` flex z-[1000]  w-full  max-w-[1440px] mx-auto bg-white   justify-between items-center px-10   py-3 min-h-[8vh]`}
            >
              <div className="flex items-center">
                <Link to="/">
                  <img
                    src={SC_logo}
                    alt="Logo"
                    className="h-[20px] lg:h-10  mr-2"
                  />
                </Link>
              </div>

              <ul className=" text-[10px] text-primary font-[500] lg:text-[16px] hidden sm:flex items-center space-x-3 lg:space-x-5">
                <li className="">
                  <Link
                    to="/about"
                    onClick={() => {
                      click();
                      gaEventTracker("About Us");
                    }}
                  >
                    About Us
                  </Link>
                </li>{" "}
                <li className="flex justify-center   items-center text-grey-600">
                  <Link
                    to={"/services"}
                    className=" flex items-center gap-1 hover:text-primaryColor "
                    onClick={() => {
                      click();
                      gaEventTracker("Services");
                    }}
                    onMouseEnter={() => {
                      setShowServices(true);
                    }}
                    onMouseLeave={() => {
                      setShowServices(false);
                    }}
                  >
                    <div>Services</div>{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={() => {
                      click();
                      gaEventTracker("Portfolio");
                    }}
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={() => {
                      click();
                      gaEventTracker("Technologies");
                    }}
                    to="/technologies"
                  >
                    Technologies
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/industries"
                    onClick={() => {
                      click();
                      gaEventTracker("Industry");
                    }}
                  >
                    Industry
                  </Link>
                </li>
                <li className="flex justify-center   items-center text-grey-600">
                  <Link
                    to={"/about"}
                    className=" flex items-center gap-1 hover:text-primaryColor "
                    onClick={() => {
                      click();
                      gaEventTracker("About");
                    }}
                    onMouseEnter={() => {
                      setShowServices(true);
                    }}
                    onMouseLeave={() => {
                      setShowServices(false);
                    }}
                  >
                    {/* <div>Company</div>{" "} */}
                    {/* <div>
                      {arrow ? (
                        <img src={ChevronUp} />
                      ) : (
                        <img className="w-4 md:w-5 lg:w-6" src={chevronDown} />
                      )}
                    </div> */}
                  </Link>
                </li>
                <li className="">
                  <button
                    className="pulse bg-[#00315A] text-white px-3 py-2 rounded-[0.18rem]"
                    onClick={() => {
                      setcalendalyOpen(true);
                      gaEventTracker("Book My Call");
                    }}
                  >
                    Book My Call
                  </button>
                  <Calendalycomp
                    isOpen={calendalyOpen}
                    close={closeCalendaly}
                  />
                </li>
              </ul>
              {/* {showServices && (
            <div className="absolute top-14  left-0 w-[100%] z-[100]">
              <NavbarServicesDropDown />
            </div>
          )} */}
              {/* =============================================== ~ MOBILE NAVBAR ~ ================================================ */}
              <div className="sm:hidden">
                {!isOpen && (
                  <MenuOutlined
                    className="text-[20px] mt-2 z-[1000]"
                    onClick={() => {
                      openNav();
                      gaEventTracker("Open Navbar");
                    }}
                  />
                )}
                <div
                  className={`shadow-lg h-screen overlayNav z-[10] ${
                    isOpen ? "open" : ""
                  }`}
                >
                  <div className="flex justify-between px-10">
                    <Link to="/">
                      <img src={whiteLogo} alt="Logo" className="h-10 mt-3" />
                    </Link>
                    <a
                      href="#!"
                      onClick={() => {
                        closeNav();
                        gaEventTracker("Close Navbar");
                      }}
                    >
                      <img
                        src={whiteTimes}
                        className="float-right mt-5 h-[20px] w-[20px]"
                      />
                    </a>
                  </div>{" "}
                  <div className=" text-primary space-y-7 font-[600] py-12 overlayNav-content">
                    <Link
                      className={`${
                        isOpen ? "link-ani" : ""
                      }   text-white cursor-pointer font-[700]`}
                      to="/about"
                      onClick={() => {
                        click();
                        gaEventTracker("About Us");
                      }}
                    >
                      About Us
                    </Link>{" "}
                    <Link
                      className={`${isOpen ? "link-ani-servce" : ""} `}
                      to="/services"
                      onClick={() => {
                        click();
                        gaEventTracker("Services");
                      }}
                    >
                      Services
                    </Link>
                    <Link
                      className={`${isOpen ? "link-ani-protfolio" : ""} `}
                      to="/portfolio"
                      onClick={() => {
                        click();
                        gaEventTracker("Portfolio");
                      }}
                    >
                      Portfolio
                    </Link>
                    <Link
                      className={`${isOpen ? "link-ani-tech" : ""} `}
                      to="/technologies"
                      onClick={() => {
                        click();
                        gaEventTracker("Technologies");
                      }}
                    >
                      Technologies
                    </Link>
                    <Link
                      className={`${isOpen ? "link-ani-industry" : ""} `}
                      to="/industries"
                      onClick={() => {
                        click();
                        gaEventTracker("Industries");
                      }}
                    >
                      Industry
                    </Link>
                    <div>
                      <button
                        className="pulse bg-white text-primary px-3 py-2 rounded-[0.18rem]"
                        onClick={() => {
                          setcalendalyOpen(true);
                          gaEventTracker("Book My Call");
                          setIsOpen(false);
                        }}
                      >
                        Book My Call
                      </button>
                      <Calendalycomp
                        isOpen={calendalyOpen}
                        close={closeCalendaly}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
