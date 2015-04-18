// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61416169-1', 'auto');
ga('send', 'pageview');

/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
(function(){function e(a,b){function c(a,b){return function(){return a.apply(b,arguments)}}var d;b=b||{};this.trackingClick=!1;this.trackingClickStart=0;this.targetElement=null;this.lastTouchIdentifier=this.touchStartY=this.touchStartX=0;this.touchBoundary=b.touchBoundary||10;this.layer=a;this.tapDelay=b.tapDelay||200;this.tapTimeout=b.tapTimeout||700;if(!e.notNeeded(a)){for(var f="onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "),h=0,k=f.length;h<k;h++)this[f[h]]=c(this[f[h]],
this);g&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0));a.addEventListener("click",this.onClick,!0);a.addEventListener("touchstart",this.onTouchStart,!1);a.addEventListener("touchmove",this.onTouchMove,!1);a.addEventListener("touchend",this.onTouchEnd,!1);a.addEventListener("touchcancel",this.onTouchCancel,!1);Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;
"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)});"function"===typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var k=0<=navigator.userAgent.indexOf("Windows Phone"),g=0<navigator.userAgent.indexOf("Android")&&!k,f=/iP(ad|hone|od)/.test(navigator.userAgent)&&!k,l=
f&&/OS 4_\d(_\d)?/.test(navigator.userAgent),m=f&&/OS [6-7]_\d/.test(navigator.userAgent),n=0<navigator.userAgent.indexOf("BB10");e.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case "button":case "select":case "textarea":if(a.disabled)return!0;break;case "input":if(f&&"file"===a.type||a.disabled)return!0;break;case "label":case "iframe":case "video":return!0}return/\bneedsclick\b/.test(a.className)};e.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case "textarea":return!0;
case "select":return!g;case "input":switch(a.type){case "button":case "checkbox":case "file":case "image":case "radio":case "submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}};e.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur();d=b.changedTouches[0];c=document.createEvent("MouseEvents");c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,
!1,!1,!1,!1,0,null);c.forwardedTouchEvent=!0;a.dispatchEvent(c)};e.prototype.determineEventType=function(a){return g&&"select"===a.tagName.toLowerCase()?"mousedown":"click"};e.prototype.focus=function(a){var b;f&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()};e.prototype.updateScrollParent=function(a){var b,c;b=a.fastClickScrollParent;if(!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c;a.fastClickScrollParent=
c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)};e.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a};e.prototype.onTouchStart=function(a){var b,c,d;if(1<a.targetTouches.length)return!0;b=this.getTargetElementFromEventTarget(a.target);c=a.targetTouches[0];if(f){d=window.getSelection();if(d.rangeCount&&!d.isCollapsed)return!0;if(!l){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;
this.lastTouchIdentifier=c.identifier;this.updateScrollParent(b)}}this.trackingClick=!0;this.trackingClickStart=a.timeStamp;this.targetElement=b;this.touchStartX=c.pageX;this.touchStartY=c.pageY;a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault();return!0};e.prototype.touchHasMoved=function(a){a=a.changedTouches[0];var b=this.touchBoundary;return Math.abs(a.pageX-this.touchStartX)>b||Math.abs(a.pageY-this.touchStartY)>b?!0:!1};e.prototype.onTouchMove=function(a){if(!this.trackingClick)return!0;
if(this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))this.trackingClick=!1,this.targetElement=null;return!0};e.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(a){var b,c,d=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<
this.tapDelay)return this.cancelNextClick=!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;this.cancelNextClick=!1;this.lastClickTime=a.timeStamp;b=this.trackingClickStart;this.trackingClick=!1;this.trackingClickStart=0;m&&(c=a.changedTouches[0],d=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||d,d.fastClickScrollParent=this.targetElement.fastClickScrollParent);c=d.tagName.toLowerCase();if("label"===c){if(b=this.findControl(d)){this.focus(d);if(g)return!1;
d=b}}else if(this.needsFocus(d)){if(100<a.timeStamp-b||f&&window.top!==window&&"input"===c)return this.targetElement=null,!1;this.focus(d);this.sendClick(d,a);f&&"select"===c||(this.targetElement=null,a.preventDefault());return!1}if(f&&!l&&(b=d.fastClickScrollParent)&&b.fastClickLastScrollTop!==b.scrollTop)return!0;this.needsClick(d)||(a.preventDefault(),this.sendClick(d,a));return!1};e.prototype.onTouchCancel=function(){this.trackingClick=!1;this.targetElement=null};e.prototype.onMouse=function(a){return this.targetElement&&
!a.forwardedTouchEvent&&a.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0};e.prototype.onClick=function(a){if(this.trackingClick)return this.targetElement=null,this.trackingClick=!1,!0;if("submit"===a.target.type&&0===a.detail)return!0;a=this.onMouse(a);a||(this.targetElement=null);return a};e.prototype.destroy=function(){var a=this.layer;g&&(a.removeEventListener("mouseover",
this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0));a.removeEventListener("click",this.onClick,!0);a.removeEventListener("touchstart",this.onTouchStart,!1);a.removeEventListener("touchmove",this.onTouchMove,!1);a.removeEventListener("touchend",this.onTouchEnd,!1);a.removeEventListener("touchcancel",this.onTouchCancel,!1)};e.notNeeded=function(a){var b,c;if("undefined"===typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||
[,0])[1])if(g){if((b=document.querySelector("meta[name=viewport]"))&&(-1!==b.content.indexOf("user-scalable=no")||31<c&&document.documentElement.scrollWidth<=window.outerWidth))return!0}else return!0;return n&&(b=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),10<=b[1]&&3<=b[2]&&(b=document.querySelector("meta[name=viewport]"))&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction||
27<=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]&&(b=document.querySelector("meta[name=viewport]"))&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)?!0:"none"===a.style.touchAction||"manipulation"===a.style.touchAction?!0:!1};e.attach=function(a,b){return new e(a,b)};"function"===typeof define&&"object"===typeof define.amd&&define.amd?define(function(){return e}):"undefined"!==typeof module&&module.exports?(module.exports=e.attach,
module.exports.FastClick=e):window.FastClick=e})();

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};


