function initialize() {

  // Create an array of styles.
  var styles = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
    {
      "saturation": 36
    },
    {
      "color": "#000000"
    },
    {
      "lightness": 40
    }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
    {
      "visibility": "on"
    },
    {
      "color": "#000000"
    },
    {
      "lightness": 16
    }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 20
    }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 17
    },
    {
      "weight": 1.2
    }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 20
    }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 21
    }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 17
    }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 29
    },
    {
      "weight": 0.2
    }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 18
    }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 16
    }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 19
    }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
    {
      "color": "#000000"
    },
    {
      "lightness": 17
    }
    ]
  }
  ]


  //variables for locations on map
  var martinLoc = new google.maps.LatLng(28.784427,-81.2746844);
  var garnerLoc = new google.maps.LatLng(40.6247026,-74.0747568);
  var brownLoc = new google.maps.LatLng(38.7489375,-90.289063);
  var riceLoc = new google.maps.LatLng(41.479083,-81.752365);
  var scottLoc = new google.maps.LatLng(32.8994129,-80.0142688);
  var harrisLoc = new google.maps.LatLng(36.1523015,-95.8780106);



  //sets up map
  var map = new google.maps.Map(document.getElementById('map-small'), {
    center: new google.maps.LatLng(36.725178,-85.207757),
    zoom: 4
  });



  //sets map styles
  map.setOptions({styles: styles});



  //setting icons to variables
  var redMarker = 'assets/mapmarkers/google-marker-01.png'
  var tealMarker = 'assets/mapmarkers/google-marker-02.png'
  var orangeMarker = 'assets/mapmarkers/google-marker-03.png'
  var blueMarker = 'assets/mapmarkers/google-marker-04.png'
  var purpleMarker = 'assets/mapmarkers/google-marker-05.png'
  var greenMarker = 'assets/mapmarkers/google-marker-06.png'


  //creates marker
  var martin = new google.maps.Marker({
    position: martinLoc,
    icon: redMarker,
    map: map
  });

  var garner = new google.maps.Marker({
    position: garnerLoc,
    icon: tealMarker,
    map: map
  });

  var brown = new google.maps.Marker({
    position: brownLoc,
    icon: orangeMarker,
    map: map
  });

  var rice = new google.maps.Marker({
    position: riceLoc,
    icon: blueMarker,
    map: map
  });

  var scott = new google.maps.Marker({
    position: scottLoc,
    icon: purpleMarker,
    map: map
  });

  var harris = new google.maps.Marker({
    position: harrisLoc,
    icon: greenMarker,
    map: map
  });




  // creates div event
  google.maps.event.addListener(martin, 'click', function (martin, i) {
    if ($('#martin').css('display') == 'block') {
      $('#martin').css('display', 'none');
    } else {
      $('#martin').css('display', 'block');
    }
  });

  google.maps.event.addListener(garner, 'click', function (garner, i) {
    if ($('#garner').css('display') == 'block') {
      $('#garner').css('display', 'none');
    } else {
      $('#garner').css('display', 'block');
    }
  });

  google.maps.event.addListener(brown, 'click', function (brown, i) {
    if ($('#brown').css('display') == 'block') {
      $('#brown').css('display', 'none');
    } else {
      $('#brown').css('display', 'block');
    }
  });

  google.maps.event.addListener(rice, 'click', function (rice, i) {
    if ($('#rice').css('display') == 'block') {
      $('#rice').css('display', 'none');
    } else {
      $('#rice').css('display', 'block');
    }
  });

  google.maps.event.addListener(scott, 'click', function (scott, i) {
    if ($('#scott').css('display') == 'block') {
      $('#scott').css('display', 'none');
    } else {
      $('#scott').css('display', 'block');
    }
  });

  google.maps.event.addListener(harris, 'click', function (harris, i) {
    if ($('#harris').css('display') == 'block') {
      $('#harris').css('display', 'none');
    } else {
      $('#harris').css('display', 'block');
    }
  });


}

google.maps.event.addDomListener(window, 'load', initialize);
