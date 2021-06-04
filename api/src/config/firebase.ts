import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

// Normalmente as informações a baixo seriam guardadas num .env
const firebaseConfig = {
  apiKey: "AIzaSyBBhxtQeWsc84ysfAmmzLuttKjdhHMPNQ0",
  authDomain: "pxt-noteblock.firebaseapp.com",
  projectId: "pxt-noteblock",
  storageBucket: "pxt-noteblock.appspot.com",
  messagingSenderId: "661902995460",
  appId: "1:661902995460:web:a9ebca1870722245b50551",
}

export default firebase.initializeApp(firebaseConfig)
