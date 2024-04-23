import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'token-login'},
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: '/login/token',
          name: 'token-login',
          component: () => import('../components/auth/TokenLoginComponent.vue')
        },
        {
          path: '/login/credentials',
          name: 'credentials-login',
          component: () => import('../components/auth/CredentialsLoginComponent.vue')
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
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
