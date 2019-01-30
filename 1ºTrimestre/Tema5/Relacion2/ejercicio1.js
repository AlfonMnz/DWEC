let pabajo;
let paderecha;
let pabajo2;
let paderecha2;
pabajo = true;
paderecha = true;
pabajo2 = true;
paderecha2 = true;


function mover() {
    let circulo;

    circulo = document.getElementById("circulo");
    console.log(circulo[0].x);
    let py;
    let px;
    px = circulo.getAttribute("cx");
    py = circulo.getAttribute("cy");


    if (!pabajo) {
        circulo.setAttribute("cy", (parseInt(circulo.getAttribute("cy")) - 3).toString());
        if (py <= 0) {
            pabajo = true;

        }
    } else {
        circulo.setAttribute("cy", (parseInt(circulo.getAttribute("cy")) + 3).toString());
        if (py >= 400) {
            pabajo = false;
        }
    }
    if (!paderecha) {
        circulo.setAttribute("cx", (parseInt(circulo.getAttribute("cx")) - 3).toString());
        if (px <= 0) {
            paderecha = true;

        }
    } else {
        circulo.setAttribute("cx", (parseInt(circulo.getAttribute("cx")) + 3).toString());
        if (px >= 700) {
            paderecha = false;
        }
    }
    let circulo2;
    circulo2 = document.getElementById("circulo2");
    let py2;
    let px2;
    px2 = circulo2.getAttribute("cx");
    py2 = circulo2.getAttribute("cy");


    if (!pabajo2) {
        circulo2.setAttribute("cy", (parseInt(circulo2.getAttribute("cy")) - 6).toString());
        if (py2 <= 0) {
            pabajo2 = true;

        }
    } else {
        circulo2.setAttribute("cy", (parseInt(circulo2.getAttribute("cy")) + 6).toString());
        if (py2 >= 400) {
            pabajo2 = false;
        }
    }
    if (!paderecha2) {
        circulo2.setAttribute("cx", (parseInt(circulo2.getAttribute("cx")) - 6).toString());
        if (px2 <= 0) {
            paderecha2 = true;

        }
    } else {
        circulo2.setAttribute("cx", (parseInt(circulo2.getAttribute("cx")) + 6).toString());
        if (px2 >= 700) {
            paderecha2 = false;
        }
    }
    let width1 = circulo.getAttribute("width");
    let height1 = circulo.getAttribute("height");
    let width2 = circulo2.getAttribute("width");
    let height2 = circulo2.getAttribute("height");
    if (px < px2 + width2 &&
        px + width1 > px2 &&
        py < py2 + height2 &&
        height1 + py > py2) {
        console.log("tocado")
    }
}

setInterval(mover, 1000 / 60);