import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC2QydohIRiBwStPp_ssGCXFH7gdLryAqI",
    authDomain: "work9-e9bf6.firebaseapp.com",
    projectId: "work9-e9bf6",
    storageBucket: "work9-e9bf6.appspot.com",
    messagingSenderId: "171091735378",
    appId: "1:171091735378:web:d277a5aa7eae4f73dcc08b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const UserRef = collection(db, "cities");
export default UserRef;