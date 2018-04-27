import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Login from 'components/login/login'
import User from 'components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
