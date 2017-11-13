class Gato {
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }


    constructor(nombre, edad, tamaño, raza) {


        this._nombre = nombre;
        this.edad = edad;
        this.tamaño =tamaño
        this.raza = raza
    }
    caracteristicas(){
        console.log("me llamo " + this.+ " tengo "+ this.edad + " años" + " mido " + this.tamaño + " cm" + " y soy un "+ this.raza)

    }
}
var g = new Gato("misifu",2,24,"siames")
g.caracteristicas()
class JaulaGatitos {
    constructor() {
        this.array_gatos = new Array()
    }

    añadirGato(gato) {
        this.array_gatos.push(gato)
    }

    buscarGato(nombre_gato) {
        for (let i = 0; i < this.array_gatos.length; i++) {
            if (this.array_gatos[i].nombre == nombre_gato) {
                console.log(this.array_gatos[i].caracteristicas())
            }
            else {
                console.log("no lo encuentro")
            }
        }
    }

    mostrarGato() {
        let cont = 0

        for (let i = 0; i < this.array_gatos.length; i++) {
            cont++
            console.log(this.array_gatos[i].caracteristicas()+"</br>")
        }
        console.log(cont)
    }
}