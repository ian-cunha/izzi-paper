import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBARQqPkRucev0rIm5BxL6XwRmjFHFFgbA",
  authDomain: "izzipaper-f6c68.firebaseapp.com",
  projectId: "izzipaper-f6c68",
  storageBucket: "izzipaper-f6c68.appspot.com",
  messagingSenderId: "932538403272",
  appId: "1:932538403272:web:55f8071ac096e1766418fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
