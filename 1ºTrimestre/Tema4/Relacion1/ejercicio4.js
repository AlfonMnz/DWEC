function crear_tabla() {
    var  cosa_html = ''
    for (i=0; i<=100;i++){
        cosa_html+="<tr>"
        for (j=0;j<=100;j++){
            cosa_html += "<td bgcolor='aqua' onclickpress='pintar(this)'></td>"
        }

        cosa_html+="</tr>"
    }
    var tabla = document.getElementById("tabla")
    tabla.innerHTML = cosa_html
}
window.addEventListener("load",crear_tabla)
function pintar(td) {
    if (event.ctrlKey){
        td.style.backgroundColor = 'pink';
    }
    else if (event.altKey)
    td.style.backgroundColor = 'black';
}