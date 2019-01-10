<template>
  <div class="msg-list">
    <div style="float: left;">
      <div class="table-count-title">客户数量统计</div>
      <div class="table">
        <el-table
          :data="khListData"
          border>
          <el-table-column
            label="说明"
            width="300">
            <template slot-scope="scope">
              <span>{{scope.row.desc}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="100">
            <template slot-scope="scope">
              <span v-if="scope.$index===0?true:false">{{msgDataObj.ob_reply_num.Int64}}</span>
              <span v-if="scope.$index===1?true:false">{{msgDataObj.ob_no_reply_num.Int64}}</span>
              <span v-if="scope.$index===2?true:false">{{msgDataObj.ob_serverai_num.Int64}}</span>
              <span v-if="scope.$index===3?true:false">{{msgDataObj.ob_customer_num.Int64}}</span>
              <span v-if="scope.$index===4?true:false">{{msgDataObj.reply_ob_num.Int64}}</span>
              <span v-if="scope.$index===5?true:false">{{msgDataObj.no_reply_ob_num.Int64}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-count-title" style="border-top: none;">客服数量统计</div>
      <div class="table">
        <el-table
          :data="kfListData"
          border>
          <el-table-column
            label="说明"
            width="300">
            <template slot-scope="scope">
              <span>{{scope.row.desc}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="100">
            <template slot-scope="scope">
              <span v-if="scope.$index===0?true:false">{{msgDataObj.reply_ob_num.Int64}}</span>
              <span v-if="scope.$index===1?true:false">{{msgDataObj.no_reply_ob_num.Int64}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    
   
    <div style="float: left;margin-left: 20px;">
      <div class="table-count-title" style="border-top:1px solid rgb(48, 65, 86);">微信号数量统计</div>
      <div class="table">
        <el-table
          :data="wxListData"
          border>
          <el-table-column
            label="说明"
            width="300px">
            <template slot-scope="scope">
              <span>{{scope.row.desc}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="100px">
            <template slot-scope="scope">
              <span v-if="scope.$index===0?true:false">{{msgDataObj.pt_reply_num.Int64}}</span>
              <span v-if="scope.$index===1?true:false">{{msgDataObj.pt_no_reply_num.Int64}}</span>
              <span v-if="scope.$index===2?true:false">{{msgDataObj.pt_serverai_num.Int64}}</span>
              <span v-if="scope.$index===3?true:false">{{msgDataObj.pt_customer_num.Int64}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="padding:20px 40px">
        <div class="sum"> 服务器ai回复条数总量：{{msgDataObj.server_ai_num.Int64}}</div>
        <div class="sum"> 客户端ai回复条数总量：{{msgDataObj.client_ai_num.Int64}}</div>
        <div class="sum"> 客服回复客户条数总量：{{msgDataObj.customer_pt_num.Int64}}</div>
        <div class="sum"> 客户回复客服条数总量：{{msgDataObj.customer_ob_num.Int64}}</div>
      </div>

    </div>

  </div>
</template>

<script>
  export default{
    name: "msg-list",
    props:{
      msgDataObj:{
        type:Object,
      }
    },
    data(){
      return{
        wxListData:[
          {desc:"接入ai，客户回复的微信号数"},
          {desc:"接入ai，客户没回复的微信号数"},
          {desc:"接入服务器ai的微信号数"},
          {desc:"接入客服的微信号数"},
        ],
        khListData:[
          {desc:"接入ai，有回复的客户数"},
          {desc:"接入ai，没回复的客户数"},
          {desc:"接入服务器ai的客户数"},
          {desc:"接入客服的客户数"},
          {desc:"接入云客服，已回复的客户数"},
          {desc:"接入云客服，没有回复的客户数"},
        ],
        kfListData:[
          {desc:"已回复的客服数"},
          {desc:"没回复的客服数"},
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  $width:400px;
  .msg-list{
    padding:20px 0;
  }
  .sum{
    height:40px;
    line-height: 40px;
    color:#5f7494;
    font-size: 15px;font-weight: bold;
  }
  .table-count-title{
    width:$width;
    color:#fff;
    background-color: #10A6AB;
    font-size: 15px;
    text-align: center;
    border: 1px solid rgb(48, 65, 86);border-bottom: none;
  }
  .table{
    width:$width;
    .desc{
      width:400px;
    }
    .num{

      width:200px;
    }
  }
</style>
