<template>
    <div class="home">
        <van-row>
          <img style="width:100%;" src="../../assets/images/top-top.png" alt="">
        </van-row>
        <br>
        
        <van-row>
          <van-swipe :autoplay="2000" indicator-color="white">
            <van-swipe-item>
              <img style="width:100%;" src="../../assets/images/1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
              <img style="width:100%;" src="../../assets/images/2.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
              <img style="width:100%;" src="../../assets/images/3.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
              <img style="width:100%;" src="../../assets/images/4.png" alt="">
            </van-swipe-item>
          </van-swipe>
        </van-row>
        <br>
        <!-- 栏目 -->
        <ul class="categories">
            <li v-for="(c,index)  in getCategories(6)" :key="c .id" @click="toProductListHandler(c.id,index)">
                <div><img :src="c.icon" alt="" height="75px" width="80px" ></div>
                <div style="font-size:13px">{{c.name}}</div>
            </li>
        </ul>
        <!-- 推荐 -->
        <!-- <ul class="products">
            <li v-for="p  in getProducts(6)" :key="p .id">
                <div><img :src="p.photo" alt="" height="70px" width="70px"></div>
                <div>{{p.name}}</div>
            </li>
        </ul> -->
    </div>
</template> 
<script>
import { mapState,mapGetters,mapActions} from 'vuex'
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
  name:'swiper',
  data(){
    return {
      
    }
  },
  created(){
      this.findAllCategories();
      this.findAllProducts();
  },
  computed:{
      ...mapState("category",["categories"]),
      ...mapState("products",["products"]),
      ...mapGetters("category",["getCategories"]),
      ...mapGetters("products",["getProducts"])
  },
  methods:{
      ...mapActions("category",["findAllCategories"]),
      ...mapActions("products",["findAllProducts"]),
      toProductListHandler(id,activeKey){
        this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
      }
      
  },
}
</script lang="scss" scoped>
<style scoped>
.categories {
  text-align: center;
}
.categories::after {
  content: "";
  clear:both;
  display: block
}
.categories > li {
  width: 33.33333%;
  float: left;
  height: 100px;
}
.products {
  text-align: center;
}
.products::after {
  content: "";
  clear:both;
  display: block
}
.products > li {
  width: 33.33333%;
  float: left;
  height: 100px;
}
</style>