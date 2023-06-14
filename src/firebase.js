// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBgkedJFuuz5QhMTBjwjw7cPg621_N3kRw",
    authDomain: "clone-262fb.firebaseapp.com",
    projectId: "clone-262fb",
    storageBucket: "clone-262fb.appspot.com",
    messagingSenderId: "196571249639",
    appId: "1:196571249639:web:ee8f2e9e71c0105b565b42",
    measurementId: "G-KJK89NWRT5"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};