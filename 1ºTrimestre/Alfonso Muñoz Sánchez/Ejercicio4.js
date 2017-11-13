function aplicaEstilos(id_tabla="") {

    var tabla = document.getElementById(id_tabla)
    var lista_tr= tabla.querySelectorAll("tr")
    var lista_th = tabla.querySelectorAll("th")
    var lista_td= tabla.querySelectorAll("td")
    console.log(lista_tr);
    for (let i=0;i<lista_th.length;i++){
        lista_th[i].style.backgroundColor="red"

    }
    console.log(lista_td.length)
    for (let i=0;i<lista_td.length;i++){
        if (i%2==0){
            lista_td[i].style.backgroundColor="blue"
        }
        else {
            lista_td[i].style.backgroundColor="green"
        }
    }


}
aplicaEstilos("tabla")