window.hasTouch=!!("ontouchstart"in window||"DocumentTouch"in window&&document instanceof window.DocumentTouch),window.oldIE=document.all&&!window.atob,document.documentElement.className+=(hasTouch?"":"no-")+"touch "+(oldIE?"old-ie":""),NodeList.prototype.forEach=HTMLCollection.prototype.forEach=Array.prototype.forEach,NodeList.prototype.indexOf=HTMLCollection.prototype.indexOf=Array.prototype.indexOf;
"document"in self&&("classList"in document.createElement("_")?!function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},a=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],f=function(){return new l(this)};if(a[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return t+="",-1!==c(this,t)},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",-1===c(this,t)&&(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=c(this,t);-1!==e;)this.splice(e,1),r=!0,e=c(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.toString=function(){return this.join(" ")},s.defineProperty){var h={get:f,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,h)}catch(g){-2146823252===g.number&&(h.enumerable=!1,s.defineProperty(i,e,h))}}else s[n].__defineGetter__&&i.__defineGetter__(e,f)}}(self));
!function(e,a,t,n,o,c,s){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,c=a.createElement(t),s=a.getElementsByTagName(t)[0],c.async=1,c.src=n,s.parentNode.insertBefore(c,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),location.hostname.match(/localhost|192.168/)||(ga("create","UA-61416169-1","auto"),ga("send","pageview"));
window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(n){window.setTimeout(n,1e3/30)}}();
!function(){function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.lastTouchIdentifier=this.touchStartY=this.touchStartX=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a="onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "),c=0,s=a.length;s>c;c++)this[a[c]]=i(this[a[c]],this);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=0<=navigator.userAgent.indexOf("Windows Phone"),n=0<navigator.userAgent.indexOf("Android")&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=0<navigator.userAgent.indexOf("BB10");t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(1<t.targetTouches.length)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){t=t.changedTouches[0];var e=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>e||Math.abs(t.pageY-this.touchStartY)>e?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,e=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(a=t.changedTouches[0],c=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)||c,c.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=c.tagName.toLowerCase(),"label"===a){if(e=this.findControl(c)){if(this.focus(c),n)return!1;c=e}}else if(this.needsFocus(c))return 100<t.timeStamp-e||o&&window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,t),o&&"select"===a||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(e=c.fastClickScrollParent)&&e.fastClickLastScrollTop!==e.scrollTop?!0:(this.needsClick(c)||(t.preventDefault(),this.sendClick(c,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement&&!t.forwardedTouchEvent&&t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0},t.prototype.onClick=function(t){return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(t=this.onMouse(t),t||(this.targetElement=null),t)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if((e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||o>31&&document.documentElement.scrollWidth<=window.outerWidth))return!0}return a&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),10<=e[1]&&3<=e[2]&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||27<=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),FastClick.attach(document.body);
NodeList.prototype.forEach=Array.prototype.forEach;
!function(){function t(t){var n=t.getBoundingClientRect();return 0===n.width?!1:n.bottom<0?!1:window.innerHeight-n.top<0?!1:!0}function n(){this.classList.remove("lazy-load")}function e(){for(var i=-1;++i<o.length;){var r=o[i];t(r)&&(r.onload=n,r.setAttribute("srcset",r.src),r.setAttribute("src",r.src))}requestAnimationFrame(function(){setTimeout(function(){e()},100)})}var o=document.getElementsByClassName("lazy-load");e()}();
document.querySelectorAll(".article-header__masthead").forEach(function(e){});
!function(){function e(n){n?(o.classList.add("site-container--show"),requestAnimationFrame(function(){o.onclick=function(n){t.contains(n.target)||e(!1)}})):(o.classList.remove("site-container--show"),o.onclick=null,o.ontouchstart=null)}var n=document.querySelector(".site-menu__button"),t=document.querySelector(".menu"),o=(document.querySelector(".site-search__input"),document.querySelector(".site-container"));n.onclick=function(n){n.preventDefault(),e(!0)},document.body.onkeyup=function(n){27===n.keyCode&&e(!1)}}();
!function(){var e=document.querySelector(".overlay"),o=document.querySelector(".overlay__close"),t=document.querySelector(".overlay__body > div"),n=document.querySelectorAll(".overlay__launch"),c=!!navigator.userAgent.match(/iPad|iPhone|iPod/),l=0;e.ontouchstart=function(e){c&&e.preventDefault()},o.onclick=function(e){e.preventDefault(),showOverlay(!1)},e.onclick=function(e){t.contains(e.target)||showOverlay(!1)},window.showOverlay=function(o){o?(l=window.scrollY,e.classList.add("overlay--show"),document.documentElement.classList.add("overlay--open")):(window.scrollTo(0,l),e.classList.remove("overlay--show"),document.documentElement.classList.remove("overlay--open"))},n.forEach(function(e){e.onclick=function(e){e.preventDefault(),t.className="overlay--is-"+this.getAttribute("data-type"),window.showOverlay(!0)}})}();
!function(){function t(t,e){return(10/(t+e)*t).toFixed(1)}var e=document.querySelector(".rate"),o=(document.querySelectorAll(".rate__vote"),document.querySelectorAll(".story-score"));o.forEach(function(n){var a=n.getAttribute("data-id")+"-1",r=parseInt(n.getAttribute("data-yes"),10),i=parseInt(n.getAttribute("data-no"),10),s={yes:r,no:i,voted:null};window.localStorage.getItem(a)&&(s=JSON.parse(window.localStorage.getItem(a)),e.setAttribute("data-voted",s.voted),s.yes+s.no>r+i&&(n.textContent=t(s.yes,s.no))),n.parentNode.parentNode.querySelectorAll(".rate__vote").forEach(function(r){r.onclick=function(r){r.preventDefault();var i=this.getAttribute("data-vote");"yes"===i&&(s.yes++,s.voted="yes",ga("send","pageview",location.pathname+"?action=voteup")),"no"===i&&(s.no++,s.voted="no",ga("send","pageview",location.pathname+"?action=votedown")),this.classList.add("rate__vote--voting"),n.classList.add("rate__score--voting"),setTimeout(function(){o.forEach(function(e){e.innerText=t(s.yes,s.no)}),this.classList.remove("rate__vote--voting")}.bind(this),1e3),window.localStorage.setItem(a,JSON.stringify(s)),e.setAttribute("data-voted",s.voted)}})})}();
!function(){function e(e){e=e.toLowerCase(),e=e.replace(/^the/,""),e=e.trim();var t=[];if(0===e.length)return t;searchLookUp.forEach(function(n){for(var c=-1;++c<n.tags.length;){var o=n.tags[c].trim().toLowerCase();if(0===o.indexOf(e)){t.push(n);break}}});var n="";return t.forEach(function(e){n+='<li><a onfocus="document.activeElementIndex = window.searchLinks.indexOf(this)" onblur="setTimeout(function(){if(document.activeElement.className!==\'site-search__item\'){window.showSearch(false)}}, 50)" class="site-search__item" href="/'+e.url+'/"><h5>'+e.title+"</h5><h6>"+e["sub-title"]+"</h6></a></li>"}),n}function t(e){40===e.keyCode&&(document.activeElementIndex++,document.activeElementIndex>searchLinks.length-1&&(document.activeElementIndex=0),searchLinks[document.activeElementIndex].focus()),38===e.keyCode&&(document.activeElementIndex--,document.activeElementIndex<0&&(document.activeElementIndex=searchLinks.length-1),searchLinks[document.activeElementIndex].focus())}var n=(document.querySelector(".site-search__button"),document.querySelector(".site-search"),document.querySelector(".site-search__input")),c=document.querySelector(".site-search__items"),o=document.querySelector(".site-search__results");window.searchLinks=c.getElementsByTagName("a");document.querySelector(".site-container");document.activeElementIndex=-1,window.showSearch=function(e){e?(c.innerHTML="",document.activeElementIndex=-1,document.body.onkeyup=t,o.classList.add("site-search__results--show")):(o.classList.remove("site-search__results--show"),document.body.onkeyup=null)},n.onfocus=function(e){showSearch(!0)},n.onblur=function(e){setTimeout(function(){"A"!==document.activeElement.tagName&&showSearch(!1)},50)},n.onkeyup=function(t){c.innerHTML=e(n.value),c.style.outline="10px solid orange"}}();
!function(){var e=document.querySelector(".overlay__body > div"),t=e.querySelector("input");document.querySelectorAll(".share-button").forEach(function(i){i.onclick=function(i){if(i.preventDefault(),ga("send","pageview",location.pathname+"?action=share"),this.href.match(/mailto/))return void(t.value.match(/@/)&&(this.href=this.href.replace(/someone@example.com/,t.value),window.open(this.href)));var o=e.getBoundingClientRect();window.open(this.href,"social",["width="+o.width,"height="+1.25*o.height,"top="+(screen.height/2-o.height/2),"left="+o.left].join(", "))}})}();
!function(){function e(){var e=200,t=function(o){if(o>1){var n=o-e;window.scroll(0,n),requestAnimationFrame(function(){t(n)})}};t(window.pageYOffset)}function t(){var e=window.pageYOffset,n=!1;setTimeout(function(){e!==window.pageYOffset?n||(requestAnimationFrame(function(){document.body.style.pointerEvents="none"}),n=!0):(requestAnimationFrame(function(){document.body.style.pointerEvents="all"}),n=!1),setTimeout(function(){requestAnimationFrame(t)},166)},200),e>300?o.classList.add("footer-top--show"):o.classList.remove("footer-top--show")}var o=(window.pageYOffset,document.querySelector(".site-header"),document.querySelector(".footer-top"));o.onclick=function(t){window.hasTouch||(t.preventDefault(),e(1e3/window.pageYOffset))},window.requestAnimationFrame&&t()}();

!function(){function e(e){var t='<a href="/#{related-url}" class="story story--related"><div class="story__image"><img srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" src="#{related-img}" data-srcset="#{related-img}" alt="#{related-title}" class="lazy-load"></div><h4 class="story__title">#{related-sub-title}</h4></a>';e=e.toLowerCase(),e=e.replace(/^the/,""),e=e.trim();var a=[];if(0===e.length)return a;searchLookUp.forEach(function(t){for(var r=-1;++r<t.tags.length;){var l=t.tags[r].trim().toLowerCase();if(0===l.indexOf(e)){a.push(t);break}}});var r="";return a.forEach(function(e){r+=t.replace(/#{related-url}/,e.url).replace(/#{related-img}/,e.image.replace("max/600","/fit/c/320/240")).replace(/#{related-sub-title}/,e["sub-title"])}),r}var t=document.querySelector(".search-tags-content");if(t){var a=location.pathname.replace(/\/$/,""),r=a.split("/").pop();r=r.split("-"),document.querySelector(".search-tags-name").textContent="'"+r.join(" ")+"'";var l=e(r[0]);t.innerHTML=l||"No matching stories"}}();