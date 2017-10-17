function ejercicio7() {
    var array = []
    for (i=0; i < 10;i++){
        array.push(0)
    }
    console.log(array)
    for (i=0;i<10;i++){
        array[i]=array[i]+1
    }
    console.log(array)
    array = array.join(" ")
    console.log(array)
}
ejercicio7()