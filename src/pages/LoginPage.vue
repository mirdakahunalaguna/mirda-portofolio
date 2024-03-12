<template>
  <!-- Komponen -->
  <div 
    class="min-h-screen flex justify-center"
    :class="[isDarkMode ? 'bg-gradient-to-r from-blue-800/10 to-purple-700/10 z-10 sticky top-0' : 'bg-gradient-to-r from-blue-100 to-teal-50 z-10 sticky top-0']">
      <!-- Kiri: Gambar -->
    <div class="w-1/2 hidden lg:block"> 
      <lottie-login></lottie-login>
    </div>
  <!-- Kanan: Formulir Login -->
    <div 
    :class="{ 'text-blue-200': isDarkMode, 'text-gray-800': !isDarkMode }"
    class="p-10 lg:p-36 md:p-52 sm:20 w-full lg:w-1/2 sm:-mt-16">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold mb-4 ml-2">Login</h1>
        <ButtonDark :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      </div>
      <form @submit.prevent="login"
        :class="{ 'bg-gray-700': isDarkMode, 'bg-gray-200 ': !isDarkMode }"
        class="p-4 rounded-md ">
         <!-- input email -->
        <input-field
          label="email" 
          type="email"
          :value="email" 
          placeholder="masukan email"
          @update:value="email = $event"
          />
          <!-- input password -->
        <input-field
          label="password" 
          type="password"
          :value="password" 
          placeholder="masukan password"
          @update:value="password = $event"
          />
        <!-- Checkbox Remember Me -->
        <div class="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" class="text-blue-500">
          <label for="remember" class="ml-2">Remember Me</label>
        </div>
        <!-- Tautan Lupa Password -->
        <div       
          class="mb-6 flex items-center justify-between ">
          <a href="#" class="hover:underline">Forgot Password?</a>
          <div 
          :class="{ 'text-white hover:text-teal-200 ': isDarkMode, 'text-gray-900 hover:text-sky-800': !isDarkMode }"
          class="flex items-center gap-2">
            <HomeIcon class="h-6 w-6"></HomeIcon>
            <router-link to="/"  class="text-sm font-semibold leading-6  ">Home</router-link> 
          </div>
        </div>
        <!-- Tombol Login -->
        <button 
          type="submit" 
          :class="{ 'bg-blue-300/10 hover:animate-pulse': isDarkMode, 'bg-blue-700/55 hover:animate-pulse': !isDarkMode }"
          class="font-semibold rounded-md py-2 px-4 w-full">Login</button>
      </form>
      <!-- Tautan Sign up -->
      <div class="mt-6 text-center">
        <router-link to="/sign-up"  class="text-sm font-semibold leading-6">Sign up Here</router-link>  
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import bcrypt from 'bcryptjs';
import { db } from '@/firebase';
import { useDark } from "@vueuse/core";
import LottieLogin from '@/components/LottieLogin.vue';
import ButtonDark from '../elements/ButtonDark.vue'
import {HomeIcon } from '@heroicons/vue/20/solid';
import { collection, query, where, getDocs } from 'firebase/firestore'; // tambahkan impor ini
import InputField from '@/elements/InputField.vue';

const isDarkMode = useDark();
const email = ref(''); // Variabel referensi untuk menyimpan nilai email
const password = ref(''); // Variabel referensi untuk menyimpan nilai password

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const login = async () => {
  try {
    // Cari pengguna dengan email yang sesuai di Firestore
    const q = query(collection(db, 'users'), where('email', '==', email.value));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const userData = doc.data();
      // Bandingkan password yang didekripsi dengan password yang dimasukkan oleh pengguna
      bcrypt.compare(password.value, userData.password, (err, result) => {
        if (err) {
          console.error('Error:', err);
          return;
        }
        if (result) {
          // Password cocok, login berhasil
          console.log('Login berhasil!', userData);
        } else {
          // Password tidak cocok
          console.error('Password salah!');
        }
      });
    });
  } catch (error) {
    console.error('Gagal login:', error.message);
  }
};

</script>
