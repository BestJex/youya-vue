(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3402b387"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var s,i,c=String(a(t)),o=n(r),u=c.length;return o<0||o>=u?e?"":void 0:(s=c.charCodeAt(o),s<55296||s>56319||o+1===u||(i=c.charCodeAt(o+1))<56320||i>57343?e?c.charAt(o):s:e?c.slice(o,o+2):i-56320+(s-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),s=r("79e5"),i=r("be13"),c=r("2b4c"),o=r("520a"),u=c("species"),l=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=c(e),d=!s((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=d?!s((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[p](""),!t})):void 0;if(!d||!h||"replace"===e&&!l||"split"===e&&!f){var v=/./[p],g=r(i,p,""[e],(function(e,t,r,n,a){return t.exec===o?d&&!a?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),m=g[0],x=g[1];n(String.prototype,e,m),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},"4ebe":function(e,t,r){},"51ce":function(e,t,r){"use strict";var n=r("4ebe"),a=r.n(n);a.a},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,s=String.prototype.replace,i=a,c="lastIndex",o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(i=function(e){var t,r,i,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),o&&(t=f[c]),i=a.call(f,e),o&&i&&(f[c]=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&s.call(i[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=i},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var s=r.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},a481:function(e,t,r){"use strict";var n=r("cb7c"),a=r("4bf8"),s=r("9def"),i=r("4588"),c=r("0390"),o=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,v){return[function(n,a){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):r.call(String(s),n,a)},function(e,t){var a=v(r,e,this,t);if(a.done)return a.value;var f=n(e),p=String(this),d="function"===typeof t;d||(t=String(t));var m=f.global;if(m){var x=f.unicode;f.lastIndex=0}var b=[];while(1){var I=o(f,p);if(null===I)break;if(b.push(I),!m)break;var w=String(I[0]);""===w&&(f.lastIndex=c(p,s(f.lastIndex),x))}for(var _="",k=0,y=0;y<b.length;y++){I=b[y];for(var $=String(I[0]),R=u(l(i(I.index),p.length),0),S=[],C=1;C<I.length;C++)S.push(h(I[C]));var j=I.groups;if(d){var q=[$].concat(S,R,p);void 0!==j&&q.push(j);var A=String(t.apply(void 0,q))}else A=g($,p,R,S,j,t);R>=k&&(_+=p.slice(k,R)+A,k=R+$.length)}return _+p.slice(k)}];function g(e,t,n,s,i,c){var o=n+e.length,u=s.length,l=d;return void 0!==i&&(i=a(i),l=p),r.call(c,l,(function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(o);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var p=f(l/10);return 0===p?r:p<=u?void 0===s[p-1]?a.charAt(1):s[p-1]+a.charAt(1):r}c=s[l-1]}return void 0===c?"":c}))}}))},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c558:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("van-cell-group",{attrs:{border:!1}},[r("van-cell",{attrs:{"title-class":"flex flex-align-center c9",title:"修改头像",value:"内容"}},[r("div",{staticClass:"flex flex-end",attrs:{slot:"default"},slot:"default"},[r("van-uploader",{attrs:{"before-read":e.upAvatar}},[r("img",{staticClass:"avatar",attrs:{src:e.userInfo.avatar||"../../img/noface.png",alt:""}})])],1)]),r("van-cell",{attrs:{"title-class":"flex flex-align-center c9",title:"二维码名片",value:"内容"}},[r("div",{staticClass:"flex flex-end",attrs:{slot:"default"},slot:"default"},[r("van-uploader",{attrs:{"before-read":e.upQrCard}},[e.userInfo.qr_card?r("img",{staticClass:"qr_card",attrs:{src:e.userInfo.qr_card||"../../img/noface.png",alt:""}}):r("div",{staticClass:"c3"},[e._v("请上传二维码名片")])])],1)]),r("van-cell",{attrs:{"title-class":"c9","value-class":"c3",title:"姓名",value:e.userInfo.real_name}}),r("van-cell",{attrs:{"title-class":"c9","value-class":"c3",title:"绑定号码",value:e.userInfo.phone}}),r("van-field",{attrs:{label:"昵称","label-class":"c9","input-align":"right",placeholder:"请输入昵称"},model:{value:e.userInfo.nick_name,callback:function(t){e.$set(e.userInfo,"nick_name",t)},expression:"userInfo.nick_name"}}),r("van-field",{attrs:{label:"联系电话","label-class":"c9","input-align":"right",placeholder:"请输入联系电话"},model:{value:e.userInfo.phone_contact,callback:function(t){e.$set(e.userInfo,"phone_contact",t)},expression:"userInfo.phone_contact"}}),r("van-cell",{attrs:{"title-class":"flex flex-align-center c9",title:"收款二维码",value:"内容"}},[r("div",{staticClass:"flex flex-end",attrs:{slot:"default"},slot:"default"},[r("van-uploader",{attrs:{"before-read":e.receiptQr,accept:"image/gif, image/jpeg"}},[e.userInfo.receipt_qr?r("img",{staticClass:"qr_card",attrs:{src:e.userInfo.receipt_qr||"../../img/noface.png",alt:""}}):r("div",{staticClass:"c3"},[e._v("请上传收款二维码")])])],1)])],1),r("div",{staticClass:"footer-bar"},[r("div",{staticClass:"btn-youya",on:{click:e.submit}},[e._v("确认修改")])])],1)},a=[],s=(r("c5f6"),r("96cf"),r("3b8d")),i=r("18a0"),c=r.n(i),o=r("f98f"),u={components:{},props:{},data:function(){return{userInfo:{}}},watch:{},computed:{},methods:{uploadImg:function(e){var t=e.currentTarget.dataset.key,r=this;c.a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(e.localIds),r.userinfo[t]=e.localIds}})},getSDK:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,axios.get("/config/jsjdk?url="+t);case 3:r=e.sent,n=r.data,a=r.code,r.message,0==a&&c.a.config({debug:!1,appId:n.appId,timestamp:Number(n.timestamp),nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","openAddress","chooseImage","previewImage"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"加载中..."}),e.next=3,axios.get("/user");case 3:t=e.sent,r=t.code,n=t.data,a=t.message,0==r?(this.$toast.clear(),this.userInfo=n):this.$toast.fail(a);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),upAvatar:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.update(t);case 2:r=e.sent,this.userInfo.avatar=r;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),upQrCard:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.update(t);case 2:r=e.sent,this.userInfo.qr_card=r;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),receiptQr:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.update(t);case 2:r=e.sent,this.userInfo.receipt_qr=r;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("image",t),n={headers:{"Content-Type":"multipart/form-data"}},this.$toast.loading({message:"加载中..."}),e.next=6,axios.post("/user/upload-image",r,n);case 6:if(a=e.sent,s=a.code,i=a.data,c=a.message,0!=s){e.next=15;break}return this.$toast.clear(),e.abrupt("return",i.image_url);case 15:this.$toast.fail(c);case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o["a"].trim(this.userInfo.phone_contact)){e.next=3;break}return this.$toast.fail("手机号码格式错误"),e.abrupt("return");case 3:if(o["a"].trim(this.userInfo.nick_name)){e.next=6;break}return this.$toast.fail("请输入昵称"),e.abrupt("return");case 6:if(this.userInfo.qr_card){e.next=9;break}return this.$toast.fail("请上传二维码名片"),e.abrupt("return");case 9:if(this.userInfo.receipt_qr){e.next=12;break}return this.$toast.fail("请上传收款二维码"),e.abrupt("return");case 12:if(this.userInfo.avatar){e.next=15;break}return this.$toast.fail("请上传头像"),e.abrupt("return");case 15:return this.$toast.loading({message:"提交中..."}),e.next=18,axios.post("/user/edit",{phone_contact:this.userInfo.phone_contact,nick_name:this.userInfo.nick_name,qr_card:this.userInfo.qr_card,avatar:this.userInfo.avatar,receipt_qr:this.userInfo.receipt_qr});case 18:t=e.sent,r=t.code,t.data,n=t.message,0==r?this.$toast.success("修改成功"):this.$toast.fail(n);case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getData(),this.getSDK()},mounted:function(){}},l=u,f=(r("51ce"),r("2877")),p=Object(f["a"])(l,n,a,!1,null,"3feeee00",null);t["default"]=p.exports},f98f:function(e,t,r){"use strict";r("a481");t["a"]={trim:function(e){return e.replace(/^\s*|\s*$/g,"")},checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)}}}}]);
//# sourceMappingURL=chunk-3402b387.a83bcdd2.js.map