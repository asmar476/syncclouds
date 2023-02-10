
import Layout from "../layout/Layout"

import HeroComponent from "../common component/HeroComponent"
import Capibility from "../pages-component/AboutPage/Capibility"
import Help from '../pages-component/AboutPage/Help'
// import TextBadgeHeading from "../common component/TextBadgeHeading"
import Awards from "../pages-component/AboutPage/Awards"
import LookingFuture from "../pages-component/AboutPage/lookingFuture"
import Hero from "../pages-component/AboutPage/Hero"
import CompanyMOtivation from "../pages-component/AboutPage/CompanyMOtivation"
const About = () => {


  return (
    <Layout>
      <Hero/>
{/* ////////////////////////////// hero section  /////////////////*/}
     
{/* //////////////////////////// capibilities  /////////////////// */}
     <Capibility/>

    {/* ////////////////////// services ///////////////// */}

   <CompanyMOtivation/>

    {/* //////////////////////  Awards Section ////////////////*/}

 <Awards/>

    {/* ////////////////  help sewction //////////////////// */}

    <div className='container mx-auto px-10 py-20'>
      <Help/>
    </div>

    <LookingFuture/>
    </Layout>
  )
}

export default About