var celsius = window.prompt("Introduce grados Celsius");
var celsius_to_farehnheit = celsius * (9 / 5) + 32

document.write("Estos grados celsius " + celsius + " son " + celsius_to_farehnheit + "ºF");
document.write("<br />");
var farehnheit = window.prompt("Introduce ahora grados FarenHEIL");
var farenHEIL_to_celsius = (farehnheit - 32) / 1.800;
document.write("Estos grados farenHEIL " + farehnheit + " son " + farenHEIL_to_celsius + "ºC");
