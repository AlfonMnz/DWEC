

function mayor_o_menor(numero, num_a_comprobar) {
    if (num_a_comprobar > numero) {
        alert("El jugador 1 ha elegido un número menor")
    }
    else {
        alert("El jugador 1 ha elegido un número mayor")
    }

}
var numero = parseInt(window.prompt("Jugador 1: Introduza un número."));
var num_a_comprobar = parseInt(window.prompt("INTRODUSE UN NUMEROSIKO AEH?"));
while (numero != num_a_comprobar){

    mayor_o_menor(numero, num_a_comprobar);
    var num_a_comprobar = parseInt(window.prompt("INTRODUSE UN NUMEROSIKO AEH?"))
}
alert("ENHORABUENA SOSIO");