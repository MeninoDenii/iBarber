import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

interface firebaseConfigProps {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
  dataBaseURL?: string;
}

const firebaseConfig: firebaseConfigProps = {
  apiKey: "AIzaSyCP_Eskp-GS7z5OszYPITk8fiftcHmvqeI",
  authDomain: "ibarber-9b6f6.firebaseapp.com",
  projectId: "ibarber-9b6f6",
  storageBucket: "ibarber-9b6f6.appspot.com",
  messagingSenderId: "500246950484",
  appId: "1:500246950484:web:5a4d3a59f9238c4048f3c1",
  measurementId: "G-V4PM947KMV",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, db, auth, firestore };
