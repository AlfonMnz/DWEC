const contenedor_nota = document.getElementById("contenedorNotas");
var cont;
cont = 0;

class Nota {
    constructor(mensaje = "", fecha = new Date()) {
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.crear_nota();
        this.select = false


    }

    crear_nota() {

        let nueva_nota = document.createElement("div");
        let titulo = document.createElement("input");
        titulo.setAttribute("value", "Añadir Título");
        titulo.setAttribute("class", "titulo");
        titulo.setAttribute("maxlength", 10);
        nueva_nota.setAttribute('class', "nota");
        nueva_nota.addEventListener('mousedown', () => {
            this.seleccionar();
        });

        //nueva_nota.setAttribute("id", "nota");

        contenedor_nota.appendChild(nueva_nota);
        nueva_nota.appendChild(titulo)


    }

    seleccionar() {
        this.select = true;
        console.log(this)


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