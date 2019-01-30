function celsiusTofahrenHEIL(celsius) {
    return "los grados celsius son " + (celsius * (9 / 5) + 32) + "ºF"

}

function fahrenHEILTocelsius(fahrenHEIL) {
    return "Los grados fahrenheil son " + ((fahrenHEIL - 32) / 1.800) + "ºC"

}

var celsius = window.prompt("Introduce unos grados celsius");
var fahrenHEIL = window.prompt("Introduce unos grados fahrenHEIL")
console.log(celsiusTofahrenHEIL(celsius));
console.log(fahrenHEILTocelsius(fahrenHEIL));

