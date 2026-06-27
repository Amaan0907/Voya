import React from 'react'

const Footer = () => {
  return (
      <div className='flex items-center justify-center bg-[#FFF0EE] h-[25vh]'>
      <div className='flex flex-col gap-4 w-[40vw]'>
        <h4 className='text-amber-900 text-4xl font-bold hero-heading'>Voya</h4>
        <h3 className='text-[15px] w-[20vw] text-zinc-700'>Crafting bespoke journeys for the modern adventurer since 2026</h3>
      </div>
      <div className='flex gap-6'>

              <a href="#privacy" className='hover:text-amber-900 text-zinc-700' >Privacy Policy</a>
              <a href="#terms" className='hover:text-amber-900 text-zinc-700'>Terms of Service</a>
              <a href="#contact" className='hover:text-amber-900 text-zinc-700'>Contact us</a>

              <h3 className='text-zinc-700'>© 2026 Voya. All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer
