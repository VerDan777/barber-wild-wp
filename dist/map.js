var markers =[];

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
        var image = 'favicon-32x32.png';
        $.getJSON('google.json', function(data) {
         $.each(data, function(i, value) {
            var marker = new google.maps.Marker({ 
            position: new google.maps.LatLng(data[i].lat, data[i].lng),
            map: map,
            animation: google.maps.Animation.BOUNCE,
            icon: data[i].image,
            title: data[i].title,
            content: value.description,
            time: value.WorkTime,
            id: data[i].id
        });

    
            $('.table-item').on('click', function(e) {
            e.preventDefault();
            var IdToFind = $(this).data('title');
            if(IdToFind == markers[0].id) {
                console.log(markers[0].position.lat);
                 myLatLng = new google.maps.LatLng(markers[0].lat, markers[0].lng)
                    marker.setPosition(myLatLng);
                    map.panTo(myLatLng);
            }
                console.log(markers[0].lat);
          });
        markers.push(marker)
        // console.log(markers);
        var contentString = '';
        let infowindow = new google.maps.InfoWindow({
            content: 
            `<div style="font-family: 'RexBold,sans-serif';font-weight:bold;padding: 5px ">
            <h3 style="margin: 0; font-family: 'IntroBold'; color:'#c7a166'; text-transform: uppercase; font-size: 10px">${value.city}</h3>
            <h3 style="margin: 0; font-family: 'IntroBold'; color:'#c7a166'; text-transform: uppercase; font-size: 8px">${value.address}</h3>
            <h3 style="margin: 0; font-family: 'IntroBold'; color:'#c7a166'; text-transform: uppercase; font-size: 8px">${value.phone}</h3>
             </div>
            `
          });
          
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
        
            //   infowindow.setPosition(pos);
            //   infowindow.setContent(infowindow.content);
              map.setCenter(pos);
              map.setZoom(12);
            }, function() {
              handleLocationError(true, infowindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infowindow, map.getCenter());
          }
        
        function handleLocationError(browserHasGeolocation, infowindow, pos) {
          infowindow.setPosition(pos);
          infowindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        }
        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });
        var markerCluster = new MarkerClusterer(map, markers,
          {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
});
}

$.getJSON('google.json', function(response) {
    $.each(response, function(i, value) {
        // $('.table-item').append($field);
        $('<tr class="table-item table-item--center "data-title='+ response[i].id +'>').html(
            "<td class='table-item__number'>" + response[i].id + "</td><td class='table-item__image'>" + response[i].title + "</td><td class='table-item__name'>" + response[i].city + "</td><td class='table-item__name'>"+ response[i].address +"</td>").appendTo('.order-table')
   })
});


(function(document) {
'use strict';

var LightTableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
                Arr.forEach.call(tbody.rows, _filter);
            });
        });
    }

    function _filter(row) {
        var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? `none` : 'table-row';
    }

    return {
        init: function() {
            var inputs = document.getElementsByClassName('form__input');
            Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
            });
        }
    };
})(Array.prototype);

document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
        LightTableFilter.init();
    }
});

})(document);



