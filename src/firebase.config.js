// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKey5H-FT9gp8rRk7q2qlcMk9-y6ze5oc",
  authDomain: "car-store-86d15.firebaseapp.com",
  projectId: "car-store-86d15",
  storageBucket: "car-store-86d15.appspot.com",
  messagingSenderId: "264164924302",
  appId: "1:264164924302:web:2ac04da69a816be63822df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;