function initMap() {
    var mapStyles;
    var infowindow = new google.maps.InfoWindow();
    var LatLng = {lat: 54.717592, lng: 20.497258};

    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
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
$.getJSON('data.json', function(data) {
    $.each(data.branches, function (key, data) {
        
                var latLng = new google.maps.LatLng(data.lat, data.lng);

                var BarberWildImg = new google.maps.MarkerImage (
                    './img/icons/BarberWildImg.png',
                    new google.maps.Size(32,32),
                    new google.maps.Point(0,0),
                    new google.maps.Point(16,32)
                );
        
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.BOUNCE,
                    raiseOnDrag: false,
                    icon: BarberWildImg,
                    title: data.title
                });
        
                var details = data.title + ", " + data.description + ".";

                bindInfoWindow(marker, map, infowindow, details);
         
            });
        
    });
    function bindInfoWindow(marker, map, infowindow, strDescription) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(strDescription);
            infowindow.open(map, marker);
        });
    }
}
