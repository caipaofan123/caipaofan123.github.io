(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0928b628"],{"137f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search"},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:t.labelName}},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.headIptVal,callback:function(e){t.headIptVal=e},expression:"headIptVal"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},nativeOn:{click:function(e){return t.getPartnerList(e)}}},[t._v("查询")])],1)],1)],1),a("div",{staticClass:"result"},[a("el-button",{attrs:{type:"warning",icon:"el-icon-circle-plus-outline"},nativeOn:{click:function(e){return t.addPartner(e)}}},[t._v("新增")]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{index:t.indexMethod,type:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"name",label:"合作商名称",width:"220"}}),a("el-table-column",{attrs:{prop:"account",label:"账号",width:"220"}}),a("el-table-column",{attrs:{prop:"vmCount",label:"设备数量",width:"220"}}),a("el-table-column",{attrs:{prop:"ratio",label:"分成比例",width:"220"}}),a("el-table-column",{attrs:{prop:"contact",label:"联系人",width:"220"}}),a("el-table-column",{attrs:{prop:"mobile",label:"联系电话",width:"220"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.resetPwdBtn(e)}}},[t._v(" 重置密码 ")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.checkDetail(e)}}},[t._v(" 查看详情 ")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.changePartner(e)}}},[t._v(" 修改 ")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deletePartner(e)}}},[t._v(" 移除 ")])]}}])})],1)],1)],1),a("el-dialog",{attrs:{title:t.titleName,visible:t.dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"合作商名称："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"10","show-word-limit":"","label-width":"80px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"联系人："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"10","show-word-limit":"","label-width":"80px"},model:{value:t.form.contact,callback:function(e){t.$set(t.form,"contact",e)},expression:"form.contact"}})],1),a("el-form-item",{attrs:{label:"联系电话："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"11","show-word-limit":"","label-width":"80px"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("el-form-item",{attrs:{label:"分成比例(%)："}},[a("el-input-number",{attrs:{placeholder:"请输入","controls-position":"right",min:1,max:100},model:{value:t.form.ratio,callback:function(e){t.$set(t.form,"ratio",e)},expression:"form.ratio"}})],1),a("el-form-item",{attrs:{label:"账号："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"18","show-word-limit":"","label-width":"80px"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),a("el-form-item",{attrs:{label:"密码："}},[a("el-input",{attrs:{"show-password":"",autocomplete:"off",placeholder:"请输入","label-width":"80px"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addConfirm}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:t.titleName,visible:t.dialogFormVisible1,width:"30%"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"合作商名称："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"10","show-word-limit":"","label-width":"80px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"联系人："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"10","show-word-limit":"","label-width":"80px"},model:{value:t.form.contact,callback:function(e){t.$set(t.form,"contact",e)},expression:"form.contact"}})],1),a("el-form-item",{attrs:{label:"联系电话："}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入",maxlength:"11","show-word-limit":"","label-width":"80px"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("el-form-item",{attrs:{label:"分成比例(%)："}},[a("el-input-number",{attrs:{placeholder:"请输入","controls-position":"right",min:1,max:100},model:{value:t.form.ratio,callback:function(e){t.$set(t.form,"ratio",e)},expression:"form.ratio"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.changeConfirm}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"收货地址",visible:t.detailDialogShow,width:"30%"},on:{"update:visible":function(e){t.detailDialogShow=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合作商名称","label-width":t.formLabelWidth}},[a("div",[t._v(t._s(t.form.name))])])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系人","label-width":t.formLabelWidth}},[a("div",[t._v(t._s(t.form.contact))])])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系电话","label-width":t.formLabelWidth}},[a("div",[t._v(t._s(t.form.mobile))])])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分成比例","label-width":t.formLabelWidth}},[a("div",[t._v(t._s(t.form.ratio))])])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)},l=[],r=a("c7eb"),i=a("1da1"),n=(a("b0c0"),a("b775"));function s(t,e,a){return Object(n["a"])({url:"/api/user-service/partner/search",method:"get",params:{pageIndex:t,pageSize:e,name:a}})}function c(t){return Object(n["a"])({url:"/api/user-service/partner",method:"POST",data:t})}function m(t,e){return Object(n["a"])({url:"/api/user-service/partner/"+e,method:"PUT",data:t})}function u(t){return Object(n["a"])({url:"/api/user-service/partner/"+t,method:"DELETE"})}var f={data:function(){return{dialogFormVisible:!1,dialogFormVisible1:!1,detailDialogShow:!1,titleName:"",formLabelWidth:"120px",headIptVal:"",labelName:"合作商搜索:",pageIndex:"",pageSize:10,id:"",form:{name:"",account:"",password:"",ratio:"",contact:"",mobile:""},tableData:[]}},created:function(){this.getPartnerList()},methods:{indexMethod:function(t){return t+1+10*this.pageIndex},getPartnerList:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.name=t.headIptVal,e.next=3,s(t.pageIndex,t.pageSize,t.name);case 3:a=e.sent,t.tableData=a.data.currentPageRecords;case 5:case"end":return e.stop()}}),e)})))()},addPartner:function(){this.form.name="",this.form.account="",this.form.ratio="",this.form.contact="",this.form.mobile="",this.dialogFormVisible=!0,this.titleName="新增合作商"},addConfirm:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c(t.form);case 2:e.sent,t.dialogFormVisible=!1,t.getPartnerList();case 5:case"end":return e.stop()}}),e)})))()},resetPwdBtn:function(t){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(t),e.$confirm("确定要重置合作商密码吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"重置成功!"})})).catch((function(){e.$message({type:"info",message:"已取消重置"})}));case 2:case"end":return a.stop()}}),a)})))()},checkDetail:function(t){this.detailDialogShow=!0,this.form.name=t.row.name,this.form.ratio=t.row.ratio,this.form.contact=t.row.contact,this.form.mobile=t.row.mobile},changePartner:function(t){this.titleName="修改合作商",this.dialogFormVisible1=!0,console.log(t),this.form.name=t.row.name,this.form.ratio=t.row.ratio,this.form.contact=t.row.contact,this.form.mobile=t.row.mobile,this.id=t.row.id},changeConfirm:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m(t.form,t.id);case 2:a=e.sent,console.log(a),t.dialogFormVisible1=!1,t.getPartnerList();case 6:case"end":return e.stop()}}),e)})))()},deletePartner:function(t){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var o;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.id=t.row.id,a.next=3,u(e.id);case 3:o=a.sent,console.log(o),e.getPartnerList();case 6:case"end":return a.stop()}}),a)})))()}}},d=f,b=(a("3e7f"),a("2877")),p=Object(b["a"])(d,o,l,!1,null,"075ed369",null);e["default"]=p.exports},"3e7f":function(t,e,a){"use strict";a("c3ba")},c3ba:function(t,e,a){}}]);