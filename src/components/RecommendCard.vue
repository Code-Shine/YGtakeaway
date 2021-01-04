<template>
<div>
    <el-row >
      <el-col :span="8" v-for="(item,index) in recommend" :key="index">
        <div >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.image" class="image">
            <div style="padding: 14px;">
              <span>店长推荐：{{item.name}}</span>
              <div style="float:right">仅需￥{{item.price}}</div>
              <div><hr></div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recommend: [
          {
          image:"http://pic.51yuansu.com/backgd/cover/00/06/09/5b650f7a11f24.jpg!/fw/780/quality/90/unsharp/true/compress/true",
          name:'麻辣小龙虾',
          price:30
        },
        {
          image:"http://pic.51yuansu.com/backgd/cover/00/19/70/5b931e454768f.jpg!/fw/780/quality/90/unsharp/true/compress/true",
          name:'美味大闸蟹',
          price:50
        },
          {
          image:"http://pic.51yuansu.com/backgd/cover/00/30/40/5bc55f3a3dac8.jpg!/fw/780/quality/90/unsharp/true/compress/true",
          name:'美味大披萨',
          price:35
        },
          {
          image:"http://pic.51yuansu.com/backgd/cover/00/08/49/5b6d96a840dd6.jpg!/fw/780/quality/90/unsharp/true/compress/true",
          name:'美味香螃蟹',
          price:55
        },
          {
          image:"http://pic.51yuansu.com/backgd/cover/00/11/12/5b76a1ddaf03c.jpg!/fw/780/quality/90/unsharp/true/compress/true",
          name:'香辣小龙虾',
          price:35
        },
          {
          image:"http://pic.51yuansu.com/backgd/cover/00/19/56/5b930202b1c82.jpg!/fw/780/quality/90/unsharp/true/compress/true",
          name:'澳洲嫩牛排',
          price:65
        },
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>


  .image {
    width: 100%;
    display: block;
    height 400px
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>