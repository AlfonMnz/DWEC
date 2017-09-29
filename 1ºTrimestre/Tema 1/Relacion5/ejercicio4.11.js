var numColumnas = window.prompt("Introduce el número de columnas");
var ancho = window.prompt("Introduce el número de píxeles de ancho");
var alto = window.prompt("Introduce el número de píxeles de alto");

function createTablas(numColumnas, ancho, alto) {
    document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '" + ancho * numColumnas + "'> ")
    document.write("<tr bgcolor='white' height = '" + alto + "' ")
    for (i = 0; i < numColumnas; i++) {
        document.write("<td width = '" + ancho + "'> &nbsp;</td>")
    }
    document.write("</tr>")
    document.write("</table>")
}
createTablas(numColumnas,ancho,alto);