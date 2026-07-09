import { useContext } from "react";
import Firebasecontext from "../context/Firebasecontext";


const useFirebase=()=>{
    const firebase=useContext(Firebasecontext)
return firebase
}

export {useFirebase}