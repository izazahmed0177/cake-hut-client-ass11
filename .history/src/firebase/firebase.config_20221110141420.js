// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCYbav-5LZ7FfSFVRIPgBsapWIFd3KVYNc",
    // authDomain: "cake-hut-11b0b.firebaseapp.com",
    // projectId: "cake-hut-11b0b",
    // storageBucket: "cake-hut-11b0b.appspot.com",
    // messagingSenderId: "484092231566",
    // appId: "1:484092231566:web:e157e1edde04f2ad0eaedf"

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,





};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;