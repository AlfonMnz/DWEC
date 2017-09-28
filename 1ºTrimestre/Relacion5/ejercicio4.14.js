var numColumnas = window.prompt("Introduce el número de columnas");
var ancho = window.prompt("Introduce el número de píxeles de ancho");
var alto = window.prompt("Introduce el número de píxeles de alto");

function createTablas(numColumnas, ancho, alto) {
    var i = 0
    document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '" + (ancho * numColumnas) + "'> ")
    document.write("<tr bgcolor='white' height = '" + alto + "'> ")
    while (i < numColumnas) {
        document.write("<td width = '" + ancho + "' bgcolor='black'> &nbsp;</td>")
        document.write("<td width = '" + ancho + "' bgcolor='white'> &nbsp;</td>")
        i += 2;
    }
    document.write("</tr>")
    document.write("</table>")
}

createTablas(numColumnas, ancho, alto);