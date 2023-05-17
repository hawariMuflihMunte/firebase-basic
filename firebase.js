// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth} from 'firebase/auth';
import * as authentication from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// src/index.js

const firebaseConfig = {
  apiKey: "AIzaSyB7VEjBOSp1WofZY96Rb_JlpD7yePqODsM",
  authDomain: "basic-app-6d38b.firebaseapp.com",
  projectId: "basic-app-6d38b",
  storageBucket: "basic-app-6d38b.appspot.com",
  messagingSenderId: "495084675859",
  appId: "1:495084675859:web:217c9c99caf7ed8f31f0e6",
  measurementId: "G-J79N2E3267"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {
  firebaseConfig,
  firebaseApp,
  db,
  auth,
  authentication
};
