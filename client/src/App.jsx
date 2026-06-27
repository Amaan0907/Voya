import React from 'react'
import Navbar from './pages/LandingPage/Navbar'
import FirstLeftSection from './pages/LandingPage/FirstLeftSection'
import FirstRightSection from './pages/LandingPage/FirstRightSection'

const App = () => {
  return (
    <>
      <div className='h-20'>
        <Navbar />
        

      </div>
      <div className="h-screen bg-[#FFFDF9] flex"> 
      <FirstLeftSection/>
      <FirstRightSection/>

      </div>
      <div className="h-screen bg-amber-600"> hello2</div>
    </>
  )
}

export default App
