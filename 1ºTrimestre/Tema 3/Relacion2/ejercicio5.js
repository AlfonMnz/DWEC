function compare(a, b) {
    if ((a % 2 - b % 2) == 0) {
        return 0
    }
    if ((a % 2 - b % 2) == 0) {
        return -1
    }
    return 1
}

function paresImpares() {
    var array = []
    for (i = 0; i <= 100; i++) {
        array.push(Math.floor(Math.random() * 1000) + 1)
    }
    var arri = array.sort(compare)
    return arri
}


console.log(paresImpares())