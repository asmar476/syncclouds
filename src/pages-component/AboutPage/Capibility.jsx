import TextBadgeHeading from "../../common component/TextBadgeHeading"
import Headin2 from "../../common component/Heading2"
import {GrBusinessService} from 'react-icons/gr'

import SubHeading from "../../common component/SubHeading"

const Capibility = () => {
  return (
    <div className='container mx-auto px-10 py-20'>
        <TextBadgeHeading badge={'CAPIBILITIES'} headingPart1={'We help to create strategies,design, video,'} headingPart2={'photography art & development'}/>

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
  )
}

export default Capibility