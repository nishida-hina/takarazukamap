import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  

  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
          selector: to.hash,
          offset: { x: 0, y: 0 }
      }
    }
    return { x: 0, y: 0 }
  }
})

export default router
