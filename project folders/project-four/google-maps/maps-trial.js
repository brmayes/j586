function initialize() {

  //variables for locations on map
  var chapelHill = new google.maps.LatLng(35.912548,-79.050964);

  //sets up map
  var map = new google.maps.Map(document.getElementById('map-trial'), {
    center: new google.maps.LatLng(40, -85),
    zoom: 4
  });

  //creates marker
  var trayvon = new google.maps.Marker({
    position: map.getCenter(),
    map: map
  });

  var point2 = new google.maps.Marker({
    position: chapelHill,
    map: map
  });

  google.maps.event.addListener(trayvon, 'click', function (trayvon, i) {
    if ($('#tmartin').css('display') == 'block') {
      $('#tmartin').css('display', 'none');
    } else {
      $('#tmartin').css('display', 'block');
    }
  });

  google.maps.event.addListener(point2, 'click', function (point2, i) {
    if ($('#info-container').css('display') == 'block') {
      $('#info-container').css('display', 'none');
    } else {
      $('#info-container').css('display', 'block');
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
