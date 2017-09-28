function suma_de_argumentos(...lista_numeros) {
    var sum=0
    for (i=0; i<=lista_numeros.length;i++){
        sum = sum+lista_numeros[i]
    }
    return sum
}