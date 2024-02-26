import { createApp } from 'vue';
import '@/assets/styles.css'; 
import App from '@/App.vue';
import axios from 'axios';
import router from '@/router';
import LottiePlayer from 'lottie-web';

// Membuat instance aplikasi Vue
const app = createApp(App);

// Menambahkan instance axios ke dalam properti global aplikasi Vue
app.config.globalProperties.$axios = axios;

// Menggunakan router
app.use(router);

// Mendaftarkan LottiePlayer sebagai komponen global
app.component('lottie-player', LottiePlayer);

// Mount aplikasi ke dalam elemen dengan id 'app'
app.mount('#app');
