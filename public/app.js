// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getAnalytics } from "../node_modules/firebase/firestore/lite";
import * as auth from "../node_modules/firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7VEjBOSp1WofZY96Rb_JlpD7yePqODsM",
  authDomain: "basic-app-6d38b.firebaseapp.com",
  projectId: "basic-app-6d38b",
  storageBucket: "basic-app-6d38b.appspot.com",
  messagingSenderId: "495084675859",
  appId: "1:495084675859:web:217c9c99caf7ed8f31f0e6",
  measurementId: "G-J79N2E3267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const authentication = auth.getAuth(app);

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(authentication, provider);
signOutBtn.onclick = () => auth.signOut(authentication)
