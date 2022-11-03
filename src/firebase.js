import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4WIRNrAkVnasfg00Lz06YuIS4v9i02h0",
    authDomain: "netflix-clone-react-f5e2f.firebaseapp.com",
    projectId: "netflix-clone-react-f5e2f",
    storageBucket: "netflix-clone-react-f5e2f.appspot.com",
    messagingSenderId: "193103323651",
    appId: "1:193103323651:web:8a5ab43c8a68e911bd2436"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;