function ajedrez() {
    var pixeles = prompt("Introdice los píxeles")
    document.write("<table border= '0' cellspacing = '2' bgcolor= 'black' width = '200'>");

    for (i=1; i <=8;i++){
        document.write("<tr bgcolor = 'white' height = ''"+ pixeles + "'>");
            for (j=1; j<=8;j++){
                if (i%2 ==1){
                    if (j%2==0)
                        document.write("<td bgcolor='white' width = '"+pixeles +"'> &nbsp;</td>" );
                    else {
                        document.write("<td bgcolor='black' width = '"+pixeles +"'> &nbsp;</td>" );

                    }
                }
                else {
                    if (j%2==1)
                        document.write("<td bgcolor='white' width = '"+pixeles +"'> &nbsp;</td>" );
                    else {
                        document.write("<td bgcolor='black' width = '"+pixeles +"'> &nbsp;</td>" );

                    }
                }

            }
        document.write("</tr>");
    }
    document.write('</table>');

}
ajedrez()