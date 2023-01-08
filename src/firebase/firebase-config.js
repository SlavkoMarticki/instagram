import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8NUoFeORt-eq_yXU3z17OOlukkxub46c",
    authDomain: "instagram-ae851.firebaseapp.com",
    projectId: "instagram-ae851",
    storageBucket: "instagram-ae851.appspot.com",
    messagingSenderId: "889558451356",
    appId: "1:889558451356:web:15bcb30f1f6f6bad79d959",
    measurementId: "G-EZCN0PM1MS"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);