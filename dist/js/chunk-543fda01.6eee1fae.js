(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-543fda01"],{1788:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plr-15 pt-10"},[n("div",{staticClass:"mb-10"},[n("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1}},t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e},[n("router-link",{attrs:{to:""}},[n("img",{attrs:{src:t.image,width:"100%",alt:""}})])],1)})),1)],1),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"goods-list"},t._l(t.list,(function(e){return n("router-link",{key:e.id,attrs:{to:{name:"goods_detail",query:{id:e.id}}}},[n("div",{staticClass:"goods-item"},[n("img",{staticClass:"thumb",attrs:{src:e.image,alt:""}}),n("div",{staticClass:"flex flex-column flex-jus"},[n("div",{staticClass:"fz-15 c3"},[t._v(t._s(e.title))]),n("div",[n("span",{staticClass:"fz-15 text-price"},[t._v("￥"+t._s(e.price))])])])])])})),1)])],1)},r=[],i=n("75fc"),s=(n("96cf"),n("3b8d")),o={components:{},props:{},data:function(){return{images:[],list:[],loading:!1,finished:!1,page:1}},watch:{},computed:{},methods:{getBanner:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/mall/banner");case 2:e=t.sent,n=e.code,a=e.data,e.messege,0==n?this.images=a:this.$toast.fail(message);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/mall?page=".concat(this.page++));case 3:e=t.sent,n=e.code,a=e.data,r=e.messege,0==n?(this.$toast.clear(),this.list=[].concat(Object(i["a"])(this.list),Object(i["a"])(a.data)),this.loading=!1,a.current_page==a.last_page&&(this.finished=!0)):this.$toast.fail(r);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getBanner()},mounted:function(){}},c=o,u=(n("aba1"),n("2877")),f=Object(u["a"])(c,a,r,!1,null,"7a395ac6",null);e["default"]=f.exports},"1af6":function(t,e,n){var a=n("63b6");a(a.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var a=n("d9f6"),r=n("aebd");t.exports=function(t,e,n){e in t?a.f(t,e,r(0,n)):t[e]=n}},"549b":function(t,e,n){"use strict";var a=n("d864"),r=n("63b6"),i=n("241e"),s=n("b0dc"),o=n("3702"),c=n("b447"),u=n("20fd"),f=n("7cd6");r(r.S+r.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,l,d=i(t),p="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,v=void 0!==h,m=0,b=f(d);if(v&&(h=a(h,g>2?arguments[2]:void 0,2)),void 0==b||p==Array&&o(b))for(e=c(d.length),n=new p(e);e>m;m++)u(n,m,v?h(d[m],m):d[m]);else for(l=b.call(d),n=new p;!(r=l.next()).done;m++)u(n,m,v?s(l,h,[r.value,m],!0):r.value);return n.length=m,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"75fc":function(t,e,n){"use strict";var a=n("a745"),r=n.n(a);function i(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var s=n("774e"),o=n.n(s),c=n("c8bb"),u=n.n(c);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return i(t)||f(t)||l()}n.d(e,"a",(function(){return d}))},"774e":function(t,e,n){t.exports=n("d2d5")},9003:function(t,e,n){var a=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==a(t)}},"95d5":function(t,e,n){var a=n("40c3"),r=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(a(e))}},a745:function(t,e,n){t.exports=n("f410")},aba1:function(t,e,n){"use strict";var a=n("bf49"),r=n.n(a);r.a},bf49:function(t,e,n){},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-543fda01.6eee1fae.js.map