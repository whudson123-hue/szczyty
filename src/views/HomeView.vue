<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../supabase.js'

const listaSzczytow = ref([])

async function pobierzSzczyty() {
  const { data } = await supabase.from('szczyty').select('*')
  listaSzczytow.value = data
}

onMounted(() => {
  pobierzSzczyty()
})
</script>

<template>
  <main>
    <h1>⛰️ Mój Portal Górski</h1>
    <h2>Ostatnio dodane szczyty:</h2>

    <ul class="siatka-szczytow">
      <li v-for="szczyt in listaSzczytow" :key="szczyt.id" class="karta-szczytu">
        <RouterLink :to="'/szczyt/' + szczyt.id" class="tytul-szczytu">
          <strong>{{ szczyt.name }}</strong>
        </RouterLink> 
        ({{ szczyt.mountain_range }}) 
        <br>
        <small>Wysokość: {{ szczyt.height }} m n.p.m.</small>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.siatka-szczytow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
}

.karta-szczytu {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  box-sizing: border-box;
}

.karta-szczytu:hover {
  transform: translateY(-5px);
}

.tytul-szczytu {
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2em;
}

.tytul-szczytu:hover {
  text-decoration: underline;
}
</style>