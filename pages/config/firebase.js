import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZogdehHTxxuXvOC9B9Yh7HR0SorpAuH8",
  authDomain: "kleencode-dfc9b.firebaseapp.com",
  projectId: "kleencode-dfc9b",
  storageBucket: "kleencode-dfc9b.appspot.com",
  messagingSenderId: "200891982065",
  appId: "1:200891982065:web:9fe04c8323ef7da00ec950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);