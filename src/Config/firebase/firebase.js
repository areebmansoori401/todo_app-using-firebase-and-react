import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfUQv03nTak-KB6kKXm5WbjeQZp5-80nY",
  authDomain: "todo-firebase-1893e.firebaseapp.com",
  projectId: "todo-firebase-1893e",
  storageBucket: "todo-firebase-1893e.appspot.com",
  messagingSenderId: "755883731213",
  appId: "1:755883731213:web:6a2ba1dc4f3a3ccabbe844"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);