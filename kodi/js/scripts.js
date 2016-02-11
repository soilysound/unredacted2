// POLYFILL
NodeList.prototype.forEach = Array.prototype.forEach;

// VIEW SWITCHER
var views = document.querySelectorAll('[data-view]');
var events = document.querySelectorAll('[data-event]');

events.forEach(function(index){

	index.onclick = function(e){
		e.preventDefault();
		var eventName = this.getAttribute('data-event');
		window[eventName](this.dataset);
	}

})

function switchView(ops){

	
	views.forEach(function(item){
		if(item.getAttribute('data-view') === ops.view){
			item.setAttribute('aria-hidden', false);
		}
		else {
			item.setAttribute('aria-hidden', true);
		}

	});

}




	function load(url, func) {


var http = new XMLHttpRequest();
var data = new FormData();

var data = {
	jsonrpc: '2.0',
	method: 'Playlist.GetItems',
	id: '1',
	params: {
      'properties': [
        'genre',
        'plot',
        'title',
        'lastplayed',
        'episode',
        'year',
        'playcount',
        'rating',
        'thumbnail',
        'studio',
        'mpaa',
        'premiered'
      ]
    }
};


http.open("POST", url, true);

//Send the proper header information along with the request

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        func(http.responseText);
    }
}

http.send('send=' + JSON.stringify(data));



	// xbmc.rpc.request({
 //  	'context': this,
 //    'method': 'VideoLibrary.GetTVShows',
 //    'params': {
 //      'properties': [
 //        'genre',
 //        'plot',
 //        'title',
 //        'lastplayed',
 //        'episode',
 //        'year',
 //        'playcount',
 //        'rating',
 //        'thumbnail',
 //        'studio',
 //        'mpaa',
 //        'premiered'
 //      ]
 //    },

 //    'success': function (data) {
 //    	console.log(data);
 //   	}
 // })
}




