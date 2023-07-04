// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr1Owc7VnNWT0cgBfx2ZICupuc5sd0y2s",
  authDomain: "fir-practice-6410a.firebaseapp.com",
  projectId: "fir-practice-6410a",
  storageBucket: "fir-practice-6410a.appspot.com",
  messagingSenderId: "211283726062",
  appId: "1:211283726062:web:54990b7d68a00f366d6dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();