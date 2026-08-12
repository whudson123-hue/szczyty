<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- RouterView to nasze "okno". Tutaj Vue samo wstawi HomeView lub PeakView w zależności od adresu -->
  <RouterView />
</template>

<style>
/* Tylko globalne, czyste style dla całej aplikacji */
body {
  margin: 0;
  padding: 0;
  background-color: #fdfdfd;
}

main {
  font-family: Arial, sans-serif;
  width: 95%;
  max-width: none;
  margin: 40px auto;
  color: #333;
}
</style>