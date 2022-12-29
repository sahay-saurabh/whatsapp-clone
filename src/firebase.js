// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import db from './firebase'
// import {collection,getDocs} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAJ-MmQUy8YHcPH7FSHmp5mSO4waJsVp3c",
    authDomain: "whats-app-fe04d.firebaseapp.com",
    projectId: "whats-app-fe04d",
    storageBucket: "whats-app-fe04d.appspot.com",
    messagingSenderId: "213683063243",
    appId: "1:213683063243:web:3484892bf7568a5c500e4e",
    measurementId: "G-7SFRD62QHG"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const Auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
// const querySnapshot = getDocs(collection(db,'rooms'));
// console.log(querySnapshot)
// querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
export { Auth, provider }
export default db;