var numero = window.prompt("Jugador 1: Introduza un número.");

function mayor_o_menor(numero, num_a_comprobar) {
    if (num_a_comprobar > numero) {
        alert("El jugador 1 ha elegido un número menor")
    }
    else {
        alert("El jugador 1 ha elegido un número mayor")
    }

}

var num_a_comprobar = window.prompt("INTRODUSE UN NUMEROSIKO AEH?");
while (numero != num_a_comprobar){

    mayor_o_menor(numero, num_a_comprobar);
    var num_a_comprobar = window.prompt("INTRODUSE UN NUMEROSIKO AEH?");
}
alert("ENHORABUENA SOSIO")