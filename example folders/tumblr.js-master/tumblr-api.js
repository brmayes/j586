// Authenticate via OAuth
var tumblr = require('../lib/tumblr');
tumblr.request(require('browser-request'));
var client = tumblr.createClient({
  consumer_key: 'mFId22fEs3gQuEdLRObBCglhtINgbGyM92482HuODyGvGS6J7B',
  consumer_secret: 'TgJoLjZejIBkc3TA0QN9ISgWOYWEUOQ8aq5vRNhO0A5r8YedBU',
  token: 'Dy8HFtQZWBH4fgNuXeT8gpH6Rseo67C5JVcqUGlpbbuj08sXi7',
  token_secret: 'G7WQja6UjK2MPwC5XD2xIYJ15s3WIBU3FFMaNJIswQGhZTeaXi'
});

// Make the request
client.userInfo(function (err, data) {
  data.user.blogs.forEach(function (blog) {
    console.log(blog.name);
  });
});

//console.log(insta);
$('#tumblr').append(tumblr);
