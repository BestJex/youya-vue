(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55a9b430"],{"2ef9":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function r(t){if(Array.isArray(t))return a(t)}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||i(t)||s(t)||o()}n.d(e,"a",(function(){return c}))},9805:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,a){return n("van-cell",{key:a,attrs:{label:e.created_at,value:e.amount,"value-class":"fz-16 text-price"}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-title"},[t._v("提现到"+t._s(t.arr[e.type]))]),0==e.status?n("van-tag",{attrs:{type:"warning"}},[t._v("审核中")]):t._e(),1==e.status?n("van-tag",{attrs:{type:"success"}},[t._v(t._s(e.pay_channel))]):t._e(),2==e.status?n("van-tag",{attrs:{type:"danger"}},[t._v("已驳回")]):t._e()],1)],2)})),1)],1)},r=[],i=n("2ef9"),s=(n("b449"),n("17d6")),o={components:{},props:{},data:function(){return{arr:["","微信零钱","支付宝","银行卡"],list:[],loading:!1,finished:!1,page:1}},watch:{},computed:{},methods:{getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/finance-apply-list?page=".concat(this.page++));case 3:e=t.sent,n=e.code,a=e.data,r=e.message,0==n?(this.$toast.clear(),this.list=[].concat(Object(i["a"])(this.list),Object(i["a"])(a.data)),this.loading=!1,a.current_page==a.last_page&&(this.finished=!0)):this.$toast.fail(r);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){},mounted:function(){}},c=o,u=(n("c97c"),n("e90a")),l=Object(u["a"])(c,a,r,!1,null,"2f3b2a20",null);e["default"]=l.exports},ba1d:function(t,e,n){},c97c:function(t,e,n){"use strict";var a=n("ba1d"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-55a9b430.fc824ab9.js.map