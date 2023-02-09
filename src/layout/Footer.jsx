
import {FaFacebookF, FaTwitter}from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import SubHeading from '../common component/SubHeading'
import footerIllustrator from '../assets/Group-2785.svg'
import logo from '../assets/SyncClouds-logo.svg'
  
const Footer = () => {
  return (
   <div className='space-y-5 md:space-y-10'>

    <div className='container mx-auto px-10'>
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
    </div>

    <div className='container mx-auto px-10 flex flex-col  lg:flex-row space-y-10 lg:space-y-0'>
       
       <div className=' flex items-center justify-center lg:flex-0 lg:items-start lg:justify-start'>
        <div className=' text-center mr-10 max-w-[300px] lg:text-left'>
                <div className='mb-5 flex justify-center lg:justify-start'><img src={logo} alt="SyncClouds logo" className='w-[150px] sm:w-[100%]'/></div>
                <p>SyncCloud is the only way for your business solution  in digital marketing that allows businesses to accept, process.</p>
            </div>
       </div>

        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div>
           <SubHeading data={'Company'}/>
            <ul className=' space-y-4 mt-5  text-sm md:text-base'>
                <li>Review</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Discovery Form</li>
            </ul>
        </div>

        <div>
        <SubHeading data={'Services'}/>
            <ul className='space-y-4 mt-5   text-sm md:text-base'>
                <li>Web & Mob development</li>
                <li>User Experience Design</li>
                <li>Video Production & Photography</li>
                <li>Digital Marketing</li>
                <li>Clouds(DevOps)</li>
                <li>Cyber Security</li>
                
            </ul>
        </div>

        <div>
        <SubHeading data={'Services'}/>
            <ul className='space-y-4 mt-5   text-sm md:text-base'>
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

    <div className="container px-5 mx-auto md:px-10  py-5 md: flex justify-center gap-2 md:justify-between items-center">
        <p className='text-xs md:text-base'>&copy; SyncClouds, Inc 2023.</p>
        <div className='flex items-center gap-2 md:gap-6 text-base md:text-xl'>
            <FaFacebookF/>
            <FaLinkedinIn/>
            <BsYoutube/>
            <FaTwitter/>
        </div>
    </div>
   </div>
  )
}

export default Footer