(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b347507"],{"2ef9":function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function i(t){if(Array.isArray(t))return s(t)}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t,e){if(t){if("string"===typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return i(t)||r(t)||n(t)||c()}a.d(e,"a",(function(){return o}))},"41fc":function(t,e,a){"use strict";var s=a("54e9"),i=a.n(s);i.a},5408:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-sticky",[s("van-tabs",{attrs:{"line-height":"2px","title-active-color":"#8DB9DF","title-inactive-color":"#999999",color:"#8DB9DF",sticky:!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tab",{attrs:{title:"全部"}}),s("van-tab",{attrs:{title:"待付款"}}),s("van-tab",{attrs:{title:"待发货"}}),s("van-tab",{attrs:{title:"待收货"}}),s("van-tab",{attrs:{title:"已完成"}}),s("van-tab",{attrs:{title:"已退款"}}),s("van-tab",{attrs:{title:"已取消"}})],1)],1),s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[s("ul",{staticClass:"order-list"},t._l(t.list,(function(e,a){return s("li",{key:e.id,staticClass:"order-item",attrs:{title:e}},[s("div",{staticClass:"p-10 flex flex-jus"},[s("div",{staticClass:"fz-13 c9"},[t._v("订单号："+t._s(e.number))]),0==e.status?s("div",{staticClass:"fz-12 text-price"},[t._v("待付款")]):t._e(),1==e.status?s("div",{staticClass:"fz-12 text-price"},[t._v("待发货")]):t._e(),2==e.status?s("div",{staticClass:"fz-12 text-price"},[t._v("待收货")]):t._e(),3==e.status?s("div",{staticClass:"fz-12 text-price"},[t._v("已完成")]):t._e(),4==e.status?s("div",{staticClass:"fz-12 text-price"},[t._v("已退款")]):t._e(),5==e.status?s("div",{staticClass:"fz-12 c9"},[t._v("已取消")]):t._e()]),t._l(e.with_detail,(function(a){return s("router-link",{key:a.id,attrs:{to:{name:"order_detail",query:{id:e.id}}}},[s("div",{staticClass:"flex p-10"},[s("img",{staticClass:"thumb",attrs:{src:a.goods_image,alt:""}}),s("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[s("div",{staticClass:"fz-15 c3 text-hide2"},[t._v(t._s(a.goods_title))]),s("div",{staticClass:"flex flex-jus"},[s("div",{staticClass:"fz-15 c3"},[t._v("¥"+t._s(a.goods_price))]),s("div",{staticClass:"fz-14 c9"},[t._v("x"+t._s(a.quantity))])])])])])})),s("div",{staticClass:"plr-10 mb-10 fz-14 c3 text-right"},[t._v("共"+t._s(e.product_quantity)+"件商品 合计"),s("span",{staticClass:"text-price"},[t._v("¥"+t._s(e.pay_price))])]),s("div",{staticClass:"bar-1"}),s("div",{staticClass:"flex flex-end p-10"},[0==e.status?s("div",{staticClass:"btn-youya-o",attrs:{"data-index":a,"data-id":e.id},on:{click:t.cancel}},[t._v("取消订单")]):t._e(),s("router-link",{attrs:{to:{name:"order_detail",query:{id:e.id}}}},[1==e.status||2==e.status?s("div",{staticClass:"btn-youya-o"},[t._v("申请退款")]):t._e()]),s("router-link",{attrs:{to:{name:"order_detail",query:{id:e.id}}}},[0==e.status?s("div",{staticClass:"btn-youya"},[t._v("去付款")]):t._e()]),2==e.status?s("div",{staticClass:"btn-youya",on:{click:t.complete}},[t._v("确认收货")]):t._e()],1)],2)})),0)]),s("div",{staticClass:"btn-side",on:{click:t.showCounselorModel}},[s("img",{attrs:{src:a("63c0"),alt:""}}),s("div",{staticClass:"fz-12 c3"},[t._v("服务天使")])]),s("van-popup",{attrs:{closeable:!0},model:{value:t.isShowCounselor,callback:function(e){t.isShowCounselor=e},expression:"isShowCounselor"}},[t.teacher?s("div",{staticClass:"counselor"},[s("div",{staticClass:"flex mb-15"},[s("img",{staticClass:"avatar",attrs:{src:t.teacher.avatar,alt:""}}),s("div",{staticClass:"ml-10"},[s("div",{staticClass:"fz-17 c3 mb-10"},[t._v(t._s(t.teacher.name))]),s("div",{staticClass:"fz-14 c9"},[t._v(t._s(t.teacher.phone)+" "),s("a",{staticClass:"btn-youya-o plr-5",attrs:{href:"tel:"+t.teacher.phone}},[t._v("一键拨打")])])])]),s("div",{staticClass:"flex flex-center mb-5"},[s("div",{staticClass:"erweima",staticStyle:{"background-image":"url(../../assets/img/erweima-bg.png)"}},[s("img",{attrs:{src:t.teacher.qr,alt:""}})])]),s("div",{staticClass:"fz-12 c9 text-center"},[t._v("识别二维码联系")])]):t._e()])],1)},i=[],r=a("2ef9"),n=(a("b449"),a("17d6")),c={components:{},props:{},data:function(){return{isShowCounselor:!1,teacher:{},active:0,list:[],loading:!1,finished:!1,page:1}},watch:{active:function(t,e){t!=e&&(this.page=1,this.loading=!1,this.finished=!1,this.list=[],this.getList())}},computed:{},methods:{showCounselorModel:function(){this.teacher?this.isShowCounselor=!0:this.$toast.fail("暂时没有配置顾问老师")},getTeacher:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/user/package-teacher");case 2:e=t.sent,a=e.code,s=e.data,e.message,this.teacher=0==a?s:null;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),complete:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({title:"提示",message:"是否要确认收货？"}).then((function(){return!0})).catch((function(){return!1}));case 2:if(a=t.sent,a){t.next=5;break}return t.abrupt("return");case 5:return this.$toast.loading({message:"确认收货中..."}),t.next=8,axios.post("/user/mall-order/complete",{id:e.target.dataset.id});case 8:s=t.sent,i=s.code,s.data,r=s.messege,0==i?this.$toast.success("确认收货成功"):this.$toast.fail(r);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancel:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({title:"提示",message:"是否要取消订单？"}).then((function(){return!0})).catch((function(){return!1}));case 2:if(a=t.sent,a){t.next=5;break}return t.abrupt("return");case 5:return this.$toast.loading({message:"取消中..."}),t.next=8,axios.post("/user/mall-order/cancel",{id:e.target.dataset.id});case 8:s=t.sent,i=s.code,s.data,r=s.messege,0==i?(this.$toast.success("取消成功"),this.list[e.target.dataset.index].status=5):this.$toast.fail(r);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$toast.loading({message:"加载中..."}),!(this.active-1>=0)){t.next=10;break}return t.next=4,axios.get("/user/mall-order/list?page=".concat(this.page++,"&status=").concat(this.active-1));case 4:e=t.sent,a=e.code,s=e.data,i=e.messege,t.next=16;break;case 10:return t.next=12,axios.get("/user/mall-order/list?page=".concat(this.page++));case 12:n=t.sent,a=n.code,s=n.data,i=n.messege;case 16:0==a?(this.$toast.clear(),this.list=[].concat(Object(r["a"])(this.list),Object(r["a"])(s.data)),this.loading=!1,s.current_page==s.last_page&&(this.finished=!0)):this.$toast.fail(i);case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getTeacher()},mounted:function(){}},o=c,l=(a("41fc"),a("e90a")),u=Object(l["a"])(o,s,i,!1,null,"619d8564",null);e["default"]=u.exports},"54e9":function(t,e,a){},"63c0":function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-0b347507.3ed007df.js.map