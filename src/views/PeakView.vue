<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { supabase } from '../supabase.js'

const route = useRoute() // Narzędzie do czytania adresu URL (np. /szczyt/1)
const szczyt = ref(null)

async function pobierzJedenSzczyt() {
  // Pobieramy z bazy tylko ten szczyt, którego id zgadza się z id w adresie URL
  const { data } = await supabase
    .from('szczyty')
    .select('*')
    .eq('id', route.params.id)
    .single()
  
  szczyt.value = data
}

onMounted(() => {
  pobierzJedenSzczyt()
})
</script>

<template>
  <main v-if="szczyt">
    <RouterLink to="/" class="powrot">⬅ Wróć do listy</RouterLink>
    
    <h1>⛰️ {{ szczyt.name }}</h1>
    <div class="detale">
      <p><strong>Pasmo górskie:</strong> {{ szczyt.mountain_range }}</p>
      <p><strong>Wysokość:</strong> {{ szczyt.height }} m n.p.m.</p>
    </div>
    
    <!-- Tutaj w przyszłości dodamy oceny i komentarze! -->
    
  </main>
  <div v-else>
    <h2>Pobieram dane o szczycie z chmury...</h2>
  </div>
</template>

<style>
.powrot {
  display: inline-block;
  margin-bottom: 20px;
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
}
.detale {
  background: #f0f4f8;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
</style>