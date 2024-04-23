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
        {
          path: '/users',
          name: 'users',
          component: () => import('../components/users/UsersComponent.vue')
        },
        {
          path: '/resources',
          name: 'resources',
          component: () => import('../components/resources/ResourcesComponent.vue')
        },
        {
          path: '/docs',
          name: 'docs',
          component: () => import('../components/docs/DocsComponent.vue')
        },
      ],
    },
  ]
})

export default router
