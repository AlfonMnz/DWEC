function greaterNum(num1, num2) {
    if (num1 > num2) {

        return num1
    }
    else
        return num2

}

var num1 = window.prompt("Introduce el primer número")
var num2 = window.prompt("introduce el segundo número")
console.log(greaterNum(num1, num2))
