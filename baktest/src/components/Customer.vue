<template>
  <div class="customer">
    <!--<div class="group-box">-->
      <!--<div class="group-box-title">分组</div>-->
      <!--<div class="group-box-content">-->
        <!--<div class="content-left">-->
          <!--<div class="top">-->
            <!--<el-checkbox v-model="allUser" :true-label="1" :false-label="0">全选</el-checkbox>-->
            <!--<div class="choose-group">-->
              <!--<el-select v-model="group" placeholder="请选择分组">-->
                <!--<el-option-->
                  <!--v-for="item in select"-->
                  <!--:key="item.value"-->
                  <!--:label="item.label"-->
                  <!--:value="item.value"-->
                <!--&gt;-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="body">-->
            <!--<el-checkbox-group v-model="checkUserGroup">-->
              <!--<div class="user-item">-->
                <!--<el-checkbox>-->
                  <!--<img style="width:50px;height:50px;border:1px solid #333;margin-left: 10px;"/>-->
                  <!--&lt;!&ndash;<span style="margin-left: 40px;">名称123123</span>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div style="margin-left: 200px;display: inline-block">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-select v-model="group" placeholder="请选择分组">&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                        <!--&lt;!&ndash;v-for="item in select"&ndash;&gt;-->
                        <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                        <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                        <!--&lt;!&ndash;:value="item.value"&ndash;&gt;-->
                      <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                  <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</el-checkbox>-->

              <!--</div>-->

            <!--</el-checkbox-group>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="content-right">-->

        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default{
    name: "customer",
    data(){
      return{
        allUser:0,
        group:"",
        checkUserGroup:[],
        select:{

        }
      }
    },
    methods:{

    }
  }
</script>
<!--<style>-->
 <!--.choose-group .el-input__inner{-->
   <!--width:200px;-->
   <!--height:30px;-->
   <!--line-height: 30px;-->
 <!--}-->
  <!--.choose-group .el-input__icon{-->
    <!--height:inherit;-->
  <!--}-->
  <!--.user-item .el-checkbox{-->
    <!--height:60px;-->
    <!--line-height: 60px;-->
  <!--}-->
 <!--.user-item .el-checkbox__input{-->
   <!--height:100px;-->
   <!--line-height: 60px;-->
 <!--}-->
  <!--.user-item .el-input__inner{-->
    <!--width:200px;-->
    <!--height:30px;-->
    <!--line-height: 30px;-->
  <!--}-->
 <!--.user-item .el-input__icon{-->
   <!--height:inherit;-->
 <!--}-->
 <!--.user-item .el-checkbox__label{-->
   <!--height:60px;-->
   <!--line-height: 60px;-->
 <!--}-->
<!--</style>-->
<!--<style lang="scss" scoped>-->
  <!--.group-box{-->
    <!--width:800px;-->
    <!--height:1000px;-->
    <!--background-color: pink;-->
    <!--font-size: 14px;-->
    <!--.group-box-title{-->
      <!--height:40px;-->
      <!--line-height: 40px;-->
      <!--color:#fff;-->
      <!--background-color: $color;-->
      <!--padding:0 20px;-->
      <!--border:1px solid $minor-color;border-bottom:none;-->
    <!--}-->
    <!--.group-box-content{-->
      <!--.content-left{-->
        <!--.top{-->
          <!--height:40px;-->
          <!--line-height: 40px;-->
          <!--padding:0 20px;-->
          <!--border:1px solid $minor-color;-->
          <!--.choose-group{-->
            <!--display: inline-block;-->
            <!--margin-left: 40px;-->
          <!--}-->
        <!--}-->
        <!--.body{-->
          <!--.user-item{-->
            <!--height:80px;-->
            <!--line-height: 80px;-->
            <!--border: 1px solid #333;-->
            <!--padding:10px 20px;-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->
