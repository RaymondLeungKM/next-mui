// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8l33WqTH0B-Ugk4_kyMjJjAUxvfKt5Cg",
  authDomain: "raymond-webdev-profile.firebaseapp.com",
  databaseURL: "https://raymond-webdev-profile.firebaseio.com",
  projectId: "raymond-webdev-profile",
  storageBucket: "raymond-webdev-profile.appspot.com",
  messagingSenderId: "778093067642",
  appId: "1:778093067642:web:1c627f3364756ba147aac3",
  measurementId: "G-SLS21HYDT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);
const database = getDatabase(app);
// const analytics = getAnalytics(app);

export { auth, database };