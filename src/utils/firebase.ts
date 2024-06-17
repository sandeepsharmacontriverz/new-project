

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
  apiKey: "AIzaSyCy-euQc_Ovgkk_LY4GspL6x-BHmblXzhg",
  authDomain: "dlaller1988-31279.firebaseapp.com",
  projectId: "dlaller1988-31279",
  storageBucket: "dlaller1988-31279.appspot.com",
  messagingSenderId: "774150656757",
  appId: "1:774150656757:web:3ffd8c5f01a37b165fabbc"
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