// import firebase from "firebase/compact/auth";
// import "firebase/compact/auth";
// import "firebase/compact/firebase";


// const firebaseConfig = {
// };

// // initilize firebase
// if(!firebase.apps.length){
//     firebase.intializeApp(firebaseConfig)
// }



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "IzaSyC1Xb1N22M0oYQMBRxrp8EqM5JLan8gwJE",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "awesome-project-7b469",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


export { app, auth };
