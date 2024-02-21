<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheOcean from './TheOcean.vue';
  import '../aframe/duplicate-me.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats background="color: #bdd8e5" fog="type: linear; color: #bdd8e5; near: 30; far: 60">   
      <a-box position="-10 0 -10" duplicate-me="rows: 20; cols: 20"></a-box>
      <TheOcean />
      <TheCameraRig />
  </a-scene>
</template>