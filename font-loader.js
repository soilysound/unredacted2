!function(){function e(e,t){var n=t.split("/").pop(),a=window.localStorage.getItem(n);if(a)e.textContent=a;else{var o=new XMLHttpRequest;o.onreadystatechange=function(){4===this.readyState&&200===this.status&&(e.textContent=this.responseText,window.localStorage.setItem(n,this.responseText))},o.open("GET",t,!0),o.send()}}var t=parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||!1;t&&8>t&&(document.documentElement.className+=" ios-pre-8");for(var n=document.querySelectorAll("style[data-webfont-src]"),a=-1;++a<n.length;)e(n[a],n[a].getAttribute("data-webfont-src"))}();