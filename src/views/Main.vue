<template>
    <el-container style="height:100%">
      <el-aside width="200px"><public-navigation></public-navigation></el-aside>
       <el-main>
        <router-view></router-view>
       </el-main>
    </el-container>
</template>

<script>
import PublicNavigation from '../components/PublicNavigation'
  export default {
    components: {
      PublicNavigation
    },
  }
</script>

<style lang="stylus" scoped>
.el-main
  padding 2px
</style>