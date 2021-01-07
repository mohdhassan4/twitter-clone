// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQfpADgJE6GpVuTtT5RfrACWmby9QnIXA",
    authDomain: "twitterclone-8b212.firebaseapp.com",
    projectId: "twitterclone-8b212",
    storageBucket: "twitterclone-8b212.appspot.com",
    messagingSenderId: "769407143882",
    appId: "1:769407143882:web:8175adc7bf912669bf8933",
    measurementId: "G-88MJ25W10P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 