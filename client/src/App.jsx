import React from 'react'
import Landing from './pages/LandingPage/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
// import DashBoard from './pages/DashBoard'


const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth scrollbar-none">
<Routes>

  <Route path='/' element={<Landing/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
</Routes>
     
     

    </div>
  )
}

export default App