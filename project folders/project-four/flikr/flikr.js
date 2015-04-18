var html = ""
var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=blacklivesmatter&tagmode=any&format=json&jsoncallback=?"
$(document).ready(function(){
	console.log("document ready")
	$.getJSON(apiurl,function(json){
		console.log(json);
		$("#results").append('<p>"'+json.title+'"</p>');

		$.each(json.items,function(i,data){
			html += '<a target="_blank" href="' + data.link + '"><img style="display:inline-block; height:175px;" src ="' + data.media.m + '"></a>'
		});
		console.log(html);
		$("#flikrfeed").append(html);
	});


});
