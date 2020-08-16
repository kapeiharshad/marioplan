import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA4jlVEY4_qPWd3AB23edmjiaJ8m0GWMk",
  authDomain: "marioplan-8bf3c.firebaseapp.com",
  databaseURL: "https://marioplan-8bf3c.firebaseio.com",
  projectId: "marioplan-8bf3c",
  storageBucket: "marioplan-8bf3c.appspot.com",
  messagingSenderId: "117066138050",
  appId: "1:117066138050:web:f4ce48964b05a21c03965b",
  measurementId: "G-F8Q1WNPERL"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
