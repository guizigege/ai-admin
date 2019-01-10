
<template>
  <div class="chat-msg">
    <div style="width: 90%;height:1200px">
      <!--面包屑导航-->
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item >
            <span>聊天详情管理</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item >聊天详情列表</el-breadcrumb-item>
          <el-breadcrumb-item ></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--数据表头和标题-->
      <div class="list-header" >
        <div class="title">聊天详情列表({{sumData.count}})</div>
        <!--<div style="float: right;"><span class="table-add" @click="toAdd"><i class="el-icon-plus table-add-icon"></i>添加新的应用</span></div>-->
      </div>
      <!--数据表筛选条件-->
      <div class="filter">
        <div class="filter-item">
          <span class="filter-title">应用id：</span>
          <el-select v-model="current.appid" placeholder="请选择应用号"  style="width:200px">
            <el-option
              v-for="item in select.appidList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="filter-item">
          <span class="filter-title">合作方平台号：</span>
          <el-input v-model="current.pt_id" placeholder="请输入合作方平台号" style="width:200px;"></el-input>
        </div>
        <div class="filter-item">
          <span class="filter-title">消息内容：</span>
          <el-input v-model="current.msg" placeholder="请输入消息内容" style="width:200px"></el-input>
        </div>
        <div class="filter-item">
          <span class="filter-title">消息方向：</span>
          <el-select v-model="current.direction" placeholder="请选择" style="width:100px">
            <el-option
              v-for="item in select.direction"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="filter" style="border-top:none">
        <div class="filter-item">
          <span class="filter-title">发送方：</span>
          <el-input v-model="current.from" placeholder="请输入发送方号" style="width:300px"></el-input>
        </div>
        <div class="filter-item">
          <span class="filter-title">接收方：</span>
          <el-input v-model="current.to" placeholder="请输入接收方号" style="width:300px"></el-input>
        </div>
        <div class="filter-item">
          <span class="filter-title">相关方：</span>
          <el-input v-model="current.about" placeholder="请输入相关方号" style="width:300px"></el-input>
        </div>
      </div>
      <div class="filter" style="border-top:none">


        <div class="filter-item">
          <span class="filter-title">是否接入客服：</span>
          <el-select v-model="current.is_customer_start" placeholder="请选择"  style="width:120px">
            <el-option
              v-for="item in select.isCustomer"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="filter-item">
          <span class="filter-title">是否服务器AI回复：</span>
          <el-select v-model="current.is_server_ai" placeholder="请选择" style="width:120px">
            <el-option
              v-for="item in select.isServer"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="filter-item">
          <span class="filter-title">是否客户端AI回复：</span>
          <el-select v-model="current.is_client_ai" placeholder="请选择"  style="width:120px">
            <el-option
              v-for="item in select.isClient"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="filter" style="border-top:none">

        <div class="filter-item">
          <span class="filter-title">起始时间：</span>
          <el-date-picker
            v-model="current.start_time"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="startTime"
            placeholder="选择日期时间"
            style="width:230px"
          >
          </el-date-picker>
        </div>
        <div class="filter-item">
          <span class="filter-title">结束时间：</span>
          <el-date-picker
            v-model="current.end_time"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="endTime"
            placeholder="选择日期时间"
            style="width:230px"
          >
          </el-date-picker>
        </div>
        <div class="filter-item" style="margin-left: 50px;">
          <div class="title"></div>
          <el-button plain style="padding:7px 10px" @click="doSearch"  icon="el-icon-search">查询</el-button>
        </div>
      </div>

      <!--数据表格内容-->
      <el-table
        :data="tableData"
        style="width: 100%;" border>
        <el-table-column
          label="序号"
          width="80">
          <template slot-scope="scope">
            <span>{{scope.$index+1+((currentPage-1)*10)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="消息id"
          width="140">
          <template slot-scope="scope">
            <span>{{scope.row.msg_id}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="pt_id"
          label="合作方平台号"
          width="110">
        </el-table-column>
        <el-table-column
          label="应用id"
          width="100">
          <template slot-scope="scope">
            <span>{{scope.row.extra_info.appid}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="应用名称"
          width="80">
          <template slot-scope="scope">
            <span>{{scope.row.username}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="消息内容"
          width="250">
          <template slot-scope="scope">
            <span>{{scope.row.msg}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="发送方"
          width="150">
          <template slot-scope="scope">
            <span>{{scope.row.from}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="接收方"
          width="150">
          <template slot-scope="scope">
            <span>{{scope.row.to}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="消息方向"
          width="60">
          <template slot-scope="scope">
            <span>{{scope.row.extra_info.direction|msgDirection}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否接入客服"
          width="60">
          <template slot-scope="scope">
            <span>{{scope.row.extra_info.is_customer_start|yesOrNo}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否服务器AI回复"
          width="70">
          <template slot-scope="scope">
            <span>{{scope.row.extra_info.is_server_ai|yesOrNo}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否客户端AI回复"
          width="70">
          <template slot-scope="scope">
            <span>{{scope.row.extra_info.is_client_ai|yesOrNo}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="50">
          <template slot-scope="scope">
            <span>{{scope.row.status|status}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width="180">
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="sumData.count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

  import {page} from "../utils/mixins.js"
  import {formatDate} from '../utils/tool.js'
  export default {
    name: "chat-msg",
    mixins:[page],
    data () {
      return {
        select:{
          appidList:[],
          isCustomer:[
            {value:null,label:"------"},
            {value:0,label:"否"},
            {value:1,label:"是"},
          ],
          isServer:[
            {value:null,label:"------"},
            {value:0,label:"否"},
            {value:1,label:"是"},
          ],
          isClient:[
            {value:null,label:"------"},
            {value:0,label:"否"},
            {value:1,label:"是"},
          ],
          direction:[
            {value:null,label:"------"},
            {value:1,label:"发送"},
            {value:2,label:"接收"},
          ]
        },
        current:{
          appid:null,
          pt_id:"",
          from:"",
          to:"",
          about:"",
          msg:"",
          is_client_ai:null,
          is_server_ai:null,
          is_customer_start:null,
          direction:null,
          // start_time:formatDate("yyyy-MM-dd hh:mm:ss",new Date(new Date() - 7 * 24 * 3600 * 1000)),
          start_time: formatDate("yyyy-MM-dd 00:00:00",new Date()),
          end_time:formatDate("yyyy-MM-dd hh:mm:ss",new Date()),
        },
      }
    },
    methods: {
      // 获取列表
      getChatMsgList(){

        this.$post("/chat_msg/get_list",
          {
            page:this.currentPage,
            appid_list:this.current.appid===null?null:[this.current.appid],
            pt_id:this.current.pt_id,
            from:this.current.from,
            to:this.current.to,
            about:this.current.about,
            msg:this.current.msg,
            start_time:this.current.start_time,
            end_time:this.current.end_time,
            is_client_ai:this.current.is_client_ai,
            is_server_ai:this.current.is_server_ai,
            is_customer_start:this.current.is_customer_start,
            direction:this.current.direction
          }).then(res=>{
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
      //根据条件查询聊天详情列表
      doSearch(){
        if(this.current.start_time===null&&this.current.end_time===null){
          this.$message.error("“起始时间”和“结束时间”不能为空。");
        }else if(this.current.start_time===null){
          this.$message.error("“起始时间”不能为空。");
        }else if(this.current.end_time===null){
          this.$message.error("“结束时间”不能为空。");
        }else{
          this.currentPage = 1;
          this.getChatMsgList();
        }

      },

      //页组件当前页操作
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.getChatMsgList();
      },

      // 获取AI回复量
      getAICount(){
        this.$post("/chat_msg/get_ai_reply",{appid_list:[this.AIcount.appid],start_time:this.AIcount.start_time,end_time:this.AIcount.end_time}).then(res=>{
          this.AIcount.count = res.count;
        })
      },
      getMsgCount(){
        this.$post("/chat_msg/search_msg",{appid_list:this.MsgCount.appid==null?null:[this.MsgCount.appid],type:this.MsgCount.type,start_time:this.MsgCount.start_time,end_time:this.MsgCount.end_time}).then(res=>{
          this.MsgCount.count = res.count;
        })
      },

      startTime(value){
        this.current.start_time = value;
      },
      endTime(value){
        this.current.end_time = value;
      },
      AIcountStartTime(value){
        this.AIcount.start_time = value;
      },
      AIcountEndTime(value){
        this.AIcount.end_time = value;
      },
      MsgCountStartTime(value){
        this.MsgCount.start_time = value;
      },
      MsgCountEndTime(value){
        this.MsgCount.end_time = value;
      },
      searchAiCount(){
        this.getAICount();
      },
      searchMsgCount(){
        this.getMsgCount();
      }
    },

    created(){
      //获取应用列表列表
      this.getChatMsgList();
      this.select.appidList = this.getAppidList();
      this.select.appidList.unshift({value:null,label:"--------"});
    },
  }
</script>

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
</style>
