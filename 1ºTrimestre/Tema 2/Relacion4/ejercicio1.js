
function obtenerInformacion() {
    document.write("<table>");
    document.write("<tr><td>App Code Name</td><td>&nbsp;</td><td>"+ window.navigator.appCodeName+"</td>");
    document.write("<tr><td>lenguaje </td><td>&nbsp;</td><td>"+ navigator.language +"</td>");
    document.write("<tr><td>Galletas Activadas</td><td>&nbsp;</td><td>"+ window.navigator.cookieEnabled+"</td>");
    document.write("<tr><td>Geolocalización</td><td>&nbsp;</td><td>"+window.navigator.geolocation+"</td>")

    document.write("</table>");
}
obtenerInformacion()
