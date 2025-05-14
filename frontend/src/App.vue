<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <header>
      <h1>Manajemen Pengguna</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007bff;
  color: white;
  padding: 10px 0;
}

main {
  padding: 20px;
}
</style>
