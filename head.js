!function(){function e(e,t){var o=t.split("/").pop(),n=window.localStorage.getItem(o);if(n)e.textContent=n;else{var i=new XMLHttpRequest;i.onreadystatechange=function(){4===this.readyState&&200===this.status&&(e.textContent=this.responseText,window.localStorage.setItem(o,this.responseText))},i.open("GET",t,!0),i.send()}}window.hasTouch=!!("ontouchstart"in window||"DocumentTouch"in window&&document instanceof window.DocumentTouch),window.isOldIE=document.all&&!window.atob;var t=parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||!1;window.isOldIOS=t&&8>t;var o=navigator.userAgent.match(/android ([1-9]\.[0-9])/i);window.isOldAndroid=o&&parseFloat(o[1])<5;var n=[hasTouch?"touch":"no-touch",isOldIE?"old-ie":"",isOldAndroid?"old-android":"",isOldIOS?"old-ios":""].join(" ");n=n.replace(/^\s+|\s+$/gm,""),document.documentElement.className+=n,NodeList.prototype.forEach=HTMLCollection.prototype.forEach=Array.prototype.forEach,NodeList.prototype.indexOf=HTMLCollection.prototype.indexOf=Array.prototype.indexOf;for(var i=document.querySelectorAll("style[data-webfont-src]"),a=-1;++a<i.length;)e(i[a],i[a].getAttribute("data-webfont-src"))}();