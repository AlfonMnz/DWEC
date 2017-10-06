var marker;
var map;
var lista_posiciones = [];

function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude + " " + position.coords.longitude);

        var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
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


    })


    function ActualizarMarcador() {
        var localizacion;
        var prueba = 99;
        var prueba2 = -99;
        navigator.geolocation.getCurrentPosition(function (position) {
            localizacion = {lat: position.coords.latitude, lng: position.coords.longitude};
            lista_posiciones.push({lat: prueba, lng: prueba2})
            prueba+=5;
            prueba2-=5;
        });
        marker = ({
            map: map,
            drawFocusRing: true,
            animation: google.maps.Animation.BOUNCE,
            position: localizacion
        });
        console.log(lista_posiciones);
        var flightPath = new google.maps.Polyline({
            path: lista_posiciones,
            geodesic: true,
            strokeColor: '#ff18ed',
            strokeOpacity: 7.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);






    }


    setInterval(ActualizarMarcador, 500)

    function geocodeLatLng(geocoder, map, infowindow) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude + " " + position.coords.longitude);
            var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
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
        })
    }
}
