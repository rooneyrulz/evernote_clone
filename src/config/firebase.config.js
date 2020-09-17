import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBa3mNjBSEPGKyDRCOTFfUS-EWukI3K7Ak',
    authDomain: 'evernote-clone-8519c.firebaseapp.com',
    databaseURL: 'https://evernote-clone-8519c.firebaseio.com',
    projectId: 'evernote-clone-8519c',
    storageBucket: 'evernote-clone-8519c.appspot.com',
    messagingSenderId: '575114607391',
    appId: '1:575114607391:web:79655f7296a122c8258e2a',
    measurementId: 'G-DTSVQYF22Z',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;