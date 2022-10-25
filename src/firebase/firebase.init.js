// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA17GAlhY-OeZJgFmZDFR9IGzYvo7iQLHA",
  authDomain: "javascript-enthusiasts.firebaseapp.com",
  projectId: "javascript-enthusiasts",
  storageBucket: "javascript-enthusiasts.appspot.com",
  messagingSenderId: "760414359546",
  appId: "1:760414359546:web:54b09a9e4ff9cb37cdde43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;