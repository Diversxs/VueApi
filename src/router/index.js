import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventList from '@/components/EventList.vue'
import BookedByUsers from '@/components/BookedByUsers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookedbyusers',
    name: 'BookedByUsers',
    component: BookedByUsers
  },
  {
    path: '/eventlist',
    name: 'EventList',
    component: EventList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