FastClick.attach(document.body);


// FOR EACH SHIM
// ================
NodeList.prototype.forEach = Array.prototype.forEach;

// LAZY IMAGES
// ================

(function(){
 
  var images = document.getElementsByClassName('lazy-load');

  function isInViewPort(image){

    var rect = image.getBoundingClientRect();

    // return true if the image is visible and in the viewport top and bottom
    // otherwise return false

    if(rect.width === 0){

      // element is not visible
      return false;
    }

    if(rect.bottom < 0){

      // out of viewport top
      return false;
    }

    // @note - use a fallback for window.innerHeight in IE8
    if((window.innerHeight - rect.top) < 0){

      // out of viewport bottom
      return false;
    }

    // if it passes all that, its visible
    return true;

  }

  // var header = document.querySelector('.site-header-logo');
  // var yScroll = 0;

  // function checkHeader(){
  //   console.log(window.pageYOffset, yScroll);
   
  //  if(window.pageYOffset > yScroll + 200){
  //   yScroll = window.pageYOffset;
  //   console.log('DOWNNNNN');
  //   header.classList.add('site-header-logo--off');
  //  }

  //  if(window.pageYOffset < yScroll - 200){
  //   yScroll = window.pageYOffset;
  //   console.log('UPPPP');
  //   header.classList.remove('site-header-logo--off');
  //  }

  //  if(window.pageYOffset < window.innerHeight / 2){
  //     header.classList.remove('site-header-logo--off');
  //  }


  //   setTimeout(function(){
  //     requestAnimationFrame(function(){
  //       checkHeader();
  //     })
  //   }, 100)

  

  // }

  // checkHeader();

  function loadedImage(){
    this.classList.remove('lazy-load');
  }

  function checkImages(){

    for(var i = -1;++i<images.length;){

      var image = images[i];

      if(isInViewPort(image)){

        image.onload = loadedImage;

        image.naturalWidth > 0 && loadedImage.call(image);
        image.readyState === 'complete' && loadedImage.call(image);
      
        image.setAttribute('srcset', image.src);
        image.setAttribute('src', image.src);
      }
    }

    requestAnimationFrame(function(){
      checkImages();
    });
  }

  checkImages();

})();

// SEARCH BOX
// ================
var search = document.querySelector('.search-nav');
var searchBox = document.querySelector('.site-search');
var searchInput = document.querySelector('.site-search__input');

function showSearch(show){
  if(show){
    searchBox.style.display = 'block';
    searchInput.focus();

    requestAnimationFrame(function(){
      searchBox.classList.add('site-search--active');
      searchInput.value = '';
      document.querySelector('.site-search__results').innerHTML = '';
    });
  }

  else {
    searchBox.classList.remove('site-search--active');
    setTimeout(function(){
      searchBox.style.display = 'none';
    }, 333);
  }
}

