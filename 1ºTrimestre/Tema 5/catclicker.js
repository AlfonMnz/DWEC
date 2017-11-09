let contador;
contador = 0;
let caja_img = document.getElementById("imagenes");
let array_img = document.querySelectorAll("img");
let array_parrafos = document.querySelectorAll("p");
let array_cont = new Array(19).fill(0)


let clice = (event) => {
    var elemento = event.target;
    for (let i = 0; i < array_img.length; i++) {

        if (elemento == array_img[i]) {
            array_cont[i] += 1
            array_parrafos[i].innerHTML = "Número de clicks en el gran bill número " + (i+1) + " es " + array_cont[i]

        }
    }


}
