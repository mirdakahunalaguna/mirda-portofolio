// router.js
import { createRouter, createWebHistory } from 'vue-router'; 
import Home from '@/pages/HomePage.vue';
import About from '@/pages/AboutPage.vue';
import PreventivePage from '@/pages/PreventivePage.vue';
import CorrectivePage from '@/pages/CorrectivePage.vue';
import BanknoteCounter from '@/pages/BanknoteCounter.vue';
import BanknoteDetection from '@/pages/BanknoteDetection.vue';
import BanknoteSorting from '@/pages/BanknoteSorting.vue';
import CurrencyPage from '@/pages/CurrencyPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/preventive-page', component: PreventivePage },
  { path: '/corrective-page', component: CorrectivePage },
  { path: '/banknote-counter', component: BanknoteCounter },
  { path: '/banknote-detection', component: BanknoteDetection },
  { path: '/banknote-sorting', component: BanknoteSorting },
  { path: '/currency-page', component: CurrencyPage },
  // Tambahkan aturan rute khusus untuk mengarahkan /portofolio ke halaman utama
  { path: '/portofolio', redirect: '/' }
]; 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
