import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/view/HomePage.vue'
import AboutPage from '@/view/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
