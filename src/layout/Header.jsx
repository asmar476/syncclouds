import { BsEmojiLaughing, BsFillTelephoneFill } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
// import FlyOutMenu from "../component/FlyOutMenu";
import logo from "../assets/SyncClouds-logo.svg";
// import logoSmall from "../assets/SyncCloudsLogo/Syncclouds logo text  64-64-01.svg";
// import logoCheck from "../assets/SyncCloudsLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { burgerSliceAction } from "../Store/BurgerMenu";
import ButtonDark from "../common component/ButtonDark";
import Services from "../component/Services";
import CompanyDropDown from "../component/CompanyDropDown";

const Header = () => {
  const state = useSelector((state) => state.burger.open);

  const [showServices, setShowServices] = useState(false);
  const dispatch = useDispatch();

  const [arrow, setArrow] = useState(false);
  const [arrowCompany, setArrowCompany] = useState(false);
  const click = () => {
    setArrow(!arrow);
  };

  const burgerClick = () => {
    dispatch(burgerSliceAction.openBurger());
  };

  const companyRef = useRef();

  useEffect(() => {
    const handleComapnyOusideClick = (event) => {
      if (companyRef.current && !companyRef.current.contains(event.target)) {
        setArrowCompany(false);
      }

      // console.log("companyRef", !companyRef.current.contains(event.target));
    };
    document.addEventListener("click", handleComapnyOusideClick, true);
    return () => {
      document.removeEventListener("click", handleComapnyOusideClick, true);
    };
  }, [companyRef]);

  return (
    <div className="  w-full  shadow-xl">
      <div className="container relative mx-auto px-10 flex items-cennter justify-between  ">
        <Link to={"/"} className="">
          <img
            src={logo}
            alt="syncClouds logo"
            className="w-[150px] md:min-w-[200px] lg:min-w-full sm:w-[100%]"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-5 xl:gap-10 ">
          <Link
            to={"/Services"}
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
            <div>{arrow ? <AiOutlineUp /> : <AiOutlineDown />}</div>
          </Link>
          <Link to={""} className="hover:text-primaryColor">
            Protfolio
          </Link>
          <Link to={""} className="hover:text-primaryColor">
            Technologies
          </Link>
          <Link to={""}>
            <div className="flex gap-2 hover:text-primaryColor">
              <p>Industry</p>
            </div>{" "}
          </Link>
          <div
            ref={companyRef}
            to={""}
            className="relative cursor-pointer flex items-center gap-1 hover:text-primaryColor"
            onClick={() => {
              setArrowCompany(!arrowCompany);
            }}
          >
            <div>Company</div>{" "}
            <div>{arrowCompany ? <AiOutlineUp /> : <AiOutlineDown />}</div>
            {arrowCompany && (
              <div className="absolute top-8 left-0 ">
                <CompanyDropDown />
              </div>
            )}
          </div>
          <Link to={"/contact"}>
            {/* <div className="flex gap-2 bg-g px-[20px] py-1 rounded-3xl">
              <p className="text-white">Book a call</p>
            </div>{" "} */}
            <ButtonDark text={"Book a call"} />
          </Link>
        </ul>
        <div
          className="lg:hidden flex items-center justify-center"
          onClick={burgerClick}
        >
          {state ? (
            <FaTimes className="text-secondryColor text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-secondryColor text-3xl" />
          )}
        </div>

        {showServices && (
          <div className="absolute top-14 left-0 w-[100%] ">
            <Services />
          </div>
        )}
      </div>
      {state && (
        <ul className=" absolute right-5 top-[150px] sm:top-[120px] w-[250px] p-10 text-white flex flex-col rounded-md bg-gradient-to-r from-gradientBlueDark to-gradientBlueLight  items-center gap-10 shadow-xl">
          <Link to={"/"} className="text-" onClick={burgerClick}>
            Home
          </Link>
          <Link to={"/About"} onClick={burgerClick}>
            About
          </Link>
          <Link
            to={"/Services"}
            onClick={burgerClick}
            className="flex items-center gap-1"
          >
            <div>Services</div>{" "}
            <div>{arrow ? <AiOutlineDown /> : <AiOutlineUp />}</div>
          </Link>
          <Link to={"/Careers"} onClick={burgerClick}>
            Careers
          </Link>
          <Link to={"/Blog"} onClick={burgerClick}>
            Blog
          </Link>
          <Link to={"/Contact"} onClick={burgerClick}>
            <div className="flex gap-2">
              <p>Contact Us</p> <FaPhone className="text-2xl" />
            </div>{" "}
          </Link>

          <Link to={"/Contact"} onClick={burgerClick}>
            <div className="flex gap-2">
              <p>Book a call</p>
            </div>{" "}
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
