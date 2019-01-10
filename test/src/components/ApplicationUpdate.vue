<template>
  <div class="application-edit">
    <div style="width: 90%">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right" >
          <el-breadcrumb-item :to="{ path: '/home/application' }">商品列表</el-breadcrumb-item>
          <el-breadcrumb-item>{{operation.type==="edit"?"编辑应用":"添加应用"}}</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="list-header" >
        <div class="title">{{operation.type==="edit"?"编辑应用":"添加应用"}}</div>
      </div>
      <div class="list-body">
        <div class="infoTable">
          <div class="infoTable-title" style="border-top:1px solid rgb(48, 65, 86);">基本信息</div>
          <el-table
            :data="baseInfoData"
            border
            style="min-width: 1158px">
            <el-table-column
              prop="param"
              label="参数"
              width="200">
            </el-table-column>
            <el-table-column
              label="设置"
              width="200">
              <template slot-scope="scope" >
                <div v-if="(scope.$index+1)===1?true:false">
                  <span v-if="operation.type==='edit'?true:false">{{createApp.appid}}</span>
                  <el-input v-if="operation.type==='add'?true:false" v-model="createApp.appid" ></el-input>
                </div>
                <div v-if="(scope.$index+1)===2?true:false">
                  <el-select v-model="createApp.status" placeholder="请选择">
                    <el-option
                      v-for="item in select.status"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div v-if="(scope.$index+1)===3?true:false" >
                  <span>{{createApp.create_time}}</span>
                </div>

              </template>
            </el-table-column>
            <el-table-column
              prop="desc"
              label="说明"
              width="600">
            </el-table-column>
          </el-table>
        </div>
        <div class="infoTable">
          <div class="infoTable-title">额外信息</div>
          <el-table
            :data="extraInfoData"
            border
            style="min-width: 1158px">
            <el-table-column
              prop="param"
              label="参数"
              width="200">
            </el-table-column>
            <el-table-column
              label="设置"
              width="200">
              <template slot-scope="scope" >
                <div v-if="(scope.$index+1)===1?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.is_customer">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div v-if="(scope.$index+1)===2?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.is_customer_keypoint">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div v-if="(scope.$index+1)===3?true:false">
                  <el-input v-model="createApp.extra_info.customer_servvipkfid"></el-input>
                </div>
                <div v-if="(scope.$index+1)===4?true:false">
                  <el-input v-model="createApp.extra_info.customer_host_im_number"></el-input>
                </div>
                <div v-if="(scope.$index+1)===5?true:false">
                  <el-input v-model="createApp.extra_info.customer_setmanserviceid"></el-input>
                </div>
                <div v-if="(scope.$index+1)===6?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.is_turing">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>

                <div v-if="(scope.$index+1)===7?true:false">
                  <el-input v-model="createApp.extra_info.turing_apikey"></el-input>
                </div>
                <div v-if="(scope.$index+1)===8?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.is_keyword_rsp">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div v-if="(scope.$index+1)===9?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.turing_random_cache">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>

                <div v-if="(scope.$index+1)===10?true:false">
                  <el-input-number v-model="createApp.extra_info.turing_times" :precision="0" :max="10000" :min="0" :controls="false"></el-input-number>
                </div>
                <div v-if="(scope.$index+1)===11?true:false">
                  <el-input-number v-model="createApp.extra_info.turing_chance" :precision="0" :max="1000" :min="0" :controls="false"></el-input-number>
                </div>
                <div v-if="(scope.$index+1)===12?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.turing_random_dialog">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div v-if="(scope.$index+1)===13?true:false">
                  <el-checkbox-group v-model="createApp.extra_info.chat_msg_nostore">
                    <el-checkbox :true-label=1 :false-label=0>选中</el-checkbox>
                  </el-checkbox-group>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="desc"
              label="说明"
              width="600">
            </el-table-column>
          </el-table>
        </div>
        <div style="padding:10px 100px 0 200px">
          <button class="btn confirm-btn" @click="doEdit">{{operation.type==="edit"?"修改":"添加"}}</button><button class="btn reset-btn" style="margin-left: 200px;" @click="reset">重置</button>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: 'application-edit',
    data () {
      return {
        extraInfoDialogVisible:true,
        extraInfoData:[
          {param:"接入客服",desc:"是否接入客服"},
          {param:"特定情况下接入客服",desc:"是否在特定情况下接入客服"},
          {param:"vip编号",desc:"客服系统vip编号"},
          {param:"客服编号",desc:"客服系统的客服编号"},
          {param:"技能编号",desc:"客服系统技能编号"},
          {param:"图灵回复",desc:"是否图灵回复"},
          {param:"图灵apikey",desc:"图灵apikey"},
          {param:"关键字回复",desc:"是否关键字回复"},
          {param:"图灵随机缓存记录",desc:"图灵在不命中几率时使用随机缓存记录"},
          {param:"回复次数",desc:"图灵可用回复次数(每天早上8点重置)"},
          {param:"回复几率",desc:"图灵回复几率0—1000,1000代表100%，0代表0%"},
          {param:"图灵结束话术",desc:"图灵在命中几率时却次数不足时随机用配置的话术来结束对话状态"},
          {param:"不存储聊天记录到数据库",desc:"是否存储聊天记录到数据库"},
        ],
        baseInfoData:[
          {param:"appid",desc:"应用号appid"},
          {param:"状态",desc:"状态：正常，删除"},
          {param:"创建时间",desc:"创建时间"},
        ],
        select:{
          status:[
            {value:1,label:"正常"},
            {value:0,label:"删除"},
          ]
        },
        operation:{
          type:""
        },
        createApp:{
          appid:"",
          create_time:"",
          status:"",
          extra_info:{
            is_customer:0,
            is_customer_keypoint:0,
            customer_host_im_number:"",
            is_keyword_rsp:0,
            is_turing:0,
            turing_chance:0,
            turing_apikey:"",
            turing_random_cache:0,
            turing_times:0,
            turing_random_dialog:0,
            chat_msg_nostore:0,
            customer_servvipkfid:"",
            customer_setmanserviceid:""
          }
        }
      }
    },
    methods: {
      //根据id获取指定应用场景
      getApplication(){
        this.$post("/application/get_list",{appid_list:[this.$route.params.appid]}).then(res=>{
          this.createApp = res.data_list[0];
        })
      },
      chain(value){

      },
      //更新指定应用场景
      updateApplication(){
        this.$post("/application/update",
          {
            appid: this.createApp.appid,
            create_time: this.createApp.create_time,
            status: this.createApp.status,
            extra_info: this.createApp.extra_info
          }).then((res)=>{
          this.$router.push({path:"/home/application"})
        })
      },
      //确定创建商品的操作
      doEdit(){
        this.updateApplication();
      },
      reset(){
        // this.getProduct();
      },
      formatStartTime(value){
        this.createProduct.sale_start_time = value;
      },
      formatEndTime(value){
        this.createProduct.sale_end_time = value;
      }
    },
    mounted(){
      console.log(this.$route.path);
      if(/edit/.test(this.$route.path)){
        this.operation.type = "edit";
      }else if(/add/.test(this.$route.path)){
        this.operation.type = "add";
      }else{

      }
    },
    created(){
      if(/edit/.test(this.$route.path)){
        this.getApplication();
      }else if(/add/.test(this.$route.path)){
        this.createApp.create_time = new Date();

      }else{

      }

    }
  }
</script>


<style scoped>


</style>
