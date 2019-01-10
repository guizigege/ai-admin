
<template>
  <div class="appliction">
    <div style="width: 90%">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item >
            <span>应用管理</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item >应用列表</el-breadcrumb-item>
          <el-breadcrumb-item ></el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="list-header" >
        <div class="title">应用详情列表({{sumData.count}})</div>
        <!--<div style="float: right;"><span class="table-add" @click="toAdd"><i class="el-icon-plus table-add-icon"></i>添加新的应用</span></div>-->
      </div>
      <el-table
        :data="tableData"
        style="width: 100%" border max-height="800px">
        <el-table-column
          label="序号"
          width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+1+((currentPage-1)*10)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="appid"
          label="应用id"
          width="220">
        </el-table-column>

        <el-table-column
          label="状态"
          width="80">
          <template slot-scope="scope">
            <span>{{scope.row.status|status}}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="create_time"
          label="创建时间"
          width="200">
        </el-table-column>
        <el-table-column
          label="详细信息"
          width="200">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              trigger="click">
              <div class="popover">
                <p>应用id: <span class="green">{{scope.row.appid}}</span></p>
                <p v-if="scope.row.extra_info.is_customer===1?true:false">是否接入客服：<span class="fw">{{scope.row.extra_info.is_customer|isCustomer}}</span></p>
                <p v-if="scope.row.extra_info.is_customer_keypoint===1?true:false">是否在特定情况下接入客服：<span class="fw">{{scope.row.extra_info.is_customer_keypoint|yesOrNo}}</span></p>
                <p v-if="(scope.row.extra_info.is_customer===1||scope.row.extra_info.is_customer_keypoint===1)?true:false">客服系统vip编号：<span class="fw">{{scope.row.extra_info.customer_servvipkfid===""?"无":scope.row.extra_info.customer_servvipkfid}}</span></p>
                <p v-if="(scope.row.extra_info.is_customer===1||scope.row.extra_info.is_customer_keypoint===1)?true:false">客服系统的客服编号：<span class="fw">{{scope.row.extra_info.customer_host_im_number===""?"无":scope.row.extra_info.customer_host_im_number}}</span></p>
                <p v-if="(scope.row.extra_info.is_customer===1||scope.row.extra_info.is_customer_keypoint===1)?true:false">客服系统技能编号：<span class="fw">{{scope.row.extra_info.customer_setmanserviceid===""?"无":scope.row.extra_info.customer_setmanserviceid}}</span></p>
                <p v-if="scope.row.extra_info.is_turing===1?true:false">是否图灵回复：<span class="fw">{{scope.row.extra_info.is_turing|yesOrNo}}</span></p>
                <p v-if="scope.row.extra_info.is_turing===1?true:false">图灵apikey：<span class="red">{{scope.row.extra_info.turing_apikey}}</span></p>
                <p v-if="scope.row.extra_info.is_keyword_rsp===1?true:false">是否关键字回复：<span class="fw">{{scope.row.extra_info.is_keyword_rsp|yesOrNo}}</span></p>
                <p v-if="scope.row.extra_info.is_turing===1?true:false">图灵在不命中几率时使用随机缓存记录：<span class="fw">{{scope.row.extra_info.turing_random_cache|yesOrNo}}</span></p>
                <p v-if="scope.row.extra_info.is_turing===1?true:false">图灵回复几率：<span class="fw">{{scope.row.extra_info.turing_chance|turingChance}}</span></p>
                <p v-if="scope.row.extra_info.is_turing===1?true:false">图灵可用回复次数(每天早上8点重置)：<span class="fw">{{scope.row.extra_info.turing_times}}次</span></p>
                <p v-if="scope.row.extra_info.is_turing===1?true:false">图灵在命中几率时却次数不足时随机用配置的话术来结束对话状态：<span class="fw">{{scope.row.extra_info.turing_random_dialog|yesOrNo}}</span></p>
                <p v-if="scope.row.extra_info.chat_msg_nostore===1?true:false">是否存储聊天记录到数据库：<span class="fw">{{scope.row.extra_info.chat_msg_nostore|chatMsgNoStore}}</span></p>
              </div>
              <span class="app-detail" slot="reference">查看详情</span>
            </el-popover>

          </template>
        </el-table-column>
        <el-table-column label="操作"  width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="toEdit(scope.row.appid)">编辑</el-button>
          </template>
        </el-table-column>


      </el-table>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

  import {page} from "../utils/mixins.js"
  export default {
    name: "application",
    mixins:[page],
    data () {
      return {
        start_time:"",
        end_time:"",
        AIcount:0,

        select:{
          appidList:[]
        },
        current:{
          appid:null
        }
      }
    },
    methods: {

      // 获取列表
      getAppList(){
        this.$post("/application/get_list",{page:1}).then(res=>{
          this.tableData = res.data_list;
          this.sumData = res.sum_data;
          if(this.tableData.length===0){
            this.sumData.count = 0;
          }
        })
      },
      //前往添加应用页面
      toAdd(){
        this.$router.push({path:"/home/application/add"});
      },

      //前往编辑应用页面
      toEdit(appid){
        this.$router.push({path:"/home/application/edit/"+appid});
      },
      //页组件当前页操作
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
      },

      // 获取AI回复量
      getAICount(){
        this.$post("/chat_msg/get_ai_reply",{appid_list:[this.current.appid],start_time:this.start_time,end_time:this.end_time}).then(res=>{
          this.AIcount = res.count;
        })
      },
      currentAppid(){
        if(this.current.appid!=null&&(this.start_time!==""&&this.start_time!==null)&&(this.end_time!==""&&this.end_time!=null)){
          this.getAICount();
        }else{
          this.AIcount = 0;
        }
      },
      startTime(value){
        this.start_time = value;
        if(this.current.appid!=null&&(this.start_time!==""&&this.start_time!==null)&&(this.end_time!==""&&this.end_time!=null)){
          this.getAICount();
        }else{
          this.AIcount = 0;
        }
      },
      endTime(value){
        this.end_time = value;
        if(this.current.appid!=null&&(this.start_time!==""&&this.start_time!=null)&&(this.end_time!==""&&this.end_time!=null)){
          this.getAICount();
        }else{
          this.AIcount = 0;
        }
      },

    },

    created(){
      //获取应用列表列表
      this.getAppList();
      this.select.appidList = this.getAppidList();
      this.select.appidList.unshift({value:null,label:"--------"});


    },


  }
</script>

<style>
  /*.el-checkbox{*/
    /*cursor:default;*/
  /*}*/
  /*.el-checkbox__input.is-disabled+span.el-checkbox__label{*/
    /*color: #10A6AB;*/
    /*cursor:default;*/
  /*}*/
  /*.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{*/
    /*color:#fff;*/
    /*background-color: #10A6AB;*/
    /*border-color: #10A6AB;*/
    /*cursor:default;*/
  /*}*/
  /*.el-checkbox__input.is-disabled .el-checkbox__inner::after{*/
    /*cursor:default!important;*/
    /*border-color: #fff!important;*/
  /*}*/
</style>
<style scoped>
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
</style>
