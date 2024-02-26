<!-- components/LottieAnimation.vue -->
<template>
  <div ref="lottieContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import animationData from '@/assets/Call Center.json'; // Ubah path sesuai dengan lokasi file animasi Anda

const lottieContainer = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
  });
});
</script>
