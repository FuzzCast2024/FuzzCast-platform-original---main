import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0gc0B7NtSl-16ha3psdEdiYp1vUn99i8",
  authDomain: "fuzzinstadatabase.firebaseapp.com",
  projectId: "fuzzinstadatabase",
  storageBucket: "fuzzinstadatabase.appspot.com",
  messagingSenderId: "956362354934",
  appId: "1:956362354934:web:a079fbead0ba4eba78bcd7",
  measurementId: "G-FZDH5G13BG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

