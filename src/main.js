import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getFirestore } from 'firebase/firestore'

import App from './App.vue';
import router from './router';

import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC2QydohIRiBwStPp_ssGCXFH7gdLryAqI",
  authDomain: "work9-e9bf6.firebaseapp.com",
  projectId: "work9-e9bf6",
  storageBucket: "work9-e9bf6.appspot.com",
  messagingSenderId: "171091735378",
  appId: "1:171091735378:web:d277a5aa7eae4f73dcc08b"
};
const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');