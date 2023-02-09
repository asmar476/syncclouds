
import Button from "../../common component/Button"
import heroIllustration from '../../assets/Group-12783.svg'
import getInTouchIllustration from '../../assets/Group-2784.svg'
import Heading2 from "../../common component/Heading2"
import SubHeading from "../../common component/SubHeading"
import Heading3 from "../../common component/Heading3"

const GetInTouch = () => {
  return (
    <div className='container mx-auto px-10 py-20 '>
        <div className='text-center'><Heading2 data={'Transform digital experience with SyncClouds'}/></div>
        <div className='py-20 flex flex-col gap-20 items-center lg:items-start  justify-between lg:flex-row'>
            <div className='space-y-10 text-center  lg:text-left '>
               <SubHeading data={'Transform digital experience with SyncClouds'}/>

                <p className='text-sm md:text-lg text-justify lg:text-left'>We are a digital transformation and software development 
                    company that provides cutting-edge engineering solutions, helping 100 companies and enterprise clients untangle
                    complex issues that always emerge during their digital evolution journey. Since2020 we have been a visionary and 
                    as foundations for future growth.
                </p>
                <Button  text={"Get in touch"} />
            </div>
           <img src={heroIllustration} alt="Hero Illustration"  className='max-w-[516px] max-h-[550px] w-[100%] h-[100%]' />
        </div>

        <div className='lg:pl-32  flex flex-col-reverse gap-20 items-center justify-between lg:flex-row'>
        <img src={getInTouchIllustration} alt="Hero Illustration"  className='max-w-[612px] max-h-[414px] w-[100%] h-[100%]' />
            <div className='space-y-10 text-center  lg:text-left '>
               <SubHeading data={'Digital Experience that Differentiates'}/>

                <p className='text-sm md:text-lg text-justify lg:text-left'>From IT strategy consulting and comprehensive 
                    technology roadmaps to the end-to-enddevelopment of scalable solutions, Intellectsoft delivers full-cycle 
                    software developmentservices that adapt seamlessly to your project requirements and business needs.
                </p>
              
            </div>
         
        </div>

        
    </div>
  )
}

export default GetInTouch