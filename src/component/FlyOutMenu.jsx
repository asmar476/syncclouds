
const flyoutMenu = () => {
  return (
    <div >
         <div className='fixed  top-[13%] right-[22.5%] lg:right-[24.5%] z-[10]  bg-darkGary rounded-xl hidden md:flex  gap-10 p-10'>

            <div>
              <ul className='space-y-5'>
                <li>Web And Mobile Development</li>
                <li>Photography & Video Production</li>
                <li>Cloud(DevOps)</li>
              
                <li>UX/UI Design & Website/App Design</li>
                <li>Digital Marketing</li>
                <li>Cyber Security</li>
              </ul>
            </div>
         </div>
    </div>
   
  )
}

export default flyoutMenu