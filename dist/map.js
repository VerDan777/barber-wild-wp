/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Declare the initialization of map
	// var markers=[];
	window.initMap = function () {

	    // Create object map
	    var mapStyles = new google.maps.StyledMapType(__webpack_require__(2));

	    var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 4,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        center: new google.maps.LatLng(54.717592, 20.497258),
	        suppressInfoWindows: true
	    });

	    map.mapTypes.set('styled_map', mapStyles);
	    map.setMapTypeId('styled_map');

	    // var map = new google.maps.Map(document.getElementById("map"), {
	    //     styles: {
	    //         elementType: "all",
	    //         featureType: "poi",
	    //         stylers: [{
	    //             visibility: "off"
	    //         }]
	    //     }
	    // });
	};

	//     // Parsing external json file 

	//     $.getJSON("google.json",null,function(json1) {
	//       $.each(json1, function(key, data) {
	//           var latLng = new google.maps.LatLng(data.lat, data.lng); 


	//     // Creating MarkerImage for Markers  

	//         var imageOldBoy = new google.maps.MarkerImage (
	//             './img/image.png',
	//             new google.maps.Size(32,32),
	//             new google.maps.Point(0,0),
	//             new google.maps.Point(16,32)
	//         );

	//     // Creating object marker


	//           var marker = new google.maps.Marker({
	//             position: latLng,
	//             map: map,
	//             draggable: false,
	//             raiseOnDrag: false,
	//             icon: imageOldBoy,
	//             shadow: shadow,
	//             shape: shape,
	//             title: data.title
	//           });

	//           markers.push(marker);

	//     // Styling shadow for MarkerImage

	//            var shadow = new google.maps.MarkerImage(
	//             'marker-images/shadow.png',
	//             new google.maps.Size(52,32),
	//             new google.maps.Point(0,0),
	//             new google.maps.Point(16,32)
	// );


	//            var shape = {
	//             coord: [17,0,18,1,19,2,20,3,21,4,23,5,24,6,25,7,26,8,27,9,27,10,28,11,28,12,28,13,29,14,29,15,29,16,29,17,29,18,29,19,30,20,31,21,31,22,30,23,28,24,28,25,28,26,27,27,26,28,26,29,26,30,26,31,4,31,3,30,3,29,2,28,2,27,2,26,2,25,2,24,2,23,1,22,1,21,0,20,0,19,0,18,1,17,1,16,1,15,1,14,1,13,2,12,2,11,2,10,3,9,4,8,5,7,6,6,7,5,9,4,9,3,9,2,9,1,11,0,17,0],
	//             type: 'poly'

	// };
	//     // Creating InfoWindow

	//             var infoWindow = new google.maps.InfoWindow();
	//             var text =data.title+data.description;

	//     // Add EventListeners for mouseEvents


	//             google.maps.event.addListener(marker, "click", function(e) {
	//               infoWindow.setContent(text);
	//               infoWindow.open(map,marker);
	//             });
	//       });
	//           var options = {
	//             imagePath: 'img/m'
	//         };
	//        var markerCluster = new MarkerClusterer(map, markers);

	// });

	// var infoWindow = new google.maps.InfoWindow({map: map});


	//     //Geolocation

	//   if(navigator.geolocation) {

	//     navigator.geolocation.getCurrentPosition(function(position){

	//        var pos= {
	//          lat:position.coords.latitude,
	//          lng:position.coords.longitude
	//        };

	//        infoWindow.setPosition(pos);
	//        infoWindow.setContent('Location');
	//        map.setCenter(pos);

	//     }),function() {

	//       handleLocationError(true,infoWindow,map.getCenter());

	//     };
	//   } else {

	//     handleLocationError(false,infoWindow,map.getCenter());

	//   }

	//   function handleLocationError(browserHasLocation,infoWindow,pos) {
	//     infoWindow.setPosition(pos);
	//     infoWindow.setContent(browserHasLocation? 'Error: The Geolocation service failed.' :
	//                               'Error: Your browser doesn\'t support geolocation.')
	//   }


	//         // Limit the zoom level
	//         google.maps.event.addListener(map, 'zoom_changed', function() {
	//           if (map.getZoom() < 3) map.setZoom(3);
	//         });


	// }

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = [{
	    "featureType": "all",
	    "elementType": "labels.text.fill",
	    "stylers": [{
	        "saturation": 36
	    }, {
	        "color": "#000000"
	    }, {
	        "lightness": 40
	    }]
	}, {
	    "featureType": "all",
	    "elementType": "labels.text.stroke",
	    "stylers": [{
	        "visibility": "on"
	    }, {
	        "color": "#000000"
	    }, {
	        "lightness": 16
	    }]
	}, {
	    "featureType": "all",
	    "elementType": "labels.icon",
	    "stylers": [{
	        "visibility": "off"
	    }]
	}, {
	    "featureType": "administrative",
	    "elementType": "geometry.stroke",
	    "stylers": [{
	        "weight": 1.2
	    }, {
	        "color": "#121212"
	    }]
	}, {
	    "featureType": "administrative",
	    "elementType": "labels.text.fill",
	    "stylers": [{
	        "color": "#e9dcca"
	    }]
	}, {
	    "featureType": "administrative",
	    "elementType": "labels.text.stroke",
	    "stylers": [{
	        "visibility": "on"
	    }, {
	        "hue": "#ff0000"
	    }]
	}, {
	    "featureType": "landscape",
	    "elementType": "geometry",
	    "stylers": [{
	        "color": "#c7a166"
	    }, {
	        "lightness": 20
	    }, {
	        "visibility": "on"
	    }]
	}, {
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [{
	        "color": "#000000"
	    }, {
	        "lightness": 21
	    }]
	}, {
	    "featureType": "road.highway",
	    "elementType": "geometry.fill",
	    "stylers": [{
	        "color": "#000000"
	    }, {
	        "lightness": 17
	    }]
	}, {
	    "featureType": "road.highway",
	    "elementType": "geometry.stroke",
	    "stylers": [{
	        "color": "#000000"
	    }, {
	        "lightness": 29
	    }, {
	        "weight": 0.2
	    }]
	}, {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [{
	        "color": "#000000"
	    }, {
	        "lightness": 18
	    }]
	}, {
	    "featureType": "road.local",
	    "elementType": "geometry",
	    "stylers": [{
	        "color": "#000000"
	    }, {
	        "lightness": 16
	    }]
	}, {
	    "featureType": "transit",
	    "elementType": "geometry",
	    "stylers": [{
	        "color": "#000000"
	    }, {
	        "lightness": 19
	    }]
	}, {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [{
	        "color": "#121212"
	    }, {
	        "lightness": 1
	    }]
	}];

/***/ })
/******/ ]);