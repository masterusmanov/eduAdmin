import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard/Dashboard.vue';
import Home from '../views/Home/Home.vue'
import WebUsers from '../views/WebUsers/WebUsers.vue';
import Courses from '../views/Courses/Courses.vue';
import CourseStudent from '../views/CourseStudent/CourseStudent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/courses",
          name: "courses",
          component: Courses,
        },
        {
          path: "/web_users",
          name: "webUsers",
          component: WebUsers,
        },
        {
          path: "/course_student",
          name: "courseStudent",
          component: CourseStudent,
        },
      ],
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
  ],
});

export default router
