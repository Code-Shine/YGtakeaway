<template>
  <div>
    <el-carousel :interval="4000" type="card" height="210px">
      <el-carousel-item v-for="item in rotationChart" :key="item.name">
          <el-image :src="item.src" fit="contain"></el-image> 
      </el-carousel-item>
    </el-carousel>
   <recommend-card></recommend-card>
  </div>
</template>

<script>
import RecommendCard from '../components/RecommendCard'
  export default {
    components: {
      RecommendCard
    },
    data() {
      return {
        rotationChart: [
          {
            name:'firstchart',
            src:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
          },
          {
            name:'secendchart',
            src:'http://pic.51yuansu.com/backgd/cover/00/00/33/5b48760c59820.jpg!/fw/780/quality/90/unsharp/true/compress/true'
           
          },
          {
            name:'thirdchart',
            src:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
          },
        ]
      }
    },
    
  }
</script>

<style lang="stylus" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 180px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }
</style>