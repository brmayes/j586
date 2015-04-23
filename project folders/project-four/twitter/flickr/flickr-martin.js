var html = ""
var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=trayvonmartin&tagmode=any&format=json&jsoncallback=?"
$(document).ready(function(){
	console.log("document ready")
	$.getJSON(apiurl,function(json){
		console.log(json);
		$("#results").append('<p>"'+json.title+'"</p>');

		var i=0;
		$.each(json.items,function(i,data){


			if (i < 1) {
			html += '<a target="_blank" href="' + data.link + '"><img class="flickr-images" src ="' + data.media.m + '"></a>'
		}
		});
		//console.log(html);
		$("#flickr-martin").append(html);
	});


});
