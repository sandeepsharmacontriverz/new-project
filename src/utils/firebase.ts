import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';



// const firebaseConfig = {
//   apiKey: "AIzaSyB3FJuHX3TG4emsEYIcBeXhSeFUAdxKeMM",
//   authDomain: "e-commerce-13b4e.firebaseapp.com",
//   projectId: "e-commerce-13b4e",
//   storageBucket: "e-commerce-13b4e.appspot.com",
//   messagingSenderId: "189715997466",
//   appId: "1:189715997466:web:51d22bc1bb52421ae7c2a3",
//   measurementId: "G-C2205J3QD8"
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
const firestore = getFirestore(app);

googleProvider.setCustomParameters({
  prompt: 'select_account'
});


export { auth, googleProvider as provider, storage, firestore };