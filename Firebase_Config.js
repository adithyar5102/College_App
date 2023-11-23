// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYYM9AnbLW_JL828JmPvNXXJ4Tk1f4u0Q",
  authDomain: "collegeapp-b3066.firebaseapp.com",
  projectId: "collegeapp-b3066",
  storageBucket: "collegeapp-b3066.appspot.com",
  messagingSenderId: "1076527338542",
  appId: "1:1076527338542:web:6d13fcb413c3baaaa1fbbf",
  measurementId: "G-1XLYXXV3TN"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DATABASE = getDatabase(FIREBASE_APP)
//const analytics = getAnalytics(app);