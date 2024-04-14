// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3fHIuw70urebpMdE8l1XS-Vm0yYTt-vE",
  authDomain: "netflixgpt-9ab0b.firebaseapp.com",
  projectId: "netflixgpt-9ab0b",
  storageBucket: "netflixgpt-9ab0b.appspot.com",
  messagingSenderId: "998723957248",
  appId: "1:998723957248:web:fa9908a507d966bc989ee5",
  measurementId: "G-HP52CC1G75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();