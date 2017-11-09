var lista_enlaces = document.getElementsByTagName("a");
console.log(lista_enlaces.length);
console.log(lista_enlaces[(lista_enlaces.length) - 2].href);
var cont = 0
for (i = 0; i < lista_enlaces.length; i++) {
    if (lista_enlaces[i].href.includes("google")) {
        cont += 1
    }
}
console.log(cont);
var lista_parrafos = document.getElementsByTagName("p")
var cont = 0
for (i = 0; i < lista_parrafos[2].childNodes.length; i++) if (lista_parrafos[2].childNodes[i].tagName == "A") cont += 1


console.log(cont)
