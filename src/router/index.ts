import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from '@/view/EventList.vue'
import AboutPage from '@/view/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
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
