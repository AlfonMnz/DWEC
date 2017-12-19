function pintar() {
    $("tr:nth-child(-n+2)").css({"backgroundColor":"red"});
    $("tr:nth-child(n+4)").css({"backgroundColor":"blue"})
}
pintar();