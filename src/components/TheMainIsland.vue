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
    scale="1 1.1 1"
  />
  <a-entity
    gltf-model="#cauldron"
    position="0 0 0"
    scale="1 1.1 1"
    />


</template>