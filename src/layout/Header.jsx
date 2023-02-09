import {BsEmojiLaughing, BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiOutlineDown} from 'react-icons/ai'
import { AiOutlineUp } from "react-icons/ai";
import {FaPhone} from 'react-icons/fa'
import { useState } from 'react';
import FlyOutMenu from '../component/FlyOutMenu';
import logo from '../assets/SyncClouds-logo.svg'
 

const Header = () => {
    const [arrow,setArrow] =useState(false)
 const click=()=>{
  setArrow(!arrow)
 }


  return (
    <div  className='  w-full  py-5'>
    {/* header top */}

    <div className="container mx-auto px-10 py-2  flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row">

        <div>
            <h3 className="font-bold">We privide flexible sevices</h3>
        </div>

        <div className="flex flex-col items-center gap-5 sm:flex-row md:gap-10">
            <div className="flex items-center gap-2">  
                <MdOutgoingMail className='text-2xl'/>
                <p>syncclouds@gmail.com</p>
            </div>
            <div  className="flex items-center gap-2">
                <BsFillTelephoneFill/>
                <p>+1234434365656</p>
            </div>

            <div  className="flex items-center gap-2">
                <BsEmojiLaughing/>
                <p>Language</p>
            </div>
        </div>

    </div>

    <hr/>

    {/* header bottom */}

    <div className="container mx-auto px-10 flex items-cennter justify-between  ">
        <div className=""><img src={logo} alt="syncClouds logo" className='w-[150px] md:min-w-[200px] lg:min-w-full sm:w-[100%]'/></div>
        <ul className='hidden lg:flex items-center gap-10 '>
            <Link to={'/'} className="text-">Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Services'} className='flex items-center gap-1' onClick={click}><div>Services</div> <div>{arrow?<AiOutlineUp/>:<AiOutlineDown/>}</div></Link>
            <Link to={'/Careers'}>Careers</Link>
            <Link to={'/Blog'}>Blog</Link>
            <Link to={'/Contact'}>Contact Us</Link>
            <FaPhone className='text-2xl'/>
           
        </ul>
    </div>

   {arrow&& <FlyOutMenu/>}
    </div>
  )
}

export default Header