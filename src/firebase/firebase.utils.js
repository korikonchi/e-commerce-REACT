import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDM5aXkNtNhbqVBh66omIAstpY-t3KOENo",
  authDomain: "e-commerce-6e2c0.firebaseapp.com",
  projectId: "e-commerce-6e2c0",
  storageBucket: "e-commerce-6e2c0.appspot.com",
  messagingSenderId: "252711152459",
  appId: "1:252711152459:web:4b3fcba4ed8efe98cfd6ce",
  measurementId: "G-P6HWGYE3JZ",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const SignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const jwt = await signInWithPopup(auth, provider);
  console.log(jwt);
};
