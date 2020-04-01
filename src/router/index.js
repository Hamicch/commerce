import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
=======
// import ProductPage from '../views/ProductPage'
>>>>>>> 6b50da0022956462b1c535be2b1e2495eefbc600

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product-page',
    name: 'Productpage',
    component: () => import('../views/Productpage.vue')
  }
]

const router = new VueRouter({
<<<<<<< HEAD
  mode: 'history',
  routes,
=======
  routes
>>>>>>> 6b50da0022956462b1c535be2b1e2495eefbc600
})

export default router
