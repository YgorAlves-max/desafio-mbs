import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ScheduleComponent from '../components/ScheduleComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component: StartView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      redirect: 'home/schedule',
      children: [
        {
          path: 'schedule',
          component: ScheduleComponent
        },
   
      ],
    },

  ]
})

export default router
