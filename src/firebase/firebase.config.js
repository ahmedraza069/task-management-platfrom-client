// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACPAbGIjRtudVaBgphavG9PCh607I60XY",
  authDomain: "task-management-platfrom.firebaseapp.com",
  projectId: "task-management-platfrom",
  storageBucket: "task-management-platfrom.appspot.com",
  messagingSenderId: "9059750983",
  appId: "1:9059750983:web:f991effa03fde8fab80d62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;