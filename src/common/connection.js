import React from "react";
import { firebase } from "@firebase/app";
import "firebase/database";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCu81QkqkIsKhz2LyhPdvTXpUirrDyqBtg",
  authDomain: "scocialconnect.firebaseapp.com",
  databaseURL: "https://scocialconnect-default-rtdb.firebaseio.com",
  projectId: "scocialconnect",
  storageBucket: "scocialconnect.appspot.com",
  messagingSenderId: 315363602682,
  appId: "1:315363602682:web:6516cac85a98e4e9971943",
  measurementId: "G-LW1K1BQRDP"
});

export const db = firebase.firestore();
export const auth = new firebase.auth();
// export const  database = firebase.database();

console.log("db: ", db);
db.collection("users")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {});
  });

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function initialDB() {
  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCu81QkqkIsKhz2LyhPdvTXpUirrDyqBtg",
    authDomain: "scocialconnect.firebaseapp.com",
    projectId: "scocialconnect"
  });
}
