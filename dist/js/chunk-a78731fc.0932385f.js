(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a78731fc"],{"7f05":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plr-15 pt-10"},[a("div",{staticClass:"mb-10"},[a("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1}},t._l(t.banner,(function(t,e){return a("van-swipe-item",{key:e},[a("router-link",{attrs:{to:"video"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"image.image"}],attrs:{width:"100%",alt:""}})])],1)})),1)],1),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,i){return a("router-link",{key:i,attrs:{to:{name:"article",query:{id:e.id}}}},[a("div",{staticClass:"article-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],attrs:{alt:""}}),a("div",[a("div",{staticClass:"fz-15 c3 text-hide2"},[t._v(t._s(e.title))]),a("div",{staticClass:"fz-11 c9 text-hide"},[t._v(t._s(e.subtitle))])])])])})),1)],1)},n=[],s=a("75fc"),r=(a("96cf"),a("3b8d")),c=(a("96eb"),{components:{},props:{},data:function(){return{banner:[],page:1,list:[],loading:!1,finished:!1}},watch:{},computed:{},methods:{getList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/article?page=".concat(this.page++));case 3:e=t.sent,a=e.code,i=e.data,n=e.messege,0==a?(this.$toast.clear(),this.list=[].concat(Object(s["a"])(this.list),Object(s["a"])(i.data)),this.loading=!1,i.current_page==i.last_page&&(this.finished=!0)):this.$toast.fail(n);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;axios.get("/article/banner").then((function(e){0==e.code?t.banner=e.data:t.$toast.fail(e.messege)})),this.getList()},mounted:function(){}}),o=c,l=(a("daee"),a("2877")),d=Object(l["a"])(o,i,n,!1,null,"4f208d66",null);e["default"]=d.exports},daee:function(t,e,a){"use strict";var i=a("fc5b"),n=a.n(i);n.a},fc5b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a78731fc.0932385f.js.map