<script setup>

import PortalTeleporter from './PortalTeleporter.vue';

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
   <!--  <a-entity
        geometry="primitive: plane; height: 3; width: 1.5;"
        rotation="0 -70 0"
        position="23.483 0.984 0.876"
        color="#FFF"
    ></a-entity> -->

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

    <PortalTeleporter
      label="Go to the fairy island"
      life-like-automaton="resolution: 256;"
      position="23.483 0.984 0.876"
      rotation="0 -90 0"
      :rot="false"
      :x="93.181"
      :y="-2.994"
      :z="-7.769"

    />

    <a-sky color="#FFF" src="assets/sky.png" position="0 -300 0" scale="1.5 1.5 1.5" material="fog: false"></a-sky>  
  </a-entity>
 
 <!-- Main room navigation mesh  -->
 <!-- <a-entity
 id="second-room-nav-mesh" 
    geometry="primitive: circle; radius: 35.610"
    position="93.181 -2.994 -9.769"
    rotation="-90 20 0"
    scale="1.15 1 1"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
  ></a-entity> -->

  <a-entity
 id="second-room-nav-mesh" 
    gltf-model="#second-mesh"
    position="94.300 -2.994 -7.860"
    rotation="0 0 0"
    scale="1 1 1"
    data-role="nav-mesh"
    material="color: blue"
  ></a-entity>

<!--   <a-entity
    geometry="primitive: plane; height: 13.5; width: 6"
    position="0 0 0"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
  ></a-entity> -->
</template>