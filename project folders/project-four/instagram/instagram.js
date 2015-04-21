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

			//header
			// insta += '<div class="instagram-header">'
			// insta += '<h2 class="instagram-headertext">Instagram</h2>'
			// insta += '</div>'

				$.each(json.data,function(i,data){
					if (i < 3) {

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
						insta += '<div class="col-md-8 col-xs-8"'
						insta += '<p class="instagram-username">' + data.user.username + '</p>'
						insta += '</div>'

						//date
						insta += '<div class="col-md-2 col-xs-2 col2insta">'
						insta += 'date'
						insta += '</div>'

						//end row
						insta += '</div>'

						//image and link
						insta += '<a target="_blank" href="' + data.link + '">'
						insta += '<img width="100%" class="instagram-image" src ="' + data.images.low_resolution.url + '">'
						insta += '</a>'

						//comment
						insta += '<p class="instagram-caption">' + data.caption.text + '</p>'

						//end of loop
						insta += '</div>'
					}
				});

			//console.log(insta);
			$('#instagram').append(insta);

		}

 });
