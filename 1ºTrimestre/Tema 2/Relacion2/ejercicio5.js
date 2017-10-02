var a = parseInt(prompt("Introduce valor A"))
var b = parseInt(prompt("Introduce valor B"))
var c = parseInt(prompt("Introduce valor C"))
function ecuacion2grado(a,b,c) {
    res1 = ((-b)+Math.sqrt((b**2-4*a*c)))/(2*a)
    res2 = ((-b)-Math.sqrt((b**2-4*a*c)))/(2*a)
    return [res1,res2]
}

console.log(ecuacion2grado(a,b,c))