import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDQiKOGkY7XKzix4LsrQOzlHuQoVf-Pt8Q",
  authDomain: "math-formules-and-proofs.firebaseapp.com",
  databaseURL: "https://math-formules-and-proofs.firebaseio.com",
  projectId: "math-formules-and-proofs",
  storageBucket: "math-formules-and-proofs.appspot.com",
  messagingSenderId: "509529013015"
}

firebase.initializeApp(firebaseConfig);

export const DB = firebase.database();