import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import Overview from '../components/Overview.vue'
import Event from '../components/Event.vue'
import UploadPort from '../views/UploadPort.vue'
import Certificate from '../components/Certificate.vue'
import AddAct from '../views/AddAct.vue'
import Calendar from '../views/Calendar.vue'
import TreadDetail from '../views/TreadDetail.vue'
import BuildPort from '../views/BuildPort.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/profile/:',
      name: 'profile',
      component: ProfileView,
      children: [
        {
          id: 0,
          path: '/overview',
          component: Overview,
        },
        {
          id: 1,
          path: '/event',
          component: Event,
        },
        {
          id: 2,
          path: '/certificate',
          component: Certificate,
        }

      ]
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadPort
    },
    {
      path: '/add-activity',
      name: 'add-activity',
      component: AddAct
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/post-detail',
      name: 'post-detail',
      component: TreadDetail,
    },
    {
      path: '/build-port',
      name: 'build-port',
      component: BuildPort,
    }
  ]
})

export default router
