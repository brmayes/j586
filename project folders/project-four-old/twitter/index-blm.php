<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Twitter API</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
    <link href="assets/twitter-sprites.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,300,700' rel='stylesheet' type='text/css'>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="instagram/instagram-martin.js" type="text/javascript"></script>
    <script src="flickr/flickr-martin.js" type="text/javascript"></script>
    <script type="text/javascript" async src="//platform.twitter.com/widgets.js"></script>
    <script src="tweetLinkIt.js"></script>
    <script>

      $('.tweet').tweetLinkify();

      function pageComplete(){
        $('.tweet').tweetLinkify();
      }

    </script>



    <style>
      .border {
        border-bottom: dotted 1px black;
        padding-bottom: 10px;
        clear: both;
      }

      .float-left {
        float: left;
      }

      .bold {
        font-weight: 700;
      }

      a {
        text-decoration: none;
        color: black;
      }

      .handle {
        color: gray;
        font-size: 11px;
      }

      .twitter-pic {
        padding-right: 10px;
      }

      .name {

      }

      .font-small {
        font-size: 11px;
      }

      .tweet-div {
        clear: both;
        padding: 8px;
        border-bottom: 1px solid #CCD6DD;
        border-right: 1px solid #CCD6DD;
      }

      .twitpic {
        clear: both;
      }

      .twitter-media {
        max-width: 285px;
        max-height: 285px;
        margin: 0 auto;
        display: block;
      }

      .twitter-div {
        width: 305px;
        overflow-x: hidden;
      }

      .twitter-intent {
        display: inline-block;
      }

      .tweet-options {
        padding-top: 8px;
      }

      .row-height {
        height: 20px;
      }

      .col-md-4, .col-xs-4 {
        padding-left: 40px;
      }

      .middle {
        border-right: 1px solid gray;
        border-left: 1px solid gray;
      }

      a:hover {
        text-decoration: none;
      }

      .tweet a {
        color: #55ACEE;
      }

      .expand {
        color: #A9ACAE;
        font-size: 12px;
      }

      .expand:hover {
        color: #666666;
      }

      img {
        max-width: 200px;
      }

      body {
        overflow-x: hidden;
      }

      #instagram-martin {
        height: 200px;
      }

      .flickr-images {
        width: 200px;
        height: auto;
      }
    </style>

</head>


<body>
  <!-- <div class="row">
    <div class="col-md-4"> -->
      <?php
      ini_set('display_errors', 1);
      require_once('TwitterAPIExchange.php');

      /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
      $settings = array(
          'oauth_access_token' => "230190627-nMolVR1sTrzemrXfXLZ8cr4dpyD69eZfeSw9NvQ1",
          'oauth_access_token_secret' => "255lS4mRCQRWjJwm1uolNJVZJCC28xVJm2yk5AiPkIALW",
          'consumer_key' => "dyhtdSD83rj46JbnD3fvsVvUU",
          'consumer_secret' => "Kd7HTl6dOpUb0UpBzAmUSMgBkd7rgjmyauh3o1XFuHTkQYBS02"
      );

      /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
      $url = 'https://api.twitter.com/1.1/blocks/create.json';
      $requestMethod = 'GET';

      /** POST fields required by the URL above. See relevant docs as above **/
      $postfields = array(
          'screen_name' => 'usernameToBlock',
          'skip_status' => '1'
      );

      /** Perform a POST request and echo the response
      $twitter = new TwitterAPIExchange($settings);
      echo $twitter->buildOauth($url, $requestMethod)
                   ->setPostfields($postfields)
                   ->performRequest();**/

      /** Perform a GET request and echo the response **/
      /** Note: Set the GET field BEFORE calling buildOauth(); **/
      $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
      $getfield = '?screen_name=blklivesmatter';
      $requestMethod = 'GET';
      $twitter = new TwitterAPIExchange($settings);
      /**echo $twitter->setGetfield($getfield)
                   ->buildOauth($url, $requestMethod)
                   ->performRequest(); **/

      $tweetData = json_decode($twitter->setGetField($getfield)
                    ->buildOauth($url, $requestMethod)
                    ->performRequest(),$assoc = TRUE);

      //echo $tweetData . "</br>";
      //if ($x++ <=0)

      foreach($tweetData as $items)
          {

              $date = new DateTime( $items->created_at );
              $userArray = $items['user'];


              //steps for media array
              $entitiesArray = $items['entities'];
              $mediaArray = $entitiesArray['media'];
              $tweetMedia = $mediaArray[0];
              $tweetMedia1 = $mediaArray[1];
              $tweetMedia2 = $mediaArray[2];
              $tweetMedia3 = $mediaArray[3];
              $mediaResize = $tweetMedia['sizes']['thumb']['w'];





              echo "<div class='twitter-div'>";
              echo "<div class='tweet-div'><div class='float-left twitpic'><a target='_blank' href='http://www.twitter.com/" . $userArray['screen_name'] . "'><img class='twitter-pic' target='_blank' src='" . $userArray['profile_image_url'] . "'></a></div>";
              echo "<a target='_blank' href='http://www.twitter.com/" . $userArray['screen_name'] . "'><span class='name bold'>" . $userArray['name'] . "</span>   </br><span class='handle'>@" . $userArray['screen_name'] . "</span></a>  <span class='font-small'>&sdot; ";
              echo $date->format( 'M jS' ) . "</span></br>";
              echo "<div class='tweet'>" . $items['text'] . "</div>";
              echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia['media_url'] . "'></a>";
              echo "<a target='_blank' href='" . $tweetMedia1['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia1['media_url'] . "'></a>";
              echo "<a target='_blank' href='" . $tweetMedia2['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia2['media_url'] . "'></a>";
              echo "<a target='_blank' href='" . $tweetMedia3['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia3['media_url'] . "'></a>";
              echo "<div class='tweet-options'>";
              echo "<div class='row row-height'>";
              echo "<div class='col-md-8 col-xs-8'><a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><p class='expand'>Expand</p></a></div>";
              echo "<div class='col-md-4 col-xs-4'>";
              echo "<a target='_blank' href='https://twitter.com/intent/tweet?in_reply_to=" . $items['id'] . "'><div class='reply twitter-intent'></div></a>";
              echo "<a target='_blank' href='https://twitter.com/intent/retweet?tweet_id=" . $items['id'] . "'><div class='retweet twitter-intent'></div></a>";
              echo "<a target='_blank' href='https://twitter.com/intent/favorite?tweet_id=" . $items['id'] . "'><div class='favorite twitter-intent'></div></a>";
              echo "</div></div></div>";
              echo "<span class='border'></span></div>";
              echo "</div>";
            }


          //echo $tweetData
          echo "<script>pageComplete();</script>";
      ?>

  </div>




  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/bootstrap.min.js"></script>
</body>

</html>
