(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d594976"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var i,c,s=String(a(e)),o=n(r),u=s.length;return o<0||o>=u?t?"":void 0:(i=s.charCodeAt(o),i<55296||i>56319||o+1===u||(c=s.charCodeAt(o+1))<56320||c>57343?t?s.charAt(o):i:t?s.slice(o,o+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),i=r("79e5"),c=r("be13"),s=r("2b4c"),o=r("520a"),u=s("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=s(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=v?!i((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[p](""),!e})):void 0;if(!v||!h||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],g=r(c,p,""[t],(function(t,e,r,n,a){return e.exec===o?v&&!a?{done:!0,value:d.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),x=g[0],b=g[1];n(String.prototype,t,x),a(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"520a":function(t,e,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(c=function(t){var e,r,c,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),o&&(e=f[s]),c=a.call(f,t),o&&c&&(f[s]=f.global?c.index+c[0].length:e),u&&c&&c.length>1&&i.call(c[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},5835:function(t,e,r){},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),i=r("9def"),c=r("4588"),s=r("0390"),o=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,e,r,d){return[function(n,a){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,a):r.call(String(i),n,a)},function(t,e){var a=d(r,t,this,e);if(a.done)return a.value;var f=n(t),p=String(this),v="function"===typeof e;v||(e=String(e));var x=f.global;if(x){var b=f.unicode;f.lastIndex=0}var m=[];while(1){var w=o(f,p);if(null===w)break;if(m.push(w),!x)break;var k=String(w[0]);""===k&&(f.lastIndex=s(p,i(f.lastIndex),b))}for(var I="",$=0,_=0;_<m.length;_++){w=m[_];for(var y=String(w[0]),R=u(l(c(w.index),p.length),0),C=[],E=1;E<w.length;E++)C.push(h(w[E]));var S=w.groups;if(v){var j=[y].concat(C,R,p);void 0!==S&&j.push(S);var A=String(e.apply(void 0,j))}else A=g(y,p,R,C,S,e);R>=$&&(I+=p.slice($,R)+A,$=R+y.length)}return I+p.slice($)}];function g(t,e,n,i,c,s){var o=n+t.length,u=i.length,l=v;return void 0!==c&&(c=a(c),l=p),r.call(s,l,(function(r,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(o);case"<":s=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var p=f(l/10);return 0===p?r:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):r}s=i[l-1]}return void 0===s?"":s}))}}))},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c558:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-cell-group",{attrs:{border:!1}},[r("van-cell",{attrs:{"title-class":"flex flex-align-center c9",title:"修改头像",value:"内容"}},[r("div",{staticClass:"flex flex-end",attrs:{slot:"default"},slot:"default"},[r("van-uploader",{attrs:{"before-read":t.upAvatar}},[r("img",{staticClass:"avatar",attrs:{src:t.userInfo.avatar||"../../img/noface.png",alt:""}})])],1)]),r("van-cell",{attrs:{"title-class":"flex flex-align-center c9",title:"二维码名片",value:"内容"}},[r("div",{staticClass:"flex flex-end",attrs:{slot:"default"},slot:"default"},[r("van-uploader",{attrs:{"before-read":t.upQrCard}},[t.userInfo.qr_card?r("div",{staticClass:"c3"},[t._v("修改")]):r("div",{staticClass:"c3"},[t._v("上传")])])],1)]),r("van-cell",{attrs:{"title-class":"c9","value-class":"c3",title:"姓名",value:t.userInfo.real_name}}),r("van-cell",{attrs:{"title-class":"c9","value-class":"c3",title:"绑定号码",value:t.userInfo.phone}}),r("van-field",{attrs:{label:"昵称","label-class":"c9","input-align":"right",placeholder:"请输入昵称"},model:{value:t.userInfo.nick_name,callback:function(e){t.$set(t.userInfo,"nick_name",e)},expression:"userInfo.nick_name"}}),r("van-field",{attrs:{label:"联系电话","label-class":"c9","input-align":"right",placeholder:"请输入联系电话"},model:{value:t.userInfo.phone_contact,callback:function(e){t.$set(t.userInfo,"phone_contact",e)},expression:"userInfo.phone_contact"}})],1),r("div",{staticClass:"footer-bar"},[r("div",{staticClass:"btn-youya",on:{click:t.submit}},[t._v("确认修改")])])],1)},a=[],i=(r("96cf"),r("3b8d")),c=r("f98f"),s={components:{},props:{},data:function(){return{userInfo:{}}},watch:{},computed:{},methods:{getData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user");case 3:e=t.sent,r=e.code,n=e.data,a=e.message,0==r?(this.$toast.clear(),this.userInfo=n):this.$toast.fail(a);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),upAvatar:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.update(e);case 2:r=t.sent,this.userInfo.avatar=r;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),upQrCard:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.update(e);case 2:r=t.sent,this.userInfo.qr_card=r;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),update:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new FormData,r.append("image",e),n={headers:{"Content-Type":"multipart/form-data"}},this.$toast.loading({message:"加载中..."}),t.next=6,axios.post("/user/upload-image",r,n);case 6:if(a=t.sent,i=a.code,c=a.data,s=a.message,0!=i){t.next=15;break}return this.$toast.clear(),t.abrupt("return",c.image_url);case 15:this.$toast.fail(s);case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),submit:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c["a"].checkPhone(this.userInfo.phone_contact)){t.next=3;break}return this.$toast.fail("手机号码格式错误"),t.abrupt("return");case 3:if(c["a"].trim(this.userInfo.nick_name)){t.next=6;break}return this.$toast.fail("请输入昵称"),t.abrupt("return");case 6:if(c["a"].trim(this.userInfo.qr_card)){t.next=9;break}return this.$toast.fail("请上传二维码名片"),t.abrupt("return");case 9:if(c["a"].trim(this.userInfo.avatar)){t.next=12;break}return this.$toast.fail("请上传头像"),t.abrupt("return");case 12:return this.$toast.loading({message:"提交中..."}),t.next=15,axios.post("/user/edit",{phone_contact:this.userInfo.phone_contact,nick_name:this.userInfo.nick_name,qr_card:this.userInfo.qr_card,avatar:this.userInfo.avatar});case 15:e=t.sent,r=e.code,e.data,n=e.message,0==r?this.$toast.success("修改成功"):this.$toast.fail(n);case 20:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()},mounted:function(){}},o=s,u=(r("d45e"),r("2877")),l=Object(u["a"])(o,n,a,!1,null,"6993def6",null);e["default"]=l.exports},d45e:function(t,e,r){"use strict";var n=r("5835"),a=r.n(n);a.a},f98f:function(t,e,r){"use strict";r("a481");e["a"]={trim:function(t){return t.replace(/^\s*|\s*$/g,"")},checkPhone:function(t){return/^1[3456789]\d{9}$/.test(t)}}}}]);
//# sourceMappingURL=chunk-1d594976.7c14bb91.js.map