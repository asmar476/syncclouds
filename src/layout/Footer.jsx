import logo from "../assets/SyncCloudsLogo/updated SyncClouds-logo white.svg";
import InnerPageHeading from "../common component/InnerPageHeading";
import { Link, useNavigate } from "react-router-dom";
import fb from "../assets/icons/fb.svg";
import twitter from "../assets/icons/twiter.svg";
import insta from "../assets/icons/insta.svg";
import skype from "../assets/icons/skype.svg";
import linkedin from "../assets/icons/linkedin.svg";

import { Row, Col } from "antd";
const Footer = () => {
  const navigate = useNavigate();
  const handlePrivacyPolicyClick = () => {
    navigate("/privacy-policy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleAboutUsClick = () => {
    navigate("/about-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="w-[100%] text-white"
      style={{
        background: "linear-gradient(90deg, #002680 58.76%, #1C67A6 106.96%)",
      }}
    >
      <Row className=" p-10 sm:p-16" justify="center" gutter={[16, 16]}>
        <Col xs={24} md={12} lg={6} className="">
          <img className="sm:h-11 mb-5" src={logo} alt="small" />
          <p className="pr-16 text-[16px] font-[400]">
            SyncClouds is the only way for your business solution in digital
            marketing that allows businesses to accept process.
          </p>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <h2 className="font-[500] text-[18px] my-2">SERVICES</h2>
          <div className=" space-y-1 font-[400] text-[16px]">
            <p>Web App Development</p>
            <p>Mobile App Development</p>
            <p>UI/UX Designing</p>
            <p>Cyber Security</p>
            <p>Digital Marketing</p>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <h2 className="font-[500] text-[18px]  my-2">COMPANY</h2>
          <div className="space-y-1 font-[400] text-[16px] ">
            <p>
              {" "}
              <Link to="/about-us" onClick={handleAboutUsClick}>
                About Us
              </Link>
            </p>
            <p>Career</p>
            <p>Life at SyncClouds</p>
            <p>View and Blogs</p>
          </div>{" "}
        </Col>
        <Col xs={24} md={12} lg={6}>
          <h2 className="font-[500] text-[18px] my-2">OFFICE</h2>
          <div className=" ">
            {/* <img
            className="w-[30px] md:w-[55px]"
            src={locationIcon}
            width="55px"
          />{" "} */}
            {/* <img className='hidden sm:block' src={locationIcon} />{' '} */}

            <p className="text-sm sm:text-[16px] font-[500]">
              Office No. M-35,36. Mezzanine Floor, Gold Point Shoping Mall,
              Rawalpindi, Pakistan
            </p>
          </div>
          <br />
          <h2 className="font-medium text-lg">Emails</h2>
          <div className="text-sm sm:text-[16px] font-[500]">
            {" "}
            <p>Contact Us at:</p>
            <p>hello@syncclouds.com</p>
          </div>
          <br />
          <div className="text-sm sm:text-[16px] font-[500]">
            {" "}
            <p>We are hiring:</p>
            <p>query@syncclouds.com</p>
          </div>
        </Col>
      </Row>
      {/* +++++++++++++++++++++++++++++++++++++++++ web view +++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="hidden border-t-2 border-white mx-0 sm:mx-16 font-semibold text-[12px] md:text-base text-white px-10  py-3 md:flex justify-between">
        <div className="flex items-center justify-between gap-16 lg:gap-32">
          <Link to={"/terms-conditions"}>Terms & Conditions</Link>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </div>
        <div className="flex items-center justify-between lg:gap-24 ">
          <p className="">Follow Us On</p>
          <div className="flex">
            <Link
              to="https://twitter.com/syncclouds"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} />
            </Link>
            <Link
              to="https://facebook.com/syncclouds"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="facebook" />
            </Link>
            <Link
              to="https://www.instagram.com/syncclouds/"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="instagram" />
            </Link>
            <Link
              to="https://join.skype.com/invite/x12P8vdREjqJ"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={skype} alt="skype" />
            </Link>{" "}
            <Link
              to="https://www.linkedin.com/company/syncclouds/mycompany/"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++ mobile view +++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="md:hidden border-t-2 font-semibold  border-white text-[12px] sm:text-[16px] text-white px-10  pt-3">
        <div className="flex items-center   justify-between">
          <Link to={"/terms-conditions"}>Terms & Conditions</Link>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </div>
        <div className=" mt-5 pb-5 flex justify-between items-center">
          <p className="">Follow Us On</p>
          <div className="flex">
            <Link
              to="https://twitter.com/syncclouds"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[16px] sm:w-[25px]" src={twitter} />
            </Link>
            <Link
              to="https://facebook.com/syncclouds"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[16px] sm:w-[25px]" src={fb} alt="facebook" />
            </Link>
            <Link
              to="https://www.instagram.com/syncclouds/"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[16px] sm:w-[25px]"
                src={insta}
                alt="instagram"
              />
            </Link>
            <Link
              to="https://join.skype.com/invite/x12P8vdREjqJ"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[16px] sm:w-[25px]" src={skype} alt="skype" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/syncclouds/mycompany/"
              className="cursor-pointer ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[16px] sm:w-[25px]"
                src={linkedin}
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from 'react'
// import { Row, Col } from 'antd'
// import logo from '../../Assets/Images/Footer/SC-White logo.png'
// import fb from '../../Assets/Images/Footer/fb.svg'
// import Skype from '../../Assets/Images/Footer/skype.svg'
// import twitter from '../../Assets/Images/Footer/twitter.svg'
// import insta from '../../Assets/Images/Footer/insta.svg'
// import locationIcon from '../../Assets/Icons/map-pin.svg'
// import { Link, useNavigate } from 'react-router-dom'
// export default function Footer () {
//   const navigate = useNavigate()
//   const handlePrivacyPolicyClick = () => {
//     navigate('/privacy-policy')
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }
//   const handleAboutUsClick = () => {
//     navigate('/about-us')
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }
//   return (
//     <footer className='mt-20'>
//       <Row
//         className='bg-gradient-to-r from-[#002680] to-[#1C67A6]    text-white p-16'
//         justify='center'
//         gutter={[16, 16]}
//       >
//         <Col xs={24} md={12} lg={6} className=''>
//           <img className='sm:h-11 mb-5' src={logo} alt='small' />
//           <p className='pr-16 text-md'>
//             SyncClouds is the only way for your business solution in digital
//             marketing that allows businesses to accept process.
//           </p>
//         </Col>
//         <Col xs={24} md={12} lg={6}>
//           <h2 className='font-semibold text-[20px] my-2'>SERVICES</h2>
//           <div className=' space-y-1 font-[400] text-[16px]'>
//             <p>Web App Development</p>
//             <p>Mobile App Development</p>
//             <p>UI/UX Designing</p>
//             <p>Cyber Security</p>
//             <p>Digital Marketing</p>
//           </div>
//         </Col>
//         <Col xs={24} md={12} lg={6}>
//           <h2 className='font-semibold text-[20px]  my-2'>COMPANY</h2>
//           <div className='space-y-1 '>
//             <p>
//               {' '}
//               <Link to='/about-us' onClick={handleAboutUsClick}>
//                 About Us
//               </Link>
//             </p>
//             <p>Career</p>
//             <p>Life at SyncClouds</p>
//             <p>View and Blogs</p>
//           </div>{' '}
//         </Col>
//         <Col xs={24} md={12} lg={6}>
//           <h2 className='font-semibold text-[20px]   my-2'>OFFICE</h2>
//           <div className='flex '>
//             <img
//               className='w-[30px] md:w-[55px]'
//               src={locationIcon}
//               width='55px'
//             />{' '}
//             {/* <img className='hidden sm:block' src={locationIcon} />{' '} */}
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <p>
//               Shop No M-35,36. Mezzanine Floor, Gold Point Shoping Mall,
//               Rawalpindi, Pakistan
//             </p>
//           </div>
//           <br />
//           <h2 className='font-medium text-lg'>Emails</h2>
//           <p>&nbsp;&nbsp;&nbsp;&nbsp;Contact Us at:</p>
//           <p>&nbsp;&nbsp;&nbsp;&nbsp;hello@syncclouds.com</p>
//           <br />
//           <p>&nbsp;&nbsp;&nbsp;&nbsp;We are hiring:</p>
//           <p>&nbsp;&nbsp;&nbsp;&nbsp;hr@syncclouds.com</p>
//         </Col>
//       </Row>
//       {/* ========================================end footer web view ========================================== */}
//       <div className='hidden sm:flex space-y-1 items-center justify-between px-16 text-[12px] font-medium'>
//         <div className='flex '>
//           <h6 className='sm:mr-5 lg:mr-16'>Terms & Conditions </h6>
//           <h6>
//             <Link to='/privacy-policy' onClick={handlePrivacyPolicyClick}>
//               Privacy Policy
//             </Link>
//           </h6>
//         </div>
//         <div className='flex  space-x-3  items-center'>
//           <h6>Follow Us</h6>
//           <Link
//             to='https://twitter.com/syncclouds'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={twitter} />
//           </Link>
//           <Link
//             to='https://facebook.com/syncclouds'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={fb} alt='facebook' />
//           </Link>
//           <Link
//             to='https://www.instagram.com/syncclouds/'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={insta} alt='instagram' />
//           </Link>
//           <Link
//             to='https://join.skype.com/invite/x12P8vdREjqJ'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={Skype} alt='skype' />
//           </Link>
//         </div>
//       </div>

//       {/* ==================================================mobile screen======================================= */}
//       <div className='sm:hidden flex flex-col space-y-3 items-center justify-center text-[12px] font-medium'>
//         <h6 className=''>Terms & Conditions </h6>
//         <h6>
//           <Link to='/privacy-policy' onClick={handlePrivacyPolicyClick}>
//             Privacy Policy
//           </Link>
//         </h6>
//         <div className='flex  space-x-3  items-center'>
//           <h6>Follow Us</h6>
//           <Link
//             to='https://twitter.com/syncclouds'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={twitter} />
//           </Link>
//           <Link
//             to='https://facebook.com/syncclouds'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={fb} alt='facebook' />
//           </Link>
//           <Link
//             to='https://www.instagram.com/syncclouds/'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={insta} alt='instagram' />
//           </Link>
//           <Link
//             to='https://join.skype.com/invite/x12P8vdREjqJ'
//             className='cursor-pointer ml-2'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <img src={Skype} alt='skype' />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }

{
  /* <div className='container mx-auto px-10'>
    <div className='flex flex-col-reverse items-center justify-between gap-10 lg:gap-32 bg-secondryColor text-white  rounded-xl p-5  md:flex-row md:p-10'>
        <div className="flex flex-col justify-between  gap-10  max-w-[700px] ">
            <div className='lg:pb-20'>

                <div className='text-left mb-5'>
                    <SubHeading data={"So let's get the  conversation started"}/>
                </div>
                
               
                <p className='text-sm lg:text-base '>
                    The longer you wait to take action,
                    the more you fall behind. The longer you wait to take action,
                    the more you fall behind. The longer you wait to take action,
                    the more you fall behind.
                </p>
            </div>

            <div className='flex gap-5'>
                <input type="text" className="  px-2 py-[5px] text-xs lg:text-base lg:px-3 lg:py-2 w-[100%] rounded-md  lg:w-[300px]   active:outline-none focus:outline-none" placeholder="Enter Your Email"/>
                <input type='submit' value='subscribe ' className="border-white border px-1 py-[5px] text-xs rounded-md lg:text-base lg:px-3 lg:py-1  text-white"/>
            </div>
        </div>

        <div className="lg:min-w-[350px]" >
          <img src={footerIllustrator} alt=""   className='min-h-[200] min-w-[200px] lg:min-h-[400] :min-w-[400px] w-[100%] h-[100%]' />
        </div>
    </div>
    </div> */
}
