import Vue from 'vue'
import Router from 'vue-router'
import Topics from 'components/Topics'
import Search from 'components/Search'
import My from 'components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Topics',
      component: Topics
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
