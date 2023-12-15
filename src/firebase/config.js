// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9HpKKvO5qL07QE6OVEhUkqfjNaHEO74c',
  authDomain: 'journal-app-152fe.firebaseapp.com',
  projectId: 'journal-app-152fe',
  storageBucket: 'journal-app-152fe.appspot.com',
  messagingSenderId: '892279164801',
  appId: '1:892279164801:web:715b4a886c3b5033a4a280',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
