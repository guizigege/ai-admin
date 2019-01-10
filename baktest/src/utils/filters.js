//用于注册全局过滤对象
const filters = {
  //状态
  status(value) {
    const statusMap = {
      0: "删除",
      1: "正常",
      "default": "未知"
    };
    return statusMap[value] || statusMap["default"]
  },
  //图灵回复几率
  turingChance(value){
    return value/10+"%";
  },
  //是与否
  yesOrNo(value){
    const yesOrNoMap = {
      0: "否",
      1: "是",
      "default": "未知"
    };
    return yesOrNoMap[value] || yesOrNoMap["default"]
  },
  //是否接入客服
  isCustomer(value) {
    const isCustomerMap = {
      0: "否",
      1: "接入",
      "default": "未知"
    };
    return isCustomerMap[value] || isCustomerMap["default"]
  },
  //是否存储聊天记录到数据库
  chatMsgNoStore(value) {
    const chatMsgNostoreMap = {
      0: "存储",
      1: "不存储",
      "default": "未知"
    };
    return chatMsgNostoreMap[value] || chatMsgNostoreMap["default"]
  },
  //匹配模式
  matchFlag(value) {
    const matchFlagMap = {
      1: "模糊匹配",
      2: "精确匹配",
      "default": "未知"
    };
    return matchFlagMap[value]
  },
  //发送与接收
  msgDirection(value) {
    const msgDirectionMap = {
      1: "发送",
      2: "接收",
      "default": "未知"
    };
    return msgDirectionMap[value]
  },

};

export default filters;
