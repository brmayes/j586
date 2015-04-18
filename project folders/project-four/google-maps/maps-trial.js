function initialize() {
  var map = new google.maps.Map(document.getElementById('map-trial'), {
    center: new google.maps.LatLng(40, -85),
    zoom: 4
  });
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map
  });

  google.maps.event.addListener(marker, 'click', function (marker, i) {
    if ($('#info-container').css('display') == 'block') {
      $('#info-container').css('display', 'none');
    } else {
      $('#info-container').css('display', 'block');
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
