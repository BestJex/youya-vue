(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02adbd58"],{"6c2e":function(t,e,n){},af76:function(t,e,n){"use strict";var a=n("6c2e"),r=n.n(a);r.a},e365:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header",staticStyle:{"background-image":"url(../img/verification-index-bg.png)"}},[n("img",{attrs:{src:t.userInfo.avatar||"img/noface.png",alt:""}}),n("div",{staticClass:"fz-15 c3 text-center"},[t._v(t._s(t.userInfo.real_name))])]),n("van-cell",{attrs:{title:"预约订单管理",icon:"../../img/icon-member-01.png","is-link":"",to:"/verification/order_manage"}}),n("van-cell",{attrs:{title:"转赠课程管理",icon:"../../img/icon-member-01.png","is-link":"",to:"/reservation/order_manage"}})],1)},r=[],i=(n("96cf"),n("3b8d")),o={components:{},props:{},data:function(){return{userInfo:{}}},watch:{},computed:{},methods:{getUserInfo:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/off");case 3:e=t.sent,n=e.code,a=e.data,r=e.message,0==n?(this.$toast.clear(),this.userInfo=a):401==n&&(this.$toast.fail(r),window.location.href="http://youya.chuncom.com/user/authorization?url=".concat(encodeURIComponent(window.location.href)));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getUserInfo()},mounted:function(){}},c=o,s=(n("af76"),n("2877")),u=Object(s["a"])(c,a,r,!1,null,"01d5f810",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-02adbd58.31d56ba8.js.map