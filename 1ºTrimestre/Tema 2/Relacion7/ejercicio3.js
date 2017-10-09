var marker;
var map;
var lista_posiciones = [];
var uluru;
var flightPath;
var prueba;
var prueba2;


function initMap() {
    let init = true;
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude + " " + position.coords.longitude);

        uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: uluru
        });


        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.BOUNCE,
            position: uluru

        });
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        geocodeLatLng(geocoder, map, infowindow);


        setInterval(ActualizarMarcador, 300)
    })

    function ActualizarMarcador() {
        if (init) {
            init = false;
            prueba = uluru.lat;
            prueba2 = uluru.lng;
        }

        lista_posiciones.push({lat: prueba, lng: prueba2})
        prueba += 0.001;
        prueba2 -= 0.001;
        console.log("+ " + prueba + " || " + prueba2);

        marker.position = {lat: prueba,lng:prueba2};

        flightPath = new google.maps.Polyline({
            path: lista_posiciones,
            geodesic: true,
            strokeColor: '#ff18ed',
            strokeOpacity: 7.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);
        for (obj of lista_posiciones) {
            console.log("- " + obj.lat + " || " + obj.lng);
        }


    }

    function geocodeLatLng(geocoder, map, infowindow) {
        var latlng = uluru;
        geocoder.geocode({'location': latlng}, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {

                    infowindow.setContent(results[1].formatted_address);
                    infowindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
}
