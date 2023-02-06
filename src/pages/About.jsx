import Headin2 from "../common component/Heading2"
import {GrBusinessService} from 'react-icons/gr'
import PagesHero from "../common component/PagesHero"
import SubHeading from "../common component/SubHeading"
import Layout from "../layout/Layout"
import TextBadgeHeading from "../common component/TextBadgeHeading"
const About = () => {


  return (
    <Layout>

{/* ////////////////////////////// hero section  /////////////////*/}
      
      <PagesHero data={'About Us'} btnData={"Let's Talk"} description={'Are you embracing the power of digital transformation and beyond to stay competitive? We are at the forefront of Advanced technology and Software development services. Innovative development company providing full-fledged tech services across the globe, that help businesses streamline their processes and drive business growth.'}/>
    
{/* //////////////////////////// capibilities  /////////////////// */}
      <div className='container py-20'>
        <TextBadgeHeading badge={'CAPIBILITIES'} headingPart1={'We help to create strategies, design, video,'} headingPart2={'photography art & development'}/>

        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 px-2 lg:px-20 py-10'>
          <div className='space-y-5 max-w-[600px]'>
            <div>
              <div className='flex lg:-ml-6 items-center'>
                <div className='mr-2'>
                  <GrBusinessService/>
                </div>
                <SubHeading data={'Web And Mobile Development'}/>
              </div>
              <p>Diverse digital experience do not occure by chance. 
                Take proper measure today to open your services to millions of people.Read More
              </p>
            </div>

            <div>
              <div className='flex lg:-ml-6 items-center'>
                <div className='mr-2'>
                  <GrBusinessService/>
                </div>
                <SubHeading data={'Photography & Video Production'}/>
              </div>
              <p>It covers pre-production planning, filming, and post-production
                 editing and effects. Photography is the art and practice of
                capturing.Read More
              </p>
            </div>

            <div>
              <div className='flex lg:-ml-6 items-center'>
                <div className='mr-2'>
                  <GrBusinessService/>
                </div>
                <SubHeading data={'Cloud(DevOps)'}/>
              </div>
              <p>Want to build your product with a team that establishes a
                 transparent design process, meets deadlines, and delivers a spot-on result.Read More
              </p>
            </div>
          </div>

          <div className='space-y-5 max-w-[600px]'>
            <div>
                <div className='flex lg:-ml-6 items-center'>
                  <div className='mr-2'>
                    <GrBusinessService/>
                  </div>
                  <SubHeading data={'UX/UI Design & Website/App Design'}/>
                </div>
                <p>Want to build your product with a team that establishes a transparent 
                  design process, meets deadlines, and delivers a spot-on result.Read More
                </p>
              </div>

              <div>
              <div className='flex lg:-ml-6 items-center'>
                <div className='mr-2'>
                  <GrBusinessService/>
                </div>
                <SubHeading data={'Digital Marketing'}/>
              </div>
              <p>Establishing a goal and devising an approach. It's now time to
                 get things done. We are Born Social, the best social media company.Read More
              </p>
            </div>

            <div>
              <div className='lg:-ml-6 flex items-center'>
                <div className='mr-2'>
                  <GrBusinessService/>
                </div>
                <SubHeading data={'Cyber Security'}/>
              </div>
              <p>Want to build your product with a team that establishes a transparent
                 design process, meets deadlines, and delivers a spot-on result.Read More
              </p>
            </div>
          </div>

        </div>
      </div>

    {/* ////////////////////// services ///////////////// */}

    {/* <div className='container py-10'>
      <div className='flex justify-center '>
        <h2 className='max-w-[900px] text-2xl lg:text-5xl font-bold text-center mb-5 '>We help to create strategies, Design, <span className='lg:hidden'>Video,hotography Arts & development.</span> <div className='mt-5 hidden lg:block'> Video,hotography Arts & development.</div></h2>
      </div>
      
    </div> */}

    {/* //////////////////////  Awards Section ////////////////*/}

    <div className='container'>
        <div className='flex flex-col items-center justify-center space-y-10'>
          <TextBadgeHeading badge={'AWARDS & HONORS'} headingPart1={'The awards won by our project.'}/>
          <p className='max-w-[900px] text-base lg:text-lg text-center'>Our clients describe us as a product team which creates amazing Web & Mobile App Development,
               by crafting top-notch user experience.</p>
        </div>

        <div className='flex flex-col gap-10 md:flex-row justify-around items-center py-10'>
          <div className='h-[200px] w-[200px] bg-primaryColor'>0</div>
          <div className='h-[200px] w-[200px] bg-primaryColor'>0</div>
          <div className='h-[200px] w-[200px] bg-primaryColor'>0</div>
        </div>

        <div className='flex items-center justify-center pb-20'>
        <p className='max-w-[900px] text-base lg:text-lg text-center'>We Are Among The Top Developing,Designing And Digital Marketing Companies.</p>
        </div>

    </div>

    {/* ////////////////  help sewction //////////////////// */}

    <div className= 'py-10 bg-gray-100 md:h-[50vh] my-10 border-2 border-primaryColor flex items-center justify-center'>
      {/* <div className='h-[1px] w-full bg-black rotate-12 translate-y-44'></div>
      <div className='h-[1px] w-full bg-black -rotate-12 translate-y-44'></div> */}


      <div className='px-5 py-7 max-w-[1000px] mx-[3rem] w-[100%] bg-darkGary  md:h-[250px] rounded-3xl flex flex-col justify-between space-y-10 sm:px-10 md:flex-row md:space-y-0' >
        <div >
          <p className='-mb-1 text-xs lg:text-sm'>CONTACTS</p>
          <h4 className='font-bold text-lg lg:text-2xl leading-5 mb-3'>We are here to help you any <br/> time you want.</h4>
          <p>The longer you wait to take action, <br/> the time more you fall behind.</p>
         <button className='mt-3 px-4 py-1 bg-white rounded-lg border-none text-gray-400'>Send an Email</button>
        </div>

        <div className='space-y-2'>

          <div>
            <h4 className='text-lg font-bold'>Phone</h4>
            <p>+12232327833</p>
          </div>

          <div>
            <h4 className='text-lg font-bold'>Email</h4>
            <p>syncclouds@gmail.com</p>
          </div>

          <div>
            <h4 className='text-lg font-bold'>Adress</h4>
            <p>houe #90, block X, #celecon Valley,<br/>USA</p>
          </div>

        </div>
      </div>

    </div>

    </Layout>
  )
}

export default About