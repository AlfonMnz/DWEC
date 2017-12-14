function almacenar(enlace) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.array_enlaces) {
            localStorage.array_enlaces.push(enlace)
        } else {
            localStorage.array_enlaces = new Array()
            localStorage.array_enlaces.push(enlace)
        }
    }

}

function creaEnlace(url, texto) {
    var enlace = document.createElement("a")
    enlace.setAttribute("href", url)
    enlace.innerHTML = texto
    document.body.appendChild(enlace)
    almacenar(enlace)

}