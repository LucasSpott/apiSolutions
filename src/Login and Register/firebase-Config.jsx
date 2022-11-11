import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhB0dQsixNReM_vCRaUEOLzogV1EOFLbw",
  authDomain: "apisolutions.firebaseapp.com",
  projectId: "apisolutions",
  storageBucket: "apisolutions.appspot.com",
  messagingSenderId: "371954555974",
  appId: "1:371954555974:web:8b98010ff7a706eb27fe47",
  measurementId: "G-7P5E410E66"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);