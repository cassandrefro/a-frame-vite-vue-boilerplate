<script setup>

  import '../aframe/life-like-automaton.js';

  defineProps({
    scale: Number,
  });

</script>

<template>
  <a-entity
    gltf-model="#main-island"
    position="0 0 0"
    scale="1 1 1"
  >
    <a-entity
        geometry="primitive: plane; height: 3; width: 1.5;"
        rotation="0 -70 0"
        position="23.483 0.984 0.876"
        color="#FFF"
    ></a-entity>

    <a-entity
        geometry="primitive: sphere; radius: 400"
        rotation="0 0 0"
        position="0 0 0"
        material="opacity: 0.6; side: back "
    ></a-entity>

    <a-entity
        gltf-model="#cauldron"
        position="0 0 0"
        scale="1 1 1"
    />

  </a-entity>
  <a-sky color="#FFF" src="assets/sky.png" position="0 -300 0" scale="1.5 1.5 1.5" material="fog: false"></a-sky>  

</template>