let mijson;
const caja = document.getElementById("intUsuario");
const perror = document.getElementById("error");

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            TransformarToString(this.responseText);
        }
    };
    xhttp.open("GET", "usuarios.json", true);
    xhttp.send();
}

function TransformarToString(json) {
    var obj = JSON.parse(json);
    mostrarCosa(obj)
}

function mostrarCosa(obj) {
    var esta = false;
    for (let i = 0; i < obj.usuarios.length && !esta; i++) {
        let users = obj.usuarios[i];
        if (caja.value == users.username) {
            perror.innerHTML = "Está en uso";
            esta = true;
        }
        else {
            perror.innerHTML = "Adelante usalo"
        }
    }
}

