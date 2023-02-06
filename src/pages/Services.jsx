import PagesHero from "../common component/PagesHero"
import Layout from "../layout/Layout"
import TextBadgeHeading from '../common component/TextBadgeHeading'
import {GrBusinessService} from 'react-icons/gr'
import SubHeading from "../common component/SubHeading"

const Services = () => {
  return (
    <Layout>
      <PagesHero data={'Services'} btnData={'Contact Us'} description={'We Just Need Some Info What You Want. Then We Wil be In Touch'}/>

      {/*/////////////////// Capabilities section //////////////////// */}
      <div className='container py-20 '>
        <TextBadgeHeading badge={'CAPABLITIES'} headingPart1={'Puttin our focus on changin the way people'} headingPart2={' think of mobile experience.'}/>

        <div className=' mt-20 px-5 flex flex-col lg:flex-row justify-between space-y-10'>
            <div className='space-y-5 max-w-[500px]'>
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

          <div className='max-w-[500px] '>
            <SubHeading data={'Expert Assistance at Position'}/>
            <div className='grid grid-cols-2 gap-10 text-center mt-5'>
              <div className='text-xl lg:text-2xl '>
                <h3>300+</h3>
                <h3>Ideation </h3>
                <h3>Processes</h3>
              </div>
              <div className='text-xl lg:text-2xl '> 
                <h3>400+</h3>
                <h3>Marketable</h3>
                <h3>Products</h3>
              </div>
              <div className='text-xl lg:text-2xl '>
                <h3>250%</h3>
                <h3>Innovative</h3>
                <h3>Solutions</h3>
              </div>
              <div className='text-xl lg:text-2xl '>
                <h3>35%</h3>
                <h3>Agumented</h3>
                <h3>Businesses</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services