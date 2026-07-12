import { firebaseConfig, auth } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export class AuthService {
    constructor(auth){
        this.auth=auth,
        this.provider=new GoogleAuthProvider()
    }
    
    async signup(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
            console.log(userCredential)

            return userCredential.user
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }


    async signin(email,password){
        try {
            const userCredential=await signInWithEmailAndPassword(this.auth,email,password)

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

    async googleSignIn(){
        try {
            const res= await signInWithPopup(this.auth,this.provider)

            return res.user
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }
}

const authService = new AuthService(auth)

export default authService
