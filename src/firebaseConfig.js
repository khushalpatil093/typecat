import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDS9rPPBitW-zTQeyQHD0gAT8bH03wAxZU",
    authDomain: "acciojob-typingproject.firebaseapp.com",
    projectId: "acciojob-typingproject",
    storageBucket: "acciojob-typingproject.appspot.com",
    messagingSenderId: "629671309748",
    appId: "1:629671309748:web:93f8df47d77683be4982e1",
    measurementId: "G-1H9DQLDTZ2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db};