(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f1f669b"],{"238ac":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"plr-15 ptb-10"},[s("div",{staticClass:"subscribe-item"},[s("div",{staticClass:"cover",style:{backgroundImage:"url("+t.course.image+")"}},[t.course.with_class?s("div",{staticClass:"cate"},[t._v(t._s(t.course.with_class.name))]):t._e(),s("div",{staticClass:"count"},[s("div",{staticClass:"avatar"},t._l(t.course.with_booked_user,(function(e,a){return s("div",{key:a},[a<4?s("img",{attrs:{src:e.with_guest.avatar,alt:""}}):t._e()])})),0),s("div",{staticClass:"ml-10"},[t._v(t._s(t.course.number_booked||0)+" 人预约")])]),s("div",{staticClass:"time"},[t._v(t._s(t.course.start_time)+" 开课")])]),s("div",{staticClass:"flex plr-5"},[s("div",{staticStyle:{flex:"1"}},[s("div",{staticClass:"title mb-5"},[t._v(t._s(t.course.title))]),s("div",{staticClass:"address"},[s("van-icon",{attrs:{name:"location-o"}}),t._v(" "+t._s(t.course.address))],1)])])])]),s("div",{staticClass:"bar-10"}),s("div",{staticClass:"plr-15 ptb-10 "},[s("h2",{staticClass:"fz-15 c3 mb-10"},[t._v("课程简介")]),s("p",{staticClass:"fz-14 c9 mb-15"},[t._v(t._s(t.course.description))]),s("div",{staticClass:"bar-1 mb-10"}),s("h2",{staticClass:"fz-15 c3 mb-10"},[t._v("预约详情")]),s("div",{staticClass:"flex flex-align-center mb-20"},[s("div",{staticClass:"fz-13 c9"},[t._v("\n        剩余"),s("span",{staticClass:"text-primary"},[t._v(t._s(t.course.number_booking-t.course.number_booked||0))]),t._v("个名额\n      ")]),s("div",{staticClass:"count2"},[s("div",{staticClass:"avatar"},t._l(t.course.avatar,(function(t,e){return s("div",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),0),s("div",{staticClass:"fz-13 c9 ml-10"},[s("span",{staticClass:"text-primary"},[t._v(t._s(t.course.number_booked||0))]),t._v("人预约")])])]),s("div",{staticClass:"bar-1 mb-10"}),s("h2",{staticClass:"fz-15 c3 mb-10"},[t._v("讲师介绍")]),s("div",{staticClass:"detail"},[s("img",{attrs:{src:t.course.lecturer_image,alt:""}}),s("div",{staticClass:"fz-13 c9"},[s("div",{staticClass:"fz-15 text-primary"},[t._v(t._s(t.course.lecturer_name||"杨晓妮"))]),s("div",{domProps:{innerHTML:t._s(t.course.lecturer_detail)}})])])]),s("footer",{staticClass:"footer-bar flex flex-center flex-align-center"},[t.course.user_apply?s("div",{staticClass:"btn-youya"},[t._v("已预约")]):s("div",{staticClass:"btn-youya",attrs:{"data-id":t.course.id},on:{click:t.jump}},[t._v("立即预约")])])])},i=[],r=(s("163d"),s("b449"),s("17d6")),n=s("00ca"),c=s.n(n),o={components:{},props:{},data:function(){return{course:{}}},watch:{},computed:{},methods:{getSDK:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=encodeURIComponent(window.location.href),t.next=3,axios.get("/config/jsjdk?url="+e);case 3:s=t.sent,a=s.data,i=s.code,s.message,0==i&&c.a.config({debug:!1,appId:a.appId,timestamp:Number(a.timestamp),nonceStr:a.nonceStr,signature:a.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),wxShare:function(){var t=this;c.a.ready((function(){var e={title:t.course.title,desc:t.course.subtitle,link:"http://youya.chuncom.com/youya-h5/?type=4&id=".concat(t.course.id),imgUrl:t.course.image||"http://youya.chuncom.com/youya-h5/img/logo.png"};c.a.onMenuShareAppMessage?(c.a.onMenuShareAppMessage(e),c.a.onMenuShareTimeline(e)):(c.a.updateAppMessageShareData(e),c.a.updateTimelineShareData(e)),c.a.error((function(t){console.log("errorMSG:"+t)}))}))},getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/reservation/detail?id=".concat(this.$route.params.id));case 3:e=t.sent,s=e.code,a=e.data,i=e.message,0==s?(this.$toast.clear(),this.course=a):this.$toast.fail(i);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),jump:function(t){if(0!=this.course.status)if(2!=this.course.status)if(this.course.number_booked!=this.course.number_booking){var e=JSON.parse(localStorage.getItem("userinfo"))||{};console.log(e),e.phone&&e.real_name?this.$router.push({name:"subscribe_auth",params:{course_id:t.currentTarget.dataset.id}}):this.$router.push({path:"/binding_information"})}else this.$toast.fail("预约已满");else this.$toast.fail("课程已结束");else this.$toast.fail("课程未开始")}},created:function(){this.getData()},mounted:function(){}},u=o,l=(s("9339"),s("e90a")),d=Object(l["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},6346:function(t,e,s){},9339:function(t,e,s){"use strict";var a=s("6346"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-5f1f669b.7f066439.js.map