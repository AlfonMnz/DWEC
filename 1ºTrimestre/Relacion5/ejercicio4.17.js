
function tablas(num) {
    for (i=0;i<num+1;i++){
        document.write("<p><strong>Tabla del "+i+"</strong></p>")
        for (j=0;j<11;j++){
            document.write(i+" x " + j + " = " + i*j)
            document.write("<br>")
        }
    }

    document.write("<br>")

}
tablas(50)