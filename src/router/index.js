import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import Search from 'components/Search'
import My from 'components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
