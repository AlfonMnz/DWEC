function getRandomArbitrary(min, max) {
    return Math.random() * (max+1  - min) + min;
}
function foto_aleatoria() {
 res = parseInt(getRandomArbitrary(0,2))
 array = ["./imagenes8/foto1.jpg","./imagenes8/foto2.jpg","./imagenes8/foto3.png"]
 document.write("<img src= '"+ array[res] + "' />")

}
foto_aleatoria()
