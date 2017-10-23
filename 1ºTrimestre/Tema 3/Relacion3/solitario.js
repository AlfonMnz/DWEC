/**
 * Created by PitoEuropeo on 22/10/2017.
 */
class Baraja {
    constructor(num_montones) {
        this.array_montones = []
        this.columnas = [];
        this.crear_baraja_y_barajar(num_montones)
        this.organizar_baraja()

    }

    crear_baraja_y_barajar(num_montones) {
        for (let i = 0; i <= num_montones; i++) {
            this.array_montones.push(new Monton(i))

        }
        for (let j = 0; j < this.array_montones.length; j++) {
            Baraja.shuffle(this.array_montones[j].array_cartas)

        }
    }


    static shuffle(a) {
        let j
        for (let i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];

        }
        return a
    }

    mover_carta(de_que_columna, de_que_fila = 0, a_que_columna) {

        let array_a_mover = this.columnas[de_que_columna].splice(de_que_fila);
        this.columnas[a_que_columna].push(...array_a_mover
    )
        ;
        if (de_que_fila - 1 >= 0)
            this.columnas[de_que_columna][de_que_fila - 1].status = true;
        this.mostrar_baraja()

    }

    mostrar_baraja() {
        let html_str = '';
        let tablero = document.getElementById('tablero');
        for (let i = 0; i < this.columnas.length; i++) {
            html_str += "<div class=columna>";
            for (let j = 0; j < this.columnas[i].length; j++) {
                html_str += "<div class=elemento>";
                //Baraja.mostrar_carta(this.columnas[i][j], (this.columnas[i].length - 1));
                if (this.columnas[i][j].status === true) {
                    html_str += this.columnas[i][j].numero;
                    html_str += this.columnas[i][j].palo
                }
                else {
                    html_str += "🂠"
                }

                html_str += '</div>';
            }
            html_str += '</div>';
        }
        console.log(this.columnas)
        tablero.innerHTML = html_str;
    }

//   organizar_baraja() {
//        let array_columnas;
//
//
//        for (let vagina = 0; vagina < this.array_montones[1].array_cartas.length; vagina++) {
//            array_columnas = [];
//            for (let i = 0; i < this.array_montones.length; i++) {
//
//                array_columnas.push(Baraja.shuffle(this.array_montones[i].array_cartas)[vagina])
//            }
//            this.columnas.push(array_columnas)
//            this.columnas.forEach(columna => {
//                columna[columna.length - 1].status = true;
//            });
//        }
//
//        this.mostrar_baraja()
//    }

    organizar_baraja() {
        let array_columnas;
        for (let i = 0; i < this.array_montones[1].array_cartas.length; i++) {
            array_columnas = []
            for (let j = 0; j < this.array_montones.length; j++) {
                array_columnas.push(this.array_montones[j].array_cartas[i])
            }
            this.columnas.push(array_columnas)
            this.columnas.forEach(columna => {
                columna[columna.length - 1].status = true;
        })
            ;
            console.log(this.columnas + "")

        }
        this.mostrar_baraja()
    }

}

class Monton {
    constructor(palo) {
        this.array_cartas = [];
        this.crear_monton(palo)
    }

    crear_monton(palo) {

        for (let i = 1; i <= 13; i++) {
            this.array_cartas.push(new Carta(i, 1))

        }
    }

}

class Carta {
    constructor(numero, palo = 0) {
        this.posicion = 0

        if (numero === 11) this.numero = 'J';
        else if (numero === 12) this.numero = 'Q';
        else if (numero === 13) this.numero = 'K';
        else this.numero = numero;
        if (palo === 1) this.palo = '♠';
        else if (palo === 2) this.palo = '♦';
        else if (palo === 3) this.palo = '♥';
        else this.palo = '♣';
        this.status = false;
    }
}

b = new Baraja(4)