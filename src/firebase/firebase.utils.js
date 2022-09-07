import { initializeApp } from '@firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_jt4oj8Klp4sZCvhXGsbfzysgL10EpTo",
    authDomain: "chad-db.firebaseapp.com",
    projectId: "chad-db",
    storageBucket: "chad-db.appspot.com",
    messagingSenderId: "608785159444",
    appId: "1:608785159444:web:36b7cb7e86bad750c05e01",
    measurementId: "G-7C869QG20W"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  const docRef = doc(db, 'users', `${userAuth.uid}`)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    const {displayName ,email, } = userAuth;
    const createdAt = new Date()

    try{
      await setDoc(docRef, {displayName, email, createdAt, ...additionalData})
    } 
    catch(error){
      console.log('error creating user', error.message)
    }
  }
  return docRef; 
}


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
  
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default initializeApp;