import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyDtjFWiF-Mkdl82No5KlgRD_uFrdI4ze48",
  authDomain: "mirda-portofolio.firebaseapp.com",
  projectId: "mirda-portofolio",
  storageBucket: "mirda-portofolio.appspot.com",
  messagingSenderId: "507020119876",
  appId: "1:507020119876:web:b6cf4276832c4a4ce55111"
};

// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Mengekspor instance Firestore
export const db = getFirestore(firebaseApp);
