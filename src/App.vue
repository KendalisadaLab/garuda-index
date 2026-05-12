<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isSplash = computed(() => route.path === '/');

const isActive = (path) => route.path === path;
</script>

<template>
  <router-view />
</template>