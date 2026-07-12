import { firebaseConfig, auth } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";


export class AuthService {
    constructor(auth){
        this.auth=auth
    }
    
    async signup(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            

            console.log(userCredential)

            return userCredential.user
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }


    async signin(email,password){
        try {
            const userCredential=await signInWithEmailAndPassword(auth,email,password)

            return userCredential.user
        } catch (error) {
            console.log(error)
            throw error
        }
        return null
    }

    async logout( ){
        await signOut(auth)
    }
    getCurrentUser(){
        return this.auth.currentUser
    }
}

const authService = new AuthService(auth)

export default authService
