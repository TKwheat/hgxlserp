(self["webpackChunkgitpage"]=self["webpackChunkgitpage"]||[]).push([[474],{1819:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-xxl py-5 wow fadeInUp",attrs:{"data-wow-delay":"0.1s"}},[r("div",{staticClass:"container text-center py-5"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-6"},[r("i",{staticClass:"fa fa-key display-1 text-primary"}),r("h1",{staticClass:"mb-4"},[t._v("点击下方按钮进行授权")]),r("p",{staticClass:"mb-4"},[t._v("感觉您的信任，在授权过程中如遇到困难，请及时联系我们的客服人员。")]),r("a",{staticClass:"btn btn-primary rounded-pill py-3 px-5",on:{click:t.toPermission}},[t._v("进行授权")])])])])])])},o=[];r(1539);function a(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,u,"next",t)}function u(t){a(i,n,o,s,u,"throw",t)}s(void 0)}))}}r(8975);var s=r(4859),u=r.n(s),c={data:function(){return{}},methods:{created:function(){this.init()},init:function(){},toPermission:function(){var t=this;return i(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=window.location.href,n={permissionUrl:r},e.next=4,t.$axios.Post(u().getpermission,n);case 4:o=e.sent,console.log(o);case 6:case"end":return e.stop()}}),e)})))()}}},l=c,d=r(1001),f=(0,d.Z)(l,n,o,!1,null,null,null),p=f.exports},5837:function(t,e,r){var n=r(2109),o=r(7854);n({global:!0},{globalThis:o})},2443:function(t,e,r){var n=r(7235);n("asyncIterator")},8975:function(t,e,r){t=r.nmd(t);var n=r(7964)["default"];r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(2443),r(3680),r(3706),r(2703),r(489),r(8309),r(1703),r(4747),r(7042),r(5837);var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new D(n||[]);return a._invoke=_(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var f="suspendedStart",p="suspendedYield",g="executing",h="completed",y={};function m(){}function v(){}function w(){}var b={};c(b,i,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(R([])));x&&x!==r&&o.call(x,i)&&(b=x);var I=w.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,i,s,u){var c=d(t[a],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===n(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var a;function i(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}this._invoke=i}function _(t,e,r){var n=f;return function(o,a){if(n===g)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return T()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=g;var u=d(t,e,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=d(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function R(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=w,c(I,"constructor",w),c(w,"constructor",v),v.displayName=c(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,u,"GeneratorFunction")),t.prototype=Object.create(I),t},t.awrap=function(t){return{__await:t}},E(k.prototype),c(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(I),c(I,u,"Generator"),c(I,i,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=o}catch(a){"object"===("undefined"===typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},4859:function(t){var e="/";t.exports={LoginPy:e+"sys/login",regist:e+"sys/regist",Nav:e+"sys/menu/nav",Getmeun:e+"sys/menu/getMenuList",GetSysMenuList:e+"sys/menu/getMenuList",AddMenuInfo:e+"sys/menu/getAddMenuInfo",AddMenuSave:e+"sys/menu/save",GetMenuIById:e+"sys/menu/getMenuIById",UpdateMenuInfo:e+"sys/menu/updateMenuInfo",RemoveMenu:e+"sys/menu/remove",GetSysDeptList:e+"sys/sysDept/getSysDeptList",AddDeptInfo:e+"sys/sysDept/getAddDeptInfo",AddDeptSave:e+"sys/sysDept/save",GetDeptInfoById:e+"sys/sysDept/getDeptInfoById",UpdateDeptInfo:e+"sys/sysDept/updateDeptInfo",DeptRemove:e+"sys/sysDept/remove",GetRoleList:e+"sys/role/getRoleList",Save:e+"sys/role/save",GetRoleInfoById:e+"sys/role/getUserInfoById",UpdateRoleInfo:e+"sys/role/updateUserInfo",RoleRemove:e+"sys/role/remove",GetUserInfoList:e+"sys/staff/getStaffInfoList",AddUserInfo:e+"sys/staff/getAddStaffInfo",addUserSave:e+"sys/staff/save",GetUserInfoById:e+"sys/staff/getStaffInfoById",UpdateUserInfo:e+"sys/staff/updateStaffInfo",UserRemove:e+"sys/staff/remove",ResetPwd:e+"sys/staff/resetPwd",updateusersetting:e+"sys/staff/updateusersetting",amzLogin:e+"amazon/amzLogin",definitions:e+"amazon/definitions",getlisitem:e+"amazon/getlisitem",putlisting:e+"amazon/putlisting",createfeeddocument:e+"amazon/createfeeddocument",getfeedbyid:e+"amazon/getfeedbyid",createdestination:e+"amazon/createdestination",creatbasexml:e+"amazon/creatbasexml",creatPTTree:e+"amazon/creatPTTree",getPtTree:e+"amazon/getPtTree",addgood:e+"good/addgood",uploadimg:e+"qiniu/uploadimg",savegood:e+"good/savegood",savegoodimg:e+"good/savegoodimg",getusergoodlist:e+"good/getusergoodlist",getgoodimg:e+"good/getgoodimg",getptnode:e+"good/getptnode",getgoodbyid:e+"good/getgoodbyid",translate:e+"good/translate",translateallinfo:e+"good/translateallinfo",delgood:e+"good/delgood",commitmoremod:e+"good/commitmoremod",getrecyclegood:e+"good/getrecyclegood",commitdelgood:e+"good/commitdelgood",recovergood:e+"good/recovergood",getglobaldata:e+"global/getdata",getcountrydata:e+"global/getcountrydata",createupcpackage:e+"upc/createupcpackage",getallupcpackage:e+"upc/getallupcpackage",getupcbyupackage:e+"upc/getupcbyupackage",getnewupc:e+"upc/getnewupc",getnewupcs:e+"upc/getnewupcs",creattemplate:e+"uploadmanage/creattemplate",gettemplate:e+"uploadmanage/gettemplate",modtemplate:e+"uploadmanage/modtemplate",commitupload:e+"uploadmanage/commitupload",getuploadlist:e+"uploadmanage/getuploadlist",updatestatus:e+"uploadmanage/updatestatus",deltemplate:e+"uploadmanage/deltemplate",addtemplatetype:e+"uploadmanage/addtemplatetype",gettemplatetype:e+"uploadmanage/gettemplatetype",modtemplatetype:e+"uploadmanage/modtemplatetype",deltemplatetype:e+"uploadmanage/deltemplatetype",getpermission:e+"shop/getpermission"}}}]);