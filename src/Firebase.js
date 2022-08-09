// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClUQlUnYaidISLCisj1wFIYoZVQTZB94E",
  authDomain: "class-demo-94ab5.firebaseapp.com",
  projectId: "class-demo-94ab5",
  storageBucket: "class-demo-94ab5.appspot.com",
  messagingSenderId: "249946355583",
  appId: "1:249946355583:web:ab1b8c373215342c808c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export let db = getFirestore(app);
export const storage = getStorage(app);