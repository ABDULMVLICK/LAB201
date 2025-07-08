// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDckl249wTssDuqcgSRaBCIIJneRiCe618",
  authDomain: "the-beaches-94f0e.firebaseapp.com",
  projectId: "the-beaches-94f0e",
  storageBucket: "the-beaches-94f0e.firebasestorage.app",
  messagingSenderId: "526215140064",
  appId: "1:526215140064:web:71861c6b4af358b898b685",
  measurementId: "G-YYBRVYJCPY"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Récupérer Firestore
const db = getFirestore(app);

export { db };
