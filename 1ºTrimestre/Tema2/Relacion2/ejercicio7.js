
function senos(longitud) {
    document.write("<table>")
    for (i=0;i<=longitud;i++){
        document.write("<tr>")
        document.write("<td>" + i)
        document.write("<td>" + Math.sin(i * Math.PI / 180))
        document.write("</td>")
        document.write("</tr>")
    }
    document.write("<table>")
}
senos(90)