<template>
  <div class="customer">
    <div class="group-box">
      <div class="group-box-content">
        <div class="content-right-title"></div>
        <div class="content-left">
          <div class="content-title">分组</div>
          <div class="top">
            <el-checkbox v-model="allUser" :true-label="1" :false-label="0" @change="chooseAll">全选</el-checkbox>
            <div class="choose-group">
              <el-select v-model="group" placeholder="添加到..." @change="confirmAddGroup">
                <el-option
                  v-for="item in select.group"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"

                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="body">
            <el-checkbox-group v-model="checkUserList">
              <div class="user-item" v-for="(item,index) in userList">
                <el-checkbox :label="item.id">
                  <img class="img"/>
                  <span class="desc">名称备注其他</span>
                  <div class="select">
                    <el-select v-model="group" placeholder="请选择分组">
                      <el-option
                        v-for="item in select"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"

                      >
                      </el-option>
                    </el-select>
                  </div>
                </el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
        </div>
        <div class="content-right">
          <div class="content-title" style="position:relative">


              <span class="new-group" @click="showCreateGroup"><i class="el-icon-plus table-add-icon"></i>新建分组</span>
            <transition name="fade">
              <div class="create-group" v-if="showCreateGroupDialog" >
                <div style="height:30px;line-height: 30px;">分组名称</div>
                <div style="height:40px;line-height: 40px;"><el-input v-model="groupName" @input="checkGroupName"></el-input></div>
                <div ref="groupNameTip"></div>
                <div style="height:46px;line-height: 46px;text-align: center">
                  <el-button type="primary" plain @click="doCreateGroup">确定</el-button>
                  <el-button @click="showCreateGroupDialog=false" style="margin-left: 20px;">取消</el-button>
                </div>
              </div>
            </transition>

          </div>
          <div class="group-type">全部用户(10100人)</div>
          <el-tree
            :data="data"
          >

              <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>

            </span>
          </el-tree>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  let id = 1000;
  export default{
    name: "customer",
    data(){
      return{
        allUser:0, //是否全选
        group:"", //选中的分组名称
        checkUserList:[], //选中的客服列表
        userList:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}], //当前客服列表
        select:{
          group:[]  //分组下拉框
        },
        showCreateGroupDialog:false, //新建分组弹框
        showConfirmAddGroupDialog:false, //确定是否分组的弹框
        groupName:"",//新建的分组名称
        //获取的客服分组列表
        data : [

        ],

      }
    },
    methods:{
      // 获取客服列表
      getCustomerList(){
        setTimeout(()=>{
          this.data = [{
            id: "A",
            label: "A组",
            children: [{id: "A1", label: '用户A1'},{id: "A2", label: '用户A2'},{id: "A3", label: '用户A3'},]
          },
            {
              id: "B",
              label: "B组",
              children: [{id: "B1", label: '用户B1'},{id: "B2", label: '用户B2'},{id: "B3", label: '用户B3'},]
            },
            {
              id: "C",
              label: "C组",
              children: [{id: "C1", label: '用户C1'},{id: "C2", label: '用户C2'},{id: "C3", label: '用户C3'},]
            },];
          for(let i=0;i<this.data.length;i++){
            let obj = {};
            obj.label = this.data[i].label;
            obj.value = this.data[i].id;
            this.select.group.push(obj)
          }

        },2000)
      },
      //全选
      chooseAll(value){
        if(value===1){
          for(let i=0;i<this.userList.length;i++){
            this.checkUserList.push(this.userList[i].id);
          }
        }else{
          this.checkUserList = [];
        }
      },
      //点击“新建分组”
      showCreateGroup(){
        this.showCreateGroupDialog = !this.showCreateGroupDialog;
      },
      //检测分组名称是否合法
      checkGroupName(value){
        if(value.trim()!==""){
          this.$refs.groupNameTip.innerHTML="";
        }
      },
      //新建分组
      doCreateGroup(){
        if(this.groupName!==""){
          const newChild = { id: id++, label: this.groupName};
          this.data.push(newChild);
          this.groupName = "";
          this.showCreateGroupDialog = false;
        }else{
          this.$refs.groupNameTip.innerHTML=`<span style="color:#ca391c;">组名不能为空</span>`;
        }
      },
      //选择分组后的处理逻辑
      confirmAddGroup(value){
        console.log(value)
      }

    },
    created(){
      this.getCustomerList();
    }
  }
</script>
<style lang="scss">

  .create-group .el-button{
    padding:8px 16px;
  }
  .create-group .el-input__inner{
    height:30px;
    line-height: 30px;
    border:1px solid $minor-color;
  }
 .choose-group .el-input__inner{
   width:200px;
   height:30px;
   line-height: 30px;
 }
  .choose-group .el-input__icon{
    height:inherit;
  }
  .user-item .el-checkbox{
    height:60px;
    line-height: 60px;
  }
 .user-item .el-checkbox__input{
   height:100px;
   line-height: 60px;
 }
  .user-item .el-input__inner{
    width:200px;
    height:30px;
    line-height: 30px;
  }
 .user-item .el-input__icon{
   height:inherit;
 }
 .user-item .el-checkbox__label{
   height:60px;
   line-height: 60px;
 }
</style>
<style lang="scss" scoped>
  $height:700px;
  .create-group{
    width:220px;
    line-height: 1.4;
    color: #606266;
    background: #fff;
    border: 1px solid #ebeef5;
    padding: 12px;
    text-align: justify;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    z-index: 2000;
    @include set-position(-10px,40px);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.35s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .group-box{
    width:900px;
    height:800px;
    font-size: 14px;
    .group-box-title{
      height:40px;
      line-height: 40px;
      color:#fff;
      background-color: $color;
      padding:0 20px;
      border:1px solid $minor-color;
    }
    .group-box-content{
      .content-title{
        height:40px;
        line-height: 40px;
        color:#fff;
        background-color: $color;
        padding:0 20px;
        border-top: 1px solid $minor-color;
        border-bottom: 1px solid $minor-color;
      }
      .content-left{
        width:700px;
        border:1px solid $minor-color;border-top:none;
        float: left;

        .top{
          height:40px;line-height: 40px;
          background-color: #fff;
          padding:0 20px;
          border-bottom:1px solid $minor-color;
          /*position:absolute;*/
          /*z-index: 1000;*/
          .choose-group{
            display: inline-block;
            margin-left: 40px;
          }
        }
        .body{
          height: $height;
          overflow: auto;
          .user-item{
            height:80px;
            line-height: 80px;
            border-bottom:1px solid $minor-color;
            padding:10px 20px;
            .img{
              width:50px;
              height:50px;
              border:1px solid #333;
              margin-left: 10px;
            }
            .desc{
              margin-left: 40px;
              vertical-align: top;
            }
            .select{
              margin-left: 200px;
              display: inline-block;
              vertical-align: top;
            }

          }
        }
      }
      .content-right{
        width:200px;
        height:$height+81px;
        text-align:center;
        border-right:1px solid $minor-color;
        border-bottom:1px solid $minor-color;
        float: right;
        .new-group{
          cursor: pointer;
          &:hover{
            border-bottom:1px solid #fff;
          }
        }
        .group-type{
          height:30px;
          line-height:30px;
          color:#fff;
          background-color: $minor-color;
        }
        
      }
    }
  }
</style>
