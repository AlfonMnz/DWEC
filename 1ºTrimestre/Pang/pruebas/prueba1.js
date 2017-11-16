let canvas = document.getElementById("canvas")
function mover() {
    let py;
    let px;
    px = pelota.getAttribute("x");
    py = pelota.getAttribute("y");
    console.log(px,py)
    pelota.setAttribute("y", (parseInt(pelota.getAttribute("y")) + 3).toString());
}
//setInterval(mover,500)
var svgimg = document.createElementNS('http://www.w3.org/1999/xlink','image');
svgimg.setAttributeNS('http://www.w3.org/1999/xlink','height','100');
svgimg.setAttributeNS('http://www.w3.org/1999/xlink','width','100');
svgimg.setAttributeNS('http://www.w3.org/1999/xlink','id','testimg2');
svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href','http://i.imgur.com/LQIsf.jpg');
svgimg.setAttributeNS('http://www.w3.org/2000/svg','x','0');
svgimg.setAttributeNS('http://www.w3.org/2000/svg','y','0');

canvas.appendChild(svgimg);