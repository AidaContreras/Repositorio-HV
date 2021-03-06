import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/mision',
    name: 'Mision',
    component: () => import(/* webpackChunkName: "Mision" */ '../views/Mision.vue')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "Formulario" */ '../views/Formulario.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
