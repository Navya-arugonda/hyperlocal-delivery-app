import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGRuQgkOY6XMKOtrnK4WmprZv7U-oUAuY",
  authDomain: "hyperlocal-delivery-bc4fe.firebaseapp.com",
  projectId: "hyperlocal-delivery-bc4fe",
  storageBucket: "hyperlocal-delivery-bc4fe.firebasestorage.app",
  messagingSenderId: "464235957410",
  appId: "1:464235957410:web:5132f041b5361e24d1dbfb",
  measurementId: "G-02R7NXBGMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
