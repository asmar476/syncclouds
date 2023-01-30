import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'
import { Link } from 'react-router-dom'
 

const Header = () => {
  return (
    <div  className='  w-full  py-5'>
    {/* header top */}

    <div className="container py-2  flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row">

        <div>
            <h3 className="font-bold">We privide flexible sevices</h3>
        </div>

        <div className="flex gap-5 md:gap-10">
            <div className="flex items-center gap-2">  
                <MdOutgoingMail className='text-2xl'/>
                <p>syncclouds@gmail.com</p>
            </div>
            <div  className="flex items-center gap-2">
                <BsFillTelephoneFill/>
                <p>+1234434365656</p>
            </div>
           
            
            
           
        </div>

    </div>

    <hr/>

    {/* header bottom */}

    <div className="container flex items-cennter justify-between  py-3">
        <div className="">logo</div>
        <ul className='hidden md:flex items-center gap-10 '>
            <Link to={'/'} className="text-">Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Services'}>Services</Link>
            <Link to={'/Careers'}>Careers</Link>
            <Link to={'/Blog'}>Blog</Link>
            <Link to={'/Contact'}>Contact Us</Link>
            <div className='h-5 w-5 rounded-full bg-primaryColor'/>
           
        </ul>
    </div>
    </div>
  )
}

export default Header