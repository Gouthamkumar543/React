import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCPXVmWNK4rMJvBq0vkBMYiblz4nTrl7IA",
  authDomain: "fire-base-75b4c.firebaseapp.com",
  projectId: "fire-base-75b4c",
  storageBucket: "fire-base-75b4c.firebasestorage.app",
  messagingSenderId: "341411074344",
  appId: "1:341411074344:web:ab6f99d0f7dfb7f4b8c01d"
};

const app = initializeApp(firebaseConfig);
 export const author = getAuth(app)
 export const db = getDatabase(app)