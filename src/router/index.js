import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeakView from '../views/PeakView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // Wstawiamy dynamiczny parametr :id (np. /szczyt/1, /szczyt/25)
      path: '/szczyt/:id',
      name: 'peak',
      component: PeakView
    }
  ]
})

export default router