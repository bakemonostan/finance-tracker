import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIp4PuAyqy5qbMjbdVNnQpz41TBNnnGew',
  authDomain: 'my-money-5b694.firebaseapp.com',
  projectId: 'my-money-5b694',
  storageBucket: 'my-money-5b694.appspot.com',
  messagingSenderId: '1074027937667',
  appId: '1:1074027937667:web:5cf7483db82c0b581900b6',
};

// * init firebase

firebase.initializeApp(firebaseConfig);

// * Init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
