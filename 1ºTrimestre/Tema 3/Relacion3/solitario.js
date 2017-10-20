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


    static shuffle(a) {
        let j
        for (let i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];

        }
        return a
    }

    static mostrar_carta(carta) {
        var status = Math.floor(Math.random() * 2)
        if (status === 1) {
            carta.status = true;
        }
    }

    organizar_baraja() {
        for (let i = 0; i < this.array_montones.length; i++) {
            document.write("<ul>montón " + i);
            Baraja.shuffle(this.array_montones[i].array_cartas)
            for (let j = 0; j < this.array_montones[i].array_cartas.length; j++) {
                Baraja.mostrar_carta(this.array_montones[i].array_cartas[j])
                if (this.array_montones[i].array_cartas[j].status === false) {
                    document.write("<li> ||  </li>")
                }
                else

                    document.write("<li>" + this.array_montones[i].array_cartas[j].numero + " || " + this.array_montones[1].array_cartas[j].palo + "</li>")
            }
            document.write("</ul>")
        }

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

b = new Baraja(90)
