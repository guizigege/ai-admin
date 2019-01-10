
<template>
  <div class="appliction">
    <div class="myDialog rearDialog">
      <el-dialog
        :visible.sync="rearDialog"
        width="1100px"
        center
        :close-on-click-modal="false"
      >
        <span slot="title" style="color:#fff;font-weight: bolder;">上下文回复配置详细信息</span>
        <div class="rearTable">
          <el-table
            :data="rearData.slice((rearCurrentPage-1)*rearPagesize,rearCurrentPage*rearPagesize)"
            style="width: 800px" border max-height="800px"
          >
            <el-table-column
              label="序号"
              width="50">
              <template slot-scope="scope">
                <span>Q{{scope.$index+1+((rearCurrentPage-1)*rearPagesize)}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="回复内容"
              width="380">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="随机回复任意一条" placement="top" popper-class="tooltip">
                  <span>{{scope.row.content}}</span>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              label="回复关键字"
              width="280">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="存在任意则回复" placement="top">
                  <span>{{scope.row.keyword}}</span>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              label="不回复关键字"
              width="250">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="存在任意则不回复" placement="top">
                  <span>{{scope.row.invkeyword}}</span>
                </el-tooltip>

              </template>
            </el-table-column>
            <el-table-column
              label="匹配模式"
              width="88">
              <template slot-scope="scope">
                <span>{{scope.row.match_flag|matchFlag}}</span>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleRearSizeChange"
            @current-change="handleRearCurrentChange"
            :current-page="rearCurrentPage"
            :page-sizes="[5,8,10]"
            :page-size="rearPagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="rearData.length">
          </el-pagination>
        </div>

        <!--<span slot="footer" class="dialog-footer">-->
    <!--<el-button @click="rearDialog = false">取 消</el-button>-->
    <!--<el-button type="primary" @click="rearDialog = false">确 定</el-button>-->
      <!--</span>-->
      </el-dialog>
    </div>

    <div style="width: 90%">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item >
            <span>上下文配置管理</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item >上下文配置列表</el-breadcrumb-item>
          <el-breadcrumb-item ></el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="list-header" >
        <div class="title">上下文配置列表({{sumData.count}})</div>
        <!--<div style="float: right;"><span class="table-add" @click="toAdd"><i class="el-icon-plus table-add-icon"></i>添加新的AI回复</span></div>-->
      </div>
      <div class="filter" >
        <div class="filter-item">
          <span class="filter-title">应用id：</span>
          <el-select v-model="current.appid" placeholder="请选择" @change="currentAppid">
            <el-option
              v-for="item in select.appidList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%" border max-height="800px"
       >
        <el-table-column
          label="序号"
          width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+1+((currentPage-1)*10)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上下文ID"
          width="180">
          <template slot-scope="scope">
            <span>{{scope.row.question_id}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上一个上下文ID"
          width="180">
          <template slot-scope="scope">
            <span>{{scope.row.front}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上下文回复配置信息"
          width="200">
          <template slot-scope="scope">
            <span class="app-detail" @click="toRear(scope.row.rear)">查看配置详情</span>
          </template>
        </el-table-column>
        <el-table-column
          label="场景发起话术"
          width="250">
          <template slot-scope="scope">
            <span>{{scope.row.question}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="appid"
          label="应用场景ID"
          width="220">
        </el-table-column>

        <el-table-column
          label="状态"
          width="80">
          <template slot-scope="scope">
            <span>{{scope.row.status|status}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          width="200">
        </el-table-column>

        <!--<el-table-column label="操作"  width="200">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button-->
              <!--size="mini"-->
              <!--@click="toEdit(scope.row.appid)">编辑</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->


      </el-table>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

  import {page} from "../utils/mixins.js"
  export default {
    name: "application",
    mixins:[page],
    data () {
      return {
        rearData:[], //配置详情数据表
        rearDialog:false, //配置详情弹窗
        rearCurrentPage:1, //当前配置详情数据表页
        rearPagesize:5, //配置详情数据表页大小
        //条件筛选，appid下拉列表
        select:{
          appidList:[]
        },
        //当前对象
        current:{
          appid:null
        }
      }
    },
    methods: {

      // 获取列表
      getAiQuestionList(){
        this.$post("/ai_question/get_list",{page:this.currentPage,appid_list:this.current.appid===null?null:[this.current.appid]}).then(res=>{
          this.tableData = res.data_list;
          this.sumData = res.sum_data;
          if(this.tableData.length===0){
            this.sumData.count = 0;
          }
        })
      },

      //前往添加应用页面
      toAdd(){
        this.$router.push({path:"/home/application/add"});
      },

      //前往编辑应用页面
      toEdit(appid){
        this.$router.push({path:"/home/application/edit/"+appid});
      },
      //上下文配置详情
      toRear(rear){
        this.rearData = [];
        this.rearDialog = true;
        for(let i in rear){
          this.rearData.push(rear[i]);
        }
      },

      // 根据当前appid获取ai_question列表
      currentAppid(){
        this.getAiQuestionList();
        if(this.current.appid!==null&&this.start_time!==""&&this.end_time!==""){
          this.getAICount();
        }
      },
      //页组件当前页操作
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.getAiQuestionList();
      },
      // 当前上下文配置详情页
      handleRearCurrentChange(currentPage){
        this.rearCurrentPage = currentPage;
      },
      //设置上下文配置详情页大小
      handleRearSizeChange(size) {
        this.rearPagesize = size;
      },
    },

    created(){
      //获取应用列表列表
      this.getAiQuestionList();
      this.select.appidList = this.getAppidList();
      this.select.appidList.unshift({value:null,label:"--------"});
    },


  }
</script>

<style>

  .rearDialog .rearTable .el-table{
    min-width: 100%;
  }
  .rearDialog .rearTable .el-table--border, .el-table--group{
    border-top:1px solid rgb(48, 65, 86);
  }
  /*.tooltip{*/
    /*color:#10A6AB;*/
  /*}*/
</style>
<style scoped>
  .app-detail{
    padding:1px 0;
    color:#10A6AB;
  }
  .app-detail:hover{
    border-bottom: 1px solid #10A6AB;
    cursor: pointer;
  }
  .popover>p{
    height:24px;
    line-height: 24px;
    color:#1f2d3d;
  }

</style>
