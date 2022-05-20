import firebase from 'firebase'
// import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqLx8dAo6_j9oGsBBhxxpIuRQx9MlBW48",
  authDomain: "myova-d9442.firebaseapp.com",
  databaseURL: "https://myova-d9442-default-rtdb.firebaseio.com",
  projectId: "myova-d9442",
  storageBucket: "myova-d9442.appspot.com",
  messagingSenderId: "197825740899",
  appId: "1:197825740899:web:512b82823d8c038d35b856",
  measurementId: "G-FJ1JJ4V7E5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
// console.log(firestore)

export default firebaseApp.firestore();