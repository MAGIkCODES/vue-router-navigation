import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetailsView from '../views/jobs/JobsDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
   component: AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  // Route parameters
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetailsView,
    props: true
  },

  // redirect route
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
