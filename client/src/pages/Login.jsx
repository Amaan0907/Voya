import React, { useState } from "react";
import Footer from "../components/Footer.jsx";
import useFirebase from "../hooks/useFirebase.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const firebase=useFirebase()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      await firebase.signin(email,password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
      throw error
    }  
  }

  const handleGoogleSignIn=async()=>{
    try {
      const user= await firebase.googleSignIn()
      navigate('/dashboard')
      console.log(user)
    } catch (error) {
      console.log(error.message)
      throw error
    }
  }

  return (
    
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col bg-[#fdf3ee]">
      <div className="flex flex-1 flex-col md:flex-row w-full">
        
        <div
          className="relative w-full md:w-1/2 md:flex-shrink-0 min-h-[320px] md:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
        </div>

       
        <div className="w-full md:w-1/2 min-w-0 flex items-center justify-center px-8 py-14 md:py-0">
          <div className="w-full max-w-md">
            <h1 className="hero-heading text-4xl leading-tight text-stone-900 mb-4">
              Voya
            </h1>
            <p className="text-stone-600 mb-8">
              Your AI travel companion. Plan less, explore more.
            </p>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white py-3 px-4 text-stone-800 font-medium hover:bg-stone-50 transition-colors mb-5 cursor-pointer"
            onClick={handleGoogleSignIn}
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="h-px flex-1 bg-stone-300" />
              <span className="text-xs tracking-widest text-stone-400">OR</span>
              <div className="h-px flex-1 bg-stone-300" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-stone-800 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. wanderer@travel.com"
                  className="w-full rounded-full border border-stone-300 bg-[#fbeee7] px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/40"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-stone-800 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-full border border-stone-300 bg-[#fbeee7] px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/40"
                />
              </div>

              {/* <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-stone-700">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded-full border-stone-400 accent-amber-800"
                  />
                  Remember me
                </label>
                <a href="#" className="font-semibold text-amber-800 hover:underline">
                  Forgot password?
                </a>
              </div> */}

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-b from-amber-800 to-amber-900 py-3 text-white font-semibold shadow-sm hover:from-amber-900 hover:to-amber-950 transition-colors"
              >
                Sign In to Explore
              </button>
            </form>

            <p className="text-center text-sm text-stone-600 mt-6">
              Don&apos;t have an account?{" "}
              <Link to='/signup' className="font-semibold text-amber-800 hover:underline">
              Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-full min-w-0">
        <Footer />
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.5 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.7 35 27 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.6 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.6 5.4C41.6 36.9 44 31 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}