<template>
  <div class="chat">
    <div class="chat-box">
      <div class="chat-top">聊天客服：12345</div>
      <div class="chat-content">
        <div class="chat-left">
          <div class="chat-output">
            <div class="time">
              2019-01-09 14:23:57
            </div>
            <div class="text clearfix">
              <div class="head-image head-image-receive">
                <img src="" alt="">
              </div>
              <div class="text-content text-content-receive">
                123123123123123123312312312312312312312312312312312312
              </div>
            </div>
            <div class="text clearfix">
              <div class="head-image head-image-send">
                <img src="" alt="">
              </div>
              <div class="text-content text-content-send">
                123123123123123123312312312312312312312312312312312312
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div class="chat-input">
            <div style="height:40px;line-height: 40px;border-bottom:1px solid #ccc;padding:0 20px">
              <i class="iconfont icon-Ovalx" style="color:#aaa;margin-right: 20px;cursor: pointer;" @click="sendEmoji"></i>
              <i class="iconfont icon-wenjian" style="color:#aaa;cursor: pointer;"></i>
            </div>
            <transition name="fade">
              <emoji @emotion="handleEmotion" :height="200" v-show="showEmoji" style="position:absolute;left:4px;top:-210px"></emoji>
            </transition>

            <p v-html="content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"  contenteditable="true" style=""></p>
          </div>
        </div>
        <div class="chat-right"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import emoji from '@/components/emoji/index'
  export default{
    name:"chat",
    data(){
      return{
        showEmoji:false,
        content:"",
        chatType:"text",
      }
    },
    methods:{
      sendEmoji(){
        this.showEmoji = !this.showEmoji;
      },
      handleEmotion (i) {
        console.log(i)
        this.content += i
      },
      // 将匹配结果替换表情图片
      emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
      }
    },
    components:{
      "emoji":emoji,
    }
  }
</script>

<style lang="scss" scoped>
   $chat-height:550px;


  .chat{
    margin-top: 20px;
  }
  .chat-box{
    width:850px;
    height:$chat-height+35px;
    font-size: 14px;
    box-shadow: 0 1px 5px 2px #ccc;
    .chat-top{
      width:850px;
      height:35px;
      line-height: 35px;
      color:#fff;
      background-color: $color;
      padding:0 20px;
    }
    .chat-content{
      background-color: #fff;
      .chat-left{
        width:550px;
        height:$chat-height;
        border-right: 1px solid #ccc;
        float: left;
        .chat-output{
          width:550px;
          height:350px;
          overflow: auto;
          border-bottom:1px solid #ccc;
          padding:5px 10px;
          .time{
            height:30px;
            line-height: 30px;
            color:#a1a1a1;
            text-align: center;
            margin-top: 10px;
          }
          .text{
            .text-content{
              width:200px;
              background-color: #fff;
              padding:10px 12px;
              word-wrap:break-word;
              border:1px solid #ccc;
              position:relative;
            }
            .text-content-send{
              color:#fff;
              background-color: $color;
              float:right;
              &::before{
                width: 0;
                height: 0;
                content: '';
                border-top: 0;
                border-right:0;
                border-bottom: 5px solid transparent;
                border-left: 10px solid $color;
                @include set-position(199px,0px)
              }
            }
            .text-content-receive{
              float: left;
              &::before{
                width: 0;
                height: 0;
                content: '';
                border-top: 0;
                border-right: 10px solid #ccc;
                border-bottom: 5px solid transparent;
                border-left: 0;
                @include set-position(-10px,-1px)
              }
            }
            .head-image{
              width:40px;height:40px;border:1px solid #ccc;
            }
            .head-image-send{
              float: right;margin-left: 15px;
            }
            .head-image-receive{
              float: left;margin-right: 15px;
            }
          }
        }
        .chat-input{
          position:relative;
        }
      }
      .chat-right{
        width:300px;
        height:$chat-height;
        float: right;
      }
    }
  }

   .fade-enter-active, .fade-leave-active {
     transition: opacity 0.35s
   }
   .fade-enter, .fade-leave-to {
     opacity: 0
   }
</style>
