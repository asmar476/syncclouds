// import {FaFacebookSquare} from 'react-icons/fa'
import {FaFacebookF, FaTwitter}from 'react-icons/fa'
// import {BsLinkedin} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
// import {FaTwitterSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
  
const Footer = () => {
  return (
   <div>

    <div className="container flex flex-col items-center justify-between bg-primaryColor rounded-xl p-10 md:flex-row" >
        <div className="pb-10 text-center md:text-left">
            <h3 className="font-bold mb-2">So let's get the <br/> conversation started</h3>
            <p>Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Impedit, eligendi?</p>
        </div>

        <div className="flex gap-5" >
            <input type="text" className="px-3 py-2 rounded-xl active:outline-none focus:outline-none" placeholder="Enter Your Email"/>
            <input type='submit' value='subscribe ' className="bg-white px-3 py-1 rounded-xl text-gray-400"/>
        </div>
    </div>

    <div className='container pt-10 pb-20 flex flex-col justify-start space-x-0 space-y-10 md:space-y-0 md:space-x-20 md:flex-row '>
        <div className="">
            <div>logo</div>
            <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Tenetur, nisi?</p>
        </div>
        <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className='space-y-5 text-sm md:text-base'>
                <li>Review</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Discovery Form</li>
            </ul>
        </div>
        <div>
        <h3 className="font-bold mb-3">Services</h3>
            <ul className='space-y-5 text-sm md:text-base'>
                <li>Web & Mob development</li>
                <li>User Experience Design</li>
                <li>Video Production & Photography</li>
                <li>Digital Marketing</li>
                <li>Clouds(DevOps)</li>
                <li>Cyber Security</li>
                
            </ul>
        </div>
    </div>

    <div className="container flex justify-between items-center">
        <p>&copy; SyncClouds, Inc 2023.</p>
        <div className='flex items-center gap-6 text-xl'>
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