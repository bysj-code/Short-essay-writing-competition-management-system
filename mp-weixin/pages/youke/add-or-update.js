(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/youke/add-or-update"],{"1ac4":function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},"3d0b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var u=e.apply(t,n);function o(e){a(u,r,i,o,s,"next",e)}function s(e){a(u,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},s=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c=function(){return n.e("components/momo-multipleSelect/momo-multipleSelect").then(n.bind(null,"bd56"))},l={data:function(){return{cross:"",ruleForm:{youkezhanghao:"",youkexingming:"",mima:"",xingbie:"",shouji:"",touxiang:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{youkezhanghao:!1,youkexingming:!1,mima:!1,xingbie:!1,shouji:!1,touxiang:!1}}},components:{wPicker:o,xiaEditor:s,multipleSelect:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(r.default.mark((function t(n){var i,a,u,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("youke",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(this.cross=n.cross,!n.cross){t.next=46;break}u=e.getStorageSync("crossObj"),t.t0=r.default.keys(u);case 18:if((t.t1=t.t0()).done){t.next=46;break}if(o=t.t1.value,"youkezhanghao"!=o){t.next=24;break}return this.ruleForm.youkezhanghao=u[o],this.ro.youkezhanghao=!0,t.abrupt("continue",18);case 24:if("youkexingming"!=o){t.next=28;break}return this.ruleForm.youkexingming=u[o],this.ro.youkexingming=!0,t.abrupt("continue",18);case 28:if("mima"!=o){t.next=32;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,t.abrupt("continue",18);case 32:if("xingbie"!=o){t.next=36;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,t.abrupt("continue",18);case 36:if("shouji"!=o){t.next=40;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,t.abrupt("continue",18);case 40:if("touxiang"!=o){t.next=44;break}return this.ruleForm.touxiang=u[o].split(",")[0],this.ro.touxiang=!0,t.abrupt("continue",18);case 44:t.next=18;break;case 46:this.styleChange(),this.$forceUpdate();case 48:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(r.default.mark((function t(){var n,i,a,u,o,s,c,l,h,f;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.youkezhanghao){t.next=3;break}return this.$utils.msg("游客账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.youkexingming){t.next=6;break}return this.$utils.msg("游客姓名不能为空"),t.abrupt("return");case 6:if(this.ruleForm.mima){t.next=9;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=12;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:if(!this.cross){t.next=28;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=28;break}if(n||(n=e.getStorageSync("crossObj")),o.startsWith("[")){t.next=24;break}for(c in n)c==o&&(n[c]=s);return l=e.getStorageSync("crossTable"),t.next=22,this.$api.update("".concat(l),n);case 22:t.next=28;break;case 24:i=Number(e.getStorageSync("userid")),a=n["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 28:if(!a||!i){t.next=50;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=34,this.$api.list("youke",h);case 34:if(f=t.sent,!(f.data.total>=u)){t.next=40;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 40:if(!this.ruleForm.id){t.next=45;break}return t.next=43,this.$api.update("youke",this.ruleForm);case 43:t.next=47;break;case 45:return t.next=47,this.$api.add("youke",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:t.next=58;break;case 50:if(!this.ruleForm.id){t.next=55;break}return t.next=53,this.$api.update("youke",this.ruleForm);case 53:t.next=57;break;case 55:return t.next=57,this.$api.add("youke",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=l}).call(this,n("543d")["default"])},7457:function(e,t,n){"use strict";var r=n("bd87"),i=n.n(r);i.a},a3a7:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("e048"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},bd87:function(e,t,n){},e048:function(e,t,n){"use strict";n.r(t);var r=n("1ac4"),i=n("f69b");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("7457");var u,o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"9978673c",null,!1,r["a"],u);t["default"]=s.exports},f69b:function(e,t,n){"use strict";n.r(t);var r=n("3d0b"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a}},[["a3a7","common/runtime","common/vendor"]]]);