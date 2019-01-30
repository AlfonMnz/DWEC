function crear_tablas() {
    var num_filas = window.prompt("Introduce el número de filas")
    var num_columnas = window.prompt("Introduce el número de columnas")
    var alto = window.prompt("Introduce el número de píxeles de alto")
    var ancho = window.prompt("Introduce el número de píxeles de ancho")
    document.write("<table border= '0' cellspacing = '2' bgcolor= 'black' width = '200'>")
    for (i=1; i <=num_filas;i++){
        document.write("<tr bgcolor = 'white' height = ''"+ ancho + "'>")
        for (j=1; j<=num_columnas;j++){
            document.write("<td width = '"+alto +"'> &nbsp;</td>" )
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

crear_tablas()