
<template>
  <div class="search-msg">
    <div style="width: 90%">
      <!--面包屑导航-->
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item >
            <span>数据查询</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item >查询列表</el-breadcrumb-item>
          <el-breadcrumb-item ></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--数据表头和标题-->
      <div class="list-header" >
        <div class="title">查询列表</div>
        <!--<div style="float: right;"><span class="table-add" @click="toAdd"><i class="el-icon-plus table-add-icon"></i>添加新的应用</span></div>-->
      </div>
      <!--数据表筛选条件-->
      <div class="filter" >
        <div class="filter-item">
          <span class="filter-title">应用id：</span>
          <el-select v-model="MsgCount.appid" placeholder="请选择">
            <el-option
              v-for="item in select.appidList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="filter-item">
          <span class="filter-title">起始时间：</span>
          <el-date-picker
            v-model="MsgCount.start_time"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="startTime"
            placeholder="选择日期时间"
            style="width:218px"
          >
          </el-date-picker>
        </div>
        <div class="filter-item">
          <span class="filter-title">结束时间：</span>
          <el-date-picker
            v-model="MsgCount.end_time"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="endTime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </div>
        <div class="filter-item" style="margin-left: 60px;">
          <span class="filter-title"></span>
          <el-button plain style="padding:7px 10px" @click="doSearch"  icon="el-icon-search">查询</el-button>
        </div>
      </div>
      <!--数据表格内容-->
      <div class="list-content">
        <div style="text-align: center">
          <span style="cursor: pointer;" @click="showChart1" :class="currentChart===1?'currentChart':''">列表</span><span style="margin-left: 40px;cursor: pointer" @click="showChart2" :class="currentChart===2?'currentChart':''">图示</span>
        </div>
        <div style="border-bottom:2px solid #10a6ab">
          <span style="background-color: #10a6ab;color:#fff;padding:2px 6px 0 6px">查询结果：</span>
        </div>
        <msg-list :msgDataObj="msgDataObj" v-if="currentChart===1?true:false"></msg-list>
        <msg-chart :msgDataObj="msgDataObj" v-if="currentChart===2?true:false"></msg-chart>

      </div>

    </div>
  </div>
</template>

<script>
  import MsgList from '@/components/searchMsg/MsgList'
  import MsgChart from '@/components/searchMsg/MsgChart'
  export default {
    name: "search-msg",
    data () {

      return {
        //条件筛选，appid下拉列表
        msgDataObj:{
          pt_reply_num:{
            Int64:0
          },
          pt_no_reply_num:{
            Int64:0
          },
          pt_clientai_num:{
            Int64:0
          },
          pt_serverai_num:{
            Int64:0
          },
          pt_customer_num:{
            Int64:0
          },
          ob_reply_num:{
            Int64:0
          },
          ob_clientai_num:{
            Int64:0
          },
          ob_serverai_num:{
            Int64:0
          },
          ob_customer_num:{
            Int64:0
          },
          server_ai_num:{
            Int64:0
          },
          client_ai_num:{
            Int64:0
          },
          customer_num:{
            Int64:0
          },
          pt_reply_cu_num:{
            Int64:0
          },
          pt_no_reply_cu_num:{
            Int64:0
          },
          pt_customer_sum:{
            Int64:0
          }
        },
        select:{
          appidList:[],

        },
        //当前对象
        MsgCount:{
          count:0,
          appid:null,
          start_time:this.formatDate("yyyy-MM-dd 00:00:00",new Date()),
          end_time:this.formatDate("yyyy-MM-dd hh:mm:ss",new Date()),
        },
        currentChart:1,
      }
    },
    methods: {

      // 获取列表
      getMsgCount(){
        this.$post("/chat_msg/count_data",{appid_list:this.MsgCount.appid==null?null:[this.MsgCount.appid],start_time:this.MsgCount.start_time,end_time:this.MsgCount.end_time}).then(res=>{
          this.msgDataObj =  res.count_data;
        })
      },
      //根据条件查询聊天详情列表
      doSearch(){

        if(this.MsgCount.start_time===null&&this.MsgCount.end_time===null){
          this.$message.error("“起始时间”和“结束时间”不能为空。");
        }else if(this.MsgCount.start_time===null){
          this.$message.error("“起始时间”不能为空。");
        }else if(this.MsgCount.end_time===null){
          this.$message.error("“结束时间”不能为空。");
        }else{
          this.getMsgCount();
        }

      },

      startTime(value){
        this.MsgCount.start_time = value;
      },
      endTime(value){
        this.MsgCount.end_time = value;
      },

      showChart1(){
        this.currentChart = 1;
      },
      showChart2(){
        this.currentChart = 2;
      }
    },
    components:{
      "msg-list":MsgList,
      "msg-chart":MsgChart
    },
    created(){
      //获取应用列表列表
      this.select.appidList = this.getAppidList();
      this.select.appidList.unshift({value:null,label:"--------"});
    },


  }


</script>

<style>
  .list-content .el-table{
    min-width:200px;
  }
  .list-content .el-table--border, .el-table--group{
    border-top:1px solid rgb(48, 65, 86);
  }

</style>
<style scoped>
  .list-content{
    width:100%;min-width:1200px;
    height:540px;
    border:1px solid rgb(48, 65, 86);border-top:none;
    padding:20px;
  }
  .app-detail{
    padding:1px 0;
    color:#10A6AB;
  }
  .app-detail:hover{
    border-bottom: 1px solid #10A6AB;
    cursor: pointer;
  }
  .popover>p{
    height:24px;
    line-height: 24px;
    color:#1f2d3d;
  }
  .search{
    width: 100%;
    margin: 14px 20px;

  }
  .search-item{
    float: left;
    margin-left: 20px;
  }
  .search-item:first-child{
    margin-left: 0;
  }
  .search-title{
    color:#10A6AB;
    font-size: 14px;
    line-height: 40px;
    float: left;
  }
  .ml{
    margin-left: 20px;
  }


  .currentChart{
    color:#10A6AB;border-bottom: 1px solid #10a6ab;

  }

</style>
