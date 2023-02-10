import HeroComponent from "../../common component/HeroComponent"

const Hero = () => {
  return (
    <div className='container mx-auto  px-10 py-10 md:py-32 md:mt-10'>
    <HeroComponent title1={'About'} title2={'Us'} description={'Are you embracing the power of digital transformation and beyond to stay competitive? We are at the forefront of Advanced technology and Software development services. Innovative development company providing full-fledged tech services across the globe, that help businesses streamline their processes and drive business growth.'}
      buttonText={"Let's Talk"} Illustration={'aboutIllustration'}/>
    </div>
  )
}

export default Hero