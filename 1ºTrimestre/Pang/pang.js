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
        this.division = 0;
        this.x = 0;
        this.y = 0;
        this.color = color;
        this.poner_coordenadas();
        this.objeto_svg = this.crear_objeto_svg(partida);

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
        //let image = document.createElement('image');
        //image.setAttribute( 'xlink:href', 'pelotaRoja0.png');
        //circulo.setAttributeNS(null, "cx", this.x);
        //circulo.setAttributeNS(null, "cy", this.y);
        //circulo.setAttributeNS(null, "r", "25");
        //circulo.setAttributeNS(null, "fill", "red")
        //circulo.setAttribute(null, "class", "pelota")
        //image.setAttribute("height", "50");
        //image.setAttribute("width", "50");
        //image.setAttribute( 'x', "25");
        //image.setAttribute( 'y', "25");
//
        //partida.canvas.appendChild(image);
//
        ////return circulo;


        var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
        svg.setAttributeNS('http://www.w3.org/2000/svg','width','200');
        svg.setAttributeNS('http://www.w3.org/2000/svg','id','test2');
        svgimg.setAttributeNS('http://www.w3.org/2000/svg','height','100');
        svgimg.setAttributeNS('http://www.w3.org/2000/svg','width','100');
    }

    motor() {
        this.mover()
    }

    mover() {
        this.cy = this.objeto_svg.getAttribute("cy")
        this.cx = this.objeto_svg.getAttribute("cx")
        console.log(this.cx)
        console.log(this.cy)
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

    }

}
class PersonajeTopeGuapo{
    constructor(){
        this.vidas= 3
    }
}
let p = new Partida();