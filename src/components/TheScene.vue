<script setup>
  import { ref } from 'vue';
  import TheCameraRig from './TheCameraRig.vue';  
import TheMainIsland from './TheMainIsland.vue';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats fog="type: linear; color: #8c73ab; near: 1; far: 150">  
    <!-- <a-scene stats background="color: #232027 #8c73ab #574370" fog="type: linear; color: #232027; near: 50; far: 120">    -->
      <!-- <a-entity light="type: ambient;intensity: 5; color: #4c3c2f" position="1.608 9.227 -25.154"></a-entity> -->
      <a-entity light="type: point; intensity: 0.3; color: #31abb4" position="4.142 5.163 -16.797" rotation="0 -180 0"></a-entity>
      <a-entity light="type: point; intensity: 1; color: #e2ab7e" position="10.095 50 5.295"></a-entity>

      <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: 
        Model source: 
        Model author: (name)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="main-island" src="assets/main_island_v1.glb"></a-asset-item>  
      <a-asset-item id="second-mesh" src="assets/second_mesh.glb"></a-asset-item>
      <a-asset-item id="cauldron" src="assets/cauldron_green.glb"></a-asset-item> 
    </a-assets>
        
    <template v-if="allAssetsLoaded">
      <TheMainIsland :scale="scale" />         
    </template>
      
      <TheCameraRig position="0 0 0" />
  </a-scene>
</template>