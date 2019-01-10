<template>
  <div class="msg-list">
    <div class="sum">客户端AI消息总量：{{msgDataObj.client_ai_num.Int64}}</div>
    <div class="sum">服务器端AI消息总量：{{msgDataObj.server_ai_num.Int64}}</div>
    <div class="sum">客服消息总量：{{msgDataObj.customer_num.Int64}}</div>
    <div class="sum">客服回复消息总量：{{msgDataObj.pt_customer_sum.Int64}}</div>
    <div class="table-count-title" style="border-top:1px solid rgb(48, 65, 86)">微信号数量统计</div>
    <div>
      <el-table
      :data="wxListData"
      border>
      <el-table-column
      label="未回复"
      width="250">
      <template slot-scope="scope">
      <span>{{msgDataObj.pt_no_reply_num.Int64}}</span>
      </template>
      </el-table-column>
      <el-table-column
      label="已经回复"
      width="250">
        <template slot-scope="scope">
          <span>{{msgDataObj.pt_reply_num.Int64}}</span>
        </template>
      </el-table-column>
        <el-table-column
          label="使用客服端AI聊天"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.pt_clientai_num.Int64}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="使用服务器AI聊天"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.pt_serverai_num.Int64}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="使用客服聊天"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.pt_customer_num.Int64}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="table-count-title">客户数量统计</div>
    <div>
      <el-table
        :data="kuListData"
        border>
        <el-table-column
          label="已经回复"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.ob_reply_num.Int64}}</span>
          </template>

        </el-table-column>
        <el-table-column
          label="跟客服端AI聊天"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.ob_clientai_num.Int64}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="跟服务器AI聊天"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.ob_serverai_num.Int64}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="跟客服聊天"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.ob_customer_num.Int64}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="table-count-title">客服数量统计</div>
    <div>
      <el-table
        :data="kfListData"
        border>
        <el-table-column
          label="未回复"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.pt_no_reply_cu_num.Int64}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="已经回复"
          width="250">
          <template slot-scope="scope">
            <span>{{msgDataObj.pt_reply_cu_num.Int64}}</span>
          </template>
        </el-table-column>
      </el-table>
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
        wxListData:[{}],
        kuListData:[{}],
        kfListData:[{}]
      }
    }
  }
</script>
<style scoped>
  .sum{
    line-height: 30px;
    color:#5f7494;
    font-size: 14px;font-weight: bold;
  }
  .table-count-title{
    color:#fff;
    background-color: #10A6AB;
    text-align: center;
    border: 1px solid rgb(48, 65, 86);border-bottom: none;border-top: none
  }
</style>
