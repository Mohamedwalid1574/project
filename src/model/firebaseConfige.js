/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARb66BsTD4N7oxI3Fo02zBix5LlRXwgJQ",
  authDomain: "linkedin-project-f1f7d.firebaseapp.com",
  projectId: "linkedin-project-f1f7d",
  storageBucket: "linkedin-project-f1f7d.appspot.com",
  messagingSenderId: "452363902965",
  appId: "1:452363902965:web:68b36b8feb95121c814abc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


