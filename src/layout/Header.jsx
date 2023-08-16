import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/icons/x.svg";
import { MenuOutlined } from "@ant-design/icons";
import SC_logo from "../assets/Images/Navbar/navlogo.svg";
import { useNavigate } from "react-router-dom";
import Calendalycomp from "../common component/CalendlyComp";

const Header = ({ fixed }) => {
  const navigate = useNavigate();
  const bookCall = () => {
    navigate("/book-call");
  };
  const [arrow, setArrow] = useState(false);
  const [arrowCompany, setArrowCompany] = useState(false);
  const click = () => {
    setArrow(!arrow);
  };
  const [showServices, setShowServices] = useState(false);
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
  return (
    <>
      <div className="">
        {" "}
        <div
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          className="  bg-white flex  justify-center w-full"
        >
          {fixed ? (
            <div className="w-full fixed top-0 left-0 bg-gray-100 shadow-lg z-[1000]">
              <nav
                className={` flex z-[100]  w-full  max-w-[1440px] mx-auto    justify-between items-center px-10   py-3 min-h-[8vh]`}
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
                        onClick={click}
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
                        onClick={click}
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
                      <Calendalycomp />
                    </li>
                  </ul>
                  {/* {showServices && (
            <div className="absolute top-14  left-0 w-[100%] z-[100]">
              <NavbarServicesDropDown />
            </div>
          )} */}
                  {/* =============================================== ~ MOBILE NAVBAR ~ ================================================ */}
                  <div className="sm:hidden">
                    <MenuOutlined
                      className="text-[20px] mt-2 "
                      onClick={openNav}
                    />
                    <div
                      className={`shadow-lg h-screen overlayNav ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      <div className="flex justify-between px-10">
                        <Link to="/">
                          <img
                            src={SC_logo}
                            alt="Logo"
                            className="h-5 md:h-20 mt-5"
                          />
                        </Link>
                        <a href="#!" onClick={closeNav}>
                          <img src={close} className="float-right mt-5" />
                        </a>
                      </div>
                      <div className=" text-primary space-y-7 font-[600] py-12 overlayNav-content">
                        <Link
                          className=" cursor-pointer font-[700]"
                          to="/about"
                        >
                          About Us
                        </Link>{" "}
                        <div className="flex justify-center items-center">
                          <Link to="/services">
                            Services&nbsp;&nbsp;&nbsp;
                            {/* <img src={chevronDown} />{" "} */}
                          </Link>
                        </div>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/technologies">Technologies</Link>
                        <Link to="/industries">Industry</Link>
                        <Calendalycomp />
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
              <div>
                <ul className=" text-[10px] text-primary font-[500] lg:text-[16px] hidden sm:flex items-center space-x-3 lg:space-x-5">
                  <li className="">
                    <Link to="/about">About Us</Link>
                  </li>{" "}
                  <li className="flex justify-center   items-center text-grey-600">
                    <Link
                      to={"/services"}
                      className=" flex items-center gap-1 hover:text-primaryColor "
                      onClick={click}
                      onMouseEnter={() => {
                        setShowServices(true);
                      }}
                      onMouseLeave={() => {
                        setShowServices(false);
                      }}
                    >
                      <div>Services</div>{" "}
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
                      onClick={click}
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
                    <Calendalycomp />
                  </li>
                </ul>
                {/* {showServices && (
            <div className="absolute top-14  left-0 w-[100%] z-[100]">
              <NavbarServicesDropDown />
            </div>
          )} */}
                {/* =============================================== ~ MOBILE NAVBAR ~ ================================================ */}
                <div className="sm:hidden">
                  <MenuOutlined
                    className="text-[20px] mt-2 "
                    onClick={openNav}
                  />
                  <div
                    className={`shadow-lg h-screen overlayNav ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    <div className="flex justify-between px-10">
                      <Link to="/">
                        <img
                          src={SC_logo}
                          alt="Logo"
                          className="h-5 md:h-20 mt-5"
                        />
                      </Link>
                      <a href="#!" onClick={closeNav}>
                        <img src={close} className="float-right mt-5" />
                      </a>
                    </div>{" "}
                    <div className=" text-primary space-y-7 font-[600] py-12 overlayNav-content">
                      <Link className=" cursor-pointer font-[700]" to="/about">
                        About Us
                      </Link>{" "}
                      <div className="flex justify-center items-center">
                        <Link to="/services">
                          Services&nbsp;&nbsp;&nbsp;
                          {/* <img src={chevronDown} />{" "} */}
                        </Link>
                      </div>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/technologies">Technologies</Link>
                      <Link to="/industries">Industry</Link>
                      {/* <div className="flex justify-center mb-7">
                      {" "}
                      <a href="/about">Company </a> &nbsp;&nbsp;&nbsp;
                      <img src={chevronDown} />{" "}
                    </div> */}
                    <Calendalycomp buttonText="Book My Call" />
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
