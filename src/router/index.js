import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index/template.vue'
import Login from '@/page/Login/template.vue'
import Detail from '@/page/Detail/template.vue'
import Edit from '@/page/Edit/template.vue'
import Create from '@/page/Create/template.vue'
import User from '@/page/User/template.vue'
import My from '@/page/My/template.vue'
import Register from '@/page/Register/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/register',
      component: Register
    },
  ]
})
