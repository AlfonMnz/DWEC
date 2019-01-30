function cargar(event) {
    var carga = event.on;
    var pcarga = document.getElementById("carga")
    pcarga.innerHTML = ("Ha tardado en cargar" + carga)


}

window.addEventListener("load", cargar, false)