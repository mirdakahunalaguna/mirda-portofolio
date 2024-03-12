<template>
  <!-- component -->
<div 
  :class="[isDarkMode ? 'bg-gradient-to-r from-blue-800/10 to-purple-700/10 ' : 'bg-gradient-to-r from-blue-100 to-teal-50 ']"
  class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
		<div>
			<h1 class=" font-bold text-4xl font-sans">Fast and Efisien</h1>
			<p class=" mt-1">Your trust is our key</p>
			<button type="submit" class="block w-28  text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div  
    :class="{ 'text-sky-300': isDarkMode, 'text-sky-600': !isDarkMode }"
    class="flex lg:p-36 md:p-52 sm:20 justify-center p-8 items-center">
		<form @submit.prevent="login"
        :class="{ 'bg-gray-700': isDarkMode, 'bg-gray-200 ': !isDarkMode }"
        class="p-4 rounded-md">
			<div class="flex items-center justify-between">
        <h1 class="font-bold text-2xl mb-1 mr-3">Welcome, let's sign up!</h1>
        <ButtonDark :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      </div>
			<p class="text-sm font-normal mb-7">Create your awesome account</p>  
          <!-- user name -->
				<input-field
          label="User Name" 
          type="text"
          :value="nama" 
          placeholder="user name"
          @update:value="nama = $event"
          />  
        <!-- input email -->
				<input-field
          label="Email" 
          type="email"
          :value="email" 
          placeholder="email address"
          @update:value="email = $event"
          /> 
        <!-- input password -->
				<input-field
          label="password" 
          type="password"
          :value="password" 
          placeholder="password address"
          @update:value="password = $event"
          /> 
			<div class="flex items-center justify-between mt-2">
        <router-link to="/login">register</router-link> 
        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
      </div>
      <button class="text-sm ml-2 hover:text-blue-500 cursor-pointer p-5" @click="tambahDataPengguna">test Tambah Data Pengguna</button>
		</form>
	</div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '@/elements/InputField.vue';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid'; // Import library UUID
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

// blok untuk darkmode
import ButtonDark from '../elements/ButtonDark.vue' 
import { useDark } from "@vueuse/core";
const isDarkMode = useDark();
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const email = ref(''); // Variabel referensi untuk menyimpan nilai email
const password = ref(''); // Variabel referensi untuk menyimpan nilai password
const nama = ref(''); // Variabel referensi untuk menyimpan nilai password

const tambahDataPengguna = async () => {
  const uid = uuidv4(); // Menghasilkan UUID untuk UID pengguna
  // Objek data pengguna termasuk bidang password
  const plainPassword = 'nunus123'; // Kata sandi yang akan dienkripsi
  // Enkripsi kata sandi
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(plainPassword, salt);
  const dataUser = {
    uid: uid, // Gunakan UUID sebagai UID pengguna
    email: 'mirda911@gmail.com',
    password: hashedPassword, // Kata sandi yang telah dienkripsi
    nama: 'Nama Pengguna',
    peran: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
    fotoProfil: 'url_foto_profil',
    informasiTambahan: 'Informasi tambahan pengguna'
  };
  try {
    const docRef = await addDoc(collection(db, 'users'), dataUser);
    console.log('Dokumen pengguna berhasil ditambahkan dengan ID:', docRef.id);
  } catch (error) {
    console.error('Error menambahkan dokumen pengguna:', error);
  }
};
</script>
