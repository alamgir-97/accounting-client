//should the file name is firebase.config.js or firebase.init.js or any one of them????


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// console.log(import.meta.env.VITE_APIKEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCF-dXPdvn7lJpTLIzor50Af7jkN7htmQE",
  // authDomain: "accounting-client-31657.firebaseapp.com",
  // projectId: "accounting-client-31657",
  // storageBucket: "accounting-client-31657.appspot.com",
  // messagingSenderId: "268874062426",
  // appId: "1:268874062426:web:99ec6cf20f7b7868885663"

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;