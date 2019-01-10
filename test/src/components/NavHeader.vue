<template>
  <div class="nav-header">
    <div class="nav">
      <div class="logo-box"><i class="iconfont icon-diqiu logo"></i>AI SERVER管理系统</div>
      <div class="esc" @click="esc"><span>登 出<i class="iconfont icon--dengru" style="margin-left: 4px;"></i></span></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'nav-header',
    data () {
      return {

      }
    },
    methods:{
      esc(){
        this.$router.push({path:"/login"})
      }
    },
  }
</script>

<style scoped>
  .nav{
    height:80px;
    width:100%;
    min-width: 1180px;
    background-color:#10A6AB ;
    position:relative;
  }
  .logo-box{
    height:80px;
    line-height: 80px;
    width:660px;
    text-align: center;
    color:#fff;
    font-size: 32px;
    font-weight:bolder;
    text-shadow: 2px 4px 2px #111;
  }
  .logo{
    color:#fff;
    font-size: 32px;
    font-weight:bolder;
    text-shadow: 2px 4px 2px #111;
    margin-right: 10px;
  }
  .title{
    width:200px;
    height: 80px;
    display: inline-block;
    line-height: 80px;
    color: #f1f1f1;
    font-size: 32px;
    font-weight: bolder;
    text-shadow: 3px 5px 6px #333;
    letter-spacing: 3px;
    margin-left: 220px;
  }
  .esc{
    color:#fff;
    font-weight: bold;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    min-width: 100px;
    position:absolute;
    right: 170px;
    top: 0;
  }
  .esc>span{
    cursor:pointer;
    padding-bottom: 1px;
  }
  .esc>span:hover{
   border-bottom: 1px solid #fff;
  }
</style>
