// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "chrysalis-bfb11.firebaseapp.com",
  databaseURL: "https://chrysalis-bfb11-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chrysalis-bfb11",
  storageBucket: "chrysalis-bfb11.appspot.com",
  messagingSenderId: "137580653890",
  appId: "1:137580653890:web:7a79b7299f2e2d98ec2cdb",
  measurementId: "G-J8L12X1XER"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
