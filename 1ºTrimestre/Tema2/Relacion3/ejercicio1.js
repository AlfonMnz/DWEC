//A

function invierteCadena(cad_arg) {
    let res = ""
    for (i = cad_arg.length - 1; i >= 0; i--) {
        res = res + cad_arg[i]
    }
    return res
}

console.log(invierteCadena("ATALGABA ES EL MEJOR"))

//B)

function inviertePalabras(cad_arg) {
    let cadena_separada = cad_arg.split(" ")
    let res = ""

    for (j = cadena_separada.length - 1; j >= 0; j--) {
        res = res + cadena_separada[j] + " "
    }

    return res


}

console.log(inviertePalabras("EL TRIGO ENTRE TOAS LAS FLORES, HA ELEGIDO A LA AMAPOLA"))

//C

function encuentraPalabraMasLarga(cad_arg) {
    let cadena_separada = cad_arg.split(" ");
    let res = 0;
    for (palabra of cadena_separada) {
        if (palabra.length > res) {
            res = palabra.length;
        }
    }
    return res;
}

console.log(encuentraPalabraMasLarga("Hola que tal supercalifragilisticoespialidoso"))

//D

function filtraPalabrasMasLargas(cad_arg, i) {
    let cadena_separada = cad_arg.split(" ");
    let res = 0;
    for (palabra of cadena_separada) {
        if (palabra.length > i) {
            res++
        }
    }
    return res;
}

console.log(filtraPalabrasMasLargas("hola a a a Paco", 1))

//E

function cadenaBienFormada(cad_arg) {
    let res = cad_arg[0].toUpperCase()
    for (i = 1; i < cad_arg.length; i++) {
        res = res + cad_arg[i].toLowerCase()
    }
    return res
}

console.log(cadenaBienFormada("AnToÑiCoH MoReEeNiIiKkOoHh TeH LoO PoNeH KaAlEnTiIiKoOoH"))