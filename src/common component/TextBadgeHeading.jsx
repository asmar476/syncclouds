

const TextBadgeHeading = ({badge,headingPart1,headingPart2}) => {
  return (
    <div className='flex justify-center items-center'>
          <div className="max-w-[1500px] xl:max-w-[1100px]">
            <p className='text-sm font-Semibold'>{badge}</p>
            <h2 className='text-2xl  lg:text-5xl  font-bold'>{headingPart1}<span className='xl:hidden'>{headingPart2}</span> <div className='text-center mt-4 hidden xl:block'>{headingPart2}</div></h2>
          </div>
    </div>
  )
}

export default TextBadgeHeading