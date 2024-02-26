<template>
  <div id="app" class="bg-gradient-to-t from-slate-50 to-sky-50">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
</script>

<style>
/* Styling umum untuk aplikasi */
</style>
