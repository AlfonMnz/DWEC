function cambiarTema() {
    console.log("tema cambiado")
    let h1 = document.getElementById("h1");
    h1.style.fill = "red"
    let p1 = document.getElementById("p1");
    p1.style.fill = "yellow"
    let p2 = document.getElementById("p2");
    p2.style.fill = "red"
    let principal = document.getElementById("principal")
    principal.style.backgroundImage = "fondo.jpg"

}