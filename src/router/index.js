import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name:  'about',

      component: () => import('../components/AboutView.vue')
    },
    {
      path: '/projects',
      name:  'project',

      component: () => import('../components/ProjectView.vue')
    },
    
  ]
})

export default router
