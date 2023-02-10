import Headin2 from "./Heading2"


const PagesHero = ({description,data,btnData}) => {
  return (
    <div className='bg-gray-200 px-10  h-[90vh] flex items-center justify-center'>
        <div className='max-w-[1000px] text-center space-y-5 flex flex-col items-center justify-center'>
            <Headin2 data={data}/>
            <p className='text-base lg:text-lg'>{description}</p>
            <button className='px-10 py-1 border border-black rounded-full bg-white'>{btnData}</button>
        </div>
    </div>
  )
}

export default PagesHero