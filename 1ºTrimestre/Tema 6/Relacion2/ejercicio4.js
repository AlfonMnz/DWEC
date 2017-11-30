var mijson;
var user= document.getElementById("intUsuario")

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           TransformarToString(this.responseText);
        }
    };
    xhttp.open("GET", "usuarios.json", true);
    xhttp.send();
    mostrarCosa()
}
function TransformarToString(json) {
    var obj=JSON.parse(json)
}
function mostrarCosa(obj) {
    for (i)

}
setInterval(loadDoc,5000)