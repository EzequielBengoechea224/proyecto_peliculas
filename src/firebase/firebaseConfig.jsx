
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDML0aUkLwFhH1j2wZRhGQ_YcTBqhjcGus",
  authDomain: "proyecto-netflix-fca30.firebaseapp.com",
  projectId: "proyecto-netflix-fca30",
  storageBucket: "proyecto-netflix-fca30.appspot.com",
  messagingSenderId: "610321141206",
  appId: "1:610321141206:web:c0546b06bcf6b50fe3e877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

//This app dont use google analitycs so it´s irrelevant to instanciate that

export {auth, db};