var html = ""
var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=trayvonmartin&tagmode=any&format=json&jsoncallback=?"
$(document).ready(function(){
	console.log("document ready!")
	$.getJSON(apiurl,function(json){
		console.log(json);
		$("#flickr-martin").append('<p>"'+json.title+'"</p>');

		$.each(json.items,function(i,data){
			html += '<a target="_blank" href="' + data.link + '"><img class="flickr-images" src ="' + data.media.m + '"></a>'
		});
		//console.log(html);
		$("#flickr-martin").append(html);
	});


});
