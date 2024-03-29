import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    children:[
      {
        path:'home',
        component: () => import('../pages/manager/Home.vue')
      },{
        path:'order',
        component: () => import('../pages/manager/Order.vue')
      },{
        path:'user',
        component: () => import('../pages/manager/User.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../pages/manager/Address.vue')
  },
  {
    path: '/manager/product_list',
    name: 'productlist',
    component: () => import('../pages/manager/ProductList.vue')
  },
  {
    path: '/manager/order_confirm',
    name: 'productlist',
    component: () => import('../pages/manager/Order_confirm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
