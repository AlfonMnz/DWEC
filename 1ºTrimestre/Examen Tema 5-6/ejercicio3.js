const NS_svg = "http://www.w3.org/2000/svg";

function crearCuadrado(id, lado) {
    var svg = "<svg version=" + 1.1 + " width=" + 500 + " height=" + 500 + " id=" + "svg " + " xmlns=" + "http://www.w3.org/2000/svg" +
        "xmlns:xlink=" + "http://www.w3.org/1999/xlink" + ">";

    let id_element = document.getElementById(id);
    id_element.innerHTML += svg;
    let ssvg = document.getElementById("svg");
    let cuadrado = document.createElementNS(NS_svg, "rect");
    cuadrado.setAttributeNS(null, "x", 10);
    cuadrado.setAttributeNS(null, "y", 10);
    cuadrado.setAttributeNS(null, "width", lado);
    cuadrado.setAttributeNS(null, "height", lado);
    cuadrado.setAttributeNS(null, "fill", "blue");
    cuadrado.setAttributeNS(null, "id", "cuadrado");

    ssvg.appendChild(cuadrado)
}

function animar() {

    let cuadrado = document.getElementById("cuadrado");
    cuadrado.setAttribute("width",(parseInt(0)).toString())
    let width_cuadrado = cuadrado.getAttribute("width")
    console.log(width_cuadrado)
   //while (width_cuadrado <=350){
   for (let i;i<70;i++){
       cuadrado.setAttribute("width",(parseInt(cuadrado.getAttribute("width"))+1).toString())
       let width_cuadrado = cuadrado.getAttribute("width")
       console.log(width_cuadrado)
   }
   //    setTimeout(1000)
   //    let width_cuadrado = cuadrado.getAttribute("width")

   //}
}

crearCuadrado("prueba", 100);

