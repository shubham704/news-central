// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZgPhvPzhfCGIeuufy57pL3SmF600FG2M",
  authDomain: "newscentral-1234c.firebaseapp.com",
  projectId: "newscentral-1234c",
  storageBucket: "newscentral-1234c.appspot.com",
  messagingSenderId: "879828794926",
  appId: "1:879828794926:web:a0dbc8cdf6a128795129bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
