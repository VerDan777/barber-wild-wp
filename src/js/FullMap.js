import $ from 'jquery';
var markers = [];

const popup = `
    <div class="infowindow">
    <div>
        <img class="infowindow__img" src="./img/oldboy_logo.svg" alt="pic"/>
    </div>
        <div>
            <h2 class="infowindow__title infowindow__mainTitle" id="title"></h3>
            <h3 class="infowindow__title" id="address"></h3>
            <h3 class="infowindow__title" id="phone"><a class="infowindow__link" href=""></a></h3>
        </div>
    <div class="infowindow__close">
        <?xml version="1.0"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve" class="infowindow__close-img"><g><g>
        <g>
            <polygon id="bg" points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   " data-original="#000000" class="active-path" data-old_color="#c7a166" fill="#c7a166"/>
        </g>
    </g></g> </svg>
    </div>
    </div>
`
$(".site-header--map").append(popup)
$(".infowindow").css("display", "none");



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

    // Limit the zoom level
    google.maps.event.addListener(map, 'zoom_changed', function() {
        if (map.getZoom() < 3) map.setZoom(3);
    });


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
                    <div class="infowindow">
                        <div>
                            <img src="${value.img}"/>
                        </div>
                        <div class="infowindow__content">
                            <h2 class="infowindow__title" id="title">${value.title}</h3>
                            <h3 class="infowindow__title" id="address">${value.address}</h3>
                            <h3 class="infowindow__title" id="phone">${value.phone}</h3>
                        </div>
                        <p class="close">Close</p>
                    </div>
                    `
            });
            google.maps.event.addListener(infowindow, 'domready', function () {
                $('.infowindow').closest('.gm-style-iw').parent().addClass('custom-iw');
        
            });

            const popup = `
            <div class="infowindow">
                <div>
                <img class="infowindow__img" src="${value.img}"/>
                </div>
                <div>
                    <h2 class="infowindow__title">${value.title}</h3>
                    <h3 class="infowindow__title">${value.address}</h3>
                    <h3 class="infowindow__title"><a href="">${value.phone}</h3>
                </div>
                <div class="infowindow__close">Close</div>
            </div>
            `
            $(".infowindow").find(".infowindow__img").attr("src",value.img);

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
                $(".infowindow").css("display", "flex");
                $(".infowindow").find(".infowindow__img").attr("src",value.img);
                $(".infowindow").find("#title").text(value.title);
                $(".infowindow").find(".infowindow__link").attr("href",value.phone);
                $(".infowindow").find("#address").text(value.address);
                $(".infowindow").find("#phone").text(value.phone);
            })

            $(".infowindow__close").click(function() {
                $(".infowindow").css("display", "none");
             })

////////////////////////// OnClick//////////////////////
           
                var TableItem = $(".table-item");
                TableItem.on('click',function(e) {
                    e.preventDefault();
                    var idToFind = $(this).data("title");
                    if(idToFind == markers[i].id) {
                        var NewPosition = new google.maps.LatLng(markers[i].lat, markers[i].lng);
                        map.setCenter(NewPosition);
                        map.setZoom(15);
                        $(".infowindow").css("display", "flex");
                        $(".infowindow").find(".infowindow__img").attr("src",value.img);
                        $(".infowindow").find("#title").text(value.title);
                        $(".infowindow").find("#address").text(value.address);
                        $(".infowindow").find("#phone").text(value.phone);
                        $(".infowindow").find(".infowindow__title a").attr("href",value.phone);
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
            var markerIcons = [{
                url: './img/m3.png',
                width: 65,
                height: 65,
                textColor: '#ffffff',
                anchorText: [5, 0],
                textSize: 10
            }];
                var markerCluster = new MarkerClusterer(map, markers, {styles: markerIcons});
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

// Events
$(function() {
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


