import Vue from 'vue'
import Router from 'vue-router'
import LoginIndex from './views/LoginIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginIndex',
      component: LoginIndex
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/loginPhone',
      name: 'loginPhone',
      component: () => import('./views/LoginPhone.vue')
    },
    {
      path: '/loginPassword',
      name: 'loginPassword',
      component: () => import('./views/LoginPassword.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('./views/Find.vue')
    }
  ]
})
