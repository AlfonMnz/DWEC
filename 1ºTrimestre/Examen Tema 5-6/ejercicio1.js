function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            desempaquetar(this);
        }
    };
    xhttp.open("GET", "datos.xml", true);
    xhttp.send();
}

function desempaquetar(datosxml) {
    var xmlDoc = datosxml.responseXML;
    var noticias = xmlDoc.getElementsByTagName("noticia");
    enmaquetar(noticias);
    return noticias

}

function obtener_noticias(noticias) {
    return noticias
}

function enmaquetar(noticias) {
    let createTable = document.createElement("table");
    createTable.setAttribute("id", "tabla");
    document.body.appendChild(createTable);
    var tabla = document.getElementById("tabla");
    for (let i = 0; i < noticias.length; i++) {
        var fila = document.createElement("tr");
        fila.setAttribute("onclick", "mostrar_noticia(this)")
        fila.setAttribute("id", i);
        fila.innerHTML = "<td>" + noticias[i].childNodes[1].textContent + "</td>";
        fila.innerHTML += "<td>" + noticias[i].childNodes[3].textContent + "</td>";
        tabla.appendChild(fila)
    }
    return noticias

}

function mostrar_noticia(target,noticias) {
    let div_noticia = document.createElement("div")
    let div_texto = document.createElement("div")
    let div_imagenes = document.createElement("div")
    div_texto.innerHTML = noticias[target.id].childNodes[5].textContent
    div_noticia.appendChild(div_texto)
    div_imagenes.innerHTML = "<a href="+noticias[target.id].childNodes[7].textContent+"></a>"
    div_noticia.appendChild(div_imagenes)
    document.body.appendChild(div_noticia)

}

loadDoc();