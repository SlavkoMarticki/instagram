// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8NUoFeORt-eq_yXU3z17OOlukkxub46c",
  authDomain: "instagram-ae851.firebaseapp.com",
  projectId: "instagram-ae851",
  storageBucket: "instagram-ae851.appspot.com",
  messagingSenderId: "889558451356",
  appId: "1:889558451356:web:15bcb30f1f6f6bad79d959",
  measurementId: "G-EZCN0PM1MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);