import heroIllutration from '../assets/Group-12783.svg'
import Button from "../common component/Button"
const HeroComponent =({title1,title2,description,buttonText, Illustration})=>{
    return(
        <div>
               <div className='flex flex-col xl:gap-10 items-center justify-between space-y-10 lg:space-y-0 lg:flex-row'>
            <div className='space-y-10 text-center  lg:text-left '>
                <h1 className='text-3xl font-bold sm:text-4xl lg:text-6xl'>{title1} {title2==='Transformation'&&<br/>}
                   <span className='gradient-text'> {title2}</span>
                </h1>

                <p className='text-sm md:text-lg text-justify lg:text-left'>
                    {description}
                </p>
                <Button  text={buttonText} />
            </div>
           <img src={heroIllutration} alt="Hero Illustration"  className='max-w-[516px] max-h-[550px] w-[100%] h-[100%]' />
        </div>
        </div>
    )
}

export default HeroComponent