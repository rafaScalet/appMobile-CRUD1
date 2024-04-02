import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKuWkz_p5cHcAblKXn094nL0SPFuk0M7M",
  authDomain: "mobilecrud-10265.firebaseapp.com",
  databaseURL: "https://mobilecrud-10265-default-rtdb.firebaseio.com",
  projectId: "mobilecrud-10265",
  storageBucket: "mobilecrud-10265.appspot.com",
  messagingSenderId: "557415990100",
  appId: "1:557415990100:web:384ecc0cdc93d6eb367ec1",
  measurementId: "G-FY22YSTRSP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;