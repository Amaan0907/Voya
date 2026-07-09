import React from 'react'
import Landing from './pages/LandingPage/LandingPage'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth scrollbar-none">
<Routes>

  <Route path='/' element={<Landing/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
     
     

    </div>
  )
}

export default App