import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';

// Initalize and export Firebase.

var config = {
    apiKey: "AIzaSyCN-gu-dlSG6Q4T8oXpMnNMol9YYbwKtcc",
    authDomain: "poke-b6508.firebaseapp.com",
    databaseURL: "https://poke-b6508.firebaseio.com",
    projectId: "poke-b6508",
    storageBucket: "poke-b6508.appspot.com",
    messagingSenderId: "770270600975"
  };
 

export default firebase.initializeApp(config);