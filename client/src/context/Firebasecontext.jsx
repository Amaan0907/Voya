import React,{createContext} from 'react'
import authService from '../firebase/auth'

const FirebaseContext=createContext()

export const FirebaseProvider=(props)=>{
    return <FirebaseContext.Provider value={authService}>
        {props.children}
    </FirebaseContext.Provider>
}





export default FirebaseContext



