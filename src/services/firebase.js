import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASHWxZ0OmhED-FlFn3h3lKmaEMnkxRBvw",
  authDomain: "ensayos-app.firebaseapp.com",
  projectId: "ensayos-app",
  storageBucket: "ensayos-app.appspot.com",
  messagingSenderId: "1052995194894",
  appId: "1:1052995194894:web:af2ea5e10570831190ac5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )

export const collectionRef = collection(db, 'canciones');