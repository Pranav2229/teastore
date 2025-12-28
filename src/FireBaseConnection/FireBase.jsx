// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAz0SXuGvY_o0P4Itv8asDcQxtbtC3o0o",
    authDomain: "tea-store-cce78.firebaseapp.com",
    projectId: "tea-store-cce78",
    storageBucket: "tea-store-cce78.firebasestorage.app",
    messagingSenderId: "790259177600",
    appId: "1:790259177600:web:46c70d2660903b1ecb6e65",
    measurementId: "G-8BD1N257HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export default app