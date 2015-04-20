var infowindow;
(function() {

  google.maps.Map.prototype.markers = new Array();

  google.maps.Map.prototype.addMarker = function(marker) {
    this.markers[this.markers.length] = marker;
  };

  google.maps.Map.prototype.getMarkers = function() {
    return this.markers
  };

  google.maps.Map.prototype.clearMarkers = function() {
    if (infowindow) {
      infowindow.close();
    }

    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].set_map(null);
    }
  };
})();

function initializeMap() {

  // Create an array of styles.
  var styles = [
    {
      stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
      { visibility: "off" }
      ]
    }
  ];

  var latlng = new google.maps.LatLng(35.912548, -79.050964);
  var myOptions = {
    zoom: 3,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    //mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  map.setOptions({styles: styles});

  var a = new Array();

  var t = new Object();
  t.name = "test0"
  t.lat = 35.912548
  t.lng = -79.050964
  a[0] = t;

  var t = new Object();
  t.name = "test1"
  t.lat = 35.910797
  t.lng = -79.050535
  a[1] = t;



  for (var i = 0; i < a.length; i++) {
    var latlng = new google.maps.LatLng(a[i].lat, a[i].lng);
    map.addMarker(createMarker(a[i].name, latlng));
  }
  console.log(map.getMarkers());

}

function createMarker(name, latlng) {
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
  google.maps.event.addListener(marker, "click", function() {
    if (infowindow) infowindow.close();
    infowindow = new google.maps.InfoWindow({
      content: name
    });
    infowindow.open(map, marker);
  });
  return marker;
}
