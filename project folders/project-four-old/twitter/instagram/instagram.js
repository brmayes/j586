// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=aba575d7e1504dbeba059b8a345b26d9&redirect_uri=http://brmayes.com/static/j586/project-four&response_type=token

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id


$(function() {

	var apiurl = "https://api.instagram.com/v1/tags/blacklivesmatter/media/recent?access_token=26533789.aba575d.fa5050cc779741628bd2fbaab4dc3e85&callback=?"
	var apiselfinsta = "https://api.instagram.com/v1/users/26533789?access_token=26533789.1fb234f.b64427167302446a8867ac168a944e3b &callback=?"
	var access_token = location.hash.split('=')[1];
	var insta = "";

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			console.log(json);


			var i = 0;

				$.each(json.data,function(i,data){
					var date = new Date(data.created_time * 1000);
					var day = date.getDay();


					/**
					  * Calculates the time since the tweet was created
					  * @param datetime returned by API in created_at
					  * @return time since in html

					function calculateSince(datetime)
					{
					    var tTime=new Date(datetime);
					    var cTime=new Date();
					    var sinceMin=Math.round((cTime-tTime)/60000);
					    if(sinceMin==0)
					    {
					        var sinceSec=Math.round((cTime-tTime)/1000);
					        if(sinceSec&lt;10)
					          var since='less than 10 seconds ago';
					        else if(sinceSec&lt;20)
					          var since='less than 20 seconds ago';
					        else
					          var since='half a minute ago';
					    }
					    else if(sinceMin==1)
					    {
					        var sinceSec=Math.round((cTime-tTime)/1000);
					        if(sinceSec==30)
					          var since='half a minute ago';
					        else if(sinceSec&lt;60)
					          var since='less than a minute ago';
					        else
					          var since='1 minute ago';
					    }
					    else if(sinceMin&lt;45)
					        var since=sinceMin+' minutes ago';
					    else if(sinceMin>44&amp;&amp;sinceMin&lt;60)
					        var since='about 1 hour ago';
					    else if(sinceMin&lt;1440){
					        var sinceHr=Math.round(sinceMin/60);
					    if(sinceHr==1)
					      var since='about 1 hour ago';
					    else
					      var since='about '+sinceHr+' hours ago';
					    }
					    else if(sinceMin>1439&amp;&amp;sinceMin&lt;2880)
					        var since='1 day ago';
					    else
					    {
					        var sinceDay=Math.round(sinceMin/1440);
					        var since=sinceDay+' days ago';
					    }
					    return since;
					}; */





					// if (i < 3) {

						//loop
						insta += '<div class="instagram-loop">'

						//row
						insta += '<div class="row row-nomargin">'

						//user information
						insta += '<div class="col-md-2 col-xs-2 col2insta">'
						insta += '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">'
						insta += '<img width="40px" class="instagram-profilepictures" src="' + data.user.profile_picture + '">'
						insta += '<br></a></div>'

						//user name
						insta += '<div class="col-md-7 col-xs-7 instagram-username-div"'
						insta += '<p class="instagram-username">'
						insta += '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username + '</a></p>'
						insta += '</div>'

						//date
						insta += '<div class="col-md-3 col-xs-3 col2insta instagram-date-div">'
						insta += '<div class="clock"></div>'
						//insta += day
						insta += '</div>'

						//end row
						insta += '</div>'

						//image and link
						insta += '<a target="_blank" href="' + data.link + '">'
						insta += '<img width="100%" class="instagram-image" src ="' + data.images.low_resolution.url + '">'
						insta += '</a>'

						//likes and caption
						insta += '<div class="instagram-caption-div">'
						insta += '<div class="heart"></div>' + data.likes.count
						insta += '<br><div class="chatbubble"></div>'
						insta += '<span class="instagram-username-caption">'
						insta += '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username + '</span></a>'
						insta += '<div class="hashtags">' + data.caption.text + '</div>'
						insta += '</div>'

						//end of loop
						insta += '</div>'
					// }
				});

				$(".url").linky();

				$(".instagram-mentions").linky({
						mentions: true,
						urls: false,
						linkTo: "instagram"
				});

				$(".hashtags").linky({
						hashtags: true,
						urls: false,
						linkTo: "instagram"
				});


			//console.log(insta);
			$('#instagram').append(insta);

		}

 });
