(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-reply-forum-reply"],{"0b3a":function(t,n,e){"use strict";var r={"xia-editor":e("064f").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{style:{width:"100%",padding:"24rpx",position:"relative",background:"#eefcff",height:"100%"}},[e("v-uni-form",{style:{padding:"24rpx 48rpx 48rpx",boxShadow:"0 4rpx 12rpx #76c4d880",borderRadius:"60rpx",background:"#fff",display:"block",width:"100%",height:"auto"}},[e("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#76c4d8",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("xia-editor",{style:{minHeight:"400rpx",padding:"0",margin:"0px",background:"rgba(255, 255, 255, 0)",width:"100%",lineHeight:"1.5",height:"auto"},attrs:{placeholder:"回复"},on:{editorChange:function(n){arguments[0]=n=t.$handleEvent(n),t.contentChange.apply(void 0,arguments)}},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1),e("v-uni-view",{style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[e("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{border:"0",padding:"0px",margin:"0 20rpx",color:"rgb(255, 255, 255)",borderRadius:"60rpx",background:"#76c4d8",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onReplyTap.apply(void 0,arguments)}}},[t._v("提交回复")])],1)],1)],1)],1)},i=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},"3a86":function(t,n,e){"use strict";e.r(n);var r=e("a14c"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},"8fd7":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-33573e16]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),t.exports=n},a14c:function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a481"),e("3b2b"),e("28a5"),e("96cf");var a=r(e("3b8d")),i=r(e("064f")),o={data:function(){return{pid:"",content:"",username:"",avatarurl:"",user:{}}},components:{xiaEditor:i.default},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.pid=n.pid,e=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:r=t.sent,this.user=r.data,"yonghu"==e&&(this.username=this.user.yonghuzhanghao);case 7:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),methods:{contentChange:function(t){this.content=t},onReplyTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(this.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",n="",e=[],n&&(e=n.split(",")),r=0;r<e.length;r++)a=new RegExp(e[r],"g"),this.content.indexOf(e[r])>-1&&(this.content=this.content.replace(a,"**"));return t.next=7,this.$api.save("forum",{parentid:this.pid,content:this.content,avatarurl:this.avatarurl,username:this.username});case 7:this.$utils.msgBack("回复成功");case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};n.default=o},ef14:function(t,n,e){var r=e("8fd7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("0f8d290a",r,!0,{sourceMap:!1,shadowMode:!1})},fa73:function(t,n,e){"use strict";e.r(n);var r=e("0b3a"),a=e("3a86");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("ff6c");var o,u=e("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"33573e16",null,!1,r["a"],o);n["default"]=s.exports},ff6c:function(t,n,e){"use strict";var r=e("ef14"),a=e.n(r);a.a}}]);