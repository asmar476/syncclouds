

const TextBadgeHeading = ({badge,headingPart1,headingPart2}) => {
  return (
    <div className='flex justify-center items-center'>
          <div className=" max-w-[1000px]">
            <p className='text-sm font-Semibold'>{badge}</p>
            <h2 className='text-2xl  lg:text-5xl  font-bold'>{headingPart1}<span className=' xl:hidden'>{headingPart2}</span> <span className='hidden xl:block text-center mt-3'>{headingPart2}</span> </h2>
          </div>
    </div>
  )
}

export default TextBadgeHeading