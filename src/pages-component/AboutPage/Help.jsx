

const Help = () => {
  return (
    <div className= 'py-10 px-5 lg:px-10 bg-secondryColor text-white flex items-center justify-center rounded-xl'>
      

        <div className='   w-[100%] bg-darkGary   rounded-3xl flex flex-col justify-between space-y-10  sm:flex-row sm:space-y-0' >
            <div >
                <p className='-mb-1 text-[0.5rem] lg:text-sm font-[50]'>CONTACTS</p>
                <h4 className='font-[600] text-md lg:text-2xl leading-5 mb-3'>We are here to help you any <br/> time you want.</h4>
                <p className=' text-xs lg:text-base'>The longer you wait to take action, <br/> the time more you fall behind.</p>
                <button className='mt-3 px-2 sm:px-4 py-1 text-sm sm:text-base bg-white rounded-md border-none text-gray-400'>Send an Email</button>
            </div>

            <div className='space-y-2'>

                <div>
                    <h4 className='text-sm font-[500] lg:text-lg lg:font-[600]'>Phone</h4>
                    <p className='text-xs lg:text-base'>+12232327833</p>
                </div>

                <div>
                    <h4 className='text-sm font-[500] lg:text-lg lg:font-[600]'>Email</h4>
                    <p className='text-xs lg:text-base'>syncclouds@gmail.com</p>
                </div>

                <div>
                    <h4 className='text-sm font-[500] lg:text-lg lg:font-[600]'>Adress</h4>
                    <p className='text-xs lg:text-base'>houe #90, block X, #celecon Valley,<br/>USA</p>
                </div>

            </div>
        </div>

  </div>
  )
}

export default Help