searchInput.onblur = function(e){
  setTimeout(function(){
    if(document.activeElement.tagName!=='A'){
      showSearch(false)
    }
  }, 50);
};

search.onclick = function(e){
	
  showSearch(true);
	
}

// RANKINGS ROW
// ================

document.querySelectorAll('.rankings__row').forEach(function(row){

	row.onclick = function(){
		var link = row.querySelector('a');
		if(link){
			location.href = link.href;
		}
	}

});

// SORT TABLE
// ================

(function(){

  var table = document.querySelector('.rankings');

  if(!table){
  	return;
  }

  var ths = table.querySelectorAll('th');
  var tbody = table.querySelector('tbody');
  var trs = Array.prototype.slice.call(tbody.querySelectorAll('tr'));

  function checkType(content){
  	if( isNaN(parseInt(content, 10))  ){
  		return content;
  	}

  	else {
  		return parseFloat(content);
  	}
  	
  };

  function sortRows(){

    var index = parseInt(this.getAttribute('data-index'), 10);

    if(index === 0){
      index = 1;
    }

    if(index === 1){
    	index = 2
    } 

    ths.forEach(function(th){
      th.classList.remove('is-sorted');
    });

    this.classList.add('is-sorted');

    if(this.classList.contains('rankings__col-sort')){

      ths.forEach(function(th){
         th.classList.remove('rankings__col-sort');
      });

      trs.sort(function(a, b){

        if(checkType(a.querySelectorAll('td')[index].textContent) < checkType(b.querySelectorAll('td')[index].textContent)) return -1;
        if(checkType(a.querySelectorAll('td')[index].textContent) > checkType(b.querySelectorAll('td')[index].textContent)) return 1;
        return 0;
      });
     
    }

    else {

      ths.forEach(function(th){
         th.classList.remove('rankings__col-sort');
      });

      trs.sort(function(a, b){
        if(checkType(a.querySelectorAll('td')[index].textContent) < checkType(b.querySelectorAll('td')[index].textContent)) return 1;
        if(checkType(a.querySelectorAll('td')[index].textContent) > checkType(b.querySelectorAll('td')[index].textContent)) return -1;
        return 0;
      });

      this.classList.add('rankings__col-sort');      

    };

    trs.forEach(function(tr){
      tbody.appendChild(tr);
    })
  }

  ths.forEach(function(th, index){
    th.setAttribute('data-index', index);
    th.onclick = sortRows;
  });

  var hash = location.hash;
  
  if(hash){
    var match = document.querySelector(hash+'-click');
   	if(match) {
   		match.click()
   	};
  };

})();

// ENABLE TABBING
// ================

document.onkeyup = function(e){
	if(document.activeElement.onclick && e.keyCode === 13){
		document.activeElement.click();
	}
}

// AUTOCOMPLETE
// ================
function lookup(value){

  value = value.toLowerCase();
	value = value.replace(/^the/, '');
	value = value.trim();

	var matches = [];

	if(value.length === 0){
		return matches;
	}

	searchLookUp.forEach(function(result){

		for(var i = -1;++i<result.tags.length;){
      var tag = result.tags[i].trim().toLowerCase();
			if(tag.indexOf(value) === 0){
				console.log(result);
				matches.push(result);
				break
			}
		}
	})

	var html = '';
  matches.forEach(function(match){
    html+='<li><a class="site-search__results-row" href="/' + match.url + '"><span class="site-search__results-cell"></span> <span class="site-search__results-cell">' + [match.title, match['sub-title']].join(' - ') + ' </span></a></li>';
  });

  return html;
}

var autocomplete = document.querySelector('.site-search__input');
var autocompleteResults = document.querySelector('.site-search__results');
autocomplete.onkeyup = function(){
	autocompleteResults.innerHTML = lookup(autocomplete.value);
};


// MATCH TAGS
// ================
if(location.pathname.match(/^\/tags|404/)){
  var path = location.pathname.replace(/\/$/, '');
  var tag = path.split('/').pop();
  tag = tag.split('-');

  document.querySelector('.search-tags-name').textContent = "'" + tag.join(' ') + "'";
  document.querySelector('.search-tags-content').innerHTML = lookup(tag[0]);
}

