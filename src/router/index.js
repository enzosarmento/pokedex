import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from '../components/Pokedex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Pokedex
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ''
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
