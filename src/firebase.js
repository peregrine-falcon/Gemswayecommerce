import firebase from 'firebase';
// import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDYkgXiPDCC1lDYRAMr1D1i30ucblRhv5M",
        authDomain: "e-commerce-bf4e1.firebaseapp.com",
        projectId: "e-commerce-bf4e1",
        storageBucket: "e-commerce-bf4e1.appspot.com",
        messagingSenderId: "61042646453",
        appId: "1:61042646453:web:df3faf37d6dca04fcbcdfc",
        measurementId: "G-GSCL26LF97"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { db, auth }; 