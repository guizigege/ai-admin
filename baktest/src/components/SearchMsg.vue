
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
        <div class="filter-item" style="margin-left: 20px;">
          <span class="filter-title"></span>
          <el-button plain style="padding:7px 10px" @click="doSearch"  icon="el-icon-search">统计查询</el-button>
          <el-button plain style="padding:7px 10px" @click="doSearchReply"  icon="el-icon-search">指定回复后查询</el-button>
        </div>
      </div>
      <!--数据表格内容-->
      <div class="list-content" style="height:960px">
        <!--<div style="text-align: center">-->
          <!--<span style="cursor: pointer;" @click="showChart1" :class="currentChart===1?'currentChart':''">列表</span><span style="margin-left: 40px;cursor: pointer" @click="showChart2" :class="currentChart===2?'currentChart':''">图示</span>-->
        <!--</div>-->
        <div style="border-bottom:2px solid #10a6ab">
          <span style="background-color: #10a6ab;color:#fff;padding:2px 6px 0 6px">查询结果：</span>
        </div>

        <!--<msg-list :msgDataObj="msgDataObj"></msg-list>-->
        <!--<msg-list :msgDataObj="msgDataObj" v-if="currentChart===1?true:false"></msg-list>-->
        <!--<msg-chart :msgDataObj="msgDataObj" v-if="currentChart===2?true:false"></msg-chart>-->
        <div style="margin-top: 20px;">
          <el-table
            :data="msgData"
            style="width: 652px;float: left;"
            max-height="900px"
            border
            :span-method="countType"
          >
            <el-table-column
              label="统计类别"
              width="120">
              <template slot-scope="scope">
                <span style="font-weight: bolder;color:#304156">{{scope.row.type}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="说明"
              width="380">
              <template slot-scope="scope">
                  <span>{{scope.row.desc}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="数量"
              width="150">
              <!--<template slot-scope="scope">-->
                  <!--<span v-if="scope.$index===0?true:false">{{msgDataObj.pt_reply_num.Int64}}</span> &lt;!&ndash;接入ai，客户回复的微信号数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===1?true:false">{{msgDataObj.pt_no_reply_num.Int64}}</span>&lt;!&ndash;接入ai，客户没回复的微信号数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===2?true:false">{{msgDataObj.pt_serverai_num.Int64}}</span>&lt;!&ndash;接入服务器ai的微信号数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===3?true:false">{{msgDataObj.pt_customer_num.Int64}}</span>&lt;!&ndash;接入客服的微信号数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===4?true:false">{{msgDataObj.pt_reply_cu_num.Int64}}</span>&lt;!&ndash;已回复的客服数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===5?true:false">{{msgDataObj.pt_no_reply_cu_num.Int64}}</span>&lt;!&ndash;没回复的客服数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===6?true:false">{{msgDataObj.ob_reply_num.Int64}}</span>&lt;!&ndash;接入ai，有回复的客户数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===7?true:false">{{msgDataObj.ob_no_reply_num.Int64}}</span>&lt;!&ndash;接入ai，没回复的客户数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===8?true:false">{{msgDataObj.ob_serverai_num.Int64}}</span>&lt;!&ndash;接入服务器ai的客户数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===9?true:false">{{msgDataObj.ob_customer_num.Int64}}</span>&lt;!&ndash;接入客服的客户数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===10?true:false">{{msgDataObj.reply_ob_num.Int64}}</span>&lt;!&ndash;已回复的客户数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===11?true:false">{{msgDataObj.no_reply_ob_num.Int64}}</span>&lt;!&ndash;没回复的客户数&ndash;&gt;-->
                  <!--<span v-if="scope.$index===12?true:false">{{msgDataObj.server_ai_num.Int64}}</span>&lt;!&ndash;服务器ai回复条数总量&ndash;&gt;-->
                  <!--<span v-if="scope.$index===13?true:false">{{msgDataObj.client_ai_num.Int64}}</span>&lt;!&ndash;客户端ai回复条数总量&ndash;&gt;-->
                  <!--<span v-if="scope.$index===14?true:false">{{msgDataObj.customer_pt_num.Int64}}</span>&lt;!&ndash;客服回复客户条数总量&ndash;&gt;-->
                  <!--<span v-if="scope.$index===15?true:false">{{msgDataObj.customer_ob_num.Int64}}</span>&lt;!&ndash;客户回复客服条数总量&ndash;&gt;-->
              <!--</template>-->
              <template slot-scope="scope">

              <span v-if="scope.$index===0?true:false">{{msgDataObj.pt_reply_num.Int64}}</span> <!--接入ai，客户回复的微信号数-->
              <span v-if="scope.$index===1?true:false">{{msgDataObj.pt_no_reply_num.Int64}}</span><!--接入ai，客户没回复的微信号数-->
              <span v-if="scope.$index===2?true:false">{{msgDataObj.ob_reply_num.Int64}}</span><!--接入ai，有回复的客户数-->
              <span v-if="scope.$index===3?true:false">{{msgDataObj.ob_no_reply_num.Int64}}</span><!--接入ai，没回复的客户数-->
              <span v-if="scope.$index===4?true:false">{{msgDataObj.client_ai_num.Int64}}</span><!--客户端ai回复条数总量-->

              <span v-if="scope.$index===5?true:false">{{msgDataObj.pt_serverai_num.Int64}}</span><!--接入服务器ai的微信号数-->
              <span v-if="scope.$index===6?true:false">{{msgDataObj.ob_serverai_num.Int64}}</span><!--接入服务器ai的客户数-->
              <span v-if="scope.$index===7?true:false">{{msgDataObj.server_ai_num.Int64}}</span><!--服务器ai回复条数总量-->

              <span v-if="scope.$index===8?true:false">{{msgDataObj.pt_customer_num.Int64}}</span><!--接入客服的微信号数-->
              <span v-if="scope.$index===9?true:false">{{msgDataObj.ob_customer_num.Int64}}</span><!--接入客服的客户数-->
              <span v-if="scope.$index===10?true:false">{{msgDataObj.pt_reply_cu_num.Int64}}</span><!--有回复的客服数-->
              <span v-if="scope.$index===11?true:false">{{msgDataObj.pt_no_reply_cu_num.Int64}}</span><!--没回复的客服数-->
              <span v-if="scope.$index===12?true:false">{{msgDataObj.customer_pt_num.Int64}}</span><!--客服回复客户条数总量-->
              <span v-if="scope.$index===13?true:false">{{msgDataObj.customer_ob_num.Int64}}</span><!--客户回复客服条数总量-->

                <!--<span v-if="scope.$index===10?true:false">{{msgDataObj.reply_ob_num.Int64}}</span>&lt;!&ndash;已回复的客户数&ndash;&gt;-->
                <!--<span v-if="scope.$index===11?true:false">{{msgDataObj.no_reply_ob_num.Int64}}</span>&lt;!&ndash;没回复的客户数&ndash;&gt;-->
              </template>
            </el-table-column>


          </el-table>


          <el-table
            :data="checkReplyData"
            style="width: 372px;float: left;margin-left: 20px;"
            max-height="900px"
            border
          >
            <el-table-column
              label="说明"
              width="220">
              <template slot-scope="scope">
                <span style="font-weight: bolder;color:#304156">{{scope.row.desc}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="数量"
              width="150">
              <template slot-scope="scope">
                <span v-if="scope.$index===0?true:false">{{checkReplyDataObj.pt_id_num}}</span>
                <span v-if="scope.$index===1?true:false">{{checkReplyDataObj.ob_num}}</span>
                <span v-if="scope.$index===2?true:false">{{checkReplyDataObj.ob_reply_num}}</span>
                <span v-if="scope.$index===3?true:false">{{checkReplyDataObj.ob_true_reply_num}}</span>
              </template>
            </el-table-column>


          </el-table>
        </div>
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

        msgDataObj:{
          pt_reply_num:{
            Int64:0   //接入ai，客户回复的微信号数
          },
          pt_no_reply_num:{
            Int64:0  //接入ai，客户没回复的微信号数
          },
          pt_serverai_num:{
            Int64:0  //接入服务器ai的微信号数
          },
          pt_customer_num:{
            Int64:0   //接入客服的微信号数
          },
          ob_reply_num:{
            Int64:0   //接入ai，有回复的客户数
          },
          ob_no_reply_num:{
            Int64:0   //接入ai，没回复的客户数
          },
          ob_serverai_num:{
            Int64:0   //接入服务器ai的客户数
          },
          ob_customer_num:{
            Int64:0   //接入客服的客户数
          },
          server_ai_num:{
            Int64:0    //服务器ai回复条数总量
          },
          client_ai_num:{
            Int64:0    //客户端ai回复条数总量
          },
          customer_pt_num:{
            Int64:0    //客服回复客户条数总量
          },
          customer_ob_num:{
            Int64:0    //客户回复客服条数总量
          },
          pt_reply_cu_num:{
            Int64:0   //已回复的客服数
          },
          pt_no_reply_cu_num:{
            Int64:0    //没回复的客服数
          },
          reply_ob_num:{
            Int64:0    //已回复的客户数
          },
          no_reply_ob_num:{
            Int64:0     //没有回复的客户数
          }
        },
        msgData:[
          // {desc:"接入AI，客户回复的微信号数",type:"微信号"},
          // {desc:"接入AI，客户没回复的微信号数",type:"微信号"},
          // {desc:"接入服务器AI的微信号数",type:"微信号"},
          // {desc:"接入客服的微信号数",type:"微信号"},
          // {desc:"有回复的客服数",type:"客服"},
          // {desc:"没回复的客服数",type:"客服"},
          // {desc:"接入AI，有回复的客户数",type:"客户"},
          // {desc:"接入AI，没回复的客户数",type:"客户"},
          // {desc:"接入服务器AI的客户数",type:"客户"},
          // {desc:"接入客服的客户数",type:"客户"},
          // {desc:"已回复的客户数",type:"客户"},
          // {desc:"没有回复的客户数",type:"客户"},
          // {desc:"服务器AI回复条数总量",type:"合计"},
          // {desc:"客户端AI回复条数总量",type:"合计"},
          // {desc:"客服回复客户条数总量",type:"合计"},
          // {desc:"客户回复客服条数总量",type:"合计"},

          {desc:"客户有回复的微信号数",type:"接入客户端AI"},
          {desc:"客户没回复的微信号数",type:"接入客户端AI"},
          {desc:"有回复的客户数",type:"接入客户端AI"},
          {desc:"没回复的客户数",type:"接入客户端AI"},
          {desc:"客户端AI回复条数总量",type:"接入客户端AI"},

          {desc:"微信号数",type:"接入服务器AI"},
          {desc:"客户数",type:"接入服务器AI"},
          {desc:"服务器AI回复条数总量",type:"接入服务器AI"},

          {desc:"微信号数",type:"接入客服"},
          {desc:"客户数",type:"接入客服"},
          {desc:"有回复的客服数",type:"接入客服"},
          {desc:"没回复的客服数",type:"接入客服"},
          {desc:"客服回复客户条数总量",type:"接入客服"},
          {desc:"客户回复客服条数总量",type:"接入客服"},

          // {desc:"已回复的客户数",type:"客户"},
          // {desc:"没有回复的客户数",type:"客户"},



        ],

        checkReplyDataObj:{
          ob_num:0,
          ob_reply_num:0,
          ob_true_reply_num:0,
          pt_id_num:0,
        },
        checkReplyData:[
          {desc:"下发微信号数"},
          {desc:"下发客户数"},
          {desc:"客户回复总数"},
          {desc:"去除被删除被拒收客户回复总数"},
        ],
        //条件筛选，appid下拉列表
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
      getCheckReplyCount(){
        this.$post("/chat_msg/cherk_reply",{appid:this.MsgCount.appid,start_time:this.MsgCount.start_time,end_time:this.MsgCount.end_time}).then(res=>{
          this.checkReplyDataObj =  res;
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
      doSearchReply(){
        if(this.MsgCount.appid===null){
          this.$message.error("请选择“应用id”");
        }else if(this.MsgCount.start_time===null&&this.MsgCount.end_time===null){
          this.$message.error("“起始时间”和“结束时间”不能为空。");
        }else if(this.MsgCount.start_time===null){
          this.$message.error("“起始时间”不能为空。");
        }else if(this.MsgCount.end_time===null){
          this.$message.error("“结束时间”不能为空。");
        }else{
          this.getCheckReplyCount();
        }

      },
      startTime(value){
        this.MsgCount.start_time = value;
      },
      endTime(value){
        this.MsgCount.end_time = value;
      },
      // countType({ row, column, rowIndex, columnIndex }){
      //   if (columnIndex === 0) {
      //     if (rowIndex === 0) {
      //       return {
      //         rowspan: 4,
      //         colspan: 1
      //       };
      //     } else if(rowIndex===4){
      //       return {
      //         rowspan: 2,
      //         colspan: 1
      //       };
      //     }else if(rowIndex===6){
      //       return {
      //         rowspan: 6,
      //         colspan: 1
      //       };
      //     }else if(rowIndex===12){
      //       return {
      //         rowspan: 4,
      //         colspan: 1
      //       };
      //     }else{
      //       return{
      //         rowspan: 0,
      //         colspan: 0
      //       }
      //     }
      //   }
      // }

      countType({ row, column, rowIndex, columnIndex }){
        if (columnIndex === 0) {
          if (rowIndex === 0) {
            return {
              rowspan: 5,
              colspan: 1
            };
          } else if(rowIndex===5){
            return {
              rowspan: 3,
              colspan: 1
            };
          }else if(rowIndex===8){
            return {
              rowspan: 6,
              colspan: 1
            };
          }else{
            return{
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
      // showChart1(){
      //   this.currentChart = 1;
      // },
      // showChart2(){
      //   this.currentChart = 2;
      // }
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
