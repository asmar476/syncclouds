import React from 'react'
import Heading3 from '../../common component/Heading3'
import SubHeading from '../../common component/SubHeading'

const Question = () => {
  return (
    <div className='container mx-auto px-10 py-10 '>
            <div className='container flex flex-col items-center md:py-10'>
            <div className='text-center my-10'>
            <Heading3 data={'Frequently Asked Question'}/>
            </div>


            <div className='grid grid-col-1 md:grid-cols-2  gap-12'>

            <div className='flex flex-col  justify-between space-y-10  max-w-[500px]'>
                <div>
                <SubHeading data={'who to contact?'}/>
                <p>
                    Using year-over-year design approaches and the latest techs, we will ensure that your
                    new website will be visible, accessible, and treads lightly.
                </p>
                </div>
                <div>
                    <SubHeading data={'Can I talk to your client? +'}/>
                </div>

                <div>
                    <SubHeading data={'How we lived in Pakistan? +'}/>
                </div>

                <div>
                    <SubHeading data={'How to contact? +'}/>
                </div>
            </div>

            <div className='flex flex-col justify-between space-y-10   max-w-[500px]'>
                
                <div>
                <SubHeading data={'Do you offer money back guarantee?'}/>
                <p>
                    Using year-over-year design approaches and the latest techs, we will ensure that your
                    new website will be visible, accessible, and treads lightly.
                </p>
                </div>

                
                <div>
                    <SubHeading data={'Can I talk to your client? +'}/>
                </div>

                <div>
                    <SubHeading data={'How we lived in Pakistan? +'}/>
                </div>

                <div>
                    <SubHeading data={'How to contact? +'}/>
                </div>
                

            
            </div>

            </div> 

            <div className='pt-20 max-w-[1000px] text-center '>
            <Heading3 data={'Our Aim: From Disruptive Creativity to Tangible Solutions'}/>
            <div className='grid gap-16 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 pt-12 pb-20 space-y-20 md:space-y-0'>
               
                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-end'>
                    <h3 className='text-primaryColor text-5xl  font-bold'>200+</h3>
                    <h3 className='font-Semibold'>Skilled team of </h3>             
                </div>

                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-end'> 
                    <h3 className='text-primaryColor text-5xl  font-bold'>60+</h3>
                    <h3 className='font-Semibold'>Global</h3>
                </div>

                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-end'>
                    <h3 className='text-primaryColor text-5xl  font-bold'>99%</h3>
                    <h3 className='font-Semibold'>Customer</h3>             
                </div>

                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-end'>
                    <h3 className='text-primaryColor text-5xl  font-bold'>150+</h3>
                    <h3 className='font-Semibold'>Andriod Apps</h3>             
                </div>

                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-end'> 
                    <h3 className='text-primaryColor text-5xl  font-bold'>300+</h3>
                    <h3 className='font-Semibold'>Web Apps</h3>
                </div>

                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-end '>
                    <h3 className='text-primaryColor text-5xl font-bold'>70%</h3>
                    <h3 className='font-Semibold'>IOS Apps</h3>             
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Question