// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // apiKey: "AIzaSyBbcoNDYn6lXmwgtrzQkjjYKaLSVjwv7e0",
  // authDomain: "onal-mudiyum.firebaseapp.com",
  // projectId: "onal-mudiyum",
  // storageBucket: "onal-mudiyum.firebasestorage.app",
  // messagingSenderId: "843102660266",
  // appId: "1:843102660266:web:9efda8bafa88a13e7cd2d3",
  // measurementId: "G-KF34M4W6R0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);




