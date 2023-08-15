import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import chevronDown from "../assets/icons/chevron-down1.svg";
import ChevronUp from "../assets/icons/chevron-up.svg";
import close from "../assets/icons/x.svg";
import { MenuOutlined } from "@ant-design/icons";
import SC_logo from "../assets/Images/Navbar/navlogo.svg";
import { useNavigate } from "react-router-dom";
import NavbarServicesDropDown from "../component/NavbarServicesDropDown";
import Calendalycomp from "../common component/CalendlyComp";
// import { AiOutlineDown,AiOutlineUp} from "react-icons/ai";
// import { AiOutlineUp } from "react-icons/ai";
// import MenuOutlined from "../assets/icons/menuIcon.svg";
const Header = () => {
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
      <div>
        {" "}
        <div
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          className="  bg-white flex  justify-center  "
        >
          <nav className="flex z-[100] fixed  bg-white  w-full max-w-[1440px] justify-between items-center px-9 lg:px-10 py-3 min-h-[8vh]">
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
                <MenuOutlined className="text-[20px] mt-2 " onClick={openNav} />
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
                    <Calendalycomp />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;

// import { BsEmojiLaughing, BsFillTelephoneFill } from "react-icons/bs";
// import { MdOutgoingMail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { AiOutlineDown } from "react-icons/ai";
// import { AiOutlineUp } from "react-icons/ai";
// import { FaPhone } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";
// // import FlyOutMenu from "../component/FlyOutMenu";
// import logo from "../assets/SyncClouds-logo.svg";
// // import logoSmall from "../assets/SyncCloudsLogo/Syncclouds logo text  64-64-01.svg";
// // import logoCheck from "../assets/SyncCloudsLogo";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaTimes } from "react-icons/fa";

// import { useSelector, useDispatch } from "react-redux";
// import { burgerSliceAction } from "../Store/BurgerMenu";
// // import ButtonDark from "../common component/ButtonDark";
// import Services from "../component/Services";
// import CompanyDropDown from "../component/CompanyDropDown";

// const Header = () => {
//   const state = useSelector((state) => state.burger.open);

//   const [showServices, setShowServices] = useState(false);
//   const dispatch = useDispatch();

//   const [arrow, setArrow] = useState(false);
//   const [arrowCompany, setArrowCompany] = useState(false);
//   const click = () => {
//     setArrow(!arrow);
//   };

//   const burgerClick = () => {
//     dispatch(burgerSliceAction.openBurger());
//   };

//   const companyRef = useRef();

//   useEffect(() => {
//     const handleComapnyOusideClick = (event) => {
//       if (companyRef.current && !companyRef.current.contains(event.target)) {
//         setArrowCompany(false);
//       }

//       // console.log("companyRef", !companyRef.current.contains(event.target));
//     };
//     document.addEventListener("click", handleComapnyOusideClick, true);
//     return () => {
//       document.removeEventListener("click", handleComapnyOusideClick, true);
//     };
//   }, [companyRef]);

//   return (
//     <div className="  w-full  shadow-xl">
//       <div className="container text-[#002680] relative mx-auto px-10 flex items-cennter justify-between  ">
//         <Link to={"/"} className="">
//           <img
//             src={logo}
//             alt="syncClouds logo"
//             className="w-[150px] md:min-w-[200px] lg:min-w-full sm:w-[100%]"
//           />
//         </Link>
//         <ul className="hidden lg:flex items-center gap-5 xl:gap-10 ">
//           <Link
//             to={"/services"}
//             className=" flex items-center gap-1 hover:text-primaryColor "
//             onClick={click}
//             onMouseEnter={() => {
//               setShowServices(true);
//             }}
//             onMouseLeave={() => {
//               setShowServices(false);
//             }}
//           >
//             <div>Services</div>{" "}
//             <div>{arrow ? <AiOutlineUp /> : <AiOutlineDown />}</div>
//           </Link>
//           <Link to={""} className="hover:text-primaryColor">
//             Protfolio
//           </Link>
//           <Link to={""} className="hover:text-primaryColor">
//             Technologies
//           </Link>
//           <Link to={""}>
//             <div className="flex gap-2 hover:text-primaryColor">
//               <p>Industry</p>
//             </div>{" "}
//           </Link>
//           <div
//             ref={companyRef}
//             to={""}
//             className="relative cursor-pointer flex items-center gap-1 hover:text-primaryColor"
//             onClick={() => {
//               setArrowCompany(!arrowCompany);
//             }}
//           >
//             <div>Company</div>{" "}
//             <div>{arrowCompany ? <AiOutlineUp /> : <AiOutlineDown />}</div>
//             {arrowCompany && (
//               <div className="absolute top-8 left-0 ">
//                 <CompanyDropDown />
//               </div>
//             )}
//           </div>
//           <Link to={"/contact"}>
//             {/* <div className="flex gap-2 bg-g px-[20px] py-1 rounded-3xl">
//               <p className="text-white">Book a call</p>
//             </div>{" "} */}
//             {/* <ButtonDark text={"Book my call"} /> */}
//             <button
//               className="bg-[#00315A] text-white
//             px-3 py-2 rounded-[0.18rem]"
//             >
//               Book my call
//             </button>
//           </Link>
//         </ul>
//         <div
//           className="lg:hidden flex items-center justify-center"
//           onClick={burgerClick}
//         >
//           {state ? (
//             <FaTimes className="text-secondryColor text-3xl" />
//           ) : (
//             <GiHamburgerMenu className="text-secondryColor text-3xl" />
//           )}
//         </div>

//         {showServices && (
//           <div className="absolute top-14 left-0 w-[100%] ">
//             <Services />
//           </div>
//         )}
//       </div>
//       {state && (
//         <ul className=" absolute right-5 top-[150px] sm:top-[120px] w-[250px] p-10 text-white flex flex-col rounded-md bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  items-center gap-10 shadow-xl">
//           <Link to={"/"} className="text-" onClick={burgerClick}>
//             Home
//           </Link>
//           <Link to={"/about"} onClick={burgerClick}>
//             About
//           </Link>
//           <Link
//             to={"/services"}
//             onClick={burgerClick}
//             className="flex items-center gap-1"
//           >
//             <div>Services</div>{" "}
//             <div>{arrow ? <AiOutlineDown /> : <AiOutlineUp />}</div>
//           </Link>
//           <Link to={"/Careers"} onClick={burgerClick}>
//             Careers
//           </Link>
//           <Link to={"/Blog"} onClick={burgerClick}>
//             Blog
//           </Link>
//           <Link to={"/Contact"} onClick={burgerClick}>
//             <div className="flex gap-2">
//               <p>Contact Us</p> <FaPhone className="text-2xl" />
//             </div>{" "}
//           </Link>

//           <Link to={"/Contact"} onClick={burgerClick}>
//             <div className="flex gap-2">
//               <p>Book my call</p>
//             </div>{" "}
//           </Link>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Header;
