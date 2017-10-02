var contador = 3
function reducir() {
    if (contador>=0){
        console.log(contador)
        contador--
        setTimeout(reducir,1000)
    }
    else {
        document.write("WUBBALUBBA DUB DUB")
    }

}
reducir()