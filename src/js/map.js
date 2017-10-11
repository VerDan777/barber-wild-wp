class Map {
    constructor() {
        this.initMap();
    }
    initMap() {
        // Create object map
        // var mapStyles = new google.maps.StyledMapType(require('./modules/_mapStyles.js'));
    
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            center: new google.maps.LatLng(54.717592, 20.497258),
            suppressInfoWindows: true,
        });
        
        // map.mapTypes.set('styled_map', mapStyles);
        // map.setMapTypeId('styled_map');
}
}
export default Map;