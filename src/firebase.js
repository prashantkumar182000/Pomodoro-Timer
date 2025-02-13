// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB961U2q-6m4j_a7O-k1hXRUym6bKpy4SE",
  authDomain: "pomodoro-timer-468a4.firebaseapp.com",
  projectId: "pomodoro-timer-468a4",
  storageBucket: "pomodoro-timer-468a4.appspot.com",
  messagingSenderId: "640820412093",
  appId: "1:640820412093:web:bfd7d1376d9a88eb4f01d4",
  measurementId: "G-N89GGFESGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth };