(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c3e1143"],{"02f4":function(e,t,n){var r=n("4588"),a=n("be13");e.exports=function(e){return function(t,n){var o,c,i=String(a(t)),s=r(n),u=i.length;return s<0||s>=u?e?"":void 0:(o=i.charCodeAt(s),o<55296||o>56319||s+1===u||(c=i.charCodeAt(s+1))<56320||c>57343?e?i.charAt(s):o:e?i.slice(s,s+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),o=n("79e5"),c=n("be13"),i=n("2b4c"),s=n("520a"),u=i("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=i(e),h=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),d=h?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!t})):void 0;if(!h||!d||"replace"===e&&!l||"split"===e&&!f){var v=/./[p],b=n(c,p,""[e],(function(e,t,n,r,a){return t.exec===s?h&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),g=b[0],x=b[1];r(String.prototype,e,g),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},5172:function(e,t,n){"use strict";var r=n("d1b0"),a=n.n(r);a.a},"520a":function(e,t,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,i="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[i]||0!==t[i]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(e){var t,n,c,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(t=f[i]),c=a.call(f,e),s&&c&&(f[i]=f.global?c.index+c[0].length:t),u&&c&&c.length>1&&o.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),e.exports=c},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in a||n("9e1e")&&r(a,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"886d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h1",{staticClass:"fz-18 c3 fw-700"},[e._v("为了更好的体验，请先验证身份")]),n("van-cell-group",{attrs:{border:!1}},[n("van-field",{attrs:{placeholder:"请输入您的真实姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{disabled:!0,placeholder:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("van-field",{attrs:{center:"",type:"number",clearable:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("van-button",{attrs:{slot:"button",size:"small",disabled:e.disabled,type:"primary"},on:{click:e.getSMS},slot:"button"},[e.disabled?e._e():n("span",[e._v("获取验证码")]),e.disabled?n("van-count-down",{attrs:{format:"ss",time:e.time},on:{finish:e.reset}}):e._e()],1)],1)],1),n("footer",{staticClass:"footer-bar flex flex-center flex-align-center"},[n("div",{staticClass:"btn-youya",on:{click:e.confirm}},[e._v("确认")])])],1)},a=[],o=(n("7f7f"),n("96cf"),n("3b8d")),c=n("f98f"),i={components:{},props:{},data:function(){return{name:"",phone:"",code:"",disabled:!1,time:6e4}},watch:{},computed:{},methods:{getSMS:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=c["a"].trim(this.phone),c["a"].checkPhone(t)){e.next=4;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 4:return this.disabled=!0,e.next=7,axios.post("/user/verify-sms",{phone:this.phone});case 7:n=e.sent,n.code,r=n.data,n.messega,console.log(r),this.time=6e4;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=c["a"].trim(this.name),n=c["a"].trim(this.code),r=c["a"].trim(this.phone),t){e.next=6;break}return this.$toast("请输入真实姓名"),e.abrupt("return");case 6:if(n){e.next=9;break}return this.$toast("请输入验证码"),e.abrupt("return");case 9:if(c["a"].checkPhone(r)){e.next=12;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 12:return e.next=14,axios.post("/user/verify",{phone:r,name:t,code:n});case 14:a=e.sent,o=a.code,i=a.data,s=a.message,0==o?(console.log(i),console.log(this.$route.query),this.$router.push({name:this.$route.query.path,params:{id:this.$route.query.id}})):this.$toast(s);case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.disabled=!1}},created:function(){var e=JSON.parse(localStorage.getItem("userinfo"));this.phone=e.phone},mounted:function(){}},s=i,u=(n("5172"),n("2877")),l=Object(u["a"])(s,r,a,!1,null,null,null);t["default"]=l.exports},a481:function(e,t,n){"use strict";var r=n("cb7c"),a=n("4bf8"),o=n("9def"),c=n("4588"),i=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,(function(e,t,n,v){return[function(r,a){var o=e(this),c=void 0==r?void 0:r[t];return void 0!==c?c.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=v(n,e,this,t);if(a.done)return a.value;var f=r(e),p=String(this),h="function"===typeof t;h||(t=String(t));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}var m=[];while(1){var y=s(f,p);if(null===y)break;if(m.push(y),!g)break;var w=String(y[0]);""===w&&(f.lastIndex=i(p,o(f.lastIndex),x))}for(var k="",$=0,S=0;S<m.length;S++){y=m[S];for(var R=String(y[0]),E=u(l(c(y.index),p.length),0),C=[],_=1;_<y.length;_++)C.push(d(y[_]));var A=y.groups;if(h){var j=[R].concat(C,E,p);void 0!==A&&j.push(A);var I=String(t.apply(void 0,j))}else I=b(R,p,E,C,A,t);E>=$&&(k+=p.slice($,E)+I,$=E+R.length)}return k+p.slice($)}];function b(e,t,r,o,c,i){var s=r+e.length,u=o.length,l=h;return void 0!==c&&(c=a(c),l=p),n.call(i,l,(function(n,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":i=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):n}i=o[l-1]}return void 0===i?"":i}))}}))},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d1b0:function(e,t,n){},f98f:function(e,t,n){"use strict";n("a481");t["a"]={trim:function(e){return e.replace(/^\s*|\s*$/g,"")},checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)}}}}]);
//# sourceMappingURL=chunk-7c3e1143.520a17b8.js.map