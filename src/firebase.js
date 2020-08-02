import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBk-CILQlYKkmlckk3ZNcgGZ3EAMxgD1a0",
    authDomain: "instagram-clone-6d394.firebaseapp.com",
    databaseURL: "https://instagram-clone-6d394.firebaseio.com",
    projectId: "instagram-clone-6d394",
    storageBucket: "instagram-clone-6d394.appspot.com",
    messagingSenderId: "899143581752",
    appId: "1:899143581752:web:81bfd6b45accc69944a6cd",
    measurementId: "G-G1NTTHJEM9"
});

{/* Firebase: Access DB, access authentication, access storage */}
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
