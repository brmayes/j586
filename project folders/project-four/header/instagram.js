// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=aba575d7e1504dbeba059b8a345b26d9&redirect_uri=http://brmayes.com/static/j586/project-four&response_type=token

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id


$(function() {

	var apiurl = "https://api.instagram.com/v1/tags/blacklivesmatter/media/recent?access_token=26533789.aba575d.fa5050cc779741628bd2fbaab4dc3e85&callback=?"
	var apiselfinsta = "https://api.instagram.com/v1/users/26533789?access_token=26533789.1fb234f.b64427167302446a8867ac168a944e3b &callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			console.log(json);

			$.each(json.data,function(i,data){
				// html += '<p>Caption:"'+ data.caption.text +'"</p>';
				//html += '<a target="_blank" href="' + data.link + '">'
				html += '<li>'
				html += '<img src ="' + data.images.low_resolution.url + '"></li>'
				//html += '</a>'
			});

			console.log(html);
			$("#results").append(html);

		}

 });


$(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.width();
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 50);
        tweenToNewSpeed(controller.fullSpeed);
    });