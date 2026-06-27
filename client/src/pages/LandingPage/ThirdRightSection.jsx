import React from 'react'
import { CircleCheck } from 'lucide-react';
const ThirdRightSection = () => {
  return (
    <div className='flex flex-col gap-3 '>
      <h1 className='hero-heading text-3xl mb-6'>Smart planning tailored, for you</h1>
      <h3 className='flex  items-center gap-3' ><CircleCheck className='w-4 h-4 '/>Real-time weather and transport integration for dynamic scheduling</h3>
          <h3 className='flex items-center gap-3'><CircleCheck className='w-4 h-4 '/>Instant group coordination and split billing suggestions</h3>
          <h3 className='flex items-center gap-3 '><CircleCheck className=' w-4 h-4'/> Interactive maps with offline support for every step of the journey</h3>
    </div>
  )
}

export default ThirdRightSection
