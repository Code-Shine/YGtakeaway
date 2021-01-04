<template>
   <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="el-icon-remove" @click="removeCart(index)"></i>
                <span>{{item.count}}</span>
                <i class="el-icon-circle-plus" @click="addCart(index)"></i>
            </div>            
        </div>
        <el-divider></el-divider>
          <div>
            <span>你一共选择了{{count}}件商品</span>
            <el-divider direction="vertical"></el-divider>
            <span>共消费：￥{{price}}</span>
            
          </div>
        
        <el-button style="margin:10px 0;" @click="payment">去支付</el-button>
        <el-button @click="clearcart">清空购物车</el-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data() {
      return {
         
      }
    },
    computed: {
      ...mapState({
        cartarr:state=>state.cartarry,
        

      }),
       count(){
         return this.$store.getters.countsum
       },
       price(){
         return this.$store.getters.pricesum
       }
    },
    methods: {
        //减少商品
        removeCart(index){
            this.$store.commit('cartremove',index)
        },
        //增加商品
        addCart(index){
            this.$store.commit('cartadd',index)
        },
        //清空购物车
        clearcart(){
            this.$store.commit('clearcart')
        },
        //下单支付
        payment(){
          let num = this.$store.state.cartarry.length
          // console.log(this.$store.getters.countsum)
          if(num != 0){
              this.$confirm('是否确认支付?', '提示', {
              confirmButtonText: '支付',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '支付成功!'
              });
              this.$store.commit('clearcart')   
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消支付'   
              }); 
                    
            });
          }else{
            // alert('购物车中没有商品')
            this.$alert('购物车中没有商品', '提示', {
            confirmButtonText: '确定'});
          }
             
            
        }
    
      
    },
  }
</script>

<style lang="stylus" scoped>
 .goods
        padding 10px
        i 
            font-size 18px
</style>