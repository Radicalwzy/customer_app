<template>
  <div class="product_item">
    <van-row>
      <van-col :span="4">
        <img  v-if="data.photo" :src="data.photo" alt="">
        <img v-else src="../image/c1.jpg" alt="">
      </van-col>
      <van-col :offset="1" :span="19">
        <div> <strong>名称：</strong> {{data.name}}</div>
        <div> <strong>价格：</strong> {{data.price}}</div>
        <div> <strong>描述：</strong> {{data.description}}</div>
        <div> <van-stepper v-model="data.number" :min='0' @change='numberChangeHandler(data)'/> </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      value:0
    }
  },
  methods:{
    ...mapMutations('shopcar',['addShopcar']),
    numberChangeHandler(val){
      // 将产品信息解构为订单项（购物车）
      let {id:productId,name:productName,price,number} = val;
      let orderLine = {productId,productName,price,number}
      this.addShopcar(orderLine);
    }
  }
}
</script>
<style scoped>
.product_item {
  margin:.5em 1em;
  padding: .5em;
  border-radius: 5px;
  height: 80px;
  border: 1px dotted #ccc;
}

.product_item img {
  width: 100%;
  border-radius: 3px;
}

</style>