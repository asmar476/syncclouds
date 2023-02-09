import TextBadgeHeading from "../../common component/TextBadgeHeading"

const Awards = () => {
  return (
    <div className='container mx-auto px-10'>
    <div className='flex flex-col items-center justify-center  space-y-10'>
      <TextBadgeHeading badge={'AWARDS & HONORS'} headingPart1={'The awards won by our project.'}/>
      <p className='max-w-[900px] text-base lg:text-lg text-center'>Our clients describe us as a product team which creates amazing Web & Mobile App Development,
           by crafting top-notch user experience.</p>
    </div>

    <div className='flex flex-col gap-10 md:flex-row justify-around items-center py-10'>
      <div className='h-[200px] w-[200px] bg-gray-300'>0</div>
      <div className='h-[200px] w-[200px] bg-gray-300'>0</div>
      <div className='h-[200px] w-[200px] bg-gray-300'>0</div>
      <div className='h-[200px] w-[200px] bg-gray-300'>0</div>
    </div>

    <div className='flex items-center justify-center pb-20'>
    <p className='max-w-[900px] text-base lg:text-lg text-center'>We Are Among The Top Developing,Designing And Digital Marketing Companies.</p>
    </div>

</div>
  )
}

export default Awards