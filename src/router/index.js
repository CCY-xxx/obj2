import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Find from '@/page/Find'
import Self from '@/page/Self'
import Work from '@/page/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      name: 'Home',
      component: Home,
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
  ]
})
