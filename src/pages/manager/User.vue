<template>
    <div class="user">
        <div class="top">
            <div class="top">
                <van-row class="tag">
                <van-col span="1"  offset="0" @click="logoutHandler"></van-col>
                <van-col span="2"  offset="0" @click="logoutHandler">
                    <van-icon name="close" size="15" style="line-height:20px"/>
                </van-col>
                <van-col span="5"  offset="7"  style="color:black"><strong>个人中心</strong></van-col>
                <van-col span="2"  offset="7" >
                    <van-icon  name="coupon-o" size="15" style="line-height:20px" />
                </van-col>
                </van-row>
            </div>
        </div>
        <div class="photo">
            <img style="height:120px" src="../../image/saber.png" alt="">
        </div>
        <div class="name">
           欢迎您： {{info.name}}
        </div>
        <div class="order">
            <van-row>
            <van-col span="5"  offset="4" @click="toMyOrder">我的订单</van-col>
            </van-row>
        </div>
        <van-divider />
        <div class="address">
            <van-row>
            <van-col span="5"  offset="4" @click="toMyAddress">常用地址</van-col>
            </van-row>
        </div>
        <van-divider />
        <div class="logout">
            <van-row>
            <van-col span="5"  offset="4" @click="logoutHandler">退出</van-col>
            </van-row>
        </div>
        <van-divider />
    </div>
</template>
<script>    
import {mapState,mapActions} from 'Vuex'
export default {
    created(){
        this.getInfo(this.token);
    },
    date(){
        return {

        }
    },
    computed:{
        ...mapState('user',['info','token'])
    },
    methods:{
        ...mapActions('user',['logout','getInfo']),
        toMyAddress(){
            this.$router.push({path:'/address'});
        },
        toMyOrder(){
            this.$router.push({path:'/manager/order'});
        },
        logoutHandler(){
            this.logout()
            .then(()=>{
                this.$router.push({path:'/login'})
            })
        }
    }
}
</script>
<style scoped>
.top {
}
.photo {
    text-align: center;
}
.name {
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px
}
</style>