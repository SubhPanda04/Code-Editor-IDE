import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGESENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export { app, auth, db };
export const initializeFirebase = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/firebase-config`);
    const config = await response.json();
    return initializeApp(config);
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
};
