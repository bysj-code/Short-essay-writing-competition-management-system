(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chengguoxiangqing/add-or-update"],{2804:function(e,n,t){"use strict";var i={"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.ruleForm.tupian.split(","));e.$mp.data=Object.assign({},{$root:{g0:t}})},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}))},5363:function(e,n,t){"use strict";var i=t("c06d"),r=t.n(i);r.a},"53e5":function(e,n,t){"use strict";(function(e){t("6cdc"),t("921b");i(t("66fd"));var n=i(t("a436"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"7dcf":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,a){try{var s=e[u](a),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(i,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function s(e){u(a,i,r,s,o,"next",e)}function o(e){u(a,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c=function(){return t.e("components/momo-multipleSelect/momo-multipleSelect").then(t.bind(null,"bd56"))},h={data:function(){return{cross:"",ruleForm:{jingsaimingcheng:"",chengguomingcheng:"",tupian:"",chengguoleibie:"",niandu:"",fujian:"",beizhu:"",tijiaoshijian:"",fuzerenzhanghao:"",fuzerenxingming:"",xueshengxuehao:"",xueshengxingming:"",zhuanye:"",banji:"",shouji:"",shhf:""},user:{},ro:{jingsaimingcheng:!1,chengguomingcheng:!1,tupian:!1,chengguoleibie:!1,niandu:!1,fujian:!1,beizhu:!1,tijiaoshijian:!1,fuzerenzhanghao:!1,fuzerenxingming:!1,xueshengxuehao:!1,xueshengxingming:!1,zhuanye:!1,banji:!1,shouji:!1,sfsh:!1,shhf:!1}}},components:{wPicker:s,xiaEditor:o,multipleSelect:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var n=a(i.default.mark((function n(t){var r,u,a,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.ruleForm.tijiaoshijian=this.$utils.getCurDateTime(),r=e.getStorageSync("nowTable"),n.next=4,this.$api.session(r);case 4:if(u=n.sent,this.user=u.data,this.ruleForm.xueshengxuehao=this.user.xueshengxuehao,this.ro.xueshengxuehao=!0,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ro.xueshengxingming=!0,this.ruleForm.zhuanye=this.user.zhuanye,this.ro.zhuanye=!0,this.ruleForm.banji=this.user.banji,this.ro.banji=!0,this.ruleForm.shouji=this.user.shouji,this.ro.shouji=!0,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=24;break}return this.ruleForm.id=t.id,n.next=22,this.$api.info("chengguoxiangqing",this.ruleForm.id);case 22:u=n.sent,this.ruleForm=u.data;case 24:if(this.cross=t.cross,!t.cross){n.next=92;break}a=e.getStorageSync("crossObj"),n.t0=i.default.keys(a);case 28:if((n.t1=n.t0()).done){n.next=92;break}if(s=n.t1.value,"jingsaimingcheng"!=s){n.next=34;break}return this.ruleForm.jingsaimingcheng=a[s],this.ro.jingsaimingcheng=!0,n.abrupt("continue",28);case 34:if("chengguomingcheng"!=s){n.next=38;break}return this.ruleForm.chengguomingcheng=a[s],this.ro.chengguomingcheng=!0,n.abrupt("continue",28);case 38:if("tupian"!=s){n.next=42;break}return this.ruleForm.tupian=a[s].split(",")[0],this.ro.tupian=!0,n.abrupt("continue",28);case 42:if("chengguoleibie"!=s){n.next=46;break}return this.ruleForm.chengguoleibie=a[s],this.ro.chengguoleibie=!0,n.abrupt("continue",28);case 46:if("niandu"!=s){n.next=50;break}return this.ruleForm.niandu=a[s],this.ro.niandu=!0,n.abrupt("continue",28);case 50:if("fujian"!=s){n.next=54;break}return this.ruleForm.fujian=a[s],this.ro.fujian=!0,n.abrupt("continue",28);case 54:if("beizhu"!=s){n.next=58;break}return this.ruleForm.beizhu=a[s],this.ro.beizhu=!0,n.abrupt("continue",28);case 58:if("tijiaoshijian"!=s){n.next=62;break}return this.ruleForm.tijiaoshijian=a[s],this.ro.tijiaoshijian=!0,n.abrupt("continue",28);case 62:if("fuzerenzhanghao"!=s){n.next=66;break}return this.ruleForm.fuzerenzhanghao=a[s],this.ro.fuzerenzhanghao=!0,n.abrupt("continue",28);case 66:if("fuzerenxingming"!=s){n.next=70;break}return this.ruleForm.fuzerenxingming=a[s],this.ro.fuzerenxingming=!0,n.abrupt("continue",28);case 70:if("xueshengxuehao"!=s){n.next=74;break}return this.ruleForm.xueshengxuehao=a[s],this.ro.xueshengxuehao=!0,n.abrupt("continue",28);case 74:if("xueshengxingming"!=s){n.next=78;break}return this.ruleForm.xueshengxingming=a[s],this.ro.xueshengxingming=!0,n.abrupt("continue",28);case 78:if("zhuanye"!=s){n.next=82;break}return this.ruleForm.zhuanye=a[s],this.ro.zhuanye=!0,n.abrupt("continue",28);case 82:if("banji"!=s){n.next=86;break}return this.ruleForm.banji=a[s],this.ro.banji=!0,n.abrupt("continue",28);case 86:if("shouji"!=s){n.next=90;break}return this.ruleForm.shouji=a[s],this.ro.shouji=!0,n.abrupt("continue",28);case 90:n.next=28;break;case 92:this.styleChange(),this.$forceUpdate();case 94:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tijiaoshijianConfirm:function(e){console.log(e),this.ruleForm.tijiaoshijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},fujianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fujian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(i.default.mark((function n(){var t,r,u,a,s,o,c,h,g,l;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.cross){n.next=16;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){n.next=16;break}if(t||(t=e.getStorageSync("crossObj")),s.startsWith("[")){n.next=12;break}for(c in t)c==s&&(t[c]=o);return h=e.getStorageSync("crossTable"),n.next=10,this.$api.update("".concat(h),t);case 10:n.next=16;break;case 12:r=Number(e.getStorageSync("userid")),u=t["id"],a=e.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 16:if(!u||!r){n.next=38;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=u,g={page:1,limit:10,crossuserid:r,crossrefid:u},n.next=22,this.$api.list("chengguoxiangqing",g);case 22:if(l=n.sent,!(l.data.total>=a)){n.next=28;break}return this.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!this.ruleForm.id){n.next=33;break}return n.next=31,this.$api.update("chengguoxiangqing",this.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,this.$api.add("chengguoxiangqing",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!this.ruleForm.id){n.next=43;break}return n.next=41,this.$api.update("chengguoxiangqing",this.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,this.$api.add("chengguoxiangqing",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=h}).call(this,t("543d")["default"])},9550:function(e,n,t){"use strict";t.r(n);var i=t("7dcf"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a},a436:function(e,n,t){"use strict";t.r(n);var i=t("2804"),r=t("9550");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("5363");var a,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"bba8c92e",null,!1,i["a"],a);n["default"]=o.exports},c06d:function(e,n,t){}},[["53e5","common/runtime","common/vendor"]]]);