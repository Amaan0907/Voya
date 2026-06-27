import React from 'react'

const FirstLeftSection = () => {
  return (
    <>
      <div className='w-[70%] p-30 flex flex-col gap-9'>

        <div className='flex flex-col gap-9'>
      <h1 className='font-bold text-6xl hero-heading'>Plan your dream trip in <span className='text-amber-900'>seconds</span>, not hours  </h1>
      <p className='w-[68%] text-[19px]'>Our AI understand your unique travel style to curate bespoke itineraries. Experience the world like a local, curated by data</p>
      </div>
      
        <div className='flex gap-9'>

        <button className=' h-13 text-center bg-[#F57C00]  w-70  border-none text-white font-bold rounded-4xl hover:scale-110 shadow-olive-400 shadow-2xl'>Start Planning Free</button>
      
        <button className=' h-13 text-center  border-black border  w-70   text-black font-bold rounded-4xl  hover:bg-[#fff0ea]'>See a Sample Trip</button>
        </div>
    </div>

      
    
    </>
  )
}

export default FirstLeftSection
