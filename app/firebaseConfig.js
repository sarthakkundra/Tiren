import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCmbT-0BFwDFUU1rL5xaQIvPLwJ_O3Ufco",
    authDomain: "tidy-95429.firebaseapp.com",
    projectId: "tidy-95429",
    storageBucket: "tidy-95429.appspot.com",
    messagingSenderId: "782262801580",
    appId: "1:782262801580:web:f3bab34bc9e74c3656bb09",
    measurementId: "G-0XT754NK2B"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  console.log("FIREBASE APP STARTED")

  export default app;