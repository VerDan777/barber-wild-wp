window.initMap = function() {
    
    // Create object map

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // disableDefaultUI: true,
        scrollwheel: false,
        center: new google.maps.LatLng(54.717592, 20.497258),
        suppressInfoWindows: true,
        styles: [
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
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
            "stylers": [{
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
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "weight": 1.2
                },
                {
                    "color": "#121212"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#e9dcca"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#c7a166"
                },
                {
                    "lightness": 20
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
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
            "stylers": [{
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
            "stylers": [{
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
            "stylers": [{
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
            "stylers": [{
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
            "stylers": [{
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
            "stylers": [{
                    "color": "#121212"
                },
                {
                    "lightness": 1
                }
            ]
        }]
    }); 
        var markers = [];
        var image = 'favicon-32x32.png';
        $.getJSON('google.json', function(data) {
         $.each(data, function(i, value) {
            var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value.lat, value.lng),
            map: map,
            animation: google.maps.Animation.BOUNCE,
            icon: image,
            title: value.title,
            content: value.description,
            time: value.WorkTime
        });
        markers.push(marker)
        console.log(markers);
        var contentString = '';
        let infowindow = new google.maps.InfoWindow({
            content: 
            `<div style="font-family: 'RexBold,sans-serif';font-weight:bold;padding: 5px ">
            <h3 style="margin: 0; font-family: 'IntroBold'; color:'#c7a166'; text-transform: uppercase; font-size: 10px">${value.title}</h3>
            <h3 style="margin: 0; font-family: 'IntroBold'; color:'#c7a166'; text-transform: uppercase; font-size: 8px">${value.description}</h3>
            <h3 style="margin: 0; font-family: 'IntroBold'; color:'#c7a166'; text-transform: uppercase; font-size: 8px">${value.WorkTime}</h3>
             </div>
            `
          });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });
        var markerCluster = new MarkerClusterer(map, markers,
          {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
});
}
