const contenedor_nota = document.getElementById("contenedorNotas");
var cont;
cont = 0;

class Nota {
    constructor(mensaje = "", fecha = new Date()) {
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.objet = this.crear_nota();
        this.select = false


    }

    crear_nota() {

        let nueva_nota = document.createElement("div");
        let titulo = document.createElement("input");
        titulo.setAttribute("value", "Añadir Título");
        titulo.setAttribute("class", "titulo");
        titulo.setAttribute("maxlength", 10);
        nueva_nota.setAttribute('class', "nota");
        //nueva_nota.addEventListener('click', (event) => {
        //    this.seleccionar(event);
        //});
        nueva_nota.setAttribute('draggable', "true");
        //nueva_nota.setAttribute('ondrop', this.dejar);
        nueva_nota.addEventListener('dragstart', (event) => {
            console.log('pepebotijo');
            this.seleccionar(event);
        });
        nueva_nota.addEventListener('drop', (event) => {
            console.log('juan');
            this.dejar(event);
        });
        contenedor_nota.appendChild(nueva_nota);
        nueva_nota.appendChild(titulo);
        return nueva_nota


    }

    seleccionar(event) {
        this.startX = event.clientX;
        this.startY = event.clientY;
        console.log(this.startX)
        console.log(this.startY)
    }

    dejar(event) {
        console.log("holi")
    }

    posiciones(e) {

        this.offsetX = parseInt(this.elemento.offsetLeft);
        this.offsetY = parseInt(this.elemento.offsetTop);
    }

}

class lista_notas {
    constructor() {
        this.array_notas = []
    }

    add_nota(nota) {
        this.array_notas.push(nota)
    }
}

let list = new lista_notas();

function crear_nota() {
    list.add_nota(new Nota("hola BB"))


}

//window.onload = function () {

//}