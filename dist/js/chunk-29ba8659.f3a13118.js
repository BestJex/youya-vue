(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ba8659"],{"2ef9":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function i(t){if(Array.isArray(t))return a(t)}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||r(t)||s(t)||o()}n.d(e,"a",(function(){return c}))},"63a3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plr-15 pt-10"},[n("div",{staticClass:"mb-10"},[n("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1}},t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e},[n("router-link",{attrs:{to:""}},[n("img",{attrs:{src:t.image,width:"100%",alt:""}})])],1)})),1)],1),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"goods-list"},t._l(t.list,(function(e){return n("router-link",{key:e.id,attrs:{to:{name:"goods_detail",query:{id:e.id}}}},[n("div",{staticClass:"goods-item"},[n("img",{staticClass:"thumb",attrs:{src:e.image,alt:""}}),n("div",{staticClass:"flex flex-column flex-jus"},[n("div",{staticClass:"fz-15 c3"},[t._v(t._s(e.title))]),n("div",[n("span",{staticClass:"fz-15 text-price"},[t._v("￥"+t._s(e.price))])])])])])})),1)])],1)},i=[],r=n("2ef9"),s=(n("b449"),n("17d6")),o={components:{},props:{},data:function(){return{images:[],list:[],loading:!1,finished:!1,page:1}},watch:{},computed:{},methods:{getBanner:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/mall/banner");case 2:e=t.sent,n=e.code,a=e.data,e.messege,0==n?this.images=a:this.$toast.fail(message);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/mall/shop?page=".concat(this.page++));case 3:e=t.sent,n=e.code,a=e.data,i=e.messege,0==n?(this.$toast.clear(),this.list=[].concat(Object(r["a"])(this.list),Object(r["a"])(a.data)),this.loading=!1,a.current_page==a.last_page&&(this.finished=!0)):this.$toast.fail(i);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getBanner()},mounted:function(){}},c=o,u=(n("dbec"),n("e90a")),l=Object(u["a"])(c,a,i,!1,null,"72737250",null);e["default"]=l.exports},c9f8:function(t,e,n){},dbec:function(t,e,n){"use strict";var a=n("c9f8"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-29ba8659.f3a13118.js.map