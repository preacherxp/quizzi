import React from "react";
import "./Main.scss";
import firebase from "firebase";

function Main() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const docRef = db.collection("quizes");

  docRef
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot.docs[0].data());
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

  return <div className="main">%REACT_APP_NOT_SECRET_CODE%</div>;
}

export default Main;
