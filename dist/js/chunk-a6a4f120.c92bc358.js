(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6a4f120"],{"1f1b":function(t,e,n){"use strict";var a=n("a759"),r=n.n(a);r.a},a759:function(t,e,n){},e365:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header",staticStyle:{"background-image":"url(../../img/verification-index-bg.png)"}},[n("img",{attrs:{src:t.userInfo.avatar||"img/noface.png",alt:""}}),n("div",{staticClass:"fz-15 c3 text-center"},[t._v(t._s(t.userInfo.real_name))])]),n("van-cell",{attrs:{title:"订单管理",icon:"../../img/icon-member-01.png","is-link":"",to:"/verification/order_manage"}})],1)},r=[],o=(n("96cf"),n("3b8d")),i={components:{},props:{},data:function(){return{userInfo:{}}},watch:{},computed:{},methods:{getUserInfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/off");case 3:e=t.sent,n=e.code,a=e.data,r=e.message,0==n?(this.$toast.clear(),this.userInfo=a):401==n&&(this.$toast.fail(r),window.location.href="http://youya.chuncom.com/user/off/authorization?code=".concat(this.$route.query.code,"&url_type=").concat(this.$route.query.url_type));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getUserInfo()},mounted:function(){}},s=i,c=(n("1f1b"),n("2877")),u=Object(c["a"])(s,a,r,!1,null,"2c36540e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-a6a4f120.c92bc358.js.map