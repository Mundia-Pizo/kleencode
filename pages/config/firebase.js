// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore(app);

export default { app , db};