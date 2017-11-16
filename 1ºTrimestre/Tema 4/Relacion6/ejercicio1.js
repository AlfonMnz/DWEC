var nombreUsuario;
var contraseña;
let comprobarCooki = () => {
    if (document.cookie===""){
        crearCookie()
    }
    else {
        document.write("HOLA!" + nombreUsuario)
    }

}

let variable = () => {
    contraseña = document.getElementById("contraseña");
    nombreUsuario = document.getElementById("nombreUsuario");


}

let crearCooki = () => {
    document.cookie = "username="+nombreUsuario.value+";"+"contraseña="+contraseña.value
    console.log()

}
variable()