import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import logo from "../assets/SyncCloudsLogo/updated SyncClouds-logo white.svg";
import MainSubHeading from "../common component/MainSubHeading";
import InnerPageHeading from "../common component/InnerPageHeading";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" ">
      {/* <div className='container mx-auto px-10'>
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
    </div> */}

      <div className="bg-purpleLight py-10">
        {" "}
        <div className="container mx-auto px-10 flex flex-col  lg:flex-row space-y-10 lg:space-y-0  text-white">
          <div className=" flex items-center justify-center lg:flex-0 lg:items-start lg:justify-start">
            <div className=" text-center mr-10 max-w-[300px] lg:text-left">
              <div className="mb-5 flex justify-center lg:justify-start">
                <img
                  src={logo}
                  alt="SyncClouds logo"
                  className="w-[150px] sm:w-[100%]"
                />
              </div>
              <p>
                SyncCloud is the only way for your business solution in digital
                marketing that allows businesses to accept, process.
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <InnerPageHeading text={"Company"} />
              <ul className=" space-y-4 mt-5  text-sm md:text-base">
                <li>Review</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Discovery Form</li>
              </ul>
            </div>

            <div>
              <InnerPageHeading text={"Services"} />
              <ul className="space-y-4 mt-5   text-sm md:text-base">
                <li>Web & Mob development</li>
                <li>User Experience Design</li>
                <li>Video Production & Photography</li>
                <li>Digital Marketing</li>
                <li>Clouds(DevOps)</li>
                <li>Cyber Security</li>
              </ul>
            </div>

            <div>
              <InnerPageHeading text={"Services"} />
              <ul className="space-y-4 mt-5   text-sm md:text-base">
                <li>Web & Mob development</li>
                <li>User Experience Design</li>
                <li>Video Production & Photography</li>
                <li>Digital Marketing</li>
                <li>Clouds(DevOps)</li>
                <li>Cyber Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 mx-auto md:px-10  py-5 md: flex justify-center gap-2 md:justify-between items-center">
        <div className="flex items-center gap-10">
          {" "}
          <p className="text-xs md:text-base">Terms & Cindition</p>
          <Link to={"/privacy-policy"} className="text-xs md:text-base">
            Privacy Policy
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl">
          <p className="text-sm">Follow Us On</p>
          <FaFacebookF />
          <FaLinkedinIn />
          <BsYoutube />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
