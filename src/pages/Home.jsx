import Layout from "../layout/Layout"
import Headin2 from "../common component/Heading2"
import Heading3 from "../common component/Heading3"
import Heading4 from "../common component/Heading4"
import SubHeading from "../common component/SubHeading"

const Home = () => {
  return (
    <Layout>
     <div className="container py-5 md:py-20 flex  flex-col items-center justify-between">
  
  {/* ////////////////// hero content //////////////////// */}

        <div className="py-5 space-y-10 flex  flex-col items-center justify-between">  
          <div className="text-3xl md:text-6xl  text-center">
            <h1 className=''>Innovation Beyond Digital <br/>Transformation</h1>
          </div>

          <div className='text-center max-w-[80%]'>
            <p className="text-justify md:text-center text-base md:text-lg">Are you embracing the power of digital transformation and beyond 
              to stay competitive?
              We are at the forefront of Advanced
              technology and Software development services. Innovative 
              development company providing full-fledged tech services across the
              globe, that help businesses streamline their processes and drive business 
              growth.
            </p>
          </div>
        </div>
        
{/* ///////////////////// hero cards ///////////////////// */}

        <div className="flex w-full flex-col items-center justify-between py-10">
          <div>
            <button className="border-black border-[1px] text-md md:text-2xl rounded-[30px] px-5 md:px-10 py-3">Let's discuss your project</button>
          </div>
          <div className="flex gap-2 w-full py-10 md:py-20 items-center justify-around ">
            <div className='h-[80px] md:h-[150px] w-[80px] md:w-[150px] bg-primaryColor'></div>
            <div className='h-[80px] md:h-[150px] w-[80px] md:w-[150px] bg-primaryColor'></div>
            <div className='h-[80px] md:h-[150px] w-[80px] md:w-[150px] bg-primaryColor'></div>
            <div className='h-[80px] md:h-[150px] w-[80px] md:w-[150px] bg-primaryColor'></div>
          </div>

        </div>
        
      </div>


{/* //////////////// offer section ///////////////////////////////////////// */}
      <div className="container py-10">
        <div className="flex flex-col items-center justify-center">
          <Headin2 data={'What We Offer'}/>
          <p className="text-center max-w-[600px]">The SyncCloud platform offers you the different kind of solutions for your business. 
              Discover all our Solutions below:
          </p>
        </div>
       
{/* //////////////////////////////// offers cards //////////////////////////// */}

        <div className='pt-32 text-center grid gap-20 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 '>
         

         <div className="flex items-center justify-center">
          <div className='relative flex flex-col items-center justify-center  h-[250px] w-[250px] p-2 text-center rounded-xl border border-black'>
              <div className='absolute flex items-center justify-center -top-14 h-[100px] w-[100px] rounded-full bg-primaryColor'>0</div>
              <div className="pt-10">
                <h3 className="font-bold text-md mb-2">Wb And Mobile Development</h3>
                <p className='text-base'>  
                  Diverse digital experiences do not occur by chance.
                  Take proper measures today to open
                  your services to millions of people.Read More
                </p>
              </div>
            </div>
         </div>



         <div className="flex items-center justify-center">
          <div className='relative flex flex-col items-center justify-center  h-[250px] w-[250px] p-2 text-center rounded-xl border border-black'>
              <div className='absolute flex items-center justify-center -top-14 h-[100px] w-[100px] rounded-full bg-primaryColor'>0</div>
              <div className="pt-10">
                <h3 className="font-bold text-md mb-2">Wb And Mobile Development</h3>
                <p className='text-base'>  
                  Diverse digital experiences do not occur by chance.
                  Take proper measures today to open
                  your services to millions of people.Read More
                </p>
              </div>
            </div>
         </div>
         <div className="flex items-center justify-center">
          <div className='relative flex flex-col items-center justify-center  h-[250px] w-[250px] p-2 text-center rounded-xl border border-black'>
              <div className='absolute flex items-center justify-center -top-14 h-[100px] w-[100px] rounded-full bg-primaryColor'>0</div>
              <div className="pt-10">
                <h3 className="font-bold text-md mb-2">Wb And Mobile Development</h3>
                <p className='text-base'>  
                  Diverse digital experiences do not occur by chance.
                  Take proper measures today to open
                  your services to millions of people.Read More
                </p>
              </div>
            </div>
         </div>
         <div className="flex items-center justify-center">
          <div className='relative flex flex-col items-center justify-center  h-[250px] w-[250px] p-2 text-center rounded-xl border border-black'>
              <div className='absolute flex items-center justify-center -top-14 h-[100px] w-[100px] rounded-full bg-primaryColor'>0</div>
              <div className="pt-10">
                <h3 className="font-bold text-md mb-2">Wb And Mobile Development</h3>
                <p className='text-base'>  
                  Diverse digital experiences do not occur by chance.
                  Take proper measures today to open
                  your services to millions of people.Read More
                </p>
              </div>
            </div>
         </div>
         <div className="flex items-center justify-center">
          <div className='relative flex flex-col items-center justify-center  h-[250px] w-[250px] p-2 text-center  rounded-xl border border-black'>
              <div className='absolute flex items-center justify-center -top-14 h-[100px] w-[100px] rounded-full bg-primaryColor'>0</div>
              <div className="pt-10">
                <h3 className="font-bold text-md mb-2">Wb And Mobile Development</h3>
                <p className='text-base'>  
                  Diverse digital experiences do not occur by chance.
                  Take proper measures today to open
                  your services to millions of people.Read More
                </p>
              </div>
            </div>
         </div>
         <div className="flex items-center justify-center">
          <div className='relative flex flex-col items-center justify-center  h-[250px] w-[250px] p-2 text-center rounded-xl border border-black'>
              <div className='absolute flex items-center justify-center -top-14 h-[100px] w-[100px] rounded-full bg-primaryColor'>0</div>
              <div className="pt-10">
                <h3 className="font-bold text-md mb-2">Wb And Mobile Development</h3>
                <p className='text-base'>  
                  Diverse digital experiences do not occur by chance.
                  Take proper measures today to open
                  your services to millions of people.Read More
                </p>
              </div>
            </div>
         </div>
         
        </div>

      </div>


      {/* ////////////////////////  get in touch section ////////////////// */}

      <div className='container py-10 md:py-32'>
        <div className='text-center my-10 '>
          <h2 className='text-3xl lg:text-5xl font-[600] text-center mb-5 '>Transform digital experience with <br/> SyncClouds</h2>
        </div>

        <div className='px-5 md:px-20 py-10 my-5 bg-primaryColor rounded-[50px] text-center'>
          <Heading4 margin={5} data={'We Build Purposeful, Customer-First Digital Solutions'}/>
          <p className=' text-base text-justify md:text-lg  md:text-center'>
          We are a digital transformation and software development company 
          that provides cutting-edge engineering solutions, helping 100 companies
          and enterprise clients untangle complex issues that always emerge
          during their digital evolution journey. Since2020 we have been a 
          visionary and reliable software engineering partner for world-class
          rands. Appnovation is a global,fullservice digital partner that
          combines Strategy, Experience & Design, Engineering, and Managed
          services. We build digital solutions that deliver real impact today
          and serve 
          as foundations for future growth.
          </p>

          <button className='mt-10 px-10 md:px-20 py-3 text-xl md:text-3xl rounded-[30px] border border-black bg-white'>Get in touch</button>
        </div>

        <div className='mb-20 flex flex-col items-center justify-center'>
          <Headin2 data={'Digital Experience that Differentiates'}/>
          <p className='text-center text-base md:text-lg max-w-[1100px]'>
            From IT strategy consulting and comprehensive technology roadmaps
            to the end-to-enddevelopment of scalable solutions, 
            Intellectsoft delivers full-cycle software developmentservices that adapt
            seamlessly to your project requirements and business needs.
          </p>
        </div>
      </div>

      {/* circular aniamation */}


      {/* Frequently Ask question */}

      <div className='container flex flex-col items-center md:py-10'>
        <div className='text-center my-10'>
          <Heading3 data={'Frequently Asked Question'}/>
        </div>


        <div className='grid grid-col-1 md:grid-cols-2  gap-12'>

          <div className='flex flex-col  justify-between space-y-10 md:space-y-5  max-w-[500px]'>
            <div>
              <SubHeading data={'What service we provide?'}/>
              <ul className='list-disc ml-10 space-y-2'>
                <li>Web And Mobile Development</li>
                <li>User Experience Design</li>
                <li>Video Production and Photography</li>
                <li>Digital Marketing</li>
                <li>Cloud(DevOps)</li>
                <li>Cyber Security</li>
              </ul>
            </div>
            <div>
              <SubHeading data={'What is your tiume availability and timezone?'}/>
              <p>
                Our team's standard operating time is 11:00 AM to 7:00 PM IST.
                We work 5 days a week (Mon to Fri). However, we are available
                most of the time for emergencies and if planned in advance.
              </p>
            </div>
          </div>

          <div className='flex flex-col justify-between space-y-10 md:space-y-0  max-w-[500px]'>
            
            <div>
              <SubHeading data={'Do you offer money back guarantee?'}/>
              <p>Yes, If you are not satisfied with the first design/blueprint draft,
                you have full right to cancel the project and ask for refund.
              </p>
            </div>

            <div>
              <SubHeading data={'What will be the payment terms?'}/>
              <p>We take 50% advance and 50% after completion of the project before
                handing over the source file. Client have to buy stock lienses wherever used.
              </p>
            </div>

           <div>
            <SubHeading data={'What if I have more question?'}/>
            <p>Send us an email at <span className='underline'>info@syncclouds.com</span> and we'll help you out</p>
           </div>
          </div>

        </div> 

        <div className='pt-20 max-w-[1000px] text-center '>
          <Heading3 data={'Our Aim: From Disruptive Creativity to Tangible Solutions'}/>
          <div className='grid grid-cols-1  md:grid-cols-3 pt-12 pb-20 space-y-20 md:space-y-0'>
            <div className='text-2xl lg:text-3xl space-y-3'>
              <h3>200+</h3>
              <h3>Skilled team of </h3>
              <h3>superheroes</h3>
            </div>
            <div className='text-2xl lg:text-3xl space-y-3'> 
              <h3>60+</h3>
              <h3>Global</h3>
              <h3>Footprint</h3>
            </div>
            <div className='text-2xl lg:text-3xl space-y-3'>
              <h3>99%</h3>
              <h3>Customer</h3>
              <h3>Retention</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home