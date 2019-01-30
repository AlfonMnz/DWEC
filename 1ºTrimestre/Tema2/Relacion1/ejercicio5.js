
function reloj() {
    var fecha= new Date()
    console.log(fecha)
    setTimeout(reloj,1000)
}
reloj()