import React from 'react'
import Navbar from './pages/LandingPage/Navbar'
import FirstLeftSection from './pages/LandingPage/FirstLeftSection'
import FirstRightSection from './pages/LandingPage/FirstRightSection'
import SecondSection from './pages/LandingPage/SecondSection'
import ThirdLeftSection from './pages/LandingPage/ThirdLeftSection'
import ThirdRightSection from './pages/LandingPage/ThirdRightSection'
import FourthSection from './pages/LandingPage/FourthSection'

const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth scrollbar-none">

      {/* Navbar — fixed height of 80px (h-20) */}
      <div className="h-20">
        <Navbar />
      </div>

      {/* Hero section — full viewport minus navbar */}
      <div className="h-[calc(100vh-5rem)] bg-[#FFFDF9] flex border-none">
        <FirstLeftSection />
        <FirstRightSection />
      </div>

      {/* Second section — full viewport height */}
      <div className="h-[70vh] flex items-center justify-center bg-[#FFF8F5] border-none">
        <SecondSection/>
      </div>
      <div className="h-[70vh] w-screen bg-[#FFF8F5] flex border-none items-center justify-center gap-20">
        <ThirdLeftSection />
    <ThirdRightSection/>
      </div>
      <div className="h-[50vh] flex items-center justify-center border-none bg-[#F57C00]">
        <FourthSection/>
      </div>
    </div>
  )
}

export default App