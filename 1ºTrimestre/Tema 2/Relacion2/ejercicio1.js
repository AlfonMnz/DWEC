function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log("Número aleatorio entre 0 y 1 " +Math.random())

console.log("Número aleatorio entre 100 y 200 "+ getRandomArbitrary(100,200))
var num1 = parseInt(window.prompt("Introduce un número"))
var num2 = parseInt(window.prompt("Ahora otro pixa"))
console.log("Número aleatorio entre " + num1 + " y "+ num2 + " "+ getRandomArbitrary(num1,num2))