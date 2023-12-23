// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxaE3dzUgYPfxcAmGV6bSjxbDszwOkroA",
  authDomain: "crypto-tracker-7a636.firebaseapp.com",
  projectId: "crypto-tracker-7a636",
  storageBucket: "crypto-tracker-7a636.appspot.com",
  messagingSenderId: "979968136917",
  appId: "1:979968136917:web:6eb1ac846b65482933b45c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
