var svgNS = "http://www.w3.org/2000/svg";
let FPS = 60

class Partida {
    constructor() {
        this.nivel = 0;
        this.array_pelotas = [];
        this.canvas = document.getElementById("canvas");
        this.crear_pelotas(2)

    }

    empezar_partida() {

    }

    crear_pelotas(num_pelotas) {
        for (let i = 0; i < num_pelotas; i++) {
            this.array_pelotas.push(new Pelota("blue", this))
        }
    }

    motor_grafico() {
        for (let i = 0; i < this.array_pelotas.length; i++) {
            this.array_pelotas[i].mover()
        }
    }
}

class Pelota {

    constructor(color = "", partida) {
        this.partida = partida
        this.division = 0;
        this.x = 0;
        this.y = 0;
        this.fill = color;
        this.radio = 50
        this.poner_coordenadas();
        this.objeto_svg = this.crear_objeto_svg(this.partida);


        this.pa_derecha = false;
        this.pa_abajo = false;

        setInterval(() => {
            this.motor()
        }, 1000 / FPS);
    }


    poner_coordenadas() {
        this.x = Math.floor(Math.random() * (1000 + 1));
        this.y = Math.floor(Math.random() * (600 + 1));

    }

    crear_objeto_svg(partida) {
        let circulo = document.createElementNS(svgNS, 'circle');
        //image.setAttribute( 'xlink:href', 'pelotaRoja0.png');
        circulo.setAttributeNS(null, "cx", this.x);
        circulo.setAttributeNS(null, "cy", this.y);
        circulo.setAttributeNS(null, "r", this.radio);
        circulo.setAttributeNS(null, "fill", "red")


        partida.canvas.appendChild(circulo);

        return circulo;


        var svgimg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        svg.setAttributeNS('http://www.w3.org/2000/svg', 'width', '200');
        svg.setAttributeNS('http://www.w3.org/2000/svg', 'id', 'test2');
        svgimg.setAttributeNS('http://www.w3.org/2000/svg', 'height', '100');
        svgimg.setAttributeNS('http://www.w3.org/2000/svg', 'width', '100');
    }

    motor() {
        this.mover()
    }


    mover() {

        this.cy = this.objeto_svg.getAttribute("cy")
        this.cx = this.objeto_svg.getAttribute("cx")

        if (!this.pa_abajo) {
            this.objeto_svg.setAttribute("cy", (parseInt(this.objeto_svg.getAttribute("cy")) - 3).toString());
            if (this.cy <= 0) {
                this.pa_abajo = true;

            }
        } else {
            this.objeto_svg.setAttribute("cy", (parseInt(this.objeto_svg.getAttribute("cy")) + 3).toString());
            if (this.cy >= 600) {
                this.pa_abajo = false;
            }
        }
        if (!this.pa_derecha) {
            this.objeto_svg.setAttribute("cx", (parseInt(this.objeto_svg.getAttribute("cx")) - 3).toString());
            if (this.cx <= 0) {
                this.pa_derecha = true;

            }
        } else {
            this.objeto_svg.setAttribute("cx", (parseInt(this.objeto_svg.getAttribute("cx")) + 3).toString());
            if (this.cx >= 1200) {
                this.pa_derecha = false;
            }
        }
        this.colision()

    }

    colision() {
        for (let i = 0; i < this.partida.array_pelotas.length; i++) {
            var dx = this.cx - this.partida.array_pelotas[i].cx;
            var dy = this.cy - this.partida.array_pelotas[i].cy;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.radio + this.partida.array_pelotas[i].radio) {
                this.cx = 0
                this.partida.array_pelotas[i].cx = 1100
                console.log("tocado")
            }
        }
    }

}

class PersonajeTopeGuapo {
    constructor() {
        this.vidas = 3
    }
}

let p = new Partida();