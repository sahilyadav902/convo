import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'convochat-32166.firebaseapp.com',
  projectId: 'convochat-32166',
  storageBucket: 'convochat-32166.appspot.com',
  messagingSenderId: '783615944025',
  appId: '1:783615944025:web:4dfecbddacacdb09c91848',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
