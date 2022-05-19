// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ6ZVMKzTv3PdTyrdDXYoNXFMjF3OUX4k",
  authDomain: "netflix-clone-df44c.firebaseapp.com",
  projectId: "netflix-clone-df44c",
  storageBucket: "netflix-clone-df44c.appspot.com",
  messagingSenderId: "741744397868",
  appId: "1:741744397868:web:ae4819be4868e12a8d4b89"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }