import React from 'react'

const SecondSection = () => {
  return (
    <div className='flex flex-col gap-20'>
        <div className='flex flex-col items-center gap-6'>
              <h1 className='text-4xl hero-heading'>Three steps to your perfect trip</h1>
            <div className='h-2 w-24 bg-amber-900 rounded-2xl '></div>
        </div>

        <div className='flex gap-9'>
              <div className='w-100 h-60 rounded-2xl bg-white
               border-t-6 border-[#D5B699] flex items-center flex-col gap-5'> 
                  <div className='w-15 bg-[#FED7CA] h-15 mt-5 flex items-center justify-center rounded-[50%] text-3xl text-[#964900]'>1</div>
                <h1 className='hero-heading text-2xl'>Choose Your Vibe</h1>
                  <h3 className='card  text-zinc-800 text-[15px] text-center w-[85%]'>Tell us Where you want to go or what you're in the mood for-adventure, relaxation,or culture</h3>
            </div>
              <div className='w-100 h-60 rounded-2xl bg-white border-t-6 border-[#D5B699] flex items-center flex-col gap-5'> 
                  <div className='w-15 bg-[#FED7CA] h-15 mt-5 flex items-center justify-center rounded-[50%] text-3xl text-[#964900]'>2</div>
                <h1 className='hero-heading text-2xl'>AI Magic</h1>
                  <h3 className='card text-center w-[85%] text-zinc-800 text-[15px]'>Our engine scours thousands of local spots and logistics to build a seamless flow for your journey.</h3>
            </div>
              <div className='w-100 h-60 rounded-2xl bg-white border-t-6 border-[#D5B699] flex items-center flex-col gap-5'> 
                  <div className='w-15 bg-[#FED7CA] h-15 mt-5 flex items-center justify-center rounded-[50%] text-3xltext-[#964900]'>3</div>
                <h1 className='hero-heading text-2xl'>Pack & Go</h1>
                  <h3 className='card  text-center w-[85%] text-zinc-800 text-[15px]'>Get a beautiful, shareable itineary with maps, bookings,and local secrets ready on your phone</h3>
            </div>
            
        </div>
    </div>
  )
}

export default SecondSection
