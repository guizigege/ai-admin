exports.install = function (Vue, options) {
  //获取应用id列表
  Vue.prototype.getAppidList = function (){
    let appidList = [];
    this.$post('/application/get_list',{}).then((res)=>{
      let list = res.data_list;
      let len = list.length;
      for(let i=0;i<len;i++){
        let option = {};
        option.value = list[i].appid;
        appidList.push(option);
      }
    });
    return appidList;
  };
  Vue.prototype.formatDate =function(format,date)
  {
    var obj = {
      "M+" : date.getMonth()+1,                 //月份
      "d+" : date.getDate(),                    //日
      "h+" : date.getHours(),                   //小时
      "m+" : date.getMinutes(),                 //分
      "s+" : date.getSeconds(),                 //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(format))
      format=format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in obj)
      if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (obj[k]) : (("00"+ obj[k]).substr((""+ obj[k]).length)));
    return format;
  }
};
