const canvas = document.getElementById("canvas");
const NS_svg = "http://www.w3.org/2000/svg";

class Ball {
    constructor() {
        this.canvas = canvas;
        this.radio = 50;
        this.x = 50;
        this.y = 50;
        this.fill = "red";
        this.objeto = this.crear_pelota_svg();
        this.velx = 1;
        this.vely = 1;
        this.HotWheelsVelocidadATope()
        setInterval(() => {
            this.mover()
        }, 1000 / 60);


    }

    HotWheelsVelocidadATope() {
        this.velx = Math.floor(Math.random() * (6 + 1));
        this.vely = Math.floor(Math.random() * (6 + 1));
    }

    crear_pelota_svg() {
        let new_pelota = document.createElementNS(NS_svg, "circle");
        new_pelota.setAttributeNS(null, "cx", this.x);
        new_pelota.setAttributeNS(null, "cy", this.y);
        new_pelota.setAttributeNS(null, "r", this.radio);

        new_pelota.setAttributeNS(null, "fill", this.fill);
        canvas.appendChild(new_pelota);
        return new_pelota;

    }

    mover() {
        this.objeto_y = this.objeto.getAttribute("cy");

        this.objeto_x = this.objeto.getAttribute("cx");


        if (this.objeto_x > 1200 - this.radio || this.objeto_x < this.radio) {

            this.velx *= -1
        }

        this.objeto.setAttribute("cx", (parseInt(this.objeto.getAttribute("cx")) + this.velx).toString());
        if (this.objeto_y > 600 - this.radio || this.objeto_y < this.radio) {
            this.vely *= -1
        }

        this.objeto.setAttribute("cx", (parseInt(this.objeto.getAttribute("cx")) + this.velx).toString());
        this.objeto.setAttribute("cy", (parseInt(this.objeto.getAttribute("cy")) + this.vely).toString());


    }

}

function obtener_coordenadas(event) {
    console.log(event.x)
    console.log(event.y)


}
function mover(event) {
    mune

}

b = new Ball();
p = new Ball();

