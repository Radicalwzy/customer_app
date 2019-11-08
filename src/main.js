import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'
import './common.css'


// 全局注册自定义组件
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
import AddressItem from './components/AddressItem'
import ProductItem from './components/ProductItem'
Vue.component('licy-fulllayout',FullLayout)
Vue.component('licy-order-item',OrderItem)
Vue.component('licy-address-item',AddressItem)
Vue.component('licy-product-item',ProductItem)
// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
