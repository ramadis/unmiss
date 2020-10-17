!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("unmiss",[],t):"object"==typeof exports?exports.unmiss=t():e.unmiss=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=21)}([function(e,t){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return o[t];o[t]=n}},function(e,t,n){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=[];/*!
 * Chai version
 */
t.version="4.1.1",/*!
 * Assertion Error
 */
t.AssertionError=n(13);/*!
 * Utils for plugins (not exported)
 */
var r=n(23);t.use=function(e){return~o.indexOf(e)||(e(t,r),o.push(e)),t},/*!
 * Utility Functions
 */
t.util=r;/*!
 * Configuration
 */
var i=n(2);t.config=i;/*!
 * Primary `Assertion` prototype
 */
var s=n(41);t.use(s);/*!
 * Core Assertions
 */
var a=n(42);t.use(a);/*!
 * Expect interface
 */
var c=n(43);t.use(c);/*!
 * Should interface
 */
var u=n(44);t.use(u);/*!
 * Assert interface
 */
var f=n(45);t.use(f)},function(e,t){e.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","inspect","toJSON"]}},function(e,t){/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));t.__flags||(t.__flags=Object.create(null)),n=3!==arguments.length||n;for(var r in o)(n||"object"!==r&&"ssfi"!==r&&"lockSsfi"!==r&&"message"!=r)&&(t.__flags[r]=o[r])}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addMethodMissing=t.withMethodMissing=t.MethodMissingClass=void 0;var r=n(9),i=o(r),s=n(10),a=o(s),c=n(11),u=o(c);t.MethodMissingClass=i.default,t.withMethodMissing=a.default,t.addMethodMissing=u.default},function(e,t,n){function o(e,t,n,o){return r({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===n?2:n)}function r(e,n,o){if(n&&"function"==typeof n.inspect&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var b=n.inspect(o,e);return"string"!=typeof b&&(b=r(e,b,o)),b}var v=i(e,n);if(v)return v;if(x(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion){return(new XMLSerializer).serializeToString(n)}var M=document.createElementNS("http://www.w3.org/1999/xhtml","_");M.appendChild(n.cloneNode(!1));var O=M.innerHTML.replace("><",">"+n.innerHTML+"<");return M.innerHTML="",O}catch(e){}}var j,P,S=w(n),k=e.showHidden?m(n):S;if(0===k.length||y(n)&&(1===k.length&&"stack"===k[0]||2===k.length&&"description"===k[0]&&"stack"===k[1])){if("function"==typeof n)return j=g(n),P=j?": "+j:"",e.stylize("[Function"+P+"]","special");if(p(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(d(n))return e.stylize(Date.prototype.toUTCString.call(n),"date");if(y(n))return s(n)}var N="",E=!1,A=!1,D=["{","}"];if(l(n)&&(A=!0,D=["[","]"]),h(n)&&(E=!0,D=["[","]"]),"function"==typeof n&&(j=g(n),P=j?": "+j:"",N=" [Function"+P+"]"),p(n)&&(N=" "+RegExp.prototype.toString.call(n)),d(n)&&(N=" "+Date.prototype.toUTCString.call(n)),y(n))return s(n);if(0===k.length&&(!E||0==n.length))return D[0]+N+D[1];if(o<0)return p(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var T;if(E)T=a(e,n,o,S,k);else{if(A)return c(n);T=k.map(function(t){return u(e,n,o,S,t,E)})}return e.seen.pop(),f(T,N,D)}function i(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":return 0===t&&1/t==-1/0?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean");case"symbol":return e.stylize(t.toString(),"symbol")}if(null===t)return e.stylize("null","null")}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,n,o,r){for(var i=[],s=0,a=t.length;s<a;++s)Object.prototype.hasOwnProperty.call(t,String(s))?i.push(u(e,t,n,o,String(s),!0)):i.push("");return r.forEach(function(r){r.match(/^\d+$/)||i.push(u(e,t,n,o,r,!0))}),i}function c(e){for(var t="[ ",n=0;n<e.length;++n){if(t.length>=v.truncateThreshold-7){t+="...";break}t+=e[n]+", "}return t+=" ]",-1!==t.indexOf(",  ]")&&(t=t.replace(",  ]"," ]")),t}function u(e,t,n,o,i,s){var a,c,u=Object.getOwnPropertyDescriptor(t,i);if(u&&(u.get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special"))),o.indexOf(i)<0&&(a="["+i+"]"),c||(e.seen.indexOf(t[i])<0?(c=null===n?r(e,t[i],null):r(e,t[i],n-1),c.indexOf("\n")>-1&&(c=s?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n"))):c=e.stylize("[Circular]","special")),void 0===a){if(s&&i.match(/^\d+$/))return c;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function f(e,t,n){var o=0;return e.reduce(function(e,t){return o++,t.indexOf("\n")>=0&&o++,e+t.length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function l(e){return"object"==typeof e&&/\w+Array]$/.test(b(e))}function h(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===b(e)}function p(e){return"object"==typeof e&&"[object RegExp]"===b(e)}function d(e){return"object"==typeof e&&"[object Date]"===b(e)}function y(e){return"object"==typeof e&&"[object Error]"===b(e)}function b(e){return Object.prototype.toString.call(e)}var g=n(17),m=n(18),w=n(28),v=n(2);e.exports=o;var x=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&"nodeType"in e&&1===e.nodeType&&"string"==typeof e.nodeName}},function(e,t,n){var o=n(2);/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(){return o.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},function(e,t,n){var o=(n(2),Object.getOwnPropertyDescriptor(function(){},"length"));/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){return o.configurable?(Object.defineProperty(e,"length",{get:function(){if(n)throw Error("Invalid Chai property: "+t+'.length. Due to a compatibility issue, "length" cannot directly follow "'+t+'". Use "'+t+'.lengthOf" instead.');throw Error("Invalid Chai property: "+t+'.length. See docs for proper usage of "'+t+'".')}}),e):e}},function(e,t,n){function o(e,t,n){if(!n){n=[];for(var r=0;r<=e.length;r++)n[r]=[]}return n[e.length]&&n[e.length][t.length]||(0===e.length||0===t.length?n[e.length][t.length]=Math.max(e.length,t.length):n[e.length][t.length]=Math.min(o(e.slice(0,-1),t,n)+1,o(e,t.slice(0,-1),n)+1,o(e.slice(0,-1),t.slice(0,-1),n)+(e.slice(-1)===t.slice(-1)?0:1))),n[e.length][t.length]}var r=n(2),i=n(0),s=n(18),a=n(6),c=["__flags","__methods","_obj","assert"];e.exports=function(e,t){return a()?new Proxy(e,{get:function e(n,a){if("string"==typeof a&&-1===r.proxyExcludedKeys.indexOf(a)&&!Reflect.has(n,a)){if(t)throw Error("Invalid Chai property: "+t+"."+a+'. See docs for proper usage of "'+t+'".');var u=s(n).filter(function(e){return!Object.prototype.hasOwnProperty(e)&&-1===c.indexOf(e)}).sort(function(e,t){return o(a,e)-o(a,t)});throw u.length&&o(u[0],a)<4?Error("Invalid Chai property: "+a+'. Did you mean "'+u[0]+'"?'):Error("Invalid Chai property: "+a)}return-1!==c.indexOf(a)||i(n,"lockSsfi")||i(n,"ssfi",e),Reflect.get(n,a)}}):e}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e);var t={get:this._handleMethodMissing};return new Proxy(this,t)}return r(e,[{key:"_handleMethodMissing",value:function(e,t){var n=e[t];if(t in e||"methodMissing"===t){return"function"==typeof n?function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return n.call.apply(n,[e].concat(o))}:e[t]}return function(){for(var n,o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=this.methodMissing).call.apply(n,[e,t].concat(r))}}},{key:"methodMissing",value:function(e){console.log('Method "'+e+'" does not exist. Please override methodMissing method to add functionality.')}}]),e}();t.default=i},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(e){function t(){var e,n;o(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];var c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),u={get:c._handleMethodMissing};return n=new Proxy(c,u),r(c,n)}return i(t,e),a(t,[{key:"_handleMethodMissing",value:function(e,t){var n=e[t];if(t in e||"methodMissing"===t){return"function"==typeof n?function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return n.call.apply(n,[e].concat(o))}:e[t]}return function(){for(var n,o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=this.methodMissing).call.apply(n,[e,t].concat(r))}}}]),t}(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=s},function(e,t,n){"use strict";function o(e){var t={get:function(e,t,n){return Reflect.has(e,t)||"methodMissing"===t?Reflect.get(e,t,n):function(){for(var n,o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Reflect.get(e,"methodMissing")).call.apply(n,[e,t].concat(r))}}};return new Proxy(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){e.exports=n(1)},function(e,t){/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){function e(e,n){Object.keys(n).forEach(function(o){~t.indexOf(o)||(e[o]=n[o])})}var t=[].slice.call(arguments);return function(){for(var t=[].slice.call(arguments),n=0,o={};n<t.length;n++)e(o,t[n]);return o}}function o(e,t,r){var i=n("name","message","stack","constructor","toJSON"),s=i(t||{});this.message=e||"Unspecified AssertionError",this.showDiff=!1;for(var a in s)this[a]=s[a];if(r=r||o,Error.captureStackTrace)Error.captureStackTrace(this,r);else try{throw new Error}catch(e){this.stack=e.stack}}/*!
 * Primary Exports
 */
e.exports=o,/*!
 * Inherit from Error.prototype
 */
o.prototype=Object.create(Error.prototype),/*!
 * Statically set name
 */
o.prototype.name="AssertionError",/*!
 * Ensure correct constructor
 */
o.prototype.constructor=o,o.prototype.toJSON=function(e){var t=n("constructor","toJSON","stack"),o=t({name:this.name},this);return!1!==e&&this.stack&&(o.stack=this.stack),o}},function(e,t,n){(function(t){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===l||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&e[Symbol.toStringTag];if("string"==typeof r)return r;var f=Object.getPrototypeOf(e);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":n&&f===Promise.prototype?"Promise":s&&f===Set.prototype?"Set":i&&f===Map.prototype?"Map":c&&f===WeakSet.prototype?"WeakSet":a&&f===WeakMap.prototype?"WeakMap":u&&f===DataView.prototype?"DataView":i&&f===y?"Map Iterator":s&&f===d?"Set Iterator":b&&f===g?"Array Iterator":m&&f===w?"String Iterator":null===f?"Object":Object.prototype.toString.call(e).slice(v,x)}var n="function"==typeof Promise,o="object"==typeof self?self:t,r="undefined"!=typeof Symbol,i="undefined"!=typeof Map,s="undefined"!=typeof Set,a="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,f=r&&void 0!==Symbol.iterator,l=r&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,p=i&&"function"==typeof Map.prototype.entries,d=h&&Object.getPrototypeOf((new Set).entries()),y=p&&Object.getPrototypeOf((new Map).entries()),b=f&&"function"==typeof Array.prototype[Symbol.iterator],g=b&&Object.getPrototypeOf([][Symbol.iterator]()),m=f&&"function"==typeof String.prototype[Symbol.iterator],w=m&&Object.getPrototypeOf(""[Symbol.iterator]()),v=8,x=-1;return e})}).call(t,n(15))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){return t.length>4?t[4]:e._obj}},function(e,t,n){"use strict";function o(e){if("function"!=typeof e)return null;var t="";if(void 0===Function.prototype.name&&void 0===e.name){var n=r.call(e).match(i);n&&(t=n[1])}else t=e.name;return t}var r=Function.prototype.toString,i=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;e.exports=o},function(e,t){/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){function t(e){-1===n.indexOf(e)&&n.push(e)}for(var n=Object.getOwnPropertyNames(e),o=Object.getPrototypeOf(e);null!==o;)Object.getOwnPropertyNames(o).forEach(t),o=Object.getPrototypeOf(o);return n}},function(e,t,n){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(5),r=n(2);e.exports=function(e){var t=o(e),n=Object.prototype.toString.call(e);if(r.truncateThreshold&&t.length>=r.truncateThreshold){if("[object Function]"===n)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+e.length+") ]";if("[object Object]"===n){var i=Object.keys(e);return"{ Object ("+(i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return t}return t}},function(e,t){/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(22),i=(o(r),n(46)),s=(o(i),n(47));o(s)},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(12),c=n(4);describe("MethodMissingClass",function(){var e=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.dummyMember=!0,e.falseMember=!1,e}return i(t,e),s(t,[{key:"methodMissing",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return{name:e,args:n}}},{key:"dummyMethod",value:function(){return!0}}]),t}(c.MethodMissingClass);it("should create an instance",function(){var t=new e;(0,a.expect)(t).to.exist}),it("should access its own methods",function(){var t=new e;(0,a.expect)(t.dummyMethod()).to.equal(!0)}),it("should access its own members",function(){var t=new e;(0,a.expect)(t.dummyMember).to.equal(!0)}),it("should call method missing",function(){var t=new e;(0,a.expect)(t.inexistentMethod()).to.exist}),it("should access the method name from method missing",function(){var t=new e,n=t.inexistentMethod();(0,a.expect)(n.name).to.equal("inexistentMethod")}),it("should access the method args from method missing",function(){var t=new e,n=t.inexistentMethod(!0);(0,a.expect)(n.args[0]).to.equal(!0)}),it("should get every method args from method missing",function(){var t=new e,n=t.inexistentMethod(1,2,3,4);(0,a.expect)(n.args.length).to.equal(4)}),it("should return falsey setted members as they are",function(){var t=new e;(0,a.expect)(t.falseMember).to.equal(!1)})})},function(e,t,n){/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var o=n(24);/*!
 * test utility
 */
t.test=n(25),/*!
 * type utility
 */
t.type=n(14),/*!
 * expectTypes utility
 */
t.expectTypes=n(26),/*!
 * message utility
 */
t.getMessage=n(27),/*!
 * actual utility
 */
t.getActual=n(16),/*!
 * Inspect util
 */
t.inspect=n(5),/*!
 * Object Display util
 */
t.objDisplay=n(19),/*!
 * Flag utility
 */
t.flag=n(0),/*!
 * Flag transferring utility
 */
t.transferFlags=n(3),/*!
 * Deep equal utility
 */
t.eql=n(29),/*!
 * Deep path info
 */
t.getPathInfo=o.getPathInfo,/*!
 * Check if a property exists
 */
t.hasProperty=o.hasProperty,/*!
 * Function name
 */
t.getName=n(17),/*!
 * add Property
 */
t.addProperty=n(31),/*!
 * add Method
 */
t.addMethod=n(32),/*!
 * overwrite Property
 */
t.overwriteProperty=n(33),/*!
 * overwrite Method
 */
t.overwriteMethod=n(34),/*!
 * Add a chainable method
 */
t.addChainableMethod=n(35),/*!
 * Overwrite chainable method
 */
t.overwriteChainableMethod=n(36),/*!
 * Compare by inspect method
 */
t.compareByInspect=n(37),/*!
 * Get own enumerable property symbols method
 */
t.getOwnEnumerablePropertySymbols=n(20),/*!
 * Get own enumerable properties method
 */
t.getOwnEnumerableProperties=n(38),/*!
 * Checks error against a given set of criteria
 */
t.checkError=n(39),/*!
 * Proxify util
 */
t.proxify=n(8),/*!
 * addLengthGuard util
 */
t.addLengthGuard=n(7),/*!
 * isProxyEnabled helper
 */
t.isProxyEnabled=n(6),/*!
 * isNaN method
 */
t.isNaN=n(40)},function(e,t,n){"use strict";function o(e,t){return void 0!==e&&null!==e&&t in Object(e)}function r(e){return e.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e){var t=/^\[(\d+)\]$/,n=t.exec(e);return n?{i:parseFloat(n[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}})}function i(e,t,n){var o=e,r=null;n=void 0===n?t.length:n;for(var i=0;i<n;i++){var s=t[i];o&&(o=void 0===s.p?o[s.i]:o[s.p],i===n-1&&(r=o))}return r}function s(e,t,n){for(var o=e,r=n.length,i=null,s=0;s<r;s++){var a=null,c=null;if(i=n[s],s===r-1)a=void 0===i.p?i.i:i.p,o[a]=t;else if(void 0!==i.p&&o[i.p])o=o[i.p];else if(void 0!==i.i&&o[i.i])o=o[i.i];else{var u=n[s+1];a=void 0===i.p?i.i:i.p,c=void 0===u.p?[]:{},o[a]=c,o=o[a]}}}function a(e,t){var n=r(t),s=n[n.length-1],a={parent:n.length>1?i(e,n,n.length-1):e,name:s.p||s.i,value:i(e,n)};return a.exists=o(a.parent,a.name),a}function c(e,t){return a(e,t).value}function u(e,t,n){return s(e,n,r(t)),e}e.exports={hasProperty:o,getPathInfo:a,getPathValue:c,setPathValue:u}},function(e,t,n){/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(0);e.exports=function(e,t){var n=o(e,"negate"),r=t[0];return n?!r:r}},function(e,t,n){/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(13),r=n(0),i=n(14);e.exports=function(e,t){var n=r(e,"message"),s=r(e,"ssfi");n=n?n+": ":"",e=r(e,"object"),t=t.map(function(e){return e.toLowerCase()}),t.sort();var a=t.map(function(e,n){var o=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a";return(t.length>1&&n===t.length-1?"or ":"")+o+" "+e}).join(", "),c=i(e).toLowerCase();if(!t.some(function(e){return c===e}))throw new o(n+"object tested must be "+a+", but "+c+" given",void 0,s)}},function(e,t,n){/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(0),r=n(16),i=(n(5),n(19));e.exports=function(e,t){var n=o(e,"negate"),s=o(e,"object"),a=t[3],c=r(e,t),u=n?t[2]:t[1],f=o(e,"message");return"function"==typeof u&&(u=u()),u=u||"",u=u.replace(/#\{this\}/g,function(){return i(s)}).replace(/#\{act\}/g,function(){return i(c)}).replace(/#\{exp\}/g,function(){return i(a)}),f?f+": "+u:u}},function(e,t){/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=[];for(var n in e)t.push(n);return t}},function(e,t,n){"use strict";function o(){this.clear()}/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function r(e,t,n){if(!n||v(e)||v(t))return null;var o=n.get(e);if(o){var r=o.get(t);if("boolean"==typeof r)return r}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function i(e,t,n,o){if(n&&!v(e)&&!v(t)){var r=n.get(e);r?r.set(t,o):(r=new M,r.set(t,o),n.set(e,r))}}function s(e,t,n){if(n&&n.comparator)return c(e,t,n);var o=a(e,t);return null!==o?o:c(e,t,n)}function a(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t||!v(e)&&!v(t)&&null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function c(e,t,n){n=n||{},n.memoize=!1!==n.memoize&&(n.memoize||new M);var o=n&&n.comparator,s=r(e,t,n.memoize);if(null!==s)return s;var c=r(t,e,n.memoize);if(null!==c)return c;if(o){var f=o(e,t);if(!1===f||!0===f)return i(e,t,n.memoize,f),f;var l=a(e,t);if(null!==l)return l}var h=x(e);if(h!==x(t))return i(e,t,n.memoize,!1),!1;i(e,t,n.memoize,!0);var p=u(e,t,h,n);return i(e,t,n.memoize,p),p}function u(e,t,n,o){switch(n){case"String":case"Number":case"Boolean":case"Date":return s(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return e===t;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return h(e,t,o);case"RegExp":return f(e,t);case"Generator":return p(e,t,o);case"DataView":return h(new Uint8Array(e.buffer),new Uint8Array(t.buffer),o);case"ArrayBuffer":return h(new Uint8Array(e),new Uint8Array(t),o);case"Set":case"Map":return l(e,t,o);default:return w(e,t,o)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function f(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function l(e,t,n){if(e.size!==t.size)return!1;if(0===e.size)return!0;var o=[],r=[];return e.forEach(function(e,t){o.push([e,t])}),t.forEach(function(e,t){r.push([e,t])}),h(o.sort(),r.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function h(e,t,n){var o=e.length;if(o!==t.length)return!1;if(0===o)return!0;for(var r=-1;++r<o;)if(!1===s(e[r],t[r],n))return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function p(e,t,n){return h(b(e),b(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function d(e){return"undefined"!=typeof Symbol&&"object"==typeof e&&void 0!==Symbol.iterator&&"function"==typeof e[Symbol.iterator]}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function y(e){if(d(e))try{return b(e[Symbol.iterator]())}catch(e){return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function b(e){for(var t=e.next(),n=[t.value];!1===t.done;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function g(e){var t=[];for(var n in e)t.push(n);return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function m(e,t,n,o){var r=n.length;if(0===r)return!0;for(var i=0;i<r;i+=1)if(!1===s(e[n[i]],t[n[i]],o))return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function w(e,t,n){var o=g(e),r=g(t);if(o.length&&o.length===r.length)return o.sort(),r.sort(),!1!==h(o,r)&&m(e,t,o,n);var i=y(e),s=y(t);return i.length&&i.length===s.length?(i.sort(),s.sort(),h(i,s,n)):0===o.length&&0===i.length&&0===r.length&&0===s.length}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function v(e){return null===e||"object"!=typeof e}/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var x=n(30);o.prototype={clear:function(){return this.keys=[],this.values=[],this},set:function(e,t){var n=this.keys.indexOf(e);return n>=0?this.values[n]=t:(this.keys.push(e),this.values.push(t)),this},get:function(e){return this.values[this.keys.indexOf(e)]},delete:function(e){var t=this.keys.indexOf(e);return t>=0&&(this.values=this.values.slice(0,t).concat(this.values.slice(t+1)),this.keys=this.keys.slice(0,t).concat(this.keys.slice(t+1))),this}};var M=null;M="function"==typeof WeakMap?WeakMap:o,/*!
 * Primary Export
 */
e.exports=s,e.exports.MemoizeMap=M},function(e,t,n){"use strict";(function(t){var n="function"==typeof Object.getPrototypeOf,o="function"==typeof Promise,r="undefined"!=typeof window?window:void 0!==t?t:self,i="location"in r&&"document"in r,s="undefined"!=typeof HTMLElement,a="function"==typeof Array.isArray,c="undefined"!=typeof Symbol,u="undefined"!=typeof Map,f="undefined"!=typeof Set,l="undefined"!=typeof WeakMap,h="undefined"!=typeof WeakSet,p="undefined"!=typeof DataView,d=c&&void 0!==Symbol.iterator,y=c&&void 0!==Symbol.toStringTag,b=f&&"function"==typeof Set.prototype.entries,g=u&&"function"==typeof Map.prototype.entries,m=n&&b&&Object.getPrototypeOf((new Set).entries()),w=n&&g&&Object.getPrototypeOf((new Map).entries()),v=d&&"function"==typeof Array.prototype[Symbol.iterator],x=v&&Object.getPrototypeOf([][Symbol.iterator]()),M=d&&"function"==typeof Array.prototype[Symbol.iterator],O=M&&Object.getPrototypeOf(""[Symbol.iterator]());e.exports=function(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===r)return"global";if(a&&Array.isArray(e))return"Array";if(i){if(e===r.location)return"Location";if(e===r.document)return"Document";if(e===(r.navigator||{}).mimeTypes)return"MimeTypeArray";if(e===(r.navigator||{}).plugins)return"PluginArray";if(s&&e instanceof HTMLElement&&"BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if(s&&e instanceof HTMLElement&&"TD"===e.tagName)return"HTMLTableDataCellElement";if(s&&e instanceof HTMLElement&&"TH"===e.tagName)return"HTMLTableHeaderCellElement"}var c=y&&e[Symbol.toStringTag];if("string"==typeof c)return c;if(n){var d=Object.getPrototypeOf(e);if(d===RegExp.prototype)return"RegExp";if(d===Date.prototype)return"Date";if(o&&d===Promise.prototype)return"Promise";if(f&&d===Set.prototype)return"Set";if(u&&d===Map.prototype)return"Map";if(h&&d===WeakSet.prototype)return"WeakSet";if(l&&d===WeakMap.prototype)return"WeakMap";if(p&&d===DataView.prototype)return"DataView";if(u&&d===w)return"Map Iterator";if(f&&d===m)return"Set Iterator";if(v&&d===x)return"Array Iterator";if(M&&d===O)return"String Iterator";if(null===d)return"Object"}return Object.prototype.toString.call(e).slice(8,-1)},e.exports.typeDetect=e.exports}).call(t,n(15))},function(e,t,n){/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(1),r=n(0),i=n(6),s=n(3);e.exports=function(e,t,n){n=void 0===n?new Function:n,Object.defineProperty(e,t,{get:function e(){i()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=n.call(this);if(void 0!==t)return t;var a=new o.Assertion;return s(this,a),a},configurable:!0})}},function(e,t,n){/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(7),r=n(1),i=n(0),s=n(8),a=n(3);e.exports=function(e,t,n){var c=function(){i(this,"lockSsfi")||i(this,"ssfi",c);var e=n.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};o(c,t,!1),e[t]=s(c,t)}},function(e,t,n){/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(1),r=n(0),i=n(6),s=n(3);e.exports=function(e,t,n){var a=Object.getOwnPropertyDescriptor(e,t),c=function(){};a&&"function"==typeof a.get&&(c=a.get),Object.defineProperty(e,t,{get:function e(){i()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=r(this,"lockSsfi");r(this,"lockSsfi",!0);var a=n(c).call(this);if(r(this,"lockSsfi",t),void 0!==a)return a;var u=new o.Assertion;return s(this,u),u},configurable:!0})}},function(e,t,n){/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(7),r=n(1),i=n(0),s=n(8),a=n(3);e.exports=function(e,t,n){var c=e[t],u=function(){throw new Error(t+" is not a function")};c&&"function"==typeof c&&(u=c);var f=function(){i(this,"lockSsfi")||i(this,"ssfi",f);var e=i(this,"lockSsfi");i(this,"lockSsfi",!0);var t=n(u).apply(this,arguments);if(i(this,"lockSsfi",e),void 0!==t)return t;var o=new r.Assertion;return a(this,o),o};o(f,t,!1),e[t]=s(f,t)}},function(e,t,n){/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(7),r=n(1),i=n(0),s=n(8),a=n(3),c="function"==typeof Object.setPrototypeOf,u=function(){},f=Object.getOwnPropertyNames(u).filter(function(e){var t=Object.getOwnPropertyDescriptor(u,e);return"object"!=typeof t||!t.configurable}),l=Function.prototype.call,h=Function.prototype.apply;e.exports=function(e,t,n,u){"function"!=typeof u&&(u=function(){});var p={method:n,chainingBehavior:u};e.__methods||(e.__methods={}),e.__methods[t]=p,Object.defineProperty(e,t,{get:function(){p.chainingBehavior.call(this);var n=function(){i(this,"lockSsfi")||i(this,"ssfi",n);var e=p.method.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};if(o(n,t,!0),c){var u=Object.create(this);u.call=l,u.apply=h,Object.setPrototypeOf(n,u)}else{Object.getOwnPropertyNames(e).forEach(function(t){if(-1===f.indexOf(t)){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o)}})}return a(this,n),s(n)},configurable:!0})}},function(e,t,n){/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(1),r=n(3);e.exports=function(e,t,n,i){var s=e.__methods[t],a=s.chainingBehavior;s.chainingBehavior=function(){var e=i(a).call(this);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t};var c=s.method;s.method=function(){var e=n(c).apply(this,arguments);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t}}},function(e,t,n){/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(5);e.exports=function(e,t){return o(e)<o(t)?-1:1}},function(e,t,n){/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(20);e.exports=function(e){return Object.keys(e).concat(o(e))}},function(e,t,n){"use strict";function o(e,t){return t instanceof Error&&e===t}function r(e,t){return t instanceof Error?e.constructor===t.constructor||e instanceof t.constructor:(t.prototype instanceof Error||t===Error)&&(e.constructor===t||e instanceof t)}function i(e,t){var n="string"==typeof e?e:e.message;return t instanceof RegExp?t.test(n):"string"==typeof t&&-1!==n.indexOf(t)}function s(e){var t="";if(void 0===e.name){var n=String(e).match(u);n&&(t=n[1])}else t=e.name;return t}function a(e){var t=e;return e instanceof Error?t=s(e.constructor):"function"==typeof e&&(t=s(e).trim()||s(new e)),t}function c(e){var t="";return e&&e.message?t=e.message:"string"==typeof e&&(t=e),t}var u=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;e.exports={compatibleInstance:o,compatibleConstructor:r,compatibleMessage:i,getMessage:c,getConstructorName:a}},function(e,t){/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function n(e){return e!==e}e.exports=Number.isNaN||n},function(e,t,n){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(2);e.exports=function(e,t){/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
function n(e,o,r,s){return i(this,"ssfi",r||n),i(this,"lockSsfi",s),i(this,"object",e),i(this,"message",o),t.proxify(this)}/*!
   * Module dependencies.
   */
var r=e.AssertionError,i=t.flag;/*!
   * Module export.
   */
e.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack=e}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff=e}}),n.addProperty=function(e,n){t.addProperty(this.prototype,e,n)},n.addMethod=function(e,n){t.addMethod(this.prototype,e,n)},n.addChainableMethod=function(e,n,o){t.addChainableMethod(this.prototype,e,n,o)},n.overwriteProperty=function(e,n){t.overwriteProperty(this.prototype,e,n)},n.overwriteMethod=function(e,n){t.overwriteMethod(this.prototype,e,n)},n.overwriteChainableMethod=function(e,n,o){t.overwriteChainableMethod(this.prototype,e,n,o)},n.prototype.assert=function(e,n,s,a,c,u){var f=t.test(this,arguments);if(!1!==u&&(u=!0),void 0===a&&void 0===c&&(u=!1),!0!==o.showDiff&&(u=!1),!f){n=t.getMessage(this,arguments);var l=t.getActual(this,arguments);throw new r(n,{actual:l,expected:a,showDiff:u},o.includeStack?this.assert:i(this,"ssfi"))}},/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return i(this,"object")},set:function(e){i(this,"object",e)}})}},function(e,t){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){function n(e,n){n&&q(this,"message",n),e=e.toLowerCase();var o=q(this,"object"),r=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(o).toLowerCase(),"expected #{this} to be "+r+e,"expected #{this} not to be "+r+e)}function o(e,n){return t.isNaN(e)&&t.isNaN(n)||e===n}function r(){q(this,"contains",!0)}function i(e,n){n&&q(this,"message",n);var r=q(this,"object"),i=t.type(r).toLowerCase(),s=q(this,"message"),a=q(this,"negate"),c=q(this,"ssfi"),u=q(this,"deep"),f=u?"deep ":"";s=s?s+": ":"";var l=!1;switch(i){case"string":l=-1!==r.indexOf(e);break;case"weakset":if(u)throw new T(s+"unable to use .deep.include with WeakSet",void 0,c);l=r.has(e);break;case"map":var h=u?t.eql:o;r.forEach(function(t){l=l||h(t,e)});break;case"set":u?r.forEach(function(n){l=l||t.eql(n,e)}):l=r.has(e);break;case"array":l=u?r.some(function(n){return t.eql(n,e)}):-1!==r.indexOf(e);break;default:if(e!==Object(e))throw new T(s+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+i+" given",void 0,c);var p=Object.keys(e),d=null,y=0;if(p.forEach(function(n){var o=new D(r);if(t.transferFlags(this,o,!0),q(o,"lockSsfi",!0),!a||1===p.length)return void o.property(n,e[n]);try{o.property(n,e[n])}catch(e){if(!t.checkError.compatibleConstructor(e,T))throw e;null===d&&(d=e),y++}},this),a&&p.length>1&&y===p.length)throw d;return}this.assert(l,"expected #{this} to "+f+"include "+t.inspect(e),"expected #{this} to not "+f+"include "+t.inspect(e))}function s(){var e=q(this,"object"),n=t.type(e);this.assert("Arguments"===n,"expected #{this} to be arguments but got "+n,"expected #{this} to not be arguments")}function a(e,t){t&&q(this,"message",t);var n=q(this,"object");if(q(this,"deep"))return this.eql(e);this.assert(e===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function c(e,n){n&&q(this,"message",n),this.assert(t.eql(e,q(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function u(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"doLength"),i=q(this,"message"),s=i?i+": ":"",a=q(this,"ssfi"),c=t.type(o).toLowerCase(),u=t.type(e).toLowerCase(),f=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)f=!1;else{var l="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+l+" to be a number or a date"}else errorMessage=s+"the argument to above must be a number";else errorMessage=s+"the argument to above must be a date";if(f)throw new T(errorMessage,void 0,a);if(r){var h=o.length;this.assert(h>e,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",e,h)}else this.assert(o>e,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",e)}function f(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"doLength"),i=q(this,"message"),s=i?i+": ":"",a=q(this,"ssfi"),c=t.type(o).toLowerCase(),u=t.type(e).toLowerCase(),f=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)f=!1;else{var l="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+l+" to be a number or a date"}else errorMessage=s+"the argument to least must be a number";else errorMessage=s+"the argument to least must be a date";if(f)throw new T(errorMessage,void 0,a);if(r){var h=o.length;this.assert(h>=e,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",e,h)}else this.assert(o>=e,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",e)}function l(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"doLength"),i=q(this,"message"),s=i?i+": ":"",a=q(this,"ssfi"),c=t.type(o).toLowerCase(),u=t.type(e).toLowerCase(),f=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)f=!1;else{var l="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+l+" to be a number or a date"}else errorMessage=s+"the argument to below must be a number";else errorMessage=s+"the argument to below must be a date";if(f)throw new T(errorMessage,void 0,a);if(r){var h=o.length;this.assert(h<e,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",e,h)}else this.assert(o<e,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",e)}function h(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"doLength"),i=q(this,"message"),s=i?i+": ":"",a=q(this,"ssfi"),c=t.type(o).toLowerCase(),u=t.type(e).toLowerCase(),f=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)f=!1;else{var l="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+l+" to be a number or a date"}else errorMessage=s+"the argument to most must be a number";else errorMessage=s+"the argument to most must be a date";if(f)throw new T(errorMessage,void 0,a);if(r){var h=o.length;this.assert(h<=e,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",e,h)}else this.assert(o<=e,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",e)}function p(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"ssfi"),i=q(this,"message");try{var s=o instanceof e}catch(n){if(n instanceof TypeError)throw i=i?i+": ":"",new T(i+"The instanceof assertion needs a constructor but "+t.type(e)+" was given.",void 0,r);throw n}var a=t.getName(e);null===a&&(a="an unnamed constructor"),this.assert(s,"expected #{this} to be an instance of "+a,"expected #{this} to not be an instance of "+a)}function d(e,n,o){o&&q(this,"message",o);var r=q(this,"nested"),i=q(this,"own"),s=q(this,"message"),a=q(this,"object"),c=q(this,"ssfi");if(r&&i)throw s=s?s+": ":"",new T(s+'The "nested" and "own" flags cannot be combined.',void 0,c);if(null===a||void 0===a)throw s=s?s+": ":"",new T(s+"Target cannot be null or undefined.",void 0,c);var u=q(this,"deep"),f=q(this,"negate"),l=r?t.getPathInfo(a,e):null,h=r?l.value:a[e],p="";u&&(p+="deep "),i&&(p+="own "),r&&(p+="nested "),p+="property ";var d;d=i?Object.prototype.hasOwnProperty.call(a,e):r?l.exists:t.hasProperty(a,e),f&&1!==arguments.length||this.assert(d,"expected #{this} to have "+p+t.inspect(e),"expected #{this} to not have "+p+t.inspect(e)),arguments.length>1&&this.assert(d&&(u?t.eql(n,h):n===h),"expected #{this} to have "+p+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have "+p+t.inspect(e)+" of #{act}",n,h),q(this,"object",h)}function y(e,t,n){q(this,"own",!0),d.apply(this,arguments)}function b(e,n,o){"string"==typeof n&&(o=n,n=null),o&&q(this,"message",o);var r=q(this,"object"),i=Object.getOwnPropertyDescriptor(Object(r),e);i&&n?this.assert(t.eql(n,i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to match "+t.inspect(n)+", got "+t.inspect(i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to not match "+t.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+t.inspect(e),"expected #{this} to not have an own property descriptor for "+t.inspect(e)),q(this,"object",i)}function g(){q(this,"doLength",!0)}function m(e,t){t&&q(this,"message",t);var n=q(this,"object"),o=q(this,"message"),r=q(this,"ssfi");new D(n,o,r,!0).to.have.property("length");var i=n.length;this.assert(i==e,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",e,i)}function w(e,t){t&&q(this,"message",t);var n=q(this,"object");this.assert(e.exec(n),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function v(e){var n,o=q(this,"object"),r=t.type(o),i=t.type(e),s=q(this,"ssfi"),a=q(this,"deep"),c="",u=!0,f=q(this,"message");f=f?f+": ":"";var l=f+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===r||"Set"===r)c=a?"deeply ":"",h=[],o.forEach(function(e,t){h.push(t)}),"Array"!==i&&(e=Array.prototype.slice.call(arguments));else{switch(h=t.getOwnEnumerableProperties(o),i){case"Array":if(arguments.length>1)throw new T(l,void 0,s);break;case"Object":if(arguments.length>1)throw new T(l,void 0,s);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}e=e.map(function(e){return"symbol"==typeof e?e:String(e)})}if(!e.length)throw new T(f+"keys required",void 0,s);var h,p=e.length,d=q(this,"any"),y=q(this,"all"),b=e;if(d||y||(y=!0),d&&(u=b.some(function(e){return h.some(function(n){return a?t.eql(e,n):e===n})})),y&&(u=b.every(function(e){return h.some(function(n){return a?t.eql(e,n):e===n})}),q(this,"contains")||(u=u&&e.length==h.length)),p>1){e=e.map(function(e){return t.inspect(e)});var g=e.pop();y&&(n=e.join(", ")+", and "+g),d&&(n=e.join(", ")+", or "+g)}else n=t.inspect(e[0]);n=(p>1?"keys ":"key ")+n,n=(q(this,"contains")?"contain ":"have ")+n,this.assert(u,"expected #{this} to "+c+n,"expected #{this} to not "+c+n,b.slice(0).sort(t.compareByInspect),h.sort(t.compareByInspect),!0)}function x(e,n,o){o&&q(this,"message",o);var r=q(this,"object"),i=q(this,"ssfi"),s=q(this,"message"),a=q(this,"negate")||!1;new D(r,s,i,!0).is.a("function"),(e instanceof RegExp||"string"==typeof e)&&(n=e,e=null);var c;try{r()}catch(e){c=e}var u=void 0===e&&void 0===n,f=Boolean(e&&n),l=!1,h=!1;if(u||!u&&!a){var p="an error";e instanceof Error?p="#{exp}":e&&(p=t.checkError.getConstructorName(e)),this.assert(c,"expected #{this} to throw "+p,"expected #{this} to not throw an error but #{act} was thrown",e&&e.toString(),c instanceof Error?c.toString():"string"==typeof c?c:c&&t.checkError.getConstructorName(c))}if(e&&c){if(e instanceof Error){t.checkError.compatibleInstance(c,e)===a&&(f&&a?l=!0:this.assert(a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(c&&!a?" but #{act} was thrown":""),e.toString(),c.toString()))}t.checkError.compatibleConstructor(c,e)===a&&(f&&a?l=!0:this.assert(a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(c?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),c instanceof Error?c.toString():c&&t.checkError.getConstructorName(c)))}if(c&&void 0!==n&&null!==n){var d="including";n instanceof RegExp&&(d="matching");t.checkError.compatibleMessage(c,n)===a&&(f&&a?h=!0:this.assert(a,"expected #{this} to throw error "+d+" #{exp} but got #{act}","expected #{this} to throw error not "+d+" #{exp}",n,t.checkError.getMessage(c)))}l&&h&&this.assert(a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(c?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),c instanceof Error?c.toString():c&&t.checkError.getConstructorName(c)),q(this,"object",c)}function M(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"itself"),i="function"!=typeof o||r?o[e]:o.prototype[e];this.assert("function"==typeof i,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))}function O(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=e(o);this.assert(r,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),!q(this,"negate"),r)}function j(e,t,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"message"),i=q(this,"ssfi");if(new D(o,r,i,!0).is.a("number"),"number"!=typeof e||"number"!=typeof t)throw r=r?r+": ":"",new T(r+"the arguments to closeTo or approximately must be numbers",void 0,i);this.assert(Math.abs(o-e)<=t,"expected #{this} to be close to "+e+" +/- "+t,"expected #{this} not to be close to "+e+" +/- "+t)}function P(e,t,n,o,r){if(!o){if(e.length!==t.length)return!1;t=t.slice()}return e.every(function(e,i){if(r)return n?n(e,t[i]):e===t[i];if(!n){var s=t.indexOf(e);return-1!==s&&(o||t.splice(s,1),!0)}return t.some(function(r,i){return!!n(e,r)&&(o||t.splice(i,1),!0)})})}function S(e,t){t&&q(this,"message",t);var n=q(this,"object"),o=q(this,"message"),r=q(this,"ssfi");new D(e,o,r,!0).to.be.an("array"),this.assert(e.indexOf(n)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,n)}function k(e,t,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"message"),i=q(this,"ssfi");new D(o,r,i,!0).is.a("function");var s;t?(new D(e,r,i,!0).to.have.property(t),s=e[t]):(new D(e,r,i,!0).is.a("function"),s=e()),o();var a=void 0===t||null===t?e():e[t],c=void 0===t||null===t?s:"."+t;q(this,"deltaMsgObj",c),q(this,"initialDeltaValue",s),q(this,"finalDeltaValue",a),q(this,"deltaBehavior","change"),q(this,"realDelta",a!==s),this.assert(s!==a,"expected "+c+" to change","expected "+c+" to not change")}function N(e,t,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"message"),i=q(this,"ssfi");new D(o,r,i,!0).is.a("function");var s;t?(new D(e,r,i,!0).to.have.property(t),s=e[t]):(new D(e,r,i,!0).is.a("function"),s=e()),new D(s,r,i,!0).is.a("number"),o();var a=void 0===t||null===t?e():e[t],c=void 0===t||null===t?s:"."+t;q(this,"deltaMsgObj",c),q(this,"initialDeltaValue",s),q(this,"finalDeltaValue",a),q(this,"deltaBehavior","increase"),q(this,"realDelta",a-s),this.assert(a-s>0,"expected "+c+" to increase","expected "+c+" to not increase")}function E(e,t,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"message"),i=q(this,"ssfi");new D(o,r,i,!0).is.a("function");var s;t?(new D(e,r,i,!0).to.have.property(t),s=e[t]):(new D(e,r,i,!0).is.a("function"),s=e()),new D(s,r,i,!0).is.a("number"),o();var a=void 0===t||null===t?e():e[t],c=void 0===t||null===t?s:"."+t;q(this,"deltaMsgObj",c),q(this,"initialDeltaValue",s),q(this,"finalDeltaValue",a),q(this,"deltaBehavior","decrease"),q(this,"realDelta",s-a),this.assert(a-s<0,"expected "+c+" to decrease","expected "+c+" to not decrease")}function A(e,t){t&&q(this,"message",t);var n,o=q(this,"deltaMsgObj"),r=q(this,"initialDeltaValue"),i=q(this,"finalDeltaValue"),s=q(this,"deltaBehavior"),a=q(this,"realDelta");n="change"===s?Math.abs(i-r)===Math.abs(e):a===Math.abs(e),this.assert(n,"expected "+o+" to "+s+" by "+e,"expected "+o+" to not "+s+" by "+e)}var D=e.Assertion,T=e.AssertionError,q=t.flag;["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does"].forEach(function(e){D.addProperty(e)}),D.addProperty("not",function(){q(this,"negate",!0)}),D.addProperty("deep",function(){q(this,"deep",!0)}),D.addProperty("nested",function(){q(this,"nested",!0)}),D.addProperty("own",function(){q(this,"own",!0)}),D.addProperty("ordered",function(){q(this,"ordered",!0)}),D.addProperty("any",function(){q(this,"any",!0),q(this,"all",!1)}),D.addProperty("all",function(){q(this,"all",!0),q(this,"any",!1)}),D.addChainableMethod("an",n),D.addChainableMethod("a",n),D.addChainableMethod("include",i,r),D.addChainableMethod("contain",i,r),D.addChainableMethod("contains",i,r),D.addChainableMethod("includes",i,r),D.addProperty("ok",function(){this.assert(q(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),D.addProperty("true",function(){this.assert(!0===q(this,"object"),"expected #{this} to be true","expected #{this} to be false",!q(this,"negate"))}),D.addProperty("false",function(){this.assert(!1===q(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!q(this,"negate"))}),D.addProperty("null",function(){this.assert(null===q(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),D.addProperty("undefined",function(){this.assert(void 0===q(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),D.addProperty("NaN",function(){this.assert(t.isNaN(q(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),D.addProperty("exist",function(){var e=q(this,"object");this.assert(null!==e&&void 0!==e,"expected #{this} to exist","expected #{this} to not exist")}),D.addProperty("empty",function(){var e,n=q(this,"object"),o=q(this,"ssfi"),r=q(this,"message");switch(r=r?r+": ":"",t.type(n).toLowerCase()){case"array":case"string":e=n.length;break;case"map":case"set":e=n.size;break;case"weakmap":case"weakset":throw new T(r+".empty was passed a weak collection",void 0,o);case"function":var i=r+".empty was passed a function "+t.getName(n);throw new T(i.trim(),void 0,o);default:if(n!==Object(n))throw new T(r+".empty was passed non-string primitive "+t.inspect(n),void 0,o);e=Object.keys(n).length}this.assert(0===e,"expected #{this} to be empty","expected #{this} not to be empty")}),D.addProperty("arguments",s),D.addProperty("Arguments",s),D.addMethod("equal",a),D.addMethod("equals",a),D.addMethod("eq",a),D.addMethod("eql",c),D.addMethod("eqls",c),D.addMethod("above",u),D.addMethod("gt",u),D.addMethod("greaterThan",u),D.addMethod("least",f),D.addMethod("gte",f),D.addMethod("below",l),D.addMethod("lt",l),D.addMethod("lessThan",l),D.addMethod("most",h),D.addMethod("lte",h),D.addMethod("within",function(e,n,o){o&&q(this,"message",o);var r=q(this,"object"),i=q(this,"doLength"),s=q(this,"message"),a=s?s+": ":"",c=q(this,"ssfi"),u=t.type(r).toLowerCase(),f=t.type(e).toLowerCase(),l=t.type(n).toLowerCase(),h=!0,p="date"===f&&"date"===l?e.toUTCString()+".."+n.toUTCString():e+".."+n;if(i&&new D(r,s,c,!0).to.have.property("length"),i||"date"!==u||"date"===f&&"date"===l)if("number"===f&&"number"===l||!i&&"number"!==u)if(i||"date"===u||"number"===u)h=!1;else{var d="string"===u?"'"+r+"'":r;errorMessage=a+"expected "+d+" to be a number or a date"}else errorMessage=a+"the arguments to within must be numbers";else errorMessage=a+"the arguments to within must be dates";if(h)throw new T(errorMessage,void 0,c);if(i){var y=r.length;this.assert(y>=e&&y<=n,"expected #{this} to have a length within "+p,"expected #{this} to not have a length within "+p)}else this.assert(r>=e&&r<=n,"expected #{this} to be within "+p,"expected #{this} to not be within "+p)}),D.addMethod("instanceof",p),D.addMethod("instanceOf",p),D.addMethod("property",d),D.addMethod("ownProperty",y),D.addMethod("haveOwnProperty",y),D.addMethod("ownPropertyDescriptor",b),D.addMethod("haveOwnPropertyDescriptor",b),D.addChainableMethod("length",m,g),D.addChainableMethod("lengthOf",m,g),D.addMethod("match",w),D.addMethod("matches",w),D.addMethod("string",function(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"message"),i=q(this,"ssfi");new D(o,r,i,!0).is.a("string"),this.assert(~o.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))}),D.addMethod("keys",v),D.addMethod("key",v),D.addMethod("throw",x),D.addMethod("throws",x),D.addMethod("Throw",x),D.addMethod("respondTo",M),D.addMethod("respondsTo",M),D.addProperty("itself",function(){q(this,"itself",!0)}),D.addMethod("satisfy",O),D.addMethod("satisfies",O),D.addMethod("closeTo",j),D.addMethod("approximately",j),D.addMethod("members",function(e,n){n&&q(this,"message",n);var o=q(this,"object"),r=q(this,"message"),i=q(this,"ssfi");new D(o,r,i,!0).to.be.an("array"),new D(e,r,i,!0).to.be.an("array");var s,a,c,u=q(this,"contains"),f=q(this,"ordered");u?(s=f?"an ordered superset":"a superset",a="expected #{this} to be "+s+" of #{exp}",c="expected #{this} to not be "+s+" of #{exp}"):(s=f?"ordered members":"members",a="expected #{this} to have the same "+s+" as #{exp}",c="expected #{this} to not have the same "+s+" as #{exp}");var l=q(this,"deep")?t.eql:void 0;this.assert(P(e,o,l,u,f),a,c,e,o,!0)}),D.addMethod("oneOf",S),D.addMethod("change",k),D.addMethod("changes",k),D.addMethod("increase",N),D.addMethod("increases",N),D.addMethod("decrease",E),D.addMethod("decreases",E),D.addMethod("by",A),D.addProperty("extensible",function(){var e=q(this,"object"),t=e===Object(e)&&Object.isExtensible(e);this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),D.addProperty("sealed",function(){var e=q(this,"object"),t=e!==Object(e)||Object.isSealed(e);this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),D.addProperty("frozen",function(){var e=q(this,"object"),t=e!==Object(e)||Object.isFrozen(e);this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")}),D.addProperty("finite",function(e){var t=q(this,"object");this.assert("number"==typeof t&&isFinite(t),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},function(e,t){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){e.expect=function(t,n){return new e.Assertion(t,n)},e.expect.fail=function(t,n,o,r){throw o=o||"expect.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:r},e.expect.fail)}}},function(e,t){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){function n(){function t(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new o(this.valueOf(),null,t):new o(this,null,t)}function n(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:n,get:t,configurable:!0});var r={};return r.fail=function(t,n,o,i){throw o=o||"should.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},r.equal=function(e,t,n){new o(e,n).to.equal(t)},r.Throw=function(e,t,n,r){new o(e,r).to.Throw(t,n)},r.exist=function(e,t){new o(e,t).to.exist},r.not={},r.not.equal=function(e,t,n){new o(e,n).to.not.equal(t)},r.not.Throw=function(e,t,n,r){new o(e,r).to.not.Throw(t,n)},r.not.exist=function(e,t){new o(e,t).to.not.exist},r.throw=r.Throw,r.not.throw=r.not.Throw,r}var o=e.Assertion;e.should=n,e.Should=n}},function(e,t){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){/*!
   * Chai dependencies.
   */
var n=e.Assertion,o=t.flag,r=e.assert=function(t,o){new n(null,null,e.assert,!0).assert(t,o,"[ negation message unavailable ]")};r.fail=function(t,n,o,i){throw o=o||"assert.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},r.isOk=function(e,t){new n(e,t,r.isOk,!0).is.ok},r.isNotOk=function(e,t){new n(e,t,r.isNotOk,!0).is.not.ok},r.equal=function(e,t,i){var s=new n(e,i,r.equal,!0);s.assert(t==o(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e,!0)},r.notEqual=function(e,t,i){var s=new n(e,i,r.notEqual,!0);s.assert(t!=o(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e,!0)},r.strictEqual=function(e,t,o){new n(e,o,r.strictEqual,!0).to.equal(t)},r.notStrictEqual=function(e,t,o){new n(e,o,r.notStrictEqual,!0).to.not.equal(t)},r.deepEqual=r.deepStrictEqual=function(e,t,o){new n(e,o,r.deepEqual,!0).to.eql(t)},r.notDeepEqual=function(e,t,o){new n(e,o,r.notDeepEqual,!0).to.not.eql(t)},r.isAbove=function(e,t,o){new n(e,o,r.isAbove,!0).to.be.above(t)},r.isAtLeast=function(e,t,o){new n(e,o,r.isAtLeast,!0).to.be.least(t)},r.isBelow=function(e,t,o){new n(e,o,r.isBelow,!0).to.be.below(t)},r.isAtMost=function(e,t,o){new n(e,o,r.isAtMost,!0).to.be.most(t)},r.isTrue=function(e,t){new n(e,t,r.isTrue,!0).is.true},r.isNotTrue=function(e,t){new n(e,t,r.isNotTrue,!0).to.not.equal(!0)},r.isFalse=function(e,t){new n(e,t,r.isFalse,!0).is.false},r.isNotFalse=function(e,t){new n(e,t,r.isNotFalse,!0).to.not.equal(!1)},r.isNull=function(e,t){new n(e,t,r.isNull,!0).to.equal(null)},r.isNotNull=function(e,t){new n(e,t,r.isNotNull,!0).to.not.equal(null)},r.isNaN=function(e,t){new n(e,t,r.isNaN,!0).to.be.NaN},r.isNotNaN=function(e,t){new n(e,t,r.isNotNaN,!0).not.to.be.NaN},r.exists=function(e,t){new n(e,t,r.exists,!0).to.exist},r.notExists=function(e,t){new n(e,t,r.notExists,!0).to.not.exist},r.isUndefined=function(e,t){new n(e,t,r.isUndefined,!0).to.equal(void 0)},r.isDefined=function(e,t){new n(e,t,r.isDefined,!0).to.not.equal(void 0)},r.isFunction=function(e,t){new n(e,t,r.isFunction,!0).to.be.a("function")},r.isNotFunction=function(e,t){new n(e,t,r.isNotFunction,!0).to.not.be.a("function")},r.isObject=function(e,t){new n(e,t,r.isObject,!0).to.be.a("object")},r.isNotObject=function(e,t){new n(e,t,r.isNotObject,!0).to.not.be.a("object")},r.isArray=function(e,t){new n(e,t,r.isArray,!0).to.be.an("array")},r.isNotArray=function(e,t){new n(e,t,r.isNotArray,!0).to.not.be.an("array")},r.isString=function(e,t){new n(e,t,r.isString,!0).to.be.a("string")},r.isNotString=function(e,t){new n(e,t,r.isNotString,!0).to.not.be.a("string")},r.isNumber=function(e,t){new n(e,t,r.isNumber,!0).to.be.a("number")},r.isNotNumber=function(e,t){new n(e,t,r.isNotNumber,!0).to.not.be.a("number")},r.isFinite=function(e,t){new n(e,t,r.isFinite,!0).to.be.finite},r.isBoolean=function(e,t){new n(e,t,r.isBoolean,!0).to.be.a("boolean")},r.isNotBoolean=function(e,t){new n(e,t,r.isNotBoolean,!0).to.not.be.a("boolean")},r.typeOf=function(e,t,o){new n(e,o,r.typeOf,!0).to.be.a(t)},r.notTypeOf=function(e,t,o){new n(e,o,r.notTypeOf,!0).to.not.be.a(t)},r.instanceOf=function(e,t,o){new n(e,o,r.instanceOf,!0).to.be.instanceOf(t)},r.notInstanceOf=function(e,t,o){new n(e,o,r.notInstanceOf,!0).to.not.be.instanceOf(t)},r.include=function(e,t,o){new n(e,o,r.include,!0).include(t)},r.notInclude=function(e,t,o){new n(e,o,r.notInclude,!0).not.include(t)},r.deepInclude=function(e,t,o){new n(e,o,r.deepInclude,!0).deep.include(t)},r.notDeepInclude=function(e,t,o){new n(e,o,r.notDeepInclude,!0).not.deep.include(t)},r.nestedInclude=function(e,t,o){new n(e,o,r.nestedInclude,!0).nested.include(t)},r.notNestedInclude=function(e,t,o){new n(e,o,r.notNestedInclude,!0).not.nested.include(t)},r.deepNestedInclude=function(e,t,o){new n(e,o,r.deepNestedInclude,!0).deep.nested.include(t)},r.notDeepNestedInclude=function(e,t,o){new n(e,o,r.notDeepNestedInclude,!0).not.deep.nested.include(t)},r.ownInclude=function(e,t,o){new n(e,o,r.ownInclude,!0).own.include(t)},r.notOwnInclude=function(e,t,o){new n(e,o,r.notOwnInclude,!0).not.own.include(t)},r.deepOwnInclude=function(e,t,o){new n(e,o,r.deepOwnInclude,!0).deep.own.include(t)},r.notDeepOwnInclude=function(e,t,o){new n(e,o,r.notDeepOwnInclude,!0).not.deep.own.include(t)},r.match=function(e,t,o){new n(e,o,r.match,!0).to.match(t)},r.notMatch=function(e,t,o){new n(e,o,r.notMatch,!0).to.not.match(t)},r.property=function(e,t,o){new n(e,o,r.property,!0).to.have.property(t)},r.notProperty=function(e,t,o){new n(e,o,r.notProperty,!0).to.not.have.property(t)},r.propertyVal=function(e,t,o,i){new n(e,i,r.propertyVal,!0).to.have.property(t,o)},r.notPropertyVal=function(e,t,o,i){new n(e,i,r.notPropertyVal,!0).to.not.have.property(t,o)},r.deepPropertyVal=function(e,t,o,i){new n(e,i,r.deepPropertyVal,!0).to.have.deep.property(t,o)},r.notDeepPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepPropertyVal,!0).to.not.have.deep.property(t,o)},r.ownProperty=function(e,t,o){new n(e,o,r.ownProperty,!0).to.have.own.property(t)},r.notOwnProperty=function(e,t,o){new n(e,o,r.notOwnProperty,!0).to.not.have.own.property(t)},r.ownPropertyVal=function(e,t,o,i){new n(e,i,r.ownPropertyVal,!0).to.have.own.property(t,o)},r.notOwnPropertyVal=function(e,t,o,i){new n(e,i,r.notOwnPropertyVal,!0).to.not.have.own.property(t,o)},r.deepOwnPropertyVal=function(e,t,o,i){new n(e,i,r.deepOwnPropertyVal,!0).to.have.deep.own.property(t,o)},r.notDeepOwnPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(t,o)},r.nestedProperty=function(e,t,o){new n(e,o,r.nestedProperty,!0).to.have.nested.property(t)},r.notNestedProperty=function(e,t,o){new n(e,o,r.notNestedProperty,!0).to.not.have.nested.property(t)},r.nestedPropertyVal=function(e,t,o,i){new n(e,i,r.nestedPropertyVal,!0).to.have.nested.property(t,o)},r.notNestedPropertyVal=function(e,t,o,i){new n(e,i,r.notNestedPropertyVal,!0).to.not.have.nested.property(t,o)},r.deepNestedPropertyVal=function(e,t,o,i){new n(e,i,r.deepNestedPropertyVal,!0).to.have.deep.nested.property(t,o)},r.notDeepNestedPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(t,o)},r.lengthOf=function(e,t,o){new n(e,o,r.lengthOf,!0).to.have.lengthOf(t)},r.hasAnyKeys=function(e,t,o){new n(e,o,r.hasAnyKeys,!0).to.have.any.keys(t)},r.hasAllKeys=function(e,t,o){new n(e,o,r.hasAllKeys,!0).to.have.all.keys(t)},r.containsAllKeys=function(e,t,o){new n(e,o,r.containsAllKeys,!0).to.contain.all.keys(t)},r.doesNotHaveAnyKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyKeys,!0).to.not.have.any.keys(t)},r.doesNotHaveAllKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllKeys,!0).to.not.have.all.keys(t)},r.hasAnyDeepKeys=function(e,t,o){new n(e,o,r.hasAnyDeepKeys,!0).to.have.any.deep.keys(t)},r.hasAllDeepKeys=function(e,t,o){new n(e,o,r.hasAllDeepKeys,!0).to.have.all.deep.keys(t)},r.containsAllDeepKeys=function(e,t,o){new n(e,o,r.containsAllDeepKeys,!0).to.contain.all.deep.keys(t)},r.doesNotHaveAnyDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(t)},r.doesNotHaveAllDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(t)},r.throws=function(e,t,i,s){("string"==typeof t||t instanceof RegExp)&&(i=t,t=null);var a=new n(e,s,r.throws,!0).to.throw(t,i);return o(a,"object")},r.doesNotThrow=function(e,t,o,i){("string"==typeof t||t instanceof RegExp)&&(o=t,t=null),new n(e,i,r.doesNotThrow,!0).to.not.throw(t,o)},r.operator=function(i,s,a,c){var u;switch(s){case"==":u=i==a;break;case"===":u=i===a;break;case">":u=i>a;break;case">=":u=i>=a;break;case"<":u=i<a;break;case"<=":u=i<=a;break;case"!=":u=i!=a;break;case"!==":u=i!==a;break;default:throw c=c?c+": ":c,new e.AssertionError(c+'Invalid operator "'+s+'"',void 0,r.operator)}var f=new n(u,c,r.operator,!0);f.assert(!0===o(f,"object"),"expected "+t.inspect(i)+" to be "+s+" "+t.inspect(a),"expected "+t.inspect(i)+" to not be "+s+" "+t.inspect(a))},r.closeTo=function(e,t,o,i){new n(e,i,r.closeTo,!0).to.be.closeTo(t,o)},r.approximately=function(e,t,o,i){new n(e,i,r.approximately,!0).to.be.approximately(t,o)},r.sameMembers=function(e,t,o){new n(e,o,r.sameMembers,!0).to.have.same.members(t)},r.notSameMembers=function(e,t,o){new n(e,o,r.notSameMembers,!0).to.not.have.same.members(t)},r.sameDeepMembers=function(e,t,o){new n(e,o,r.sameDeepMembers,!0).to.have.same.deep.members(t)},r.notSameDeepMembers=function(e,t,o){new n(e,o,r.notSameDeepMembers,!0).to.not.have.same.deep.members(t)},r.sameOrderedMembers=function(e,t,o){new n(e,o,r.sameOrderedMembers,!0).to.have.same.ordered.members(t)},r.notSameOrderedMembers=function(e,t,o){new n(e,o,r.notSameOrderedMembers,!0).to.not.have.same.ordered.members(t)},r.sameDeepOrderedMembers=function(e,t,o){new n(e,o,r.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(t)},r.notSameDeepOrderedMembers=function(e,t,o){new n(e,o,r.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(t)},r.includeMembers=function(e,t,o){new n(e,o,r.includeMembers,!0).to.include.members(t)},r.notIncludeMembers=function(e,t,o){new n(e,o,r.notIncludeMembers,!0).to.not.include.members(t)},r.includeDeepMembers=function(e,t,o){new n(e,o,r.includeDeepMembers,!0).to.include.deep.members(t)},r.notIncludeDeepMembers=function(e,t,o){new n(e,o,r.notIncludeDeepMembers,!0).to.not.include.deep.members(t)},r.includeOrderedMembers=function(e,t,o){new n(e,o,r.includeOrderedMembers,!0).to.include.ordered.members(t)},r.notIncludeOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeOrderedMembers,!0).to.not.include.ordered.members(t)},r.includeDeepOrderedMembers=function(e,t,o){new n(e,o,r.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(t)},r.notIncludeDeepOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(t)},r.oneOf=function(e,t,o){new n(e,o,r.oneOf,!0).to.be.oneOf(t)},r.changes=function(e,t,o,i){3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.changes,!0).to.change(t,o)},r.changesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.changesBy,!0).to.change(t,o).by(i)},r.doesNotChange=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotChange,!0).to.not.change(t,o)},r.changesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.changesButNotBy,!0).to.change(t,o).but.not.by(i)},r.increases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.increases,!0).to.increase(t,o)},r.increasesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.increasesBy,!0).to.increase(t,o).by(i)},r.doesNotIncrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotIncrease,!0).to.not.increase(t,o)},r.increasesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.increasesButNotBy,!0).to.increase(t,o).but.not.by(i)},r.decreases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.decreases,!0).to.decrease(t,o)},r.decreasesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.decreasesBy,!0).to.decrease(t,o).by(i)},r.doesNotDecrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotDecrease,!0).to.not.decrease(t,o)},r.doesNotDecreaseBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);return new n(e,s,r.doesNotDecreaseBy,!0).to.not.decrease(t,o).by(i)},r.decreasesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.decreasesButNotBy,!0).to.decrease(t,o).but.not.by(i)},/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
r.ifError=function(e){if(e)throw e},r.isExtensible=function(e,t){new n(e,t,r.isExtensible,!0).to.be.extensible},r.isNotExtensible=function(e,t){new n(e,t,r.isNotExtensible,!0).to.not.be.extensible},r.isSealed=function(e,t){new n(e,t,r.isSealed,!0).to.be.sealed},r.isNotSealed=function(e,t){new n(e,t,r.isNotSealed,!0).to.not.be.sealed},r.isFrozen=function(e,t){new n(e,t,r.isFrozen,!0).to.be.frozen},r.isNotFrozen=function(e,t){new n(e,t,r.isNotFrozen,!0).to.not.be.frozen},r.isEmpty=function(e,t){new n(e,t,r.isEmpty,!0).to.be.empty},r.isNotEmpty=function(e,t){new n(e,t,r.isNotEmpty,!0).to.not.be.empty},/*!
   * Aliases.
   */
function e(t,n){return r[n]=r[t],e}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(12),s=n(4);describe("withMethodMissing",function(){var e,t=(0,s.withMethodMissing)(e=function(){function e(){o(this,e),this.dummyMember=!0,this.falseMember=!1}return r(e,[{key:"methodMissing",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return{name:e,args:n}}},{key:"dummyMethod",value:function(){return!0}}]),e}())||e;it("should create an instance",function(){var e=new t;(0,i.expect)(e).to.exist}),it("should access its own methods",function(){var e=new t;(0,i.expect)(e.dummyMethod()).to.equal(!0)}),it("should access its own members",function(){var e=new t;(0,i.expect)(e.dummyMember).to.equal(!0)}),it("should call method missing",function(){var e=new t;(0,i.expect)(e.inexistentMethod()).to.exist}),it("should access the method name from method missing",function(){var e=new t,n=e.inexistentMethod();(0,i.expect)(n.name).to.equal("inexistentMethod")}),it("should access the method args from method missing",function(){var e=new t,n=e.inexistentMethod(!0);(0,i.expect)(n.args[0]).to.equal(!0)}),it("should get every method args from method missing",function(){var e=new t,n=e.inexistentMethod(1,2,3,4);(0,i.expect)(n.args.length).to.equal(4)}),it("should return falsey setted members as they are",function(){var e=new t;(0,i.expect)(e.falseMember).to.equal(!1)})})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(12),s=n(4);describe("addMethodMissing",function(){var e=void 0,t=function(){function e(){o(this,e),this.dummyMember=!0,this.falseMember=!1}return r(e,[{key:"methodMissing",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return{name:e,args:n}}},{key:"dummyMethod",value:function(){return!0}}]),e}();beforeEach(function(){e=new t,e=(0,s.addMethodMissing)(e)}),it("should create an instance",function(){(0,i.expect)(e).to.exist}),it("should access its own methods",function(){(0,i.expect)(e.dummyMethod()).to.equal(!0)}),it("should access its own members",function(){(0,i.expect)(e.dummyMember).to.equal(!0)}),it("should call method missing",function(){(0,i.expect)(e.inexistentMethod()).to.exist}),it("should access the method name from method missing",function(){var t=e.inexistentMethod();(0,i.expect)(t.name).to.equal("inexistentMethod")}),it("should access the method args from method missing",function(){var t=e.inexistentMethod(!0);(0,i.expect)(t.args[0]).to.equal(!0)}),it("should get every method args from method missing",function(){var t=e.inexistentMethod(1,2,3,4);(0,i.expect)(t.args.length).to.equal(4)}),it("should return falsey setted members as they are",function(){(0,i.expect)(e.falseMember).to.equal(!1)})})}])});