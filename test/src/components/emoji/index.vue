<template>
  <div>
    <div class="emotion-box" :style="{height: height + 'px' }" >
      <div class="emotion-box-line" v-for="(line, i) in list" :key="i" >
        <emotion class="emotion-item" v-for="(item, i) in line" :key="i" @click.native="clickHandler(item)" >{{item}}</emotion>
      </div>
      <span class="triangle"></span>
    </div>
  </div>
</template>

<script>
import Emotion from './Emotion'
export default {
  props: {
    height: {
      type: Number,
      default: 200,
    }
  },
  data () {
    return {
      list: [
        ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴'],
        ['睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过']
        ['酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'],
        ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂'],
        ['疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见'],
        ['擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'],
        ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀'],
        ['西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰',],
        ['凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'],
        ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强'],
        ['弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你'],
        ['NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'],
        ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '左太极', '右太极'],
      ]
    }
  },
  methods: {
    clickHandler (item) {
      let emotion = `#${item};`
      this.$emit('emotion', emotion)
    }
  },
  components: {
    Emotion
  }
}
</script>
<style lang="scss" scoped>
  .emotion-box {
    width: 400px;
    background-color: #fff;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 5px;
    box-shadow:0 1px 5px 2px #ccc;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {/*滚动条整体样式*/
      width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
    }
    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
    }
    .triangle{
      width:0;
      height:0;
      border-top:16px solid #cecece;
      border-left:0 solid transparent;
      border-right:40px solid transparent;
      @include set-position(22px,200px)
    }
  }
  .emotion-box-line {
    display: flex;
  }
  .emotion-item {
    flex: 1;
    text-align: center;
  }
</style>
