
import Layout from "../layout/Layout"

import HeroComponent from "../common component/HeroComponent"
import Capibility from "../pages-component/AboutPage/Capibility"
import Help from '../pages-component/AboutPage/Help'
// import TextBadgeHeading from "../common component/TextBadgeHeading"
import Awards from "../pages-component/AboutPage/Awards"
const About = () => {


  return (
    <Layout>

{/* ////////////////////////////// hero section  /////////////////*/}
      <div className='container mx-auto  px-10 py-20'>
      <HeroComponent title1={'About'} title2={'Us'} description={'Are you embracing the power of digital transformation and beyond to stay competitive? We are at the forefront of Advanced technology and Software development services. Innovative development company providing full-fledged tech services across the globe, that help businesses streamline their processes and drive business growth.'}
        buttonText={"Let's Talk"} Illustration={'aboutIllustration'}/>
    </div>
{/* //////////////////////////// capibilities  /////////////////// */}
     <Capibility/>

    {/* ////////////////////// services ///////////////// */}

   

    {/* //////////////////////  Awards Section ////////////////*/}

 <Awards/>

    {/* ////////////////  help sewction //////////////////// */}

    <div className='container mx-auto px-10 py-20'>
      <Help/>
    </div>

    </Layout>
  )
}

export default About