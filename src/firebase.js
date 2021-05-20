import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMGggO768CbIvr6b2_NGhXXYCmBhubmzM",
  authDomain: "todo-app-ce094.firebaseapp.com",
  projectId: "todo-app-ce094",
  storageBucket: "todo-app-ce094.appspot.com",
  messagingSenderId: "1045531127810",
  appId: "1:1045531127810:web:302eca7f2242da693bf71b",
  measurementId: "G-F659KV0Q40",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
