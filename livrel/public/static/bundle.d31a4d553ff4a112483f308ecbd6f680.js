/* static/tocbot-4.9.1/tocbot.min.js */
!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){(function(o){var l,r,i;!function(n,o){r=[],l=o(n),void 0!==(i="function"==typeof l?l.apply(t,r):l)&&(e.exports=i)}(void 0!==o?o:this.window||this.global,function(e){"use strict";function t(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)m.call(n,o)&&(e[o]=n[o])}return e}function o(e,t,n){t||(t=250);var o,l;return function(){var r=n||this,i=+new Date,s=arguments;o&&i<o+t?(clearTimeout(l),l=setTimeout(function(){o=i,e.apply(r,s)},t)):(o=i,e.apply(r,s))}}var l,r,i=n(2),s={},c={},a=n(3),u=n(4),d=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"!=typeof window||d){var f,m=Object.prototype.hasOwnProperty;return c.destroy=function(){if(!s.skipRendering)try{document.querySelector(s.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+s.tocSelector)}s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).removeEventListener("resize",this._scrollListener,!1),l&&document.querySelector(s.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),l&&document.removeEventListener("click",this._clickListener,!1))},c.init=function(e){if(d&&(s=t(i,e||{}),this.options=s,this.state={},s.scrollSmooth&&(s.duration=s.scrollSmoothDuration,s.offset=s.scrollSmoothOffset,c.scrollSmooth=n(5).initSmoothScrolling(s)),l=a(s),r=u(s),this._buildHtml=l,this._parseContent=r,c.destroy(),null!==(f=r.selectHeadings(s.contentSelector,s.headingSelector)))){var m=r.nestHeadingsArray(f),h=m.nest;s.skipRendering||l.render(s.tocSelector,h),this._scrollListener=o(function(e){l.updateToc(f);var t=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||t)&&(l.updateToc(f),s.scrollEndCallback&&s.scrollEndCallback(e))},s.throttleTimeout),this._scrollListener(),s.scrollContainer&&document.querySelector(s.scrollContainer)?(document.querySelector(s.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(s.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var p=null;return this._clickListener=o(function(e){s.scrollSmooth&&l.disableTocAnimation(e),l.updateToc(f),p&&clearTimeout(p),p=setTimeout(function(){l.enableTocAnimation()},s.scrollSmoothDuration)},s.throttleTimeout),s.scrollContainer&&document.querySelector(s.scrollContainer)?document.querySelector(s.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},c.refresh=function(e){c.destroy(),c.init(e||this.options)},e.tocbot=c,c}})}).call(t,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null,skipRendering:!1}},function(e,t){e.exports=function(e){function t(e,n){var r=n.appendChild(o(e));if(e.children.length){var i=l(e.isCollapsed);e.children.forEach(function(e){t(e,i)}),r.appendChild(i)}}function n(e,n){var o=l(!1);n.forEach(function(e){t(e,o)});var r=document.querySelector(e);if(null!==r)return r.firstChild&&r.removeChild(r.firstChild),0===n.length?r:r.appendChild(o)}function o(t){var n=document.createElement("li"),o=document.createElement("a");return e.listItemClass&&n.setAttribute("class",e.listItemClass),e.onClick&&(o.onclick=e.onClick),e.includeHtml&&t.childNodes.length?d.call(t.childNodes,function(e){o.appendChild(e.cloneNode(!0))}):o.textContent=t.textContent,o.setAttribute("href","#"+t.id),o.setAttribute("class",e.linkClass+p+"node-name--"+t.nodeName+p+e.extraLinkClasses),n.appendChild(o),n}function l(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),l=e.listClass+p+e.extraListClasses;return t&&(l+=p+e.collapsibleClass,l+=p+e.isCollapsedClass),o.setAttribute("class",l),o}function r(){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var t=document.querySelector(e.scrollContainer).scrollTop;else var t=document.documentElement.scrollTop||m.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=p+e.positionFixedClass):n.className=n.className.split(p+e.positionFixedClass).join("")}function i(t){var n=0;return t!=document.querySelector(e.contentSelector&&null!=t)&&(n=t.offsetTop,e.hasInnerContainers&&(n+=i(t.offsetParent))),n}function s(t){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var n=document.querySelector(e.scrollContainer).scrollTop;else var n=document.documentElement.scrollTop||m.scrollTop;e.positionFixedSelector&&r();var o,l=t;if(h&&null!==document.querySelector(e.tocSelector)&&l.length>0){f.call(l,function(t,r){if(i(t)>n+e.headingsOffset+10){return o=l[0===r?r:r-1],!0}if(r===l.length-1)return o=l[l.length-1],!0});var s=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);d.call(s,function(t){t.className=t.className.split(p+e.activeLinkClass).join("")});var a=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);d.call(a,function(t){t.className=t.className.split(p+e.activeListItemClass).join("")});var u=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+o.nodeName+'[href="#'+o.id+'"]');-1===u.className.indexOf(e.activeLinkClass)&&(u.className+=p+e.activeLinkClass);var C=u.parentNode;C&&-1===C.className.indexOf(e.activeListItemClass)&&(C.className+=p+e.activeListItemClass);var v=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);d.call(v,function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=p+e.isCollapsedClass)}),u.nextSibling&&-1!==u.nextSibling.className.indexOf(e.isCollapsedClass)&&(u.nextSibling.className=u.nextSibling.className.split(p+e.isCollapsedClass).join("")),c(u.parentNode.parentNode)}}function c(t){return-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(p+e.isCollapsedClass).join(""),c(t.parentNode.parentNode)):t}function a(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(h=!1)}function u(){h=!0}var d=[].forEach,f=[].some,m=document.body,h=!0,p=" ";return{enableTocAnimation:u,disableTocAnimation:a,render:n,updateToc:s}}},function(e,t){e.exports=function(e){function t(e){return e[e.length-1]}function n(e){return+e.nodeName.split("H").join("")}function o(t){var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:n(t),textContent:e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim()};return e.includeHtml&&(o.childNodes=t.childNodes),o}function l(l,r){for(var i=o(l),s=n(l),c=r,a=t(c),u=a?a.headingLevel:0,d=s-u;d>0;)a=t(c),a&&void 0!==a.children&&(c=a.children),d--;return s>=e.collapseDepth&&(i.isCollapsed=!0),c.push(i),c}function r(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(o)}catch(e){return console.warn("Element not found: "+t),null}}function i(e){return s.call(e,function(e,t){return l(o(t),e.nest),e},{nest:[]})}var s=[].reduce;return{nestHeadingsArray:i,selectHeadings:r}}},function(e,t){function n(e){function t(e){return"a"===e.tagName.toLowerCase()&&(e.hash.length>0||"#"===e.href.charAt(e.href.length-1))&&(n(e.href)===s||n(e.href)+"#"===s)}function n(e){return e.slice(0,e.lastIndexOf("#"))}function l(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}!function(){document.documentElement.style}();var r=e.duration,i=e.offset,s=location.hash?n(location.href):location.href;!function(){function n(n){!t(n.target)||n.target.className.indexOf("no-smooth-scroll")>-1||"#"===n.target.href.charAt(n.target.href.length-2)&&"!"===n.target.href.charAt(n.target.href.length-1)||-1===n.target.className.indexOf(e.linkClass)||o(n.target.hash,{duration:r,offset:i,callback:function(){l(n.target.hash)}})}document.body.addEventListener("click",n,!1)}()}function o(e,t){function n(e){i=e-r,window.scrollTo(0,c.easing(i,s,u,d)),i<d?requestAnimationFrame(n):o()}function o(){window.scrollTo(0,s+u),"function"==typeof c.callback&&c.callback()}function l(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}var r,i,s=window.pageYOffset,c={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||l},a=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),u="string"==typeof e?c.offset+(e?a&&a.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,d="function"==typeof c.duration?c.duration(u):c.duration;requestAnimationFrame(function(e){r=e,n(e)})}t.initSmoothScrolling=n}]);

/* static/mark-js-8.11.1/mark.es6.min.js */
/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";class e{constructor(e,t=!0,s=[],r=5e3){this.ctx=e,this.iframes=t,this.exclude=s,this.iframesTimeout=r}static matches(e,t){const s="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){let t=!1;return s.every(s=>!r.call(e,s)||(t=!0,!1)),t}return!1}getContexts(){let e,t=[];return(e=void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(e=>{const s=t.filter(t=>t.contains(e)).length>0;-1!==t.indexOf(e)||s||t.push(e)}),t}getIframeContents(e,t,s=(()=>{})){let r;try{const t=e.contentWindow;if(r=t.document,!t||!r)throw new Error("iframe inaccessible")}catch(e){s()}r&&t(r)}isIframeBlank(e){const t="about:blank",s=e.getAttribute("src").trim(),r=e.contentWindow.location.href;return r===t&&s!==t&&s}observeIframeLoad(e,t,s){let r=!1,i=null;const o=()=>{if(!r){r=!0,clearTimeout(i);try{this.isIframeBlank(e)||(e.removeEventListener("load",o),this.getIframeContents(e,t,s))}catch(e){s()}}};e.addEventListener("load",o),i=setTimeout(o,this.iframesTimeout)}onIframeReady(e,t,s){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,s):this.getIframeContents(e,t,s):this.observeIframeLoad(e,t,s)}catch(e){s()}}waitForIframes(e,t){let s=0;this.forEachIframe(e,()=>!0,e=>{s++,this.waitForIframes(e.querySelector("html"),()=>{--s||t()})},e=>{e||t()})}forEachIframe(t,s,r,i=(()=>{})){let o=t.querySelectorAll("iframe"),n=o.length,a=0;o=Array.prototype.slice.call(o);const c=()=>{--n<=0&&i(a)};n||c(),o.forEach(t=>{e.matches(t,this.exclude)?c():this.onIframeReady(t,e=>{s(t)&&(a++,r(e)),c()},c)})}createIterator(e,t,s){return document.createNodeIterator(e,t,s,!1)}createInstanceOnIframe(t){return new e(t.querySelector("html"),this.iframes)}compareNodeIframe(e,t,s){const r=e.compareDocumentPosition(s),i=Node.DOCUMENT_POSITION_PRECEDING;if(r&i){if(null===t)return!0;if(t.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}getIteratorNode(e){const t=e.previousNode();let s;return{prevNode:t,node:s=null===t?e.nextNode():e.nextNode()&&e.nextNode()}}checkIframeFilter(e,t,s,r){let i=!1,o=!1;return r.forEach((e,t)=>{e.val===s&&(i=t,o=e.handled)}),this.compareNodeIframe(e,t,s)?(!1!==i||o?!1===i||o||(r[i].handled=!0):r.push({val:s,handled:!0}),!0):(!1===i&&r.push({val:s,handled:!1}),!1)}handleOpenIframes(e,t,s,r){e.forEach(e=>{e.handled||this.getIframeContents(e.val,e=>{this.createInstanceOnIframe(e).forEachNode(t,s,r)})})}iterateThroughNodes(e,t,s,r,i){const o=this.createIterator(t,e,r);let n,a,c=[],h=[],l=()=>(({prevNode:a,node:n}=this.getIteratorNode(o)),n);for(;l();)this.iframes&&this.forEachIframe(t,e=>this.checkIframeFilter(n,a,e,c),t=>{this.createInstanceOnIframe(t).forEachNode(e,e=>h.push(e),r)}),h.push(n);h.forEach(e=>{s(e)}),this.iframes&&this.handleOpenIframes(c,e,s,r),i()}forEachNode(e,t,s,r=(()=>{})){const i=this.getContexts();let o=i.length;o||r(),i.forEach(i=>{const n=()=>{this.iterateThroughNodes(e,i,t,s,()=>{--o<=0&&r()})};this.iframes?this.waitForIframes(i,n):n()})}}class t{constructor(e){this.ctx=e,this.ie=!1;const t=window.navigator.userAgent;(t.indexOf("MSIE")>-1||t.indexOf("Trident")>-1)&&(this.ie=!0)}set opt(e){this._opt=Object.assign({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:()=>{},noMatch:()=>{},filter:()=>!0,done:()=>{},debug:!1,log:window.console},e)}get opt(){return this._opt}get iterator(){return new e(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}log(e,t="debug"){const s=this.opt.log;this.opt.debug&&"object"==typeof s&&"function"==typeof s[t]&&s[t](`mark.js: ${e}`)}escapeStr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}createRegExp(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}createSynonymsRegExp(e){const t=this.opt.synonyms,s=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(let i in t)if(t.hasOwnProperty(i)){const o=t[i],n="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o);""!==n&&""!==a&&(e=e.replace(new RegExp(`(${this.escapeStr(n)}|${this.escapeStr(a)})`,`gm${s}`),r+`(${this.processSynomyms(n)}|`+`${this.processSynomyms(a)})`+r))}return e}processSynomyms(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}setupWildcardsRegExp(e){return(e=e.replace(/(?:\\)*\?/g,e=>"\\"===e.charAt(0)?"?":"")).replace(/(?:\\)*\*/g,e=>"\\"===e.charAt(0)?"*":"")}createWildcardsRegExp(e){let t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}setupIgnoreJoinersRegExp(e){return e.replace(/[^(|)\\]/g,(e,t,s)=>{let r=s.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}createJoinersRegExp(e){let t=[];const s=this.opt.ignorePunctuation;return Array.isArray(s)&&s.length&&t.push(this.escapeStr(s.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join(`[${t.join("")}]*`):e}createDiacriticsRegExp(e){const t=this.opt.caseSensitive?"":"i",s=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"];let r=[];return e.split("").forEach(i=>{s.every(s=>{if(-1!==s.indexOf(i)){if(r.indexOf(s)>-1)return!1;e=e.replace(new RegExp(`[${s}]`,`gm${t}`),`[${s}]`),r.push(s)}return!0})}),e}createMergedBlanksRegExp(e){return e.replace(/[\s]+/gim,"[\\s]+")}createAccuracyRegExp(e){const t="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿";let s=this.opt.accuracy,r="string"==typeof s?s:s.value,i="string"==typeof s?[]:s.limiters,o="";switch(i.forEach(e=>{o+=`|${this.escapeStr(e)}`}),r){case"partially":default:return`()(${e})`;case"complementary":return`()([^${o="\\s"+(o||this.escapeStr(t))}]*${e}[^${o}]*)`;case"exactly":return`(^|\\s${o})(${e})(?=$|\\s${o})`}}getSeparatedKeywords(e){let t=[];return e.forEach(e=>{this.opt.separateWordSearch?e.split(" ").forEach(e=>{e.trim()&&-1===t.indexOf(e)&&t.push(e)}):e.trim()&&-1===t.indexOf(e)&&t.push(e)}),{keywords:t.sort((e,t)=>t.length-e.length),length:t.length}}isNumeric(e){return Number(parseFloat(e))==e}checkRanges(e){if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];const t=[];let s=0;return e.sort((e,t)=>e.start-t.start).forEach(e=>{let{start:r,end:i,valid:o}=this.callNoMatchOnInvalidRanges(e,s);o&&(e.start=r,e.length=i-r,t.push(e),s=i)}),t}callNoMatchOnInvalidRanges(e,t){let s,r,i=!1;return e&&void 0!==e.start?(r=(s=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-s>0?i=!0:(this.log("Ignoring invalid or overlapping range: "+`${JSON.stringify(e)}`),this.opt.noMatch(e))):(this.log(`Ignoring invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)),{start:s,end:r,valid:i}}checkWhitespaceRanges(e,t,s){let r,i=!0,o=s.length,n=t-o,a=parseInt(e.start,10)-n;return(r=(a=a>o?o:a)+parseInt(e.length,10))>o&&(r=o,this.log(`End range automatically set to the max value of ${o}`)),a<0||r-a<0||a>o||r>o?(i=!1,this.log(`Invalid range: ${JSON.stringify(e)}`),this.opt.noMatch(e)):""===s.substring(a,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:a,end:r,valid:i}}getTextNodes(e){let t="",s=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,e=>{s.push({start:t.length,end:(t+=e.textContent).length,node:e})},e=>this.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT,()=>{e({value:t,nodes:s})})}matchesExclude(t){return e.matches(t,this.opt.exclude.concat(["script","style","title","head","html"]))}wrapRangeInTextNode(e,t,s){const r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),o=i.splitText(s-t);let n=document.createElement(r);return n.setAttribute("data-markjs","true"),this.opt.className&&n.setAttribute("class",this.opt.className),n.textContent=i.textContent,i.parentNode.replaceChild(n,i),o}wrapRangeInMappedTextNode(e,t,s,r,i){e.nodes.every((o,n)=>{const a=e.nodes[n+1];if(void 0===a||a.start>t){if(!r(o.node))return!1;const a=t-o.start,c=(s>o.end?o.end:s)-o.start,h=e.value.substr(0,o.start),l=e.value.substr(c+o.start);if(o.node=this.wrapRangeInTextNode(o.node,a,c),e.value=h+l,e.nodes.forEach((t,s)=>{s>=n&&(e.nodes[s].start>0&&s!==n&&(e.nodes[s].start-=c),e.nodes[s].end-=c)}),s-=c,i(o.node.previousSibling,o.start),!(s>o.end))return!1;t=o.end}return!0})}wrapMatches(e,t,s,r,i){const o=0===t?0:t+1;this.getTextNodes(t=>{t.nodes.forEach(t=>{let i;for(t=t.node;null!==(i=e.exec(t.textContent))&&""!==i[o];){if(!s(i[o],t))continue;let n=i.index;if(0!==o)for(let e=1;e<o;e++)n+=i[e].length;t=this.wrapRangeInTextNode(t,n,n+i[o].length),r(t.previousSibling),e.lastIndex=0}}),i()})}wrapMatchesAcrossElements(e,t,s,r,i){const o=0===t?0:t+1;this.getTextNodes(t=>{let n;for(;null!==(n=e.exec(t.value))&&""!==n[o];){let i=n.index;if(0!==o)for(let e=1;e<o;e++)i+=n[e].length;const a=i+n[o].length;this.wrapRangeInMappedTextNode(t,i,a,e=>s(n[o],e),(t,s)=>{e.lastIndex=s,r(t)})}i()})}wrapRangeFromIndex(e,t,s,r){this.getTextNodes(i=>{const o=i.value.length;e.forEach((e,r)=>{let{start:n,end:a,valid:c}=this.checkWhitespaceRanges(e,o,i.value);c&&this.wrapRangeInMappedTextNode(i,n,a,s=>t(s,e,i.value.substring(n,a),r),t=>{s(t,e)})}),r()})}unwrapMatches(e){const t=e.parentNode;let s=document.createDocumentFragment();for(;e.firstChild;)s.appendChild(e.removeChild(e.firstChild));t.replaceChild(s,e),this.ie?this.normalizeTextNode(t):t.normalize()}normalizeTextNode(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}markRegExp(e,t){this.opt=t,this.log(`Searching with expression "${e}"`);let s=0,r="wrapMatches";const i=e=>{s++,this.opt.each(e)};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),this[r](e,this.opt.ignoreGroups,(e,t)=>this.opt.filter(t,e,s),i,()=>{0===s&&this.opt.noMatch(e),this.opt.done(s)})}mark(e,t){this.opt=t;let s=0,r="wrapMatches";const{keywords:i,length:o}=this.getSeparatedKeywords("string"==typeof e?[e]:e),n=this.opt.caseSensitive?"":"i",a=e=>{let t=new RegExp(this.createRegExp(e),`gm${n}`),c=0;this.log(`Searching with expression "${t}"`),this[r](t,1,(t,r)=>this.opt.filter(r,e,s,c),e=>{c++,s++,this.opt.each(e)},()=>{0===c&&this.opt.noMatch(e),i[o-1]===e?this.opt.done(s):a(i[i.indexOf(e)+1])})};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),0===o?this.opt.done(s):a(i[0])}markRanges(e,t){this.opt=t;let s=0,r=this.checkRanges(e);r&&r.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(r)),this.wrapRangeFromIndex(r,(e,t,s,r)=>this.opt.filter(e,t,s,r),(e,t)=>{s++,this.opt.each(e,t)},()=>{this.opt.done(s)})):this.opt.done(s)}unmark(t){this.opt=t;let s=this.opt.element?this.opt.element:"*";s+="[data-markjs]",this.opt.className&&(s+=`.${this.opt.className}`),this.log(`Removal selector "${s}"`),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,e=>{this.unwrapMatches(e)},t=>{const r=e.matches(t,s),i=this.matchesExclude(t);return!r||i?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}}return function(e){const s=new t(e);return this.mark=((e,t)=>(s.mark(e,t),this)),this.markRegExp=((e,t)=>(s.markRegExp(e,t),this)),this.markRanges=((e,t)=>(s.markRanges(e,t),this)),this.unmark=(e=>(s.unmark(e),this)),this}});

/* static/js/utils.js */
function reScroll() {
    /* Waiting for tocboc to do its own scroll then scroll up a bit
       because of the sticky/fixed header. Fragile. */
    setTimeout(() => {
        window.scrollTo({
            top: window.scrollY - 130,
            behavior: 'smooth',
        })
    }, 800)
}

function getSetting(name) {
    const content = document
        .querySelector(`meta[property="pressoir:${name}"]`)
        .getAttribute('content')
    return content.split(',').map((item) => item.trim())
}

/* static/js/toc.js */
const HEADING_SELECTORS = 'h1, h2, summary'

function generateHeadingsIds() {
  const content = document.querySelector('article')
  const headings = content.querySelectorAll(HEADING_SELECTORS)
  const headingMap = {}

  Array.from(headings).forEach((heading) => {
    const id = heading.id
      ? heading.id
      : heading.textContent
          // Replace all accents with non-accentuated versions.
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim()
          .toLowerCase()
          .replace('\n', '')
          .split(' ')
          .filter((s) => s)
          .join('-')
          // Replace special chars, order matters: keep space at the end.
          .replace(/[\?\!\@\#\$\%\^\&\*\(\)‘’“”«»,.…;:\s]/gi, '')
    headingMap[id] = !isNaN(headingMap[id]) ? ++headingMap[id] : 0
    if (headingMap[id]) {
      heading.id = id + '-' + headingMap[id]
    } else {
      heading.id = id
    }
  })
}

function openReferencesOnClick() {
  const referencesLink = document.querySelector('.toc a[href="#references"]')
  const references = document.querySelector('#references')
  if (!referencesLink || !references) return
  referencesLink.addEventListener('click', (e) => {
    const anchor = e.target.getAttribute('href')
    const target = document.querySelector(anchor)
    target.parentElement.setAttribute('open', 'open')
    reScroll()
  })
  // In case we already have the references target in the URL on load,
  // simulate a click in order to expand the details/summary content.
  const url = new URL(window.location.href)
  if (url.hash === '#references') {
    referencesLink.click()
    reScroll()
  } else if (url.hash.startsWith('#ref-')) {
    reScroll()
  } else {
    references.parentElement.removeAttribute('open')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateHeadingsIds() // Useful to tocbot.
  tocbot.init({
    tocSelector: '.toc',
    contentSelector: 'article',
    headingSelector: HEADING_SELECTORS,
    // Useful to determine when to highlight the element in the toc given
    // the position of the scroll, with a higher value than just under the
    // sticky header, it gives room for small sections at the bottom of
    // the page. And we do not have to reScroll.
    headingsOffset: 200,
    // Shorten the items of the menu and add ellipsis.
    headingLabelCallback: (text) => {
      text = text.trim()
      const max = 60
      return text.substr(0, max - 1) + (text.length + 1 > max ? '…' : '')
    },
    // Expand contenuadd on click and scroll a bit up in this case,
    // otherwise the target is hidden by the fixed topbar.
    onClick: (e) => {
      const target = document.querySelector(e.target.hash)
      const parent = target.parentElement
      if (parent.classList.contains('contenuadd')) {
        parent.classList.add('expanded')
      }
    },
  })
  openReferencesOnClick()
})

/* static/js/navigation.js */
document.addEventListener('DOMContentLoaded', () => {
  /* Navigation with the link from the header. */
  const mainNav = document.querySelector('header.main nav[aria-role="main"]')
  const titleLink = document.querySelector('header.main h2 a')
  window.addEventListener('click', e => {
    if (!mainNav.contains(event.target) && event.target !== titleLink) {
      mainNav.classList.remove('opened')
    }
  })
  titleLink.addEventListener('click', e => {
    e.preventDefault()
    mainNav.classList.toggle('opened')
  })

  /* Scroll on anchors to avoid being hidden by sticky header. */
  const url = new URL(window.location.href)
  if (url.hash !== "") {
    reScroll()
  }
})

window.addEventListener('hashchange', () => {
  reScroll()
})

/* static/js/contenuadd.js */
document.addEventListener('DOMContentLoaded', () => {
    const contenuaddTitles = document.querySelectorAll('.contenuadd.lowpriority > h3')
    /* Expand contenuadd with lowpriority on title click. */
    for (const contenuaddTitle of contenuaddTitles) {
        contenuaddTitle.addEventListener('click', (e) => {
            const section = e.target.closest('section')
            section.classList.toggle('expanded')
            e.preventDefault()
        })
    }

    // Expand all contenuadds and set a target class if anchor matches.
    const currentAnchor = document.location.hash ? document.location.hash.slice(1) : ''
    const contenuadds = document.querySelectorAll('.contenuadd.lowpriority')
    for (const contenuadd of contenuadds) {
        if (contenuadd.id === currentAnchor) {
            contenuadd.classList.toggle('expanded')
        }
    }
})

/* static/js/references.js */
function zip(rows) {
    return rows[0].map((_, index) => rows.map((row) => row[index]))
}

function transformCitation(citation) {
    const cites = citation.dataset.cites
    let content = citation.textContent
    if (!content) {
        return
    }
    const hasParenthesis = content.startsWith('(') && content.endsWith(')')
    if (hasParenthesis) {
        content = content.slice(1, -1)
    }
    if (cites === '') {
        return
    }
    let citations
    if (cites.indexOf(' ') > -1) {
        if (content.indexOf(';') === -1) {
            return
        }
        const linkCitations = []
        const citesSplit = cites.split(' ')
        let innerSplit = content.split(';')
        // Handle the case when we have `(Klein and Konieczny 2015a, 2015b; 2018)`,
        // really fragile, especially when we have multiple authors like:
        // `(Faragher 2005; Griffiths 2005; Hodson 2012; Kennedy 2014; Reid, Basque, and Mancke 2004)`
        // The combination of the two cases will fail but will it really happen?
        if (citesSplit.length !== innerSplit.length) {
            innerSplit = innerSplit.flatMap((item) => item.split(','))
        }
        for (const [cite, inner] of zip([citesSplit, innerSplit])) {
            // Should not happen but at least it does not break badly.
            if (inner) {
                const linkCitation = document.createElement('a')
                linkCitation.setAttribute('href', `#ref-${cite}`)
                linkCitation.textContent = inner.trim()
                linkCitations.push(linkCitation.outerHTML)
            }
        }
        citations = linkCitations.join(', ')
    } else {
        const linkCitation = document.createElement('a')
        linkCitation.setAttribute('href', `#ref-${cites}`)
        linkCitation.textContent = content.trim()
        citations = linkCitation.outerHTML
    }
    if (hasParenthesis) {
        citations = `(${citations})`
    }
    citation.innerHTML = citations
}

function capitalize(string) {
    return string.replace(/\b\w/g, (c) => c.toUpperCase())
}

function handleReference(referenceLink, reference, fromBibliography) {
    const content = reference.textContent
        .trim()
        .replace(/(?:https?|ftp):\/\/[\n\S]+/g, '') // Remove links.
    let onelinerContent = content
        .split('\n')
        .map((fragment) => fragment.trim()) // Remove new lines.
        .join(' ')
    if (onelinerContent.startsWith('———.')) {
        const ref = document.querySelector(referenceLink.hash)
        let previousRef = ref.previousElementSibling
        let previousRefContent = previousRef.textContent.trim()
        while (previousRefContent.startsWith('———.')) {
            previousRef = previousRef.previousElementSibling
            previousRefContent = previousRef.textContent.trim()
        }
        const previousNames = previousRefContent.split('.')[0].trim()
        onelinerContent = onelinerContent.replace('———.', `${previousNames}.`)
    }
    if (fromBibliography) {
        referenceLink.href = `bibliographie.html${referenceLink.hash}`
    }
    referenceLink.setAttribute('aria-label', onelinerContent)
    const balloonLength = window.screen.width < 760 ? 'medium' : 'xlarge'
    referenceLink.dataset.balloonLength = balloonLength

    /* Open references on click. */
    referenceLink.addEventListener('click', (e) => {
        references.parentElement.setAttribute('open', 'open')
        // Waiting to reach the bottom of the page then scroll up a bit
        // to avoid the fixed header. Fragile.
        setTimeout(() => {
            window.scrollTo({
                top: window.scrollY - 130,
                behavior: 'smooth',
            })
        }, 10)
    })
}

function tooltipReference(referenceLink) {
    /* Put attributes for balloon.css to render tooltips. */
    const reference = document.querySelector(referenceLink.hash)
    if (reference) {
        handleReference(referenceLink, reference)
    } else {
        fetch('bibliographie.html')
            .then((response) => response.text())
            .then((body) => {
                const tempDiv = document.createElement('div')
                tempDiv.innerHTML = body
                return tempDiv.querySelector(referenceLink.hash)
            })
            .then((reference) => handleReference(referenceLink, reference, true))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const references = document.querySelector('#references')
    const chapter = document.body.dataset.chapitre
    if (!chapter || !references) {
        return
    }

    /* Transform citations from contenuadd (converted as <span>s by Pandoc
     because we set `suppress-bibliography` to true). */
    Array.from(document.querySelectorAll('[data-cites]')).forEach(transformCitation)

    /* Setup balloons tooltips for references. */
    Array.from(document.querySelectorAll('[href^="#ref-"]')).forEach(tooltipReference)
})

/* static/js/termeenrichi.js */
document.addEventListener('DOMContentLoaded', () => {
    function extractHostname(link) {
        const url = new URL(link)
        return url.hostname.replace('www.', '')
    }

    function markdownEmphasis(value) {
        const emphasisSeparator = '*'
        if (value.indexOf(emphasisSeparator) > -1) {
            const [pre, term, post] = value.split(emphasisSeparator, 3)
            value = `${pre}<em>${term}</em>${post}`
        }
        return value
    }

    function buildTooltip(termeEnrichi, classlist) {
        const dataset = termeEnrichi.dataset

        let title = markdownEmphasis(dataset.idsp) || ''
        const firstChild = termeEnrichi.firstChild
        if (firstChild.tagName === 'A') {
            title = `<a href="${firstChild.href}">${markdownEmphasis(dataset.idsp)}</a>`
            if (firstChild.dataset.linkArchive) {
                title += `
          (<a href="${firstChild.dataset.linkArchive}">${extractHostname(
              firstChild.dataset.linkArchive
          )}</a>)
        `
            } else {
            }
        }

        let ref = ''
        const idref =
            dataset.idwiki || dataset.idbnf || dataset.idorcid || dataset.idreference

        if (idref) {
            ref = `<div class="tooltip-ref">Réf. :
        <a href="${idref}"
           title="Accéder à la référence distante"
          >${extractHostname(idref)}</a>
      </div>`
        }
        let extras = ''
        const idglossaire = dataset.idglossaire
        if (idglossaire) {
            const label = getSetting('glossaire-button-label')
            const title = getSetting('glossaire-button-title')
            extras = `<a href="${idglossaire}" title="${title}">${label}</a>`
        }
        let extraTitle = ''
        const idbibs = dataset.idbib
        if (idbibs) {
            idbibs.split(';').forEach((idbib) => {
                const refbib = idbib.trim().substring(1).split(',', 1)[0]
                extraTitle += `
                    <span class="citation" data-cites="${refbib}">
                        <a href="#ref-${refbib}" role="doc-biblioref">réf.</a>
                    </span>
                `
            })
        }

        return `
      <div class="${classlist[0]} termeenrichi">
        <div class="tooltip-title">${title}${extraTitle}</div>
        <div class="tooltip-index">
          <a href="index-np.html#${classlist[1]}"
             title="Consulter la référence dans l’index de l’ouvrage"
            >Voir dans l’index</a> ${extras}
        </div>
        ${ref}
      </div>
    `.trim()
    }

    const indexes = getSetting('indexes')
    const indexesSelector = indexes.map((index) => `span.${index}`).join(',')

    Array.from(document.querySelectorAll(indexesSelector)).forEach((termeEnrichi) => {
        const classlist = termeEnrichi.classList
        termeEnrichi.addEventListener('click', (e) => {
            e.preventDefault()
            if (classlist.contains('expanded')) {
                const tooltip = termeEnrichi.nextSibling
                termeEnrichi.parentElement.removeChild(tooltip)
                classlist.remove('expanded')
            } else {
                termeEnrichi.insertAdjacentHTML(
                    'afterend',
                    buildTooltip(termeEnrichi, classlist)
                )
                const tooltip = termeEnrichi.nextElementSibling
                Array.from(tooltip.querySelectorAll('[data-cites]')).forEach(
                    transformCitation
                )
                Array.from(tooltip.querySelectorAll('[href^="#ref-"]')).forEach(
                    tooltipReference
                )
                classlist.add('expanded')
            }
        })
    })
})
