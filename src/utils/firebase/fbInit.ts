// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEgX919CEN67VMwDWzOkLff2dzQwDutUA",
  authDomain: "web-vue-firebase.firebaseapp.com",
  projectId: "web-vue-firebase",
  storageBucket: "web-vue-firebase.appspot.com",
  messagingSenderId: "951669030106",
  appId: "1:951669030106:web:706b8c121de341e39439e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth();
