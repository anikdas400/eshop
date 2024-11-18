// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4aStQXEwQwFuuGOHZQnWz8JxAcpeUZEM",
  authDomain: "eshop-8ee50.firebaseapp.com",
  projectId: "eshop-8ee50",
  storageBucket: "eshop-8ee50.appspot.com",
  messagingSenderId: "349533960549",
  appId: "1:349533960549:web:446c86cc3e5b8eec02898c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireBD = getFirestore()
const auth = getAuth(app)

export {fireBD, auth}