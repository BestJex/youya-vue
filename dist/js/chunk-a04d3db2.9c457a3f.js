(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a04d3db2"],{"3ad6":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container",domProps:{innerHTML:e._s(e.detail.text)}}),e.detail.share_info?a("div",{staticClass:"flex flex-column flex-center flex-align-center"},[a("div",{staticClass:"fz-13 c6"},[e._v("联系微信")]),a("img",{staticStyle:{width:"30vw",height:"30vw"},attrs:{src:e.detail.share_info.with_guest.qr_card,alt:""}}),a("div",{staticClass:"fz-13 c6"},[e._v("优雅传播者："+e._s(e.detail.share_info.with_guest.real_name))]),a("div",{staticClass:"fz-13 c6"},[e._v("电话："+e._s(e.detail.share_info.with_guest.phone))]),a("div",{staticClass:"fz-12 c9"},[e._v("长按识别二维码添加微信")])]):e._e()])},n=[],r=(a("c5f6"),a("96cf"),a("3b8d")),s=a("18a0"),o=a.n(s),c={components:{},props:{},data:function(){return{detail:"",share_id:"",share_info:""}},watch:{},computed:{},methods:{getData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$toast.loading({messages:"加载中..."}),!this.$route.query.share_id){e.next=10;break}return e.next=4,axios.get("/article/detail?id=".concat(this.$route.query.id,"&share_id=").concat(this.share_id||this.$route.query.share_id));case 4:t=e.sent,a=t.code,i=t.data,n=t.message,e.next=16;break;case 10:return e.next=12,axios.get("/article/detail?id=".concat(this.$route.query.id));case 12:r=e.sent,a=r.code,i=r.data,n=r.message;case 16:0==a?(this.$toast.clear(),this.detail=i,document.title=i.title,this.wxShare()):this.$toast.fail(n);case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSDK:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,axios.get("/config/jsjdk?url="+t);case 3:a=e.sent,i=a.data,n=a.code,a.message,0==n&&o.a.config({debug:!1,appId:i.appId,timestamp:Number(i.timestamp),nonceStr:i.nonceStr,signature:i.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),wxShare:function(){var e=this;o.a.ready((function(){var t={title:e.detail.share_title,desc:e.detail.share_subtitle,link:e.detail.share_info.share_url||"http://youya.chuncom.com/youya-h5/?type=1&id=".concat(e.detail.id,"&share_id=0"),imgUrl:e.detail.share_image||"http://youya.chuncom.com/youya-h5/img/logo.png"};o.a.onMenuShareAppMessage?(o.a.onMenuShareAppMessage(t),o.a.onMenuShareTimeline(t)):(o.a.updateAppMessageShareData(t),o.a.updateTimelineShareData(t)),o.a.error((function(e){console.log("errorMSG:"+e)}))}))}},created:function(){var e=JSON.parse(localStorage.getItem("userinfo")),t=e.id,a=e.role;3==a&&(this.share_id=t),this.getData(),this.getSDK()},mounted:function(){}},u=c,d=(a("6b1d"),a("2877")),h=Object(d["a"])(u,i,n,!1,null,"1792ce5c",null);t["default"]=h.exports},"4a6f":function(e,t,a){},"6b1d":function(e,t,a){"use strict";var i=a("4a6f"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-a04d3db2.9c457a3f.js.map