function pintar() {
    // language=JQuery-CSS
    $("tr:nth-child(-n+2)").css({"backgroundColor":"red"});
    $("tr:nth-child(n+4)").css({"backgroundColor":"blue"})
}
pintar();
function seleccionar() {
    $("td:empty").css({"backgroundColor":"yellow"})
}
seleccionar()