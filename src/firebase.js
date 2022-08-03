import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKIvWX4dtXQI_s0Pd4UyDN4wvkKoJPJdY",

  authDomain: "clone-4dbfa.firebaseapp.com",

  projectId: "clone-4dbfa",

  storageBucket: "clone-4dbfa.appspot.com",

  messagingSenderId: "996479296840",

  appId: "1:996479296840:web:e44c40132e7a192488ff7d",

  measurementId: "G-FJLHX6809X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
