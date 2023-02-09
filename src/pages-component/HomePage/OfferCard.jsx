import { MdImportExport } from "react-icons/md"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Headin2 from "../../common component/Heading2"
import { offerData } from "../../constant/Data"

const OfferCard = () => {
  return (
    <div className='container mx-auto px-10 py-10 space-y-20'>
      <div className="flex flex-col items-center justify-center">
          <Headin2 data={'What We Offer'}/>
          <p className="text-center max-w-[600px]">The SyncCloud platform offers you the different kind of solutions for your business. 
              Discover all our Solutions below:
          </p>
        </div>

        <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {offerData.map(card=>
                <div key={card.id}>
                        <div className='relative flex flex-col  p-5   border rounded border-primaryColor'>
                            <div className='flex items-center justify-center  h-[50px] w-[50px] rounded-full bg-gray-200'>{card.icon}</div>
                            <div className="pt-5">
                                <h3 className="font-bold text-md mb-2">{card.title}</h3>
                                <p className='text-base'> {card.description}</p>

                                <button className='pt-4 flex items-center'> Read More <span><MdOutlineKeyboardArrowRight className='text-2xl'/></span> </button>
                            </div>
                        </div>               
                </div>
                )}
        </div>
        
      
    </div>
  )
}

export default OfferCard