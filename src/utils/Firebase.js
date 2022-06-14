// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDnOYy9SaouY-u_THoLhPTv4FsQ_TYUg",
  authDomain: "musicfy-7ad0d.firebaseapp.com",
  databaseURL: "https://musicfy-7ad0d-default-rtdb.firebaseio.com",
  projectId: "musicfy-7ad0d",
  storageBucket: "musicfy-7ad0d.appspot.com",
  messagingSenderId: "628220109401",
  appId: "1:628220109401:web:82abeab4d8dc21511d0748",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
