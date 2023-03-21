import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ScheduleComponent from '../components/ScheduleComponent.vue'
import NoteComponent from '../components/NoteComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/home/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'schedule',
          component: ScheduleComponent
        },
        {
          path: 'note',
          component: NoteComponent
        }
      ],
    },

  ]
})

export default router
