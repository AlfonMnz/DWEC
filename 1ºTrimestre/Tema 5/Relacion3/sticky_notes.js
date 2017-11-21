const contenedor_nota = document.getElementById("contenedorNotas");
let cont
cont = 0

class Nota {
    constructor(mensaje = "", fecha = new Date()) {
        this.mensaje = mensaje;
        this.fecha = fecha;
        Nota.crear_nota()


    }

    static crear_nota() {
        console.log("holi")
        let nueva_nota = document.createElement("div");

        nueva_nota.setAttribute('class', "nota");
        nueva_nota.setAttribute("id", "nota";
        contenedor_nota.appendChild(nueva_nota);
        var el = document.getElementById('nota'+cont);
        var mover = false, x, y, posx, posy, first = true;
        el.onmousedown = function () {
            mover = true;
        };
        el.onmouseup = function () {
            mover = false;
            first = true;
        };
        el.onmousemove = function (e) {
            if (mover) {
                if (first) {
                    x = e.offsetX;
                    y = e.offsetY;
                    first = false;
                }
                posx = e.pageX - x;
                posy = e.pageY - y;
                this.style.left = posx + 'px';
                this.style.top = posy + 'px';
            }
        };

    }
}

class lista_notas {
    constructor() {
        this.array_notas = []
    }

    add_nota(nota) {
        this.array_notas.push(nota)
    }

    mostrar_nota() {

    }
}

let list = new lista_notas();

function crear_nota() {
    list.add_nota(new Nota("hola BB"))


}

//window.onload = function () {

//}