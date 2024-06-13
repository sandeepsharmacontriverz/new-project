

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB3FJuHX3TG4emsEYIcBeXhSeFUAdxKeMM",
  authDomain: "e-commerce-13b4e.firebaseapp.com",
  projectId: "e-commerce-13b4e",
  storageBucket: "e-commerce-13b4e.appspot.com",
  messagingSenderId: "189715997466",
  appId: "1:189715997466:web:51d22bc1bb52421ae7c2a3",
  measurementId: "G-C2205J3QD8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
const firestore = getFirestore(app);

googleProvider.setCustomParameters({
  prompt: 'select_account'
});


export { auth, googleProvider as provider,storage,firestore  };