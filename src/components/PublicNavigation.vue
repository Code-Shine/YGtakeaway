<template>
<div>
  
 <img class="icon" src="../assets/icon.png" >
  
 <el-menu
      default-active="2"
      class="el-menu-vertical-demo">

      <!-- 公共按钮组件 -->
       <el-menu-item :index="item.path" v-for="item in asideMenu" :key="item.path" @click="clickMenu(item)">
        <i :class = "item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

    </el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
      asideMenu: [
        {
          path: '/takeouthome',
          name: 'takeouthome',
          label: '外卖主页',
          icon: 'el-icon-platform-eleme'
        },
        {
          path: '/takeoutgoods',
          name: 'takeoutgoods',
          label: '商品详情页',
          icon: 'el-icon-s-goods'
        },
        {
          path: '/shoppingcart',
          name: 'shoppingcart',
          label: '购物车',
          icon: 'el-icon-shopping-cart-2'
        },
        {
          path: '/login',
          name: 'login',
          label: '后台详情页',
          icon: 'el-icon-s-platform'
        },
        
      ]
    }
  },
  methods: {
    clickMenu(item) {
        this.$router.push({name:item.name})      
    }
  },
  }
</script>

<style lang="stylus" scoped>
  .el-menu 
    height 100%
  
  .icon
    height 200px
    width 200px
</style>