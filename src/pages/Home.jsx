import Layout from "../layout/Layout"
import Headin2 from "../common component/Heading2"
import Heading3 from "../common component/Heading3"
import Heading4 from "../common component/Heading4"
import SubHeading from "../common component/SubHeading"
import Hero from "../pages-component/HomePage/Hero"
import OfferCard from "../pages-component/HomePage/OfferCard"
import GetInTouch from '../pages-component/HomePage/GetInTouch'
import Question from "../pages-component/HomePage/Question"
import CircularAnimationSection from "../pages-component/HomePage/CircularAnimationSection"

const Home = () => {
  return (
    <Layout>
      {/* ////////////////// hero content //////////////////// */}
        <Hero/>
      {/* //////////////// offer section ///////////////////////////////////////// */} 
        <OfferCard/>
      {/* ////////////////////////  get in touch section ////////////////// */}
        <GetInTouch/>
      {/* circular aniamation */}
       
      {/* Frequently Ask question */}
      <Question/>
    </Layout>
  )
}

export default Home