import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDLeHUx2IjA4Rmq5OhJ4d20wzsonez41LY",

  authDomain: "oustpan-hospital-system.firebaseapp.com",

  projectId: "oustpan-hospital-system",

  storageBucket: "oustpan-hospital-system.appspot.com",

  messagingSenderId: "135471434352",

  appId: "1:135471434352:web:2a61ccdd4b1bac5ad182b5"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();