(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fe6507e"],{"1ae5":function(t,e,a){"use strict";var s=a("2512"),i=a.n(s);i.a},2512:function(t,e,a){},bdf3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"order-list"},[a("li",{staticClass:"order-item"},[a("div",{staticClass:"flex flex-align-center mb-15"},[a("img",{staticClass:"thumb",attrs:{src:t.detail.with_package.goods_image||"http://youya.chuncom.com/upload/images/WX20191023-160911.png",alt:""}}),a("div",{staticClass:"fz-15 c3 ml-10"},[t._v(t._s(t.detail.with_package.goods_name))])]),a("div",{staticClass:"bar-1 mb-10"}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"text-price text-left",title:"订单状态",value:0==t.detail.status?"待核销":"已核销"}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"赠送人",value:t.detail.with_guest.real_name}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"赠送人手机号",value:t.detail.with_guest.phone}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"受赠人",value:t.detail.with_receive_guest.real_name}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"受赠人手机号",value:t.detail.with_receive_guest.phone}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"赠送次数",value:t.detail.times}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"赠送时间",value:t.detail.updated_at}}),t.detail.off_time?a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"核销时间",value:t.detail.off_time}}):t._e(),a("div",{staticClass:"flex flex-end pt-10"},[0==t.detail.status?a("div",{staticClass:"btn-youya",attrs:{"data-id":t.detail.id},on:{click:t.verification}},[t._v("确认核销")]):t._e()])],1)]),a("div",{staticClass:"bar-10"})])},i=[],r=(a("96cf"),a("3b8d")),n={components:{},props:{},data:function(){return{detail:{}}},watch:{},computed:{},methods:{getUserInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/off");case 3:e=t.sent,a=e.code,e.data,s=e.message,0==a?(this.$toast.clear(),this.getData()):401==a&&(this.$toast.fail(s),setTimeout((function(){window.location.href="http://youya.chuncom.com/user/authorization?url=".concat(encodeURIComponent(window.location.href))}),2e3));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/off/reservation-package/detail?code=".concat(this.$route.query.code));case 3:e=t.sent,a=e.code,s=e.data,e.messege,0==a?(this.$toast.clear(),this.detail=s):this.$toast.fail(message);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),verification:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.currentTarget.dataset.id,t.next=3,this.$dialog.confirm({title:"提示",message:"确认核销？"}).then((function(){return!0})).catch((function(){return!1}));case 3:if(s=t.sent,!s){t.next=13;break}return this.$toast.loading({message:"加载中..."}),t.next=8,axios.post("/user/off/reservation-order/off",{order_id:a});case 8:i=t.sent,r=i.code,i.data,n=i.message,0==r?(this.$toast.clear(),this.$router.push("/verification/feedback")):this.$toast.fail(n);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getUserInfo()},mounted:function(){}},c=n,l=(a("1ae5"),a("2877")),o=Object(l["a"])(c,s,i,!1,null,"59d5c7bb",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-6fe6507e.fe74888e.js.map