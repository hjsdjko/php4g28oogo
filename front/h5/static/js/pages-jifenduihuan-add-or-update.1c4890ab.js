(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jifenduihuan-add-or-update"],{5950:function(e,r,i){"use strict";var n=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("f559"),i("c5f6"),i("ac6a"),i("28a5"),i("96cf");var t=n(i("3b8d")),a=n(i("e2b1")),o=n(i("064f")),u=n(i("bd56")),s={data:function(){return{cross:"",ruleForm:{huodongbianhao:this.getUUID(),huodongbiaoti:"",fengmian:"",jifen:"",yonghujifen:"",huodongrenshu:"",duihuanshijian:"",yonghuzhanghao:"",yonghuxingming:"",duihuanxiangqing:""},user:{},ro:{huodongbianhao:!1,huodongbiaoti:!1,fengmian:!1,jifen:!1,yonghujifen:!1,huodongrenshu:!1,duihuanshijian:!1,yonghuzhanghao:!1,yonghuxingming:!1,duihuanxiangqing:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:u.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(r){var i,n,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.duihuanshijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(n=e.sent,this.user=n.data,this.ruleForm.yonghujifen=this.user.jifen,this.ro.yonghujifen=!0,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.userid=uni.getStorageSync("appUserid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=20;break}return this.ruleForm.id=r.id,e.next=18,this.$api.info("jifenduihuan",this.ruleForm.id);case 18:n=e.sent,this.ruleForm=n.data;case 20:if(this.cross=r.cross,!r.cross){e.next=70;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 24:if((e.t1=e.t0()).done){e.next=68;break}if(a=e.t1.value,"huodongbianhao"!=a){e.next=30;break}return this.ruleForm.huodongbianhao=t[a],this.ro.huodongbianhao=!0,e.abrupt("continue",24);case 30:if("huodongbiaoti"!=a){e.next=34;break}return this.ruleForm.huodongbiaoti=t[a],this.ro.huodongbiaoti=!0,e.abrupt("continue",24);case 34:if("fengmian"!=a){e.next=38;break}return this.ruleForm.fengmian=t[a].split(",")[0],this.ro.fengmian=!0,e.abrupt("continue",24);case 38:if("jifen"!=a){e.next=42;break}return this.ruleForm.jifen=t[a],this.ro.jifen=!0,e.abrupt("continue",24);case 42:if("yonghujifen"!=a){e.next=46;break}return this.ruleForm.yonghujifen=t[a],this.ro.yonghujifen=!0,e.abrupt("continue",24);case 46:if("huodongrenshu"!=a){e.next=50;break}return this.ruleForm.huodongrenshu=t[a],this.ro.huodongrenshu=!0,e.abrupt("continue",24);case 50:if("duihuanshijian"!=a){e.next=54;break}return this.ruleForm.duihuanshijian=t[a],this.ro.duihuanshijian=!0,e.abrupt("continue",24);case 54:if("yonghuzhanghao"!=a){e.next=58;break}return this.ruleForm.yonghuzhanghao=t[a],this.ro.yonghuzhanghao=!0,e.abrupt("continue",24);case 58:if("yonghuxingming"!=a){e.next=62;break}return this.ruleForm.yonghuxingming=t[a],this.ro.yonghuxingming=!0,e.abrupt("continue",24);case 62:if("duihuanxiangqing"!=a){e.next=66;break}return this.ruleForm.duihuanxiangqing=t[a],this.ro.duihuanxiangqing=!0,e.abrupt("continue",24);case 66:e.next=24;break;case 68:this.ruleForm.huodongrenshu=0,this.ro.huodongrenshu=!1;case 70:this.styleChange(),this.$forceUpdate();case 72:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{duihuanxiangqingChange:function(e){this.ruleForm.duihuanxiangqing=e},styleChange:function(){this.$nextTick((function(){}))},duihuanshijianConfirm:function(e){console.log(e),this.ruleForm.duihuanshijian=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.fengmian="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var r,i,n,t,a,o,u,s,h,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.huodongbianhao&&(this.ruleForm.huodongbianhao=String(this.ruleForm.huodongbianhao)),!(Number(this.ruleForm.jifen)>Number(this.ruleForm.yonghujifen))){e.next=4;break}return this.$utils.msg("兑换积分不能超过用户积分"),e.abrupt("return");case 4:if(r=uni.getStorageSync("crossObj"),i=uni.getStorageSync("crossTable"),!(parseFloat(r.huodongrenshu)-parseFloat(this.ruleForm.huodongrenshu)<0)){e.next=9;break}return this.$utils.msg("参与人数不足"),e.abrupt("return");case 9:if(!(this.ruleForm.huodongrenshu<=0)){e.next=12;break}return this.$utils.msg("参与人数不能为0"),e.abrupt("return");case 12:if(!this.ruleForm.jifen||this.$validate.isIntNumer(this.ruleForm.jifen)){e.next=15;break}return this.$utils.msg("兑换积分应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.yonghujifen||this.$validate.isIntNumer(this.ruleForm.yonghujifen)){e.next=18;break}return this.$utils.msg("用户积分应输入整数"),e.abrupt("return");case 18:if(!this.ruleForm.huodongrenshu||this.$validate.isIntNumer(this.ruleForm.huodongrenshu)){e.next=21;break}return this.$utils.msg("参与人数应输入整数"),e.abrupt("return");case 21:if(!this.cross){e.next=38;break}if(uni.setStorageSync("crossCleanType",!0),o=uni.getStorageSync("statusColumnName"),u=uni.getStorageSync("statusColumnValue"),""==o){e.next=38;break}if(r||(r=uni.getStorageSync("crossObj")),o.startsWith("[")){e.next=34;break}for(s in r)s==o&&(r[s]=u);return i=uni.getStorageSync("crossTable"),e.next=32,this.$api.update("".concat(i),r);case 32:e.next=38;break;case 34:n=Number(uni.getStorageSync("appUserid")),t=r["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 38:if(!t||!n){e.next=70;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=t,h={page:1,limit:10,crossuserid:n,crossrefid:t},e.next=44,this.$api.list("jifenduihuan",h);case 44:if(l=e.sent,!(l.data.total>=a)){e.next=51;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 51:return r||(r=uni.getStorageSync("crossObj")),i=uni.getStorageSync("crossTable"),r.huodongrenshu=parseFloat(r.huodongrenshu)-parseFloat(this.ruleForm.huodongrenshu),e.next=56,this.$api.update("".concat(i),r);case 56:if(!this.ruleForm.id){e.next=61;break}return e.next=59,this.$api.update("jifenduihuan",this.ruleForm);case 59:e.next=67;break;case 61:return e.next=63,this.$api.add("jifenduihuan",this.ruleForm);case 63:if(!(this.user.jifen>=0)){e.next=67;break}return this.user.jifen=parseFloat(this.user.jifen)-parseFloat(this.ruleForm.jifen),e.next=67,this.$api.update(uni.getStorageSync("nowTable"),this.user);case 67:this.$utils.msgBack("提交成功");case 68:e.next=87;break;case 70:return r||(r=uni.getStorageSync("crossObj")),i=uni.getStorageSync("crossTable"),r.huodongrenshu=r.huodongrenshu-this.ruleForm.huodongrenshu,e.next=75,this.$api.update("".concat(i),r);case 75:if(!this.ruleForm.id){e.next=80;break}return e.next=78,this.$api.update("jifenduihuan",this.ruleForm);case 78:e.next=86;break;case 80:return e.next=82,this.$api.add("jifenduihuan",this.ruleForm);case 82:if(!(this.user.jifen>=0)){e.next=86;break}return this.user.jifen=parseFloat(this.user.jifen)-parseFloat(this.ruleForm.jifen),e.next=86,this.$api.update(uni.getStorageSync("nowTable"),this.user);case 86:this.$utils.msgBack("提交成功");case 87:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),n=r.getMonth()+1,t=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(i,"-").concat(n,"-").concat(t)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};r.default=s},"66e0":function(e,r,i){"use strict";var n=i("6c4c"),t=i.n(n);t.a},"6c4c":function(e,r,i){var n=i("7e41");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var t=i("4f06").default;t("cdc7f6e2",n,!0,{sourceMap:!1,shadowMode:!1})},"7e41":function(e,r,i){var n=i("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-5109f55a]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"8ca2":function(e,r,i){"use strict";i.r(r);var n=i("b2ba"),t=i("b46f");for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);i("66e0");var o,u=i("f0c5"),s=Object(u["a"])(t["default"],n["b"],n["c"],!1,null,"5109f55a",null,!1,n["a"],o);r["default"]=s.exports},b2ba:function(e,r,i){"use strict";var n={"xia-editor":i("064f").default,"w-picker":i("e2b1").default},t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"24rpx 24rpx 80rpx",position:"relative",background:"#eefcff",height:"auto"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{padding:"24rpx 48rpx",boxShadow:"0 4rpx 12rpx #76c4d880",borderRadius:"60rpx",background:"#fff",display:"block",width:"100%",height:"auto"}},[i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("活动编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0px 24rpx",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)",flex:"1"}},[e._v(e._s(e.ruleForm.huodongbianhao))])],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("活动标题")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.huodongbiaoti,placeholder:"活动标题"},model:{value:e.ruleForm.huodongbiaoti,callback:function(r){e.$set(e.ruleForm,"huodongbiaoti",r)},expression:"ruleForm.huodongbiaoti"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.fengmianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("封面")]),e.ruleForm.fengmian?i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian.split(",")[0],mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("兑换积分")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.jifen,placeholder:"兑换积分"},model:{value:e.ruleForm.jifen,callback:function(r){e.$set(e.ruleForm,"jifen",e._n(r))},expression:"ruleForm.jifen"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户积分")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghujifen,placeholder:"用户积分"},model:{value:e.ruleForm.yonghujifen,callback:function(r){e.$set(e.ruleForm,"yonghujifen",e._n(r))},expression:"ruleForm.yonghujifen"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("参与人数")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.huodongrenshu,placeholder:"参与人数"},model:{value:e.ruleForm.huodongrenshu,callback:function(r){e.$set(e.ruleForm,"huodongrenshu",e._n(r))},expression:"ruleForm.huodongrenshu"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("兑换时间")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.duihuanshijian,placeholder:"兑换时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("duihuanshijian")}},model:{value:e.ruleForm.duihuanshijian,callback:function(r){e.$set(e.ruleForm,"duihuanshijian",r)},expression:"ruleForm.duihuanshijian"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户账号")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(r){e.$set(e.ruleForm,"yonghuzhanghao",r)},expression:"ruleForm.yonghuzhanghao"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户姓名")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(r){e.$set(e.ruleForm,"yonghuxingming",r)},expression:"ruleForm.yonghuxingming"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",fontWeight:"500"}},[e._v("兑换详情")]),i("xia-editor",{ref:"editor",style:{border:"2rpx solid #76c4d8",minHeight:"400rpx",width:"100%",padding:"20rpx",height:"auto"},attrs:{placeholder:"兑换详情"},on:{editorChange:function(r){arguments[0]=r=e.$handleEvent(r),e.duihuanxiangqingChange.apply(void 0,arguments)}},model:{value:e.ruleForm.duihuanxiangqing,callback:function(r){e.$set(e.ruleForm,"duihuanxiangqing",r)},expression:"ruleForm.duihuanxiangqing"}})],1),i("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 0 40rpx",color:"rgb(255, 255, 255)",borderRadius:"60rpx",background:"#76c4d8",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"duihuanshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.duihuanshijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];i.d(r,"b",(function(){return t})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return n}))},b46f:function(e,r,i){"use strict";i.r(r);var n=i("5950"),t=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);r["default"]=t.a}}]);