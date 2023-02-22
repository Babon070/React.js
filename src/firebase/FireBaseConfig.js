import firebase from 'firebase'
// import "firebase/auth "  


const firebaseConfig = {
    apiKey: "AIzaSyD3zjMrU7RLY1vGmMFAKfvMzH4zAPu7rj4",
    authDomain: "olxi-8aa1e.firebaseapp.com",
    projectId: "olxi-8aa1e",
    storageBucket: "olxi-8aa1e.appspot.com",
    messagingSenderId: "49317417972",
    appId: "1:49317417972:web:34ec7580e973865b9d9fa1",
    measurementId: "G-QXY3E1D6Q1"
  };

  const server = firebase.initializeApp(firebaseConfig);
  const auth = server.auth();
  const provider = new firebase.default.auth.GoogleAuthProvider();

  export {auth, provider}


  