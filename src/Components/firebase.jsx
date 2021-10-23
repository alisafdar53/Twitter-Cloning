// import { initializeApp } from 'firebase';
import firebase from "firebase";
import "firebase/firebase-firestore"
import "firebase/storage"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq73zYb7KMEV-cqyaOQlE6b4wUvjKvexs",
    authDomain: "twitter-clone-3a0ad.firebaseapp.com",
    databaseURL: "https://twitter-clone-3a0ad-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-3a0ad",
    storageBucket: "twitter-clone-3a0ad.appspot.com",
    messagingSenderId: "790571077663",
    appId: "1:790571077663:web:df892f122ed6865fab052a",
    measurementId: "G-04T2T2J6W1"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
