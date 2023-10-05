// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUh2uWATK35b3yQKo_73aO62NulnZqRw",
  authDomain: "private-auth-59fa4.firebaseapp.com",
  projectId: "private-auth-59fa4",
  storageBucket: "private-auth-59fa4.appspot.com",
  messagingSenderId: "1044190980845",
  appId: "1:1044190980845:web:041017d6eb330776a3bae4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