// VOTE MECHANISM
// ================
(function(){

  var rating = document.querySelector('.rating');

  if(!rating){
    return;
  }

  var rate = rating.querySelectorAll('.rating__vote');
  var id = rating.getAttribute('data-id');
  var score = rating.querySelector('.rating__score');

  // get ups and downs
  var ups = parseInt(rating.getAttribute('data-up-rates'), 10);
  var downs = parseInt(rating.getAttribute('data-down-rates'), 10);

  // get stored values if exist
  var storedRatings = window.localStorage.getItem(id);

  if(!storedRatings){
    rating.style.pointerEvents = "all";
  }

  else {

    storedRatings = JSON.parse(storedRatings);

    // if localstorage version is more recent, update
    if(( storedRatings.ups + storedRatings.downs ) > ( ups + downs )){
      ups = storedRatings.ups;
      downs = storedRatings.downs;
      score.textContent = ((100 / (ups + downs) * ups) / 10).toFixed(1);
    }

    rating.setAttribute('data-rated', storedRatings.voted);
  }

  rate.forEach(function(item){

    item.onclick = function(e){

      e.preventDefault();

      if(rating.getAttribute('data-rated')){
        return;
      }

      // get vote intention
      var voted = this.getAttribute('data-rate');

      // disable element
      rating.style.pointerEvents = 'none';

      // set voting intention
      rating.setAttribute('data-rated', voted);

      // add pulse animation
      this.classList.add('rate--pulse');


      if(voted === 'up'){
        ups ++;
        ga('send', 'pageview', location.pathname + '?action=voteup');
      }
      else {
        downs ++;
        ga('send', 'pageview', location.pathname + '?action=votedown');
      }

      // see if new score is different to current
      var newScore = (((100 / (ups + downs)) * ups) / 10).toFixed(1);

      if(newScore!==score.textContent){
        setTimeout(function(){
          score.textContent = newScore;
        }, 1000);
        score.classList.add('rate__score--pulse');
      }

      // set new values in local storage
      var newRatings = {
        score: newScore,
        ups: ups,
        downs: downs, 
        voted: voted
      }

      window.localStorage.setItem(id, JSON.stringify(newRatings));

    }

  });

  rating.parentNode.style.opacity = 1;

}());

// SHARE
// ================
(function(){

  var share = document.querySelector('.social-bar__link--share');
  if(!share){
    return
  };

  function showOverlay(show){
    if(show){
      scrollTop = window.scrollY;
      shareOverlay.classList.add('social-overlay--open');
      document.documentElement.classList.add('disable-scroll');
    }

    else {
      document.documentElement.classList.remove('disable-scroll');
      if(!window.hasTouch){
        window.scrollTo(0, scrollTop);
      }
      requestAnimationFrame(function(){
        shareOverlay.classList.remove('social-overlay--open');
      })
    }
  }

  var scrollTop = 0;

  var shareOverlay = document.querySelector('.social-overlay');
  var shareOverlayBody = shareOverlay.querySelector('.social-overlay__inner');
  var close = shareOverlay.querySelector('.social-overlay__close');
  var emailInput = shareOverlay.querySelector('input');

  shareOverlay.ontouchstart = function(e){
    e.preventDefault();
  }

  shareOverlay.onclick = function(e){
    if(!shareOverlayBody.contains(e.target)){
      showOverlay(false)
    }
  }

  close.onclick = function(e){
    e.preventDefault();
    showOverlay(false)
  }

  share.onclick = function(e){
    e.preventDefault();
    showOverlay(true)
  }

  emailInput.onkeyup = function(e){
    if(this.value.match(/@/) && e.keyCode == 13){
      this.parentNode.querySelector('a').click();
    }

  }

  document.querySelectorAll('.social-overlay .social-overlay__link').forEach(function(item){

    item.onclick = function(e){

      ga('send', 'pageview', location.pathname + '?action=share');

      if(this.href.match(/mailto/)){
        if(emailInput.value.match(/@/)){
          this.href = this.href.replace(/someone@example.com/, emailInput.value);
        }

        return;
      }

      e.preventDefault();

      // get dims
      var dims = shareOverlayBody.getBoundingClientRect();
      // call ga

      // open window
      window.open(this.href, 'social', ['width=' + dims.width, 'height=' + (dims.height * 1.25), 'top=' + ((screen.height / 2) - (dims.height / 2)), 'left=' + dims.left].join(', '))
    }
  })
})();



