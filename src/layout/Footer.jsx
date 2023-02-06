
import {FaFacebookF, FaTwitter}from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import SubHeading from '../common component/SubHeading'
  
const Footer = () => {
  return (
   <div className='space-y-5 md:space-y-10'>

    <div className='container'>
    <div className=" flex flex-col items-center justify-between bg-primaryColor rounded-xl p-5 md:p-10 md:flex-row" >
        <div className="pb-10 text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">So let's get the <br/> conversation started</h3>
            <p>The Longer you wait to take action,<br/> the more you fall behind.</p>
        </div>

        <div className="flex gap-1 md:gap-5" >
            <input type="text" className=" w-[150px] px-1 py-1 text-xs md:text-base md:px-3 md:py-2  md:w-[100%]  rounded-xl active:outline-none focus:outline-none" placeholder="Enter Your Email"/>
            <input type='submit' value='subscribe ' className="bg-white px-1 py-1 text-xs md:text-base md:px-3 md:py-1 rounded-xl text-gray-400"/>
        </div>
    </div>
    </div>

    <div className='container pt-10 pb-20   flex flex-col justify-start space-x-0 space-y-10 md:space-y-0 md:space-x-32 md:flex-row '>
        <div className="">
            <div>logo</div>
            <p>Ideate, design & iterate<br/>until satisfied</p>
        </div>
        <div>
           <SubHeading data={'Company'}/>
            <ul className='space-y-3 md:space-y-5 text-sm md:text-base'>
                <li>Review</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Discovery Form</li>
            </ul>
        </div>
        <div>
        <SubHeading data={'Services'}/>
            <ul className='space-y-3 md:space-y-5  text-sm md:text-base'>
                <li>Web & Mob development</li>
                <li>User Experience Design</li>
                <li>Video Production & Photography</li>
                <li>Digital Marketing</li>
                <li>Clouds(DevOps)</li>
                <li>Cyber Security</li>
                
            </ul>
        </div>
    </div>

    <div className="container md:px-10  py-5 md: flex justify-center gap-2 md:justify-between items-center">
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