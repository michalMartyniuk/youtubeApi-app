import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyDZP2PhDhaOA6taGb_YhLlcvFQcprgmZz8",
  authDomain: "api-app-c6d72.firebaseapp.com",
  databaseURL: "https://api-app-c6d72.firebaseio.com",
  projectId: "api-app-c6d72",
  storageBucket: "",
  messagingSenderId: "531150046847",
  appId: "1:531150046847:web:8527fc57f7baedf848614a",
  measurementId: "G-DMJQ3LLS6Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;