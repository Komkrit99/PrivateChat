import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm4UYQ9DK1VvYIVzIeU7AZhqxrxCqDEhc",
  authDomain: "privatechat-1b489.firebaseapp.com",
  databaseURL: "https://privatechat-1b489-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "privatechat-1b489",
  storageBucket: "privatechat-1b489.appspot.com",
  messagingSenderId: "51679072110",
  appId: "1:51679072110:web:588c3f6357cdecc5adbb7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
