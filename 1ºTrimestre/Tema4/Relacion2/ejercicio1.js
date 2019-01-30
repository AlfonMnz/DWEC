
function init() {

    var touchzone = document.getElementById("pantalla");

    touchzone.addEventListener("touchstart", touchHandler, false);
}


function touchHandler(event) {

    var coords = document.getElementById("coords");

    coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
    console.log('x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY)
}

init()