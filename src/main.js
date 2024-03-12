// main.js
import { createApp } from 'vue';
import '@/assets/styles.css'; 
import App from '@/App.vue';
import axios from 'axios';
import router from '@/router';
import LottiePlayer from 'lottie-web'; 
import { initializeApp } from 'firebase/app';  // Import fungsi initializeApp dari Firebase SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtjFWiF-Mkdl82No5KlgRD_uFrdI4ze48",
  authDomain: "mirda-portofolio.firebaseapp.com",
  projectId: "mirda-portofolio",
  storageBucket: "mirda-portofolio.appspot.com",
  messagingSenderId: "507020119876",
  appId: "1:507020119876:web:b6cf4276832c4a4ce55111"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

// Membuat instance aplikasi Vue
const vueApp = createApp(App);

// Menambahkan instance axios ke dalam properti global aplikasi Vue
vueApp.config.globalProperties.$axios = axios;

// Menggunakan router
vueApp.use(router);

// Mendaftarkan LottiePlayer sebagai komponen global
vueApp.component('lottie-player', LottiePlayer);

// Mount aplikasi ke dalam elemen dengan id 'app'
vueApp.mount('#app');
