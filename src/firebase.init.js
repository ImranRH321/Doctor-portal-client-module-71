// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0tLBePQS4WWDiDuLpgWZJf6ztqUuhln8",
  authDomain: "doctors-portal-32908.firebaseapp.com",
  projectId: "doctors-portal-32908",
  storageBucket: "doctors-portal-32908.appspot.com",
  messagingSenderId: "216709749436",
  appId: "1:216709749436:web:8d4e835d377fe849658eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;