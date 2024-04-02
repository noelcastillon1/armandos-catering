// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtERI2xTbffshySW40NYNh7Ul-figWDrw",
  authDomain: "armandos-catering.firebaseapp.com",
  projectId: "armandos-catering",
  storageBucket: "armandos-catering.appspot.com",
  messagingSenderId: "142039763700",
  appId: "1:142039763700:web:5a7680cdaf37b50aebeca1",
  measurementId: "G-H102YN9J8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);