import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA1eznhc8sF2PB-H-NbmgFrtpEwJw_3xG0",
    authDomain: "login-588ed.firebaseapp.com",
    projectId: "login-588ed",
    storageBucket: "login-588ed.appspot.com",
    messagingSenderId: "486505795480",
    appId: "1:486505795480:web:d3294e0792154b7752e5ed"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}