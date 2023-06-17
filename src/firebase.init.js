import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDL3N8GAoA9c3iptwKUGvichCtYeQt6Rxg",
  authDomain: "ema-john-self-ea1a5.firebaseapp.com",
  projectId: "ema-john-self-ea1a5",
  storageBucket: "ema-john-self-ea1a5.appspot.com",
  messagingSenderId: "988106463253",
  appId: "1:988106463253:web:ac92f05b0f4f00903b961c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;