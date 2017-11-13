function Ejercicio3(cambioTitulo = "") {
    var titulo = document.getElementById("titulo");

    var nombreImagenes = document.getElementById("nombreImagenes");
    var divSegundos = document.getElementById("segundos")

    if (cambioTitulo !== "") {
        titulo.innerHTML = cambioTitulo
    }
    var array_img = document.getElementsByTagName("IMG");
    if (array_img.length > 0) {
        let cadena_html = ""
        for (let i = 0; i < array_img.length; i++) {
            cadena_html += "Imagen número " + (i + 1) + " con nombre o link " + array_img[i].src + "</br>"
        }
        nombreImagenes.innerHTML = cadena_html;
    }
    else {
        console.log(0)
    }
    function mostrarSegundos() {
        let fecha = new Date();
        let segundos = fecha.getSeconds();
        if (segundos == 0){
            var link = window.prompt("Introduce un link")
            document.location.href=link

        }
        divSegundos.innerHTML = segundos

    }
    setInterval(mostrarSegundos,3000)


}

Ejercicio3("fillMurray");
