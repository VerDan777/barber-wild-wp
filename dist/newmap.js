function initMap() {
    var mapStyles;
    var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();
    var LatLng = {lat: 57.4848, lng: 51.2045};

    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // disableDefaultUI: true,
        scrollwheel: false,
        center: LatLng,
        suppressInfoWindows: true,
        styles:[{
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
        }
    ]
})

// Limitation zoom level
map.setOptions({minZoom:4, maxZoom:9 });

$.getJSON('data.json', null, function(data) {

    $.each(data, function (key, data) {

        // Positioning
        var latLng = new google.maps.LatLng(data.lat, data.lng);
        
        // Initialize Icon
        var BarberWildImg = new google.maps.MarkerImage (
            './img/icons/BarberWildImg.png',
            new google.maps.Size(32,32),
            new google.maps.Point(0,0),
            new google.maps.Point(16,32)
        );

        // Creating Array
        var markers = [];

        // Marker
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: false,
            animation: google.maps.Animation.BOUNCE,
            raiseOnDrag: false,
            icon: BarberWildImg,
            title: data.title
        });
        
        // Pushing markers into array
        markers.push(marker);

        // Path to images
        var options = {
            imagePath: 'img/m',
            maxZoom: 10
        };

        // Cluster all the markers

        // var markerCluster = new MarkerClusterer(map, markers, options);s

        // Detalising InfoWindow

        var details = data.title + ", " + data.description + ".";

        // Call InfoWindow

        bindInfoWindow(marker, map, infowindow, details);
    
    });

    });

    // Creating InfoWindow

    function bindInfoWindow(marker, map, infowindow, strDescription) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(strDescription);
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addListener(infowindow, 'domready', function() {
        var iwOuter =$('.gm-style-iw');
        var iwBackground = iwOuter.prev();

        iwBackground.children(':nth-child(2)').css({
            'display': 'none'
          });

        iwBackground.children(':nth-child(3)').css({
        'display': 'none'
        });

        iwBackground.children(':nth-child(4)').css({
            'display': 'none'
        });
    })
}
function geocodeAddress(geocoder,resultMap) {
    var address = document.getElementById('geocode').value;
        geocoder.geocode({'address': address}, function(results, status){

            alert('!!');
        })
    }
