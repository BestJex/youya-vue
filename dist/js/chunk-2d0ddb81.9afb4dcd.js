(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddb81"],{"831a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-10",domProps:{innerHTML:t._s(t.content)}})},a=[],s={components:{},props:{},data:function(){return{content:""}},watch:{},computed:{},methods:{},created:function(){var t=this;this.$toast.loading({messages:"加载中..."}),axios.get("/branch/detail?id=".concat(this.$route.params.id)).then((function(e){0==e.code?(t.$toast.clear(),t.content=e.data.text,document.title=e.data.title):t.$toast.fail(messege)}))},mounted:function(){console.log(this.$route.params.id)}},c=s,i=n("2877"),d=Object(i["a"])(c,o,a,!1,null,"8f1034c8",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ddb81.9afb4dcd.js.map