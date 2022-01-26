import * as firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJ2BfjRjdCy7LqN3FqtVNz5MZokeO-A-U",
  authDomain: "alterra-fgd.firebaseapp.com",
  projectId: "alterra-fgd",
  storageBucket: "alterra-fgd.appspot.com",
  messagingSenderId: "802530183050",
  appId: "1:802530183050:web:bd1419e007dfabb21d6a73",
  measurementId: "G-LSLGL3B425",
};

 const fire = firebase.initializeApp(firebaseConfig);
 export default fire