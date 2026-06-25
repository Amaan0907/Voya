
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBCWwV1KT7WhwNjwnB6ybPujJcYU9FEZ5o",
    authDomain: "voya-9fb3c.firebaseapp.com",
    projectId: "voya-9fb3c",
    storageBucket: "voya-9fb3c.firebasestorage.app",
    messagingSenderId: "289174974002",
    appId: "1:289174974002:web:390c6c7d1f258b8aa0162b",
    measurementId: "G-LLR47N9H9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);