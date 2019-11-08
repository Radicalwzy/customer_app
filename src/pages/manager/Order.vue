<template>
  <div class="order">
    <van-nav-bar title="我的订单" />
    <van-tabs v-model="active">
      <van-tab title="全部">
        <licy-order-item v-for='order in orders' :key="order.id"  :data='order'></licy-order-item>
      </van-tab>
      <van-tab title="待支付">
        <licy-order-item v-for='order in ordersStatusFilter("待支付")' :key="order.id"  :data='order'></licy-order-item>
      </van-tab>
      <van-tab title="待服务">
         <licy-order-item v-for='order in ordersStatusFilter("待派单")' :key="order.id"  :data='order'></licy-order-item>
         <licy-order-item v-for='order in ordersStatusFilter("待接单")' :key="order.id"  :data='order'></licy-order-item>
         <licy-order-item v-for='order in ordersStatusFilter("待服务")' :key="order.id"  :data='order'></licy-order-item>
      </van-tab>
      <van-tab title="待确认">
        <licy-order-item v-for='order in ordersStatusFilter("待确认")' :key="order.id"  :data='order'></licy-order-item>
      </van-tab>
      <van-tab title="已完成">
        <licy-order-item v-for='order in ordersStatusFilter("已完成")' :key="order.id"  :data='order'></licy-order-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapActions, mapState ,mapGetters} from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  computed:{
    ...mapState('order',['orders']),
    ...mapGetters('order',['ordersStatusFilter'])
  },
  created(){
    this.findAllOrders();
  },
  methods:{
    ...mapActions('order',['findAllOrders'])
  }
}
</script>
<style scoped>
.order {
  background: #f1f1f1;
}
</style>