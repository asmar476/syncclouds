

const CircularAnimationSection = () => {
  return (
    <div className='container mx-auto px-10 py-10 '>
       <div className='relative top-0 left-0 h-[600px] w-[100%]'>
            <div>
                <div className='absolute top-[50%] left-[50%]  bg-primaryColor h-[100px] w-[100px]'></div>
            </div>

            <div>
                <div className='absolute  bg-primaryColor h-[100px] w-[100px]'></div> 
                <div className='absolute  bg-primaryColor h-[100px] w-[100px]'></div> 
                <div className='absolute  bg-primaryColor h-[100px] w-[100px]'></div>
                <div className='absolute  bg-primaryColor h-[100px] w-[100px]'></div>
            </div>
       </div>
    </div>
  )
}

export default CircularAnimationSection