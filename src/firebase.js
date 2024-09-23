import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsg_-UNzAn2yQSTM7ZGW6ayM43P-YszIU",
  authDomain: "blog-dc1ec.firebaseapp.com",
  projectId: "blog-dc1ec",
  storageBucket: "blog-dc1ec.appspot.com",
  messagingSenderId: "504613535620",
  appId: "1:504613535620:web:09fbf4c42b4ef806a4e7d1",
  measurementId: "G-2XVN414Z3H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
