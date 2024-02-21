<script setup>
    import { ref } from 'vue';
</script>

<template>
    <a-ocean color="#92cee2" width="100" depth="100" amplitude="0" density-amplitude="0.1" opacity="1" density="50" speed="2"></a-ocean>
    <a-ocean color="#92cee2" width="100" depth="100" amplitude="0" density-amplitude="0.15" opacity="0.5" density="50" speed="2"></a-ocean>
    <a-entity light="type: ambient; color: #6895a1"></a-entity>
    <a-entity light="type: point; intensity: 2" position="0 2 -10"></a-entity>
</template>