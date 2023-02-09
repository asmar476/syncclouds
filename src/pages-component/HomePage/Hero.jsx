
import HeroComponent from "../../common component/HeroComponent"

const Hero = () => {
  return (
    <div className='container mx-auto px-10 py-20 '>

        <HeroComponent title1={'Innovation Beyond Digital'} title2={'Transformation'} description={"Are you embracing the power of digital transformation and beyond to stay competitive? We are at the forefront of Advanced technology and Software development services. Innovative development company providing full-fledged tech services across the globe, that help businesses streamline their processes and drive business growth."}
        buttonText={"Let's discuss you project"} Illustration={'heroIllutration'}/>

        <div className='flex justify-between py-10 mt-5'>
            <div className='h-[150px] w-[150px] bg-gray-200'></div>
            <div className='h-[150px] w-[150px] bg-gray-200'></div> 
            <div className='h-[150px] w-[150px] bg-gray-200'></div> 
            <div className='h-[150px] w-[150px] bg-gray-200'></div> 
            <div className='h-[150px] w-[150px] bg-gray-200'></div>
           
            
        </div>
    </div>
  )
}

export default Hero