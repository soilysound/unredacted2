function showSearch(t){t?(searchBox.style.display="block",searchInput.focus(),requestAnimationFrame(function(){searchBox.classList.add("site-search--active"),searchInput.value="",document.querySelector(".site-search__results").innerHTML=""})):(searchBox.classList.remove("site-search--active"),setTimeout(function(){searchBox.style.display="none"},333))}function lookup(t){t=t.toLowerCase(),t=t.replace(/^the/,""),t=t.trim();var e=[];if(0===t.length)return e;searchLookUp.forEach(function(n){for(var o=-1;++o<n.tags.length;){var i=n.tags[o].trim().toLowerCase();if(0===i.indexOf(t)){console.log(n),e.push(n);break}}});var n="";return e.forEach(function(t){n+='<li><a class="site-search__results-row" href="/'+t.url+'"><span class="site-search__results-cell"></span> <span class="site-search__results-cell">'+[t.title,t["sub-title"]].join(" - ")+" </span></a></li>"}),n}!function(t,e,n,o,i,r,a){t.GoogleAnalyticsObject=i,t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].l=1*new Date,r=e.createElement(n),a=e.getElementsByTagName(n)[0],r.async=1,r.src=o,a.parentNode.insertBefore(r,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-61416169-1","auto"),ga("send","pageview"),function(){function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.lastTouchIdentifier=this.touchStartY=this.touchStartX=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a="onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "),c=0,s=a.length;s>c;c++)this[a[c]]=i(this[a[c]],this);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=0<=navigator.userAgent.indexOf("Windows Phone"),n=0<navigator.userAgent.indexOf("Android")&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=0<navigator.userAgent.indexOf("BB10");t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(1<t.targetTouches.length)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){t=t.changedTouches[0];var e=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>e||Math.abs(t.pageY-this.touchStartY)>e?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,e=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(a=t.changedTouches[0],c=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)||c,c.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=c.tagName.toLowerCase(),"label"===a){if(e=this.findControl(c)){if(this.focus(c),n)return!1;c=e}}else if(this.needsFocus(c))return 100<t.timeStamp-e||o&&window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,t),o&&"select"===a||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(e=c.fastClickScrollParent)&&e.fastClickLastScrollTop!==e.scrollTop?!0:(this.needsClick(c)||(t.preventDefault(),this.sendClick(c,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement&&!t.forwardedTouchEvent&&t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0},t.prototype.onClick=function(t){return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(t=this.onMouse(t),t||(this.targetElement=null),t)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if((e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||o>31&&document.documentElement.scrollWidth<=window.outerWidth))return!0}return a&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),10<=e[1]&&3<=e[2]&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||27<=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),"document"in self&&("classList"in document.createElement("_")?!function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,o=arguments.length;for(n=0;o>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",o=t.Element[n],i=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},s=function(t,e){if(""===e)throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],o=0,i=n.length;i>o;o++)this.push(n[o]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return t+="",-1!==s(this,t)},u.add=function(){var t,e=arguments,n=0,o=e.length,i=!1;do t=e[n]+"",-1===s(this,t)&&(this.push(t),i=!0);while(++n<o);i&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,o=0,i=n.length,r=!1;do for(t=n[o]+"",e=s(this,t);-1!==e;)this.splice(e,1),r=!0,e=s(this,t);while(++o<i);r&&this._updateClassName()},u.toggle=function(t,e){t+="";var n=this.contains(t),o=n?e!==!0&&"remove":e!==!1&&"add";return o&&this[o](t),e===!0||e===!1?e:!n},u.toString=function(){return this.join(" ")},i.defineProperty){var d={get:h,enumerable:!0,configurable:!0};try{i.defineProperty(o,e,d)}catch(f){-2146823252===f.number&&(d.enumerable=!1,i.defineProperty(o,e,d))}}else i[n].__defineGetter__&&o.__defineGetter__(e,h)}}(self)),FastClick.attach(document.body),function(){function t(t){var e=t.getBoundingClientRect();return 0===e.width?!1:e.bottom<0?!1:window.innerHeight-e.top<0?!1:!0}function e(){this.classList.remove("lazy-load")}function n(){for(var i=-1;++i<o.length;){var r=o[i];t(r)&&(r.onload=e,r.setAttribute("srcset",r.src),r.setAttribute("src",r.src))}requestAnimationFrame(function(){n()})}var o=document.getElementsByClassName("lazy-load");n()}();var search=document.querySelector(".search-nav"),searchBox=document.querySelector(".site-search"),searchInput=document.querySelector(".site-search__input");searchInput.onblur=function(t){setTimeout(function(){"A"!==document.activeElement.tagName&&showSearch(!1)},50)},search.onclick=function(t){showSearch(!0)},document.querySelectorAll(".rankings__row").forEach(function(t){t.onclick=function(){var e=t.querySelector("a");e&&(location.href=e.href)}}),function(){function t(t){return isNaN(parseInt(t,10))?t:parseFloat(t)}function e(){var e=parseInt(this.getAttribute("data-index"),10);o.forEach(function(t){t.classList.remove("is-sorted")}),this.classList.add("is-sorted"),this.classList.contains("rankings__col-sort")?(o.forEach(function(t){t.classList.remove("rankings__col-sort")}),r.sort(function(n,o){return t(n.querySelectorAll("td")[e].textContent)<t(o.querySelectorAll("td")[e].textContent)?-1:t(n.querySelectorAll("td")[e].textContent)>t(o.querySelectorAll("td")[e].textContent)?1:0})):(o.forEach(function(t){t.classList.remove("rankings__col-sort")}),r.sort(function(n,o){return t(n.querySelectorAll("td")[e].textContent)<t(o.querySelectorAll("td")[e].textContent)?1:t(n.querySelectorAll("td")[e].textContent)>t(o.querySelectorAll("td")[e].textContent)?-1:0}),this.classList.add("rankings__col-sort")),r.forEach(function(t){i.appendChild(t)})}var n=document.querySelector(".rankings");if(n){var o=n.querySelectorAll("th"),i=n.querySelector("tbody"),r=Array.prototype.slice.call(i.querySelectorAll("tr"));o.forEach(function(t,n){t.onclick=e});var a=location.hash;if(a){var c=document.querySelector(a+"-click");c&&c.click()}}}(),document.onkeyup=function(t){document.activeElement.onclick&&13===t.keyCode&&document.activeElement.click()};var autocomplete=document.querySelector(".site-search__input"),autocompleteResults=document.querySelector(".site-search__results");autocomplete.onkeyup=function(){autocompleteResults.innerHTML=lookup(autocomplete.value)};var searchTags=document.querySelector(".search-tags-content");if(searchTags){var path=location.pathname.replace(/\/$/,""),tag=path.split("/").pop();tag=tag.split("-"),document.querySelector(".search-tags-name").textContent="'"+tag.join(" ")+"'";var results=lookup(tag[0]);searchTags.innerHTML=results||"No matching stories"}!function(){var t=document.querySelector(".rating");if(t){var e=t.querySelectorAll(".rating__vote"),n=t.getAttribute("data-id"),o=t.querySelector(".rating__score"),i=parseInt(t.getAttribute("data-up-rates"),10),r=parseInt(t.getAttribute("data-down-rates"),10),a=window.localStorage.getItem(n);a?(a=JSON.parse(a),a.ups+a.downs>i+r&&(i=a.ups,r=a.downs,o.textContent=(100/(i+r)*i/10).toFixed(1)),t.setAttribute("data-rated",a.voted)):t.style.pointerEvents="all",e.forEach(function(e){e.onclick=function(e){if(e.preventDefault(),!t.getAttribute("data-rated")){var a=this.getAttribute("data-rate");t.style.pointerEvents="none",t.setAttribute("data-rated",a),this.classList.add("rate--pulse"),"up"===a?(i++,ga("send","pageview",location.pathname+"?action=voteup")):(r++,ga("send","pageview",location.pathname+"?action=votedown"));var c=(100/(i+r)*i/10).toFixed(1);c!==o.textContent&&(setTimeout(function(){o.textContent=c},1600),o.classList.add("rate__score--pulse"));var s={score:c,ups:i,downs:r,voted:a};window.localStorage.setItem(n,JSON.stringify(s))}}}),t.style.opacity=1}}(),function(){function t(t){t?(n=window.scrollY,o.classList.add("social-overlay--open"),document.documentElement.classList.add("disable-scroll")):(document.documentElement.classList.remove("disable-scroll"),window.hasTouch||window.scrollTo(0,n),requestAnimationFrame(function(){o.classList.remove("social-overlay--open")}))}var e=document.querySelector(".social-bar__link--share");if(e){var n=0,o=document.querySelector(".social-overlay"),i=o.querySelector(".social-overlay__inner"),r=o.querySelector(".social-overlay__close"),a=o.querySelector("input");o.ontouchstart=function(t){t.preventDefault()},o.onclick=function(e){i.contains(e.target)||t(!1)},r.onclick=function(e){e.preventDefault(),t(!1)},e.onclick=function(e){e.preventDefault(),t(!0)},a.onkeyup=function(t){this.value.match(/@/)&&13==t.keyCode&&this.parentNode.querySelector("a").click()},document.querySelectorAll(".social-overlay .social-overlay__link").forEach(function(t){t.onclick=function(t){if(ga("send","pageview",location.pathname+"?action=share"),this.href.match(/mailto/))return void(a.value.match(/@/)&&(this.href=this.href.replace(/someone@example.com/,a.value)));t.preventDefault();var e=i.getBoundingClientRect();window.open(this.href,"social",["width="+e.width,"height="+1.25*e.height,"top="+(screen.height/2-e.height/2),"left="+e.left].join(", "))}})}}();