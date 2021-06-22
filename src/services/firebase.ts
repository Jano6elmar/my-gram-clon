import  * as firebase from 'firebase';
/* import 'firebase/firestore' */

var firebaseConfig = {
    apiKey: "AIzaSyA4IJ4NeR_ZhNvy1RXCAzHAgA8KjZB3yg0",
    authDomain: "my-gram-clon.firebaseapp.com",
    projectId: "my-gram-clon",
    storageBucket: "my-gram-clon.appspot.com",
    messagingSenderId: "203473920356",
    appId: "1:203473920356:web:f495abad469aa3231b9a71",
    measurementId: "G-2PTGZ53R11"
  };
  // Initialize Firebase
  firebase.default.initializeApp(firebaseConfig);

  export const auth = firebase.default.auth()
  export const db = firebase.default.firestore()
  export const storage = firebase.default.storage()


                                                 
/* import  firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA4IJ4NeR_ZhNvy1RXCAzHAgA8KjZB3yg0",
    authDomain: "my-gram-clon.firebaseapp.com",
    projectId: "my-gram-clon",
    storageBucket: "my-gram-clon.appspot.com",
    messagingSenderId: "203473920356",
    appId: "1:203473920356:web:f495abad469aa3231b9a71",
    measurementId: "G-2PTGZ53R11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage() */






















