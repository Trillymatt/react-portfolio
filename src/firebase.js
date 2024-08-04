import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyARskZErTK-Y0VWsg4Yj3paFIbiYIX6j2U",
    authDomain: "portfolio-website-a7ab2.firebaseapp.com",
    projectId: "portfolio-website-a7ab2",
    storageBucket: "portfolio-website-a7ab2.appspot.com",
    messagingSenderId: "782283498651",
    appId: "1:782283498651:web:ac0912ae8f6aa8e8ae923e",
    measurementId: "G-XD9TR0SJDF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
