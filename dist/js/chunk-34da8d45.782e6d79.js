(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34da8d45"],{"5e81":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"order-list"},[a("li",{staticClass:"order-item"},[a("div",{staticClass:"flex flex-align-center mb-15"},[a("img",{staticClass:"thumb",attrs:{src:t.detail.course_image,alt:""}}),a("div",{staticClass:"fz-15 c3 ml-10"},[t._v(t._s(t.detail.course_title))])]),a("div",{staticClass:"bar-1 mb-10"}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"text-price text-left",title:"订单状态",value:0==t.detail.status?"待核销":"已核销"}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"昵称",value:t.detail.with_guest.nick_name}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"姓名",value:t.detail.with_guest.real_name}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"手机号",value:t.detail.with_guest.phone_contact}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"订单编号",value:"456788909867556"}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"下单时间",value:t.detail.updated_at}}),a("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"核销时间",value:t.detail.off_time}}),a("div",{staticClass:"flex flex-end pt-10"},[0==t.detail.status?a("div",{staticClass:"btn-youya",attrs:{"data-id":t.detail.id},on:{click:t.verification}},[t._v("确认核销")]):t._e(),a("div",{staticClass:"btn-youya-o ml-10",on:{click:t.produce}},[t._v("生成学员牌")])])],1)]),a("van-popup",{model:{value:t.isShowImg,callback:function(e){t.isShowImg=e},expression:"isShowImg"}},[a("div",{staticClass:"student-container",staticStyle:{"background-image":"url(../../img/bg-001.png)"}},[a("img",{attrs:{src:t.studentImg,alt:""}}),a("div",{staticClass:"close",on:{click:t.close}},[a("van-icon",{attrs:{name:"close",size:"30px"}})],1)])])],1)},i=[],n=(a("b449"),a("17d6")),o=a("08bb"),r={components:{},props:{},data:function(){return{isShowImg:!1,studentImg:"",detail:{}}},watch:{},computed:{},methods:{close:function(){this.isShowImg=!1},produce:function(){this.isShowImg=!0,this.compoundImg(this.detail)},compoundImg:function(t){var e=this;console.log(t),new Promise((function(e,a){Object(o["a"])(t.with_guest.avatar,{type:"circle",x:"center",y:"0",r:"50%",success:function(t){e(t)}})})).then((function(a){var s=new o["b"]({width:690,height:834,backgroundColor:"white"});s.background("../../img/bg-001.png",{left:0,top:0,color:"#ffffff",type:"crop"}).rect({x:0,y:0,width:"100%",height:"100%",fillColor:"#fff"}).add("../../img/bg-002.png",{width:300,height:154,pos:{x:197,y:400,scale:1}}).add("../../img/logo-2.png",{width:130,height:165,pos:{x:280,y:90,scale:1}}).circle({x:260,y:400,r:"85px",fillColor:"#ffffff"}).add(a,{width:164,height:164,pos:{x:263,y:403,scale:1}}).text(t.course_title,{width:450,align:"center",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:120,y:288}}).text("姓名",{width:70,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:186,y:610}}).text(t.with_guest.real_name||"王萌萌",{width:120,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:350,y:610}}).text("手机号",{width:120,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:186,y:670}}).text(t.with_guest.phone_contact||"13544445555",{width:250,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:350,y:670}}).draw((function(t){e.studentImg=t}))}))},getUserInfo:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/off");case 3:e=t.sent,a=e.code,e.data,s=e.message,0==a?(this.$toast.clear(),this.getData()):401==a&&(this.$toast.fail(s),setTimeout((function(){window.location.href="http://youya.chuncom.com/user/authorization?url=".concat(encodeURIComponent(window.location.href))}),2e3));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/off/reservation-order/detail?code=".concat(this.$route.query.code));case 3:e=t.sent,a=e.code,s=e.data,e.messege,0==a?(this.$toast.clear(),this.detail=s):this.$toast.fail(message);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),verification:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.currentTarget.dataset.id,t.next=3,this.$dialog.confirm({title:"提示",message:"确认核销？"}).then((function(){return!0})).catch((function(){return!1}));case 3:if(s=t.sent,!s){t.next=13;break}return this.$toast.loading({message:"加载中..."}),t.next=8,axios.post("/user/off/reservation-order/off",{order_id:a});case 8:i=t.sent,n=i.code,i.data,o=i.message,0==n?(this.$toast.clear(),this.$router.push("/verification/feedback")):this.$toast.fail(o);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getUserInfo()},mounted:function(){}},c=r,l=(a("c0a1"),a("e90a")),u=Object(l["a"])(c,s,i,!1,null,"883a2c2e",null);e["default"]=u.exports},c0a1:function(t,e,a){"use strict";var s=a("dd57"),i=a.n(s);i.a},dd57:function(t,e,a){}}]);
//# sourceMappingURL=chunk-34da8d45.782e6d79.js.map