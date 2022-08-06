// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider } 
  from 'firebase/auth';
import {
  getFirestore,
  doc, // get doc
  getDoc, // get doc data
  setDoc  // set doc data
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm9Q7a40HEWPjf8NktsJgPmMScgAJlA6w",
  authDomain: "shop-a9e78.firebaseapp.com",
  projectId: "shop-a9e78",
  storageBucket: "shop-a9e78.appspot.com",
  messagingSenderId: "550545770979",
  appId: "1:550545770979:web:56ff764edeef826836b8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth:any) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    } catch (error:any) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef; 
}
