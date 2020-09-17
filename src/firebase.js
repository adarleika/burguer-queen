import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQ0f0xI7aheBJt6EmirMqzmx-gTGUdLQw",
    authDomain: "burguer-queen-ama.firebaseapp.com",
    databaseURL: "https://burguer-queen-ama.firebaseio.com",
    projectId: "burguer-queen-ama",
    storageBucket: "burguer-queen-ama.appspot.com",
    messagingSenderId: "51021712234",
    appId: "1:51021712234:web:64e221264a87b6b3373313"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export {firebase};