if ("geolication" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        alert(position.coords.latitude + " " + position.coords.longitude);
    });
}
else {
    alert("Que me la barnices")
}


function localizar() {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude + " " + position.coords.longitude);

    });

}
setInterval(localizar,1000)
function DistanciaDeDosPuntos(latInicial, lonInicial, latFinal, lonFinal) {
    var R = 6371;
    var dLat = aRadianes(latFinal-latInicial);
    var dLon = aRadianes(lonFinal-lonInicial);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(aRadianes(latInicial)) * Math.cos(aRadianes(latFinal)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}

function aRadianes(deg) {
    return deg * (Math.PI/180)
}