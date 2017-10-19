class Baraja {
    constructor(num_montones) {
        this.array_montones = []
        this.crear_baraja(num_montones)
        this.organizar_baraja()

    }

    crear_baraja(num_montones) {
        for (let i = 0; i <= num_montones; i++) {
            this.array_montones.push(new Monton(i))
        }
    }
//  printear(){
//
//
//        var output = '';
//        for (var property in object) {
//            output += property + ': ' + object[property]+'; ';
//        }
//
//
//
//    }
    organizar_baraja() {
        document.write("<ul>Primer monton:")
        for  (let i=0;i<=this.array_montones[1].array_cartas.length;i++){
            document.write("<li>holi </li>")
        }
        document.write("</ul>")
    }
}

class Monton {
    constructor(palo) {
        this.array_cartas = [];
        this.crear_monton(palo)
    }

    crear_monton(palo) {
        for (let i = 1; i <= 14; i++) {
            this.array_cartas.push(new Carta(i, i))
        }
    }

}

class Carta {
    constructor(numero, palo = 0) {
        this.numero = numero;
        this.palo = palo;
    }
}

b = new Baraja(4);