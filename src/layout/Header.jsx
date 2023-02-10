import {BsEmojiLaughing, BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiOutlineDown} from 'react-icons/ai'
import { AiOutlineUp } from "react-icons/ai"
import {FaPhone} from 'react-icons/fa'
import { useState } from 'react'
import FlyOutMenu from '../component/FlyOutMenu'
import logo from '../assets/SyncClouds-logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'

import { useSelector,useDispatch } from 'react-redux'
import { burgerSliceAction } from '../Store/BurgerMenu'
 

const Header = () => {
    const state =useSelector(state=>state.burger.open);
    const dispatch =useDispatch();

    const [arrow,setArrow] =useState(false)
    const click=()=>{
        setArrow(!arrow)
    }



    const burgerClick =()=>{
        dispatch(burgerSliceAction.openBurger())
    }
 




  return (
    <div  className='  w-full  py-5'>
    {/* header top */}

    <div className="container mx-auto px-10 py-2  flex flex-col items-center sm:flex-row space-y-5 justify-between  sm:space-y-0">

        <div>
            <h3 className="font-bold text-sm lg:text-base">We privide flexible sevices</h3>
        </div>

        <div className="flex items-center gap-5  lg:gap-10">
            <div className="flex items-center gap-2">  
                <MdOutgoingMail className='text-2xl'/>
                <p className='hidden lg:block'>syncclouds@gmail.com</p>
            </div>
            <div  className="flex items-center gap-2">
                <BsFillTelephoneFill/>
                <p className='hidden lg:block'>+1234434365656</p>
            </div>

            <div  className="flex items-center gap-2">
                <BsEmojiLaughing/>
                <p className='hidden lg:block'>Language</p>
            </div>
        </div>

    </div>

    <hr/>

    {/* header bottom */}

    <div className="container mx-auto px-10 flex items-cennter justify-between  ">
        <div className=""><img src={logo} alt="syncClouds logo" className='w-[150px] md:min-w-[200px] lg:min-w-full sm:w-[100%]'/></div>
        <ul className='hidden lg:flex items-center gap-10 '>
            <Link to={'/'} className="hover:text-primaryColor">Home</Link>
            <Link to={'/About'} className="hover:text-primaryColor">About</Link>
            <Link to={'/Services'} className='flex items-center gap-1 hover:text-primaryColor' onClick={click}><div>Services</div> <div>{arrow?<AiOutlineUp/>:<AiOutlineDown/>}</div></Link>
            <Link to={'/Careers'} className="hover:text-primaryColor">Careers</Link>
            <Link to={'/Blog'} className="hover:text-primaryColor">Blog</Link>
            <Link to={'/Contact'} ><div className='flex gap-2 hover:text-primaryColor'><p>Contact Us</p> <FaPhone className='text-2xl'/></div> </Link>

        </ul>
        <div className='lg:hidden flex items-center justify-center'onClick={burgerClick} >{state?<FaTimes className='text-secondryColor text-3xl'/>:<GiHamburgerMenu className='text-secondryColor text-3xl'/>}</div>
       
    </div>
    {
            state&&
            <ul className=' absolute right-5 top-[150px] sm:top-[120px] w-[250px] p-10 text-white flex flex-col rounded-md bg-gradient-to-r from-secondryColor to-primaryColor items-center gap-10 shadow-xl'>
                <Link to={'/'} className="text-" onClick={burgerClick}>Home</Link>
                <Link to={'/About'} onClick={burgerClick}>About</Link>
                <Link to={'/Services'} onClick={burgerClick}  className='flex items-center gap-1'><div>Services</div> <div>{arrow?<AiOutlineDown/>:<AiOutlineUp/>}</div></Link>
                <Link to={'/Careers'} onClick={burgerClick}>Careers</Link>
                <Link to={'/Blog'} onClick={burgerClick}>Blog</Link>
                <Link to={'/Contact'} onClick={burgerClick}><div className='flex gap-2'><p>Contact Us</p> <FaPhone className='text-2xl'/></div> </Link>
                    
               
                
               
            </ul>
        }

   {arrow&& <FlyOutMenu/>}
    </div>
  )
}

export default Header