(function(){var n=this,t=n._,e={},r=Array.prototype,u=Object.prototype,i=Function.prototype,a=r.push,o=r.slice,c=r.concat,l=u.toString,s=u.hasOwnProperty,f=r.forEach,p=r.map,d=r.reduce,h=r.reduceRight,m=r.filter,g=r.every,v=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,_=Object.keys,x=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var k=j.each=j.forEach=function(n,t,r){if(null==n)return n;if(f&&n.forEach===f)n.forEach(t,r);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(r,n[u],u,n)===e)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(r,n[a[u]],a[u],n)===e)return;return n};j.map=j.collect=function(n,t,e){var r=[];return null==n?r:p&&n.map===p?n.map(t,e):(k(n,function(n,u,i){r.push(t.call(e,n,u,i))}),r)};var A="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,e,r){var u=arguments.length>2;if(null==n&&(n=[]),d&&n.reduce===d)return r&&(t=j.bind(t,r)),u?n.reduce(t,e):n.reduce(t);if(k(n,function(n,i,a){u?e=t.call(r,e,n,i,a):(e=n,u=!0)}),!u)throw new TypeError(A);return e},j.reduceRight=j.foldr=function(n,t,e,r){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return r&&(t=j.bind(t,r)),u?n.reduceRight(t,e):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(k(n,function(o,c,l){c=a?a[--i]:--i,u?e=t.call(r,e,n[c],c,l):(e=n[c],u=!0)}),!u)throw new TypeError(A);return e},j.find=j.detect=function(n,t,e){var r;return C(n,function(n,u,i){return t.call(e,n,u,i)?(r=n,!0):void 0}),r},j.filter=j.select=function(n,t,e){var r=[];return null==n?r:m&&n.filter===m?n.filter(t,e):(k(n,function(n,u,i){t.call(e,n,u,i)&&r.push(n)}),r)},j.reject=function(n,t,e){return j.filter(n,function(n,r,u){return!t.call(e,n,r,u)},e)},j.every=j.all=function(n,t,r){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,r):(k(n,function(n,i,a){return(u=u&&t.call(r,n,i,a))?void 0:e}),!!u)};var C=j.some=j.any=function(n,t,r){t||(t=j.identity);var u=!1;return null==n?u:v&&n.some===v?n.some(t,r):(k(n,function(n,i,a){return u||(u=t.call(r,n,i,a))?e:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):C(n,function(n){return n===t})},j.invoke=function(n,t){var e=o.call(arguments,2),r=j.isFunction(t);return j.map(n,function(n){return(r?t:n[t]).apply(n,e)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,e){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var r=-1/0,u=-1/0;return k(n,function(n,i,a){var o=t?t.call(e,n,i,a):n;o>u&&(r=n,u=o)}),r},j.min=function(n,t,e){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var r=1/0,u=1/0;return k(n,function(n,i,a){var o=t?t.call(e,n,i,a):n;u>o&&(r=n,u=o)}),r},j.shuffle=function(n){var t,e=0,r=[];return k(n,function(n){t=j.random(e++),r[e-1]=r[t],r[t]=n}),r},j.sample=function(n,t,e){return null==t||e?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var F=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,e){return t=F(t),j.pluck(j.map(n,function(n,r,u){return{value:n,index:r,criteria:t.call(e,n,r,u)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return n.index-t.index}),"value")};var O=function(n){return function(t,e,r){var u={};return e=F(e),k(t,function(i,a){var o=e.call(r,i,a,t);n(u,o,i)}),u}};j.groupBy=O(function(n,t,e){j.has(n,t)?n[t].push(e):n[t]=[e]}),j.indexBy=O(function(n,t,e){n[t]=e}),j.countBy=O(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,e,r){e=F(e);for(var u=e.call(r,t),i=0,a=n.length;a>i;){var o=i+a>>>1;e.call(r,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,e){return null==n?void 0:null==t||e?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,e){return o.call(n,0,n.length-(null==t||e?1:t))},j.last=function(n,t,e){return null==n?void 0:null==t||e?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,e){return o.call(n,null==t||e?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var E=function(n,t,e){return t&&j.every(n,j.isArray)?c.apply(e,n):(k(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(e,n):E(n,t,e):e.push(n)}),e)};j.flatten=function(n,t){return E(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var e=[],r=[];return k(n,function(n){(t(n)?e:r).push(n)}),[e,r]},j.uniq=j.unique=function(n,t,e,r){j.isFunction(t)&&(r=e,e=t,t=!1);var u=e?j.map(n,e,r):n,i=[],a=[];return k(u,function(e,r){(t?r&&a[a.length-1]===e:j.contains(a,e))||(a.push(e),i.push(n[r]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(r,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),e=0;n>e;e++)t[e]=j.pluck(arguments,""+e);return t},j.object=function(n,t){if(null==n)return{};for(var e={},r=0,u=n.length;u>r;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},j.indexOf=function(n,t,e){if(null==n)return-1;var r=0,u=n.length;if(e){if("number"!=typeof e)return r=j.sortedIndex(n,t),n[r]===t?r:-1;r=0>e?Math.max(0,u+e):e}if(y&&n.indexOf===y)return n.indexOf(t,e);for(;u>r;r++)if(n[r]===t)return r;return-1},j.lastIndexOf=function(n,t,e){if(null==n)return-1;var r=null!=e;if(b&&n.lastIndexOf===b)return r?n.lastIndexOf(t,e):n.lastIndexOf(t);for(var u=r?e:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,e){arguments.length<=1&&(t=n||0,n=0),e=arguments[2]||1;for(var r=Math.max(Math.ceil((t-n)/e),0),u=0,i=new Array(r);r>u;)i[u++]=n,n+=e;return i};var M=function(){};j.bind=function(n,t){var e,r;if(x&&n.bind===x)return x.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return e=o.call(arguments,2),r=function(){if(!(this instanceof r))return n.apply(t,e.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,e.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var e=0,r=t.slice(),u=0,i=r.length;i>u;u++)r[u]===j&&(r[u]=arguments[e++]);for(;e<arguments.length;)r.push(arguments[e++]);return n.apply(this,r)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return k(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var e={};return t||(t=j.identity),function(){var r=t.apply(this,arguments);return j.has(e,r)?e[r]:e[r]=n.apply(this,arguments)}},j.delay=function(n,t){var e=o.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,e){var r,u,i,a=null,o=0;e||(e={});var c=function(){o=e.leading===!1?0:j.now(),a=null,i=n.apply(r,u),r=u=null};return function(){var l=j.now();o||e.leading!==!1||(o=l);var s=t-(l-o);return r=this,u=arguments,0>=s?(clearTimeout(a),a=null,o=l,i=n.apply(r,u),r=u=null):a||e.trailing===!1||(a=setTimeout(c,s)),i}},j.debounce=function(n,t,e){var r,u,i,a,o,c=function(){var l=j.now()-a;t>l?r=setTimeout(c,t-l):(r=null,e||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=e&&!r;return r||(r=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,e=!1;return function(){return e?t:(e=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length-1;e>=0;e--)t=[n[e].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(_)return _(n);var t=[];for(var e in n)j.has(n,e)&&t.push(e);return t},j.values=function(n){for(var t=j.keys(n),e=t.length,r=new Array(e),u=0;e>u;u++)r[u]=n[t[u]];return r},j.pairs=function(n){for(var t=j.keys(n),e=t.length,r=new Array(e),u=0;e>u;u++)r[u]=[t[u],n[t[u]]];return r},j.invert=function(n){for(var t={},e=j.keys(n),r=0,u=e.length;u>r;r++)t[n[e[r]]]=e[r];return t},j.functions=j.methods=function(n){var t=[];for(var e in n)j.isFunction(n[e])&&t.push(e);return t.sort()},j.extend=function(n){return k(o.call(arguments,1),function(t){if(t)for(var e in t)n[e]=t[e]}),n},j.pick=function(n){var t={},e=c.apply(r,o.call(arguments,1));return k(e,function(e){e in n&&(t[e]=n[e])}),t},j.omit=function(n){var t={},e=c.apply(r,o.call(arguments,1));for(var u in n)j.contains(e,u)||(t[u]=n[u]);return t},j.defaults=function(n){return k(o.call(arguments,1),function(t){if(t)for(var e in t)void 0===n[e]&&(n[e]=t[e])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var Q=function(n,t,e,r){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=e.length;i--;)if(e[i]==n)return r[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;e.push(n),r.push(t);var c=0,s=!0;if("[object Array]"==u){if(c=n.length,s=c==t.length)for(;c--&&(s=Q(n[c],t[c],e,r)););}else{for(var f in n)if(j.has(n,f)&&(c++,!(s=j.has(t,f)&&Q(n[f],t[f],e,r))))break;if(s){for(f in t)if(j.has(t,f)&&!c--)break;s=!c}}return e.pop(),r.pop(),s};j.isEqual=function(n,t){return Q(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=w||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},k(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return void 0===n},j.has=function(n,t){return s.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var e in n)if(n[e]!==t[e])return!1;return!0}},j.times=function(n,t,e){for(var r=Array(Math.max(0,n)),u=0;n>u;u++)r[u]=t.call(e,u);return r},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var S={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};S.unescape=j.invert(S.escape);var T={escape:new RegExp("["+j.keys(S.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(S.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return S[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var e=n[t];return j.isFunction(e)?e.call(n):e},j.mixin=function(n){k(j.functions(n),function(t){var e=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),B.call(this,e.apply(j,n))}})};var q=0;j.uniqueId=function(n){var t=++q+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},N=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,e){var r;e=j.defaults({},e,j.templateSettings);var u=new RegExp([(e.escape||I).source,(e.interpolate||I).source,(e.evaluate||I).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,e,r,u,o){return a+=n.slice(i,o).replace(N,function(n){return"\\"+R[n]}),e&&(a+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",e.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(e.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return r(t,j);var c=function(n){return r.call(this,n,j)};return c.source="function("+(e.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var B=function(n){return this._chain?j(n).chain():n};j.mixin(j),k(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];j.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!=n&&"splice"!=n||0!==e.length||delete e[0],B.call(this,e)}}),k(["concat","join","slice"],function(n){var t=r[n];j.prototype[n]=function(){return B.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this),function(n){"function"==typeof define&&define.amd?define(["jquery"],n):n(jQuery)}(function(n){function t(t){return n.isFunction(t)||"object"==typeof t?t:{top:t,left:t}}var e=n.scrollTo=function(t,e,r){return n(window).scrollTo(t,e,r)};return e.defaults={axis:"xy",duration:parseFloat(n.fn.jquery)>=1.3?0:1,limit:!0},e.window=function(){return n(window)._scrollable()},n.fn._scrollable=function(){return this.map(function(){var t=this,e=!t.nodeName||-1!=n.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!e)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==r.compatMode?r.body:r.documentElement})},n.fn.scrollTo=function(r,u,i){return"object"==typeof u&&(i=u,u=0),"function"==typeof i&&(i={onAfter:i}),"max"==r&&(r=9e9),i=n.extend({},e.defaults,i),u=u||i.duration,i.queue=i.queue&&i.axis.length>1,i.queue&&(u/=2),i.offset=t(i.offset),i.over=t(i.over),this._scrollable().each(function(){function a(n){l.animate(f,u,i.easing,n&&function(){n.call(this,s,i)})}if(null!=r){var o,c=this,l=n(c),s=r,f={},p=l.is("html,body");switch(typeof s){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(s)){s=t(s);break}if(s=n(s,this),!s.length)return;case"object":(s.is||s.style)&&(o=(s=n(s)).offset())}var d=n.isFunction(i.offset)&&i.offset(c,s)||i.offset;n.each(i.axis.split(""),function(n,t){var r="x"==t?"Left":"Top",u=r.toLowerCase(),h="scroll"+r,m=c[h],g=e.max(c,t);if(o)f[h]=o[u]+(p?0:m-l.offset()[u]),i.margin&&(f[h]-=parseInt(s.css("margin"+r))||0,f[h]-=parseInt(s.css("border"+r+"Width"))||0),f[h]+=d[u]||0,i.over[u]&&(f[h]+=s["x"==t?"width":"height"]()*i.over[u]);else{var v=s[u];f[h]=v.slice&&"%"==v.slice(-1)?parseFloat(v)/100*g:v}i.limit&&/^\d+$/.test(f[h])&&(f[h]=f[h]<=0?0:Math.min(f[h],g)),!n&&i.queue&&(m!=f[h]&&a(i.onAfterFirst),delete f[h])}),a(i.onAfter)}}).end()},e.max=function(t,e){var r="x"==e?"Width":"Height",u="scroll"+r;if(!n(t).is("html,body"))return t[u]-n(t)[r.toLowerCase()]();var i="client"+r,a=t.ownerDocument.documentElement,o=t.ownerDocument.body;return Math.max(a[u],o[u])-Math.min(a[i],o[i])},e}),document.write("<style>body{display:none;}</style>"),jQuery(document).ready(function(){jQuery("input.search-field").addClass("form-control"),jQuery(".comment-reply-link").addClass("btn btn-primary"),jQuery("#commentsubmit").addClass("btn btn-primary"),jQuery("input.search-field").addClass("form-control"),jQuery("input.search-submit").addClass("btn btn-default"),jQuery(".widget_rss ul").addClass("media-list"),jQuery(".widget_meta ul, .widget_recent_entries ul, .widget_archive ul, .widget_categories ul, .widget_nav_menu ul, .widget_pages ul").addClass("nav"),jQuery(".widget_recent_comments ul#recentcomments").css("list-style","none").css("padding-left","0"),jQuery(".widget_recent_comments ul#recentcomments li").css("padding","5px 15px"),jQuery("table#wp-calendar").addClass("table table-striped"),jQuery(document.body).show()}),function(){jQuery(function(n){var t,e,r,u,i,a,o;return t=n("body"),t.hasClass("home")?(e=n('<div class="fadingBackground" />'),i=_.shuffle(["wp-content/uploads/backgrounds/1.jpg","wp-content/uploads/backgrounds/2.jpg","wp-content/uploads/backgrounds/3.jpg","wp-content/uploads/backgrounds/4.jpg"]),o=0,r=n('<div class="inner"/>'),u=n('<div class="inner"/>'),e.append(r).append(u),t.append(e),a=function(){var n,t,a;return n=e.find(".inner.active"),t=e.find(".inner:not(.active)"),0===n.length&&(n=r,t=u),a=i[o],t.css("background-image","url("+a+")"),o=(o+1)%i.length,n.removeClass("active"),t.addClass("active")},window.setInterval(a,8e3),_.defer(a)):void 0})}.call(this),function(){jQuery(function(n){return n(window).on("keypress",function(t){return 105===t.which?n("body").toggleClass("inverted"):void 0}),n(".logo, #menu-button").on("click",function(){return n("body").toggleClass("menu-visible")}),n(".omsc-toggle-title").on("click",function(){var t,e,r;return e=n(this),t=e.parent(),r=t.find(".royalSlider").data("royalSlider"),null!=r?_.defer(function(){return r.updateSliderSize()}):void 0})})}.call(this);