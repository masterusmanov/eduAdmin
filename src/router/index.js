import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard/Dashboard.vue';
import Home from '../views/Home/Home.vue'
import WebUsers from '../views/WebUsers/WebUsers.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/web_users',
          name: 'webUsers',
          component: WebUsers
        },
      ]
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
