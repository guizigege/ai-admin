<template>
  <div class="msg-chart">
    <div class="clearfix chart-box">
      <div class="chart-box-left">
        <div class="chart-title">微信号数量统计：</div>
        <div class="chart-wx">
          <div class="no-reply">
            <div class="reply-tip">发送没回复的数量：{{msgDataObj.pt_no_reply_num.Int64}}</div>
          </div>
          <div class="reply">
            <div class="reply-tip">发送已回复的数量：{{msgDataObj.pt_reply_num.Int64}}</div>
          </div>
          <div class="reply-line"></div>
          <div class="client-ai">
            <!--跟客户端AI聊天的微信号数量：-->
            <div class="client-ai-tip">使用客户端AI聊天的微信号数量：{{msgDataObj.pt_clientai_num.Int64}}<br>(消息总量：{{msgDataObj.client_ai_num.Int64}})</div>
            <div class="server-ai">
              <div class="server-ai-tip">使用服务器端AI聊天的微信号数量：{{msgDataObj.pt_serverai_num.Int64}}<br>(消息总量：{{msgDataObj.server_ai_num.Int64}})</div>
            </div>
            <div class="customer">
              <div class="customer-tip">使用客服聊天的微信号数量：{{msgDataObj.pt_customer_num.Int64}}<br>(消息总量：{{msgDataObj.customer_num.Int64}})</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-box-right">
        <div class="chart-title">客户数量统计：</div>
        <div class="chart-kh">
          <div class="reply">
            <div class="reply-tip">发送已回复的数量：{{msgDataObj.ob_reply_num.Int64}}</div>
          </div>
          <div class="client-ai">
            <!--跟客户端AI聊天的微信号数量：-->
            <div class="client-ai-tip">跟客户端AI聊天的客户数量：{{msgDataObj.ob_clientai_num.Int64}}<br>(消息总量：{{msgDataObj.client_ai_num.Int64}})</div>
            <div class="customer">
              <div class="customer-tip">跟客服聊天的客户数量：{{msgDataObj.ob_customer_num.Int64}}<br>(消息总量：{{msgDataObj.customer_num.Int64}})</div>
            </div>
            <div class="server-ai">
              <div class="server-ai-tip">跟服务器端AI聊天的客户数量：{{msgDataObj.ob_serverai_num.Int64}}(消息总量：{{msgDataObj.server_ai_num.Int64}})</div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  export default{
    name: "msg-chart",
    props:{
      msgDataObj:{
        type:Object,
      }
    },
  }
</script>
<style lang="scss" scoped>
  $wx-width:575px;
  $wx-no-reply-width:175px;
  @mixin hover(){
    &:hover{
      box-shadow:3px 3px 4px #666;
      transform: translateY(1px);
    }
  }
  .chart-box{
    width:100%;
    height:450px;
  }
  .chart-box-left{
    float: left;
    position: relative;
  }
  .chart-title{
    height:40px;line-height: 40px;
    color: $minor-color;
    font-size: 14px;font-weight: bolder;
  }
  .chart-wx{
    width:$wx-width;
    height:400px;
    font-size: 14px;
    position:relative;
    .no-reply{
      width:$wx-no-reply-width;
      height:400px;
      background-color: rgba(22, 154, 232,0.8);
      border:2px solid $minor-color;border-right:none;
      float: left;
      @include hover();
    }
    .reply{
      width:$wx-width - $wx-no-reply-width;
      height:400px;
      background-color: rgba(225, 119, 171 ,0.8);
      border:2px solid $minor-color;border-left:none;
      float: right;
      @include hover();
    }
    .reply-tip{
      margin:20px 0 0 20px;
    }
    .reply-line{
      width:2px;
      height:400px;
      background-color:$minor-color;
      @include set-position(175px,0);
      z-index: 1000;
    }
    .client-ai{
      width:550px;
      height:300px;
      background-color:rgba(255, 204, 51,0.8);
      border:2px solid $minor-color;border-radius:50%;
      @include set-position(12px,58px);
      @include hover();
      .client-ai-tip{
        width:250px;
        @include set-position(180px,24px);
      }
      .customer{
        width:170px;
        height:170px;
        background-color:rgba(208, 52, 52,0.8);
        border:2px solid $minor-color;border-radius:50%;
        @include set-position(324px,70px);
        @include hover();
        .customer-tip{
          @include set-position(71px,38px);
        }
      }
      .server-ai{
        width:170px;
        height:170px;
        background-color:rgba(16, 166, 171,0.8);
        border:2px solid $minor-color;border-radius:50%;
        @include set-position(215px,70px);
        @include hover();
        .server-ai-tip{
          width:100px;
          @include set-position(12px,38px);
        }
      }
    }
  }
  .chart-box-right{
    float: right;
  }
  .chart-kh{
    width:575px;
    height:400px;
    font-size: 14px;
    position:relative;
    .reply{
      width:575px;
      height:400px;
      background-color: rgba(121, 185, 93,0.8);
      border:2px solid $minor-color;
      @include hover();
      .reply-tip{
        margin:20px 0 0 20px;
      }
    }
    .client-ai{
      width:400px;
      height:200px;
      background-color:rgba(194, 123, 160,0.8);
      border:2px solid $minor-color;border-radius:50%;
      @include set-position(45px,75px);
      @include hover();
      .client-ai-tip{
        @include set-position(82px,70px);
      }
      .customer{
        width:190px;
        height:190px;
        background-color:rgba(255, 229, 153,0.8);
        border:2px solid $minor-color;border-radius:50%;
        @include set-position(322px,20px);
        @include hover();
        .customer-tip{
          @include set-position(78px,67px);
        }
      }
      .server-ai{
        width:190px;
        height:190px;
        background-color:rgba(255, 153, 0,0.8);
        border:2px solid $minor-color;border-radius:50%;
        @include set-position(210px,110px);
        @include hover();
        .server-ai-tip{
          @include set-position(15px,80px);
        }
      }
    }
  }
</style>
