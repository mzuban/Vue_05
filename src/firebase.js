import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNiaEPRrz0kpfblqkolqxnqVuZDX_cnPw",
  authDomain: "fipugram4.firebaseapp.com",
  projectId: "fipugram4",
  storageBucket: "fipugram4.appspot.com",
  messagingSenderId: "802865433647",
  appId: "1:802865433647:web:31d09aecba2a08aa780ada",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
