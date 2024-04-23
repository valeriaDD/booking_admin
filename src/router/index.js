import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'credentials-login'},
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: '/login',
          name: 'credentials-login',
          component: () => import('../components/auth/CredentialsLoginComponent.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../components/auth/RegisterComponent.vue')
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: {name: 'calendar'},
      children: [
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('../components/calendar/CalendarComponent.vue')
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
