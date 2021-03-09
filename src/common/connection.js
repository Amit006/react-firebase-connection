import React from "react";
import { firebase } from "@firebase/app";
import "firebase/database";
import "firebase/auth";

let DB_CONFIG = {
  apiKey: "AIzaSyCu81QkqkIsKhz2LyhPdvTXpUirrDyqBtg",
  authDomain: "scocialconnect.firebaseapp.com",
  databaseURL: "https://scocialconnect-default-rtdb.firebaseio.com",
  projectId: "scocialconnect",
  storageBucket: "scocialconnect.appspot.com",
  messagingSenderId: 315363602682,
  appId: "1:315363602682:web:6516cac85a98e4e9971943",
  measurementId: "G-LW1K1BQRDP"
};

if (!firebase?.apps?.length) {
  firebase.initializeApp(DB_CONFIG);
}

// export const db = firebase.firestore();
export const auth = new firebase.auth();
export const database = firebase.database();

database
  .child("users")
  .get()
  .then(function(snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch(function(error) {
    console.error(error);
  });

// console.log("db: ", db);
// db.collection("users")
//   .get()
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {});
//   });

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export function defaultFunction() {
  console.log(" Default Function ");
}

export function initialDB() {
  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCu81QkqkIsKhz2LyhPdvTXpUirrDyqBtg",
    authDomain: "scocialconnect.firebaseapp.com",
    projectId: "scocialconnect"
  });
}
