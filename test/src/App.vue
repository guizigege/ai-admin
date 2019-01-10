<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
#app {}
*{
  box-sizing: border-box;
  padding:0;
  margin: 0;
}
html,body{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
.clearfix:after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    clear: both;
    visibility: hidden;
}
/*面包屑高度*/
.breadcrumb{
  min-width: 1200px;
  height: 50px;
  line-height: 50px;
  padding: 10px 0;

}
.el-breadcrumb{
  min-width: 1200px;
  height:30px;
  line-height: 30px;
  padding-left: 10px;
  background-color: rgb(48, 65, 86);
  font-weight: bold;
  border-radius: 3px;
  border:1px solid #ddd;
  box-sizing: border-box;
}
.el-breadcrumb__inner{
  color:whitesmoke;
}
.el-breadcrumb__separator{
  color:whitesmoke;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  color:whitesmoke;
  text-shadow: 2px 2px 2px #000;
}
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover{
  color: #10A6AB;
}


/*数据表头部*/
.list-header{
  min-width: 1200px;
  height: 41px;
  border: 1px solid rgb(48, 65, 86);
  background-color: #10A6AB;
}
.filter{
  min-width: 1200px;
  height: 41px;
  line-height: 38px;
  border: 1px solid rgb(48, 65, 86);
  border-top: none;
  background-color: #10A6AB;
}
.filter-item{
  float: left;
  margin-left: 20px;
}
.filter-title{
  font-size: 14px;
  color:#fff;
  font-weight: bolder;
  line-height: 40px;
}
.filter .el-input__inner{
  height: 30px;
  line-height: 30px;
}
.filter .el-input__icon{
  line-height: 30px;
}
.filter .el-select .el-input .el-select__caret{
  color:#10A6AB;
}

.list-body{
  padding:20px;border:1px solid #1f2d3d;box-sizing: border-box;min-width:1200px;border-top:none;

}
.title{
  font-size: 14px;
  /*color: #888;*/
  color:#fff;
  font-weight: bolder;
  line-height: 40px;
  margin-left: 20px;
  float: left;
}
.table-add{
  display: inline-block;line-height: 40px;color:#fff;font-size: 14px;padding-right:30px;cursor:pointer;
  font-weight: bolder;
}
.table-add:hover{
  text-decoration: underline;
}
/*.table-add:hover .table-add-icon{*/
  /*transform: rotateZ(90deg);*/
/*}*/
.table-add-icon{
  font-size: 14px;
  transition:all 0.3s;
  margin-right: 4px;
}

/*数据表*/
.el-table{
  width: 100%;
  min-width: 1200px;
  max-height: 800px;
  overflow: auto;
}
.el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
  text-align: center;
}
.el-table td, .el-table th.is-leaf {
  border-bottom: 1px solid rgb(48, 65, 86);
}
.el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
  border-right: 1px solid rgb(48, 65, 86);
}
.el-table--border, .el-table--group {
  border: 1px solid rgb(48, 65, 86);
  border-top:none;
}
.el-table th>.cell{
  color: rgb(48, 65, 86);
}
/*页码*/
.el-pagination{
  width: 100%;
  height: 30px;
  padding-left: 30%;
  margin-top: 20px;
}



.infoTable>.el-table td, .el-table th{
  padding:6px 0;
}
.infoTable .el-input__inner{
  height:30px;
  line-height: 30px;
  text-align: center;
}
.infoTable .el-input__icon{
  line-height: 0;
}
.infoTable .infoTable-title{
  width:100%;height:40px;line-height:40px;background-color: #10A6AB;color:#fff;padding-left:20px;box-sizing:border-box;
  border-left:1px solid rgb(48, 65, 86);
  border-right:1px solid rgb(48, 65, 86);
  border-bottom:1px solid rgb(48, 65, 86);
}

.red{
  color: rgb(170,0,0);
}
.green{
  color:#10A6AB;
}
.fw{
  /*font-weight: bolder;*/
}

/*按钮基础样式*/
.btn{
  width: 80px;
  height: 36px;
  border-radius:4px;
  margin-top: 2px;
  margin-right: 20px;
  outline: none;
  box-shadow: 1px 1px 1px #333;
}
.btn:active{
  box-shadow: 1px 2px 3px #333 inset;
}
/*添加按钮*/
.normal-btn {
  border: 1px solid #0549ab;
  background-color: #fff;
  color: #0549ab;
}
.normal-btn:hover {
  border: 1px solid #dcdfe6;
  background: #0549ab;
  color: #fff;
}

.confirm-btn {
  border: 1px solid #10A6AB;
  background-color: #fff;
  color: #0a6a97;
}
.confirm-btn:hover {
  border: 1px solid #dcdfe6;
  background: #10A6AB;
  color: #fff;
}

/*重置按钮*/
.reset-btn{
  border: 1px solid #333;
  background-color: #fff;
  color: #333;
}
.reset-btn:hover {
  border: 1px solid #dcdfe6;
  background: #555;
  color: #fff;
}
/*弹出框*/
.myDialog .el-dialog__header{
  background-color: #10A6AB;
  padding: 0;
  height: 40px;
  line-height: 40px;

}
.myDialog .el-dialog__title{
  font-size: 16px;
  color: #fff;
  font-weight: bolder;
}
.myDialog .el-dialog__headerbtn .el-dialog__close{
  color:#fff;
  font-size: 20px;
}
.myDialog .el-dialog__headerbtn{
  top: 10px;
  font-size: 20px;
}
</style>
