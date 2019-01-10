<template>
  <div class="sub-menu">
    <div style="width: 201px;height: 1100px;float: left;">
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        router
        style="height:1200px;background-color: rgb(48, 65, 86);"
      >

        <el-submenu index="1">
          <template slot="title">
            <i class="myset iconfont icon-plus-set"></i>
            <span style="font-size:16px;margin-left: 16px;font-weight: bolder;">管理中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/application">
              <i class="iconfont icon-qingyingyongguanlixuanzhong"></i>
              <span slot="title">应用管理</span>
            </el-menu-item>
            <el-menu-item index="/home/ai_question">
              <i class="iconfont icon-peizhiguanli" style="font-size: 18px;"></i>
              <span slot="title">上下文配置管理</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="myset iconfont icon-plus-set"></i>
            <span style="font-size:16px;margin-left: 16px;font-weight: bolder;">数据查询</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/chat_msg" >
              <i class="iconfont icon-shuxingliebiaoxiangqing2"></i>
              <span slot="title">聊天详情查询</span>
            </el-menu-item>
            <el-menu-item index="/home/search_msg">
              <i class="iconfont icon-shuxingliebiaoxiangqing2"></i>
              <span slot="title">消息统计查询</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>


    </div>


  </div>
</template>

<script>

  export default {
    name: 'sub-menu',
    data () {
      return {
      }
    },

    methods:{

    },

  }
</script>

<style>
  .sub-menu .el-submenu__icon-arrow{
    margin-top: -4px;
  }
  .el-menu-item{
    color:#fff;
    background-color: rgb(48, 65, 86);
  }
  .el-menu-item:hover{
    color:#10A6AB;
    background-color: #1f2d3d;
  }
  .el-menu-item:hover i{
    color:#10A6AB;
  }
  .el-menu-item.is-active{
    color:#10A6AB;
    background-color: #1f2d3d;
  }
  .el-menu-item-group__title{
    padding:0;
  }
  .el-submenu__title:hover{
    color:#fff;
    background-color: #1f2d3d;
  }
  .el-submenu__title{
    width:200px;
    color:rgb(191, 203, 217);
    background-color: rgb(48, 65, 86);
  }
  .el-submenu.is-active.is-opened .el-submenu__title{
    color:#fff;
    background-color: #1f2d3d;
  }


</style>
<style scoped>
  .el-menu-vertical-demo{
    background-color: rgb(48, 65, 86);
  }
  .el-menu-item-group{
    background-color:#333
  }
  .iconM{
    margin-right: 14px;
    margin-left: 20px;
  }
</style>
