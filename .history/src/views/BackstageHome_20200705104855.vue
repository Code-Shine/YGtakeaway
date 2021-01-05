<template>
  <el-row class="home" :gutter="20">
    <!-- 后台首页 -->
    <el-col :span="8">
      <!-- 用户登录卡片 -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">XYG</p>
            <p class="access">系统管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>管理员 学 校 ：<span>广东财经大学</span></p>
          <p>管理员 邮 箱 ：<span>xieyuanguo1116@163.com</span></p>
          <p>管理员 班 级 ：<span>17计算机科学与技术1班</span></p>
          <p>本次课设题目：<span>YG外卖网站</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" style="height: 522px; margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>

    </el-col>

    <!-- 右边的卡片 -->
    <el-col :span="16">
      <!-- 数据的分块展示 -->
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
            <!-- 详情部分 -->
            <div class="detail">
              <p class="num">￥ {{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
          </el-card>
      </div>

      <!-- 折线图 -->
      <el-card shadow="hover">
        <echart style="height: 280px" :chartData="echartData.order"></echart>
      </el-card>

      <!-- 右边下方的两个图表 -->
      <div class="graph">
        <!-- 柱状图 -->
        <el-card shadow="hover">
          <echart :chartData="echartData.user" style="height: 260px"></echart>
        </el-card>
        <!-- 饼图 -->
        <el-card shadow="hover">
          <echart :chartData="echartData.video" style="height: 260px" :isAxisChart="false"></echart>
        </el-card>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import Echart from '../components/EChart'
export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require('../assets/profile.jpg'),
      countData: [
        {
          name: '今日支付订单',
          value: 1032,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 259,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1564,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 366,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 233,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      tableData: [],//图表数据
      tableLabel: {
        name: '菜品',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    getTableData() {
      this.$http.get('/api/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData

        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        // 第一步取出series中的name部分——键名
        let keyArray = Object.keys(order.data[0])
        // 第二步，循环添加数据
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            
            name: key,
      
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        
        // 用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: res.data.userData.map(item => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: res.data.userData.map(item => item.active),
          type: 'bar',
          barGap: 0
        })
        // 视频饼图
        this.echartData.video.series.push({
          data: res.data.videoData,
          type: 'pie'
        })
      })
    }
  },
  created() {
    this.getTableData()
  }
}
</script>

<style lang="stylus" scoped>
.user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    &info {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access {
        color: #999999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #666666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
</style>
