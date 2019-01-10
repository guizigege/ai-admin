<template>
  <div class="login">
    <div class="bg">
      <div class="box">
        <div class="box-title">AI SERVER管理系统</div>
        <div class="box-form">
          <div class="form-title"><span>管理登入</span><span style="padding:0 10px;font-weight: normal;">|</span><span style="font-size: 16px;">ADMINLOGIN</span></div>
          <div class="form-item" style="position:relative"><i class="iconfont icon-yonghu" style="color:#666;position:absolute;left:58px;top:12px"></i><input type="text" id="user" ref="user" v-model="username" placeholder="账号" style="padding-left:28px;background-color: #fff;"/></div>
          <div class="form-item" style="position:relative"><i class="iconfont icon-mima" style="color:#666;position:absolute;left:58px;top:12px"></i><input type="password" id="pwd" ref="pwd" v-model="password" placeholder="密码" style="padding-left:30px;background-color: #fff;"/></div>
          <div class="form-item"><button @click="toIndex" @keyup.enter="toIndex" class="login-btn" id="login">sign in</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';
  export default {
    name: 'login',
    data () {
      return {
        username:"",
        password:""
      }
    },
    methods:{
      // toIndex(){
      //   if (this.username == "") {
      //     alert("请输入正确的用户名");
      //     this.$refs.user.focus();
      //     return;
      //   } else if (this.password == "") {
      //     alert("请输入正确的密码");
      //     this.$refs.pwd.focus();
      //     return;
      //   }
      //   this.$post('/auth/login',{
      //     username: this.username,
      //     password: md5(this.password)
      //   }).then((res)=> {
      //     if (res.result === 1) {
      //       this.$router.push("/home")
      //     } else {
      //       alert("用户名或密码错误,请重新输入");
      //       this.$refs.user.focus();
      //       this.username = "";
      //       this.password = "";
      //     }
      //   })
      // }
      toIndex(){
        this.$router.push({path:"/home/application"});
      }
    },

  }
</script>
<style>
  .btn>.el-button{
    font-weight: 600;
    box-shadow:2px 2px 3px #333;
  }
  .btn>.el-button:active{
    box-shadow:1px 1px 1px #333 inset;
  }
</style>

<style scoped>

  .bg{
    width:100%;
    height:100%;
    min-width: 100vh;
    min-height: 100vh;
    background-image:url(../../static/bg2.jpg);
    background-size: cover;

  }
  .box{
    width: 100vh;
    height: 100vh;
    margin:  auto;
    position: relative;
  }
  .box-title{
    width: 500px;
    font-size: 34px;
    font-weight: bolder;
    text-align: center;
    color:#fff;
    position: absolute;
    top: 12vh;
    left: -250px;
    margin-left: 50%;
    padding: 50px 70px;
    box-sizing: border-box;
    border-radius: 30px;
    text-shadow: 2px 4px 2px #111;
  }
  .box-form{
    width: 500px;
    background-color: #10A6AB;
    position: absolute;
    top: 24vh;
    left: -250px;
    margin-left: 50%;
    padding: 50px 70px;
    box-sizing: border-box;
    border-radius: 30px;
    box-shadow: 10px 10px 22px #111;
    transition: all 0.5s;
  }
  .box-form .form-title{
    width:100%;
    margin-left: -20px;
    margin-top: -20px;
  }
  .form-title>span{
    display: inline-block;
    color: #fff;
    transition: font-size 0.3s ease-in,color 0.2s ease-in;
    font-size:22px;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 1px 1px 1px #111;
  }

  .box-form label{
    color: #fff;
    font-weight: bold;
    margin-right: 16px;
  }
  .box-form input{

    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 260px;

  }
  .box-form input:focus,.box-form input:hover{
    border-color:#409eff;
  }
  .form-item{
    margin-top: 30px;
    padding: 0 18px;
    text-align: center;
  }
  .login-btn{
    width: 80px;
    height: 36px;
    font-size: 16px;
    font-weight: bold;
    border-radius:4px;
    margin-top: 2px;
    margin-right: 20px;
    background-color: rgba(60,60,60,0.3);
    border:none;outline:none;
    transition: all 0.3s;
    color:#fff;
    box-shadow:3px 3px 4px #000;
  }
  .login-btn:hover{
    background-color: rgba(60,60,60,0.4);
  }
  .login-btn:active{
    box-shadow:3px 3px 4px #000 inset;
  }
</style>
