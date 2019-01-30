function añadir() {
    var valor = document.getElementsByTagName("input")[0].value
    var lista = document.getElementById("atalgaba")
    lista.innerHTML += "<li> "+ valor + "</li>"
    console.log("Holi")
}