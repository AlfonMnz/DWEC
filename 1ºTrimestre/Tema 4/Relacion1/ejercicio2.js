function escribir(event) {
    var cordx = event.clientX;
    var cordy = event.clientY;
    var px = document.getElementById("x")
    var py = document.getElementById("y")
    px.innerHTML = ("X = " + cordx)
    py.innerHTML = ("Y = " + cordy)


}

document.addEventListener("mousemove", escribir, false)