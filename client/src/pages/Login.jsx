import React, { useState } from 'react'
import { useFirebase } from '../hooks/useFirebase'


const Login = () => {

const useAuth=useFirebase()
const [email,setEmail]=useState()
const [password,setPassword]=useState()

  return (
    <>
    <div>
      
    </div>

    <div>
      <h1>Voya</h1>
      <h3>Your AI travel companion. Plan less, explore more.</h3>

      <button>Continue with Google</button>
      <h4>OR</h4>

      <input type="email" name="email" id="email" placeholder='test@test.com' />
      <input type="password" name="password" id="password" placeholder='Min. 8 Characters' />
      <button></button>
    </div>

    
    </>
  )
}

export default Login
