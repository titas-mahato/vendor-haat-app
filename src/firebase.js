// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhYuWpLPlf4M1UU8_qgAeTihRGtt_-kYM",
  authDomain: "vendor-app-9e6e1.firebaseapp.com",
  projectId: "vendor-app-9e6e1",
  storageBucket: "vendor-app-9e6e1.appspot.com",
  messagingSenderId: "252296288076",
  appId: "1:252296288076:web:9cd5aa7f0474738c39a1e9",
  measurementId: "G-BWLC3TLB5Z"
};

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Firebase initialization error:", error);
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };