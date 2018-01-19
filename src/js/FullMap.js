import $ from 'jquery';
var markers = [];

window.initMap = function() {
    // Create object map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        center: new google.maps.LatLng(60.943118, 76.543372),
        suppressInfoWindows: true,
        disableDefaultUI: true,
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        styles: require('./modules/_mapStyles')
    })

    // Parse external JSON
    $.getJSON('google.json', function(data) {
        $.each(data, function(i, value) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].lat, data[i].lng),
                lat: data[i].lat,
                lng: data[i].lng,
                map: map,
                animation: google.maps.Animation.BOUNCE,
                icon: data[i].image,
                title: data[i].title,
                id: data[i].id
            });
            
            // Icon
            var iconFile ='./img/marker.svg';
            marker.setIcon(iconFile);
            markers.push(marker);
            const infowindow = new google.maps.InfoWindow({
                content:
                    `
                    <h3 style="color: black;" >${value.title}</h3>
                    `
            });
            // Geolocation HTML5
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(pos);
                    map.setZoom(12);
                }, function() {
                    // Catch error
                    handleLocationError(true, infowindow, map.getCenter());
                });
            } else {
                // If Browser don't support geolocation
                handleLocationError(false, infowindow, map.getCenter());
            }

            function handleLocationError(browserHasGeolocation,infowindow, pos) {
                infowindow.setPosition(pos);
                infowindow.setContent(browserHasGeolocation ? 
                    'Ваше местоположение не найдено.':
                    'Ваше бразер не поддерживает геолокацию.'
                );
            }

            // Event Listener on InfoWindow
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            })
            google.maps.event.addListener(infowindow, 'domready', function() {

                // Reference to the DIV that wraps the bottom of infowindow
                var iwOuter = $('.gm-style-iw');
            
                /* Since this div is in a position prior to .gm-div style-iw.
                 * We use jQuery and create a iwBackground variable,
                 * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
                */
                var iwBackground = iwOuter.prev();
            
                // Removes background shadow DIV
                iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            
                // Removes white background DIV
                iwBackground.children(':nth-child(4)').css({'display' : 'none'});
            
                // Moves the infowindow 115px to the right.
            
                // Moves the shadow of the arrow 76px to the left margin.
                iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
            
                // Moves the arrow 76px to the left margin.
                iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
            
                // Changes the desired tail shadow color.
                iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});
            
                // Reference to the div that groups the close button elements.
                var iwCloseBtn = iwOuter.next();
            
                // Apply the desired effect to the close button
                iwCloseBtn.css({opacity: '1', right: '0px', top: '3px'});
            
                // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
                if($('.iw-content').height() < 140){
                  $('.iw-bottom-gradient').css({display: 'none'});
                }
            
                // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
                iwCloseBtn.mouseout(function(){
                  $(this).css({opacity: '1'});
                });
              });

////////////////////////// OnClick//////////////////////
           
                var TableItem = $(".table-item");
                TableItem.on('click',function(e) {
                    e.preventDefault();
                    var idToFind = $(this).data("title");
                    if(idToFind == markers[i].id) {
                        var NewPosition = new google.maps.LatLng(markers[i].lat, markers[i].lng);
                        map.setCenter(NewPosition);
                        map.setZoom(15);
                        infowindow.open(map, marker);
                        $("html, body").animate({
                            scrollTop: 0
                        }, 600);
                    }
                })


                var Phone = $(".table-item__phone-container");
                Phone.click(function(e) {
                    e.stopPropagation();
                })
//////////////////////////////////////////////////////////
                
            })
                var markerCluster = new MarkerClusterer(map, markers, {
                    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
                });
        })
}

            // Fill content from JSON
$.getJSON('google.json', function(response) {
    $.each(response, function(i, value) {
        $('<tr class="table-item table-item--center "data-title='+ response[i].id +'>').html(

        `
            <td class='table-item__number'>${response[i].id}</td>
            <td class='table-item__image table-item__image--map'>${response[i].title}</td>
            <td class='table-item__name table-item__name--map table-item__city'>${response[i].city}</td>
            <td class='table-item__name table-item__name--map table-item__address'>${response[i].address}</td>
            <td class='table-item__name table-item__name--map table-item__phone-container href='tel:"+response[i].phone.replace(/[{()} -]/g,'')'>
                <a class='table-item__phone' href=tel:"${response[i].phone}">${response[i].phone}</a></td>`).appendTo('.order-table')
   })
});


// Selected Branches
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

(function() {
    var button = $(".button");
    var buttonMap = $(".button--map");

    button.click(function() {
        buttonMap.css("visibility", "visible")
        $("html, body").animate({scrollTop: 1000}, 600);
    });

    buttonMap.click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        $(this).css("visibility", "hidden");
    });

    $(window).scroll(function() {
        if($(document).scrollTop() < 800) {
            buttonMap.css("display", "none");
        } else {
            buttonMap.css("display", "block");
        }
    })

}())


