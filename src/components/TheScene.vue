<script setup>
  import { ref } from 'vue';
  import TheCameraRig from './TheCameraRig.vue';  
  import '../aframe/duplicate-me.js';
import TheMainIsland from './TheMainIsland.vue';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats background="color: #bdd8e5" fog="type: linear; color: #bdd8e5; near: 30; far: 90">   
      <a-box position="-10 -50 -10" duplicate-me="rows: 20; cols: 20"></a-box>
      <a-entity light="type: point; intensity: 2" position="200 10 0"></a-entity>

      <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: 
        Model source: 
        Model author: (name)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="main-island" src="assets/main_island_v1.glb"></a-asset-item>  
      <a-asset-item id="cauldron" src="assets/cauldron_green.glb"></a-asset-item>      
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheMainIsland :scale="scale" />
    </template>
      <TheCameraRig />
  </a-scene>
</template>