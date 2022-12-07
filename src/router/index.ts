import { createRouter, createWebHashHistory } from 'vue-router'
import EventsList from '@/view/EventsList.vue'
import AboutPage from '@/view/AboutPage.vue'
import EventDetails from '@/view/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'EventsList',
    component: EventsList,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
