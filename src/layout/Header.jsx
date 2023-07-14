import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../assets/icons/chevron-down.svg";
import close from "../assets/icons/x.svg";
// import MenuOutlined from "../assets/icons/menuIcon.svg";
import { MenuOutlined } from "@ant-design/icons";
import SC_logo from "../assets/Images/Navbar/navlogo.svg";
import { useNavigate } from "react-router-dom";
import ButtonDark from "../common component/ButtonDark";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/book-a-call");
  };
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* <div className='mb-2'> </div> */}
      <nav
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
        className="flex justify-between items-center px-9 md:px-20 mb-4 py-3"
      >
        <div className="flex items-center">
          <Link to="/">
            <img src={SC_logo} alt="Logo" className="h-[20px] lg:h-10  mr-2" />
          </Link>
        </div>

        <div>
          <ul className=" text-[10px] text-primary font-[500] lg:text-[16px] hidden sm:flex items-center space-x-3 lg:space-x-7">
            <li className="flex justify-center   items-center text-grey-600">
              <a href="/services">Services&nbsp;</a>
              <img className=" mr-2" src={Dropdown} />
            </li>
            <li className="">
              <a href="#porfolio">Portfolio</a>
            </li>{" "}
            <li className="">
              <a href="#technologies">Technologies</a>
            </li>
            <li className="">
              <a href="/contact">Industry</a>
            </li>
            <li className="flex justify-center  items-center">
              <a href="/about">Company&nbsp;</a>
              <img className="" src={Dropdown} />
            </li>
            <li className="">
              <Link to={"/contact"}>
                <button className="pulse bg-[#00315A] text-white px-3 py-2 rounded-[0.18rem]">
                  Book my call
                </button>
              </Link>
            </li>
          </ul>

          {/* =============================================== ~ MOBILE NAVBAR ~ ================================================ */}
          <div className="sm:hidden">
            <MenuOutlined className="text-[20px] mt-2 " onClick={openNav} />
            <div
              className={`shadow-lg h-screen overlayNav ${
                isOpen ? "open" : ""
              }`}
            >
              <div className="flex justify-between px-10">
                <img src={SC_logo} alt="Logo" className="h-5 md:h-20 mt-5" />
                <a href="#!" onClick={closeNav}>
                  <img src={close} className="float-right mt-5" />
                </a>
              </div>{" "}
              <div className="py-12 overlayNav-content">
                <div className="flex justify-center items-center mb-7">
                  {" "}
                  <a href="/services">Services </a>&nbsp;&nbsp;&nbsp;
                  <img src={Dropdown} />{" "}
                </div>
                <a className="mb-7" href="#porfolio">
                  Portfolio
                </a>
                <a href="#technologies" className="mb-7">
                  Technologies
                </a>
                <a className="mb-7" href="#">
                  Industry
                </a>
                <div className="flex justify-center mb-7">
                  {" "}
                  <a href="/about">Company </a> &nbsp;&nbsp;&nbsp;
                  <img src={Dropdown} />{" "}
                </div>
                <Link to="/contact-us">
                  <button className="pulse bg-[#273C7F] text-white rounded-full py-1 px-4">
                    Book a Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
