// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0AHabdjK7P3lbfDfeFdvfyEy4qrXEJIY",
  authDomain: "biblio-react.firebaseapp.com",
  projectId: "biblio-react",
  storageBucket: "biblio-react.appspot.com",
  messagingSenderId: "889256622911",
  appId: "1:889256622911:web:0904ca44d5011629b4b18a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);