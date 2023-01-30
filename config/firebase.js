import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8l33WqTH0B-Ugk4_kyMjJjAUxvfKt5Cg",
  authDomain: "raymond-webdev-profile.firebaseapp.com",
  databaseURL: "https://raymond-webdev-profile.firebaseio.com",
  projectId: "raymond-webdev-profile",
  storageBucket: "raymond-webdev-profile.appspot.com",
  messagingSenderId: "778093067642",
  appId: "1:778093067642:web:1c627f3364756ba147aac3",
  measurementId: "G-SLS21HYDT5",
  signInSuccessUrl: "https://www.yahoo.com.hk"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };