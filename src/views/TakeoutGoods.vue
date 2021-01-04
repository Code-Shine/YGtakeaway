<template>
  <div class="bg">
    <el-container style="height:100%">
      <!-- 侧边分类栏 -->
      <el-aside  width="150px" style="text-align:center" >
          <div style="height:100px"></div>
          <div id="title">分类</div>
          <div v-for="(list,index) in tabslabel" :key='index' @click="select(index)" :class="list.active?'active':''" >
            <el-button type="text">{{list.label}}</el-button>
          </div>

          <!-- 购物红点提醒 -->
          <div id="carticon" >
           <el-badge :value="count" class="item">
             <i  class = "el-icon-shopping-cart-full"></i>
            </el-badge>
          </div>
      </el-aside>

      <el-container>
        <!-- 右边的头部 -->
          <el-header> 
            <div id="header"> 
              欢迎来到YG外卖
            </div>
          </el-header>

        <el-main>
          <el-row>
            <el-col :span="10">
              <div v-for="(tag,index) in tags" :key='index' >
               <img id="img" :src="tag.image" alt="">
               <p style="color:#757575">
                 {{tag.label}}
                 仅需 ￥{{tag.price}}
                 <i class="el-icon-circle-plus" @click="addtocart(tag)"></i>  
               </p>     
              </div>
            </el-col>
          </el-row>


           

        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count:this.$store.getters.countsum,
        //分类中商品详情数据
        tags:[],
        //分类数据
        tabslabel: [{
          label:"推荐",
          active:true
        },
        {
          label:"主食",
          active:false
        },
        {
          label:"套餐",
          active:false
        },
        {
          label:"饮品",
          active:false
        }
         ]
      }
    },
    methods: {
      // 添加商品到购物车
      addtocart(tag){
          // 提交数据到vuex中
          this.$store.commit('tocart',tag)
          // 更新红点数
          this.count = this.$store.getters.countsum
      },

      // 左侧分类按钮
      select(index){
        this.tabslabel.forEach((val,ind) => {
          if(index==ind){
            val.active=true
          }else{
            val.active=false
          }
          
        })
        this.getclassify(index)
      },
      // 获取分类的方法
     async getclassify(index) {
        const result = await this.$http.get('/api/classify',{params:{type:index}})
        this.tags=result.data.data
        
      }
    },
    created(){
      //获取目录的分类数据
      this.getclassify(0)
     
    }
  }
</script>

<style lang="stylus" scoped>
   #title
      font-size 20px
      height 20px
      margin-bottom 20px

  .el-aside 
    background-color: #F0F0F0;
    text-align center
    line-height 20px
  
.bg
    margin-left 0
    position absolute
    top 0
    width 100%
    height 100%

#header
    font-size 18px
    margin 20px
    color #5CACEE

#img
  height 300px
  width 800px

#carticon
  padding 10px
  font-size 23px
            
</style>