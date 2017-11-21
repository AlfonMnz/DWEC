var yvel = 0, xvel = 0;
var up = false, // W or arrow up
    left = false, // A or arrow left
    right = false, // D or arrow right
    down = false; // S or arrow down

// Keydown:
document.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 87 || evt.keyCode == 38) { // up
        up = true;
    }
    if (evt.keyCode == 65 || evt.keyCode == 37) { // left
        left = true;
    }
    if (evt.keyCode == 68 || evt.keyCode == 39) { // right
        right = true;
    }
    if (evt.keyCode == 83 || evt.keyCode == 40) { // down
        down = true;
    }
    if (evt.keyCode == 8 || evt.keyCode == 80) { // del/p
    }
});
// Keyup:
document.addEventListener("keyup", function (evt) {
    if (evt.keyCode == 87 || evt.keyCode == 38) { // up
        up = false;
    }
    if (evt.keyCode == 65 || evt.keyCode == 37) { // left
        left = false;
    }
    if (evt.keyCode == 68 || evt.keyCode == 39) { // right
        right = false;
    }
    if (evt.keyCode == 83 || evt.keyCode == 40) { // down
        down = false;
    }
});

function y(obj){
    return $(obj).offset().top;
}
function x(obj){
    return $(obj).offset().left;
}

setInterval(function(){

    // Keydown/keyup handler:
    if (up) {
        --yvel;
        --yvel;
    } else if (yvel < 0) {
        yvel++;
    }
    if (left) {
        --xvel;
        --xvel;
    } else if (xvel < 0) {
        xvel++;
    }
    if (right) {
        ++xvel;
        ++xvel;
    } else if (xvel > 0) {
        xvel--;
    }
    if (down) {
        ++yvel;
        ++yvel;
    } else if (yvel > 0) {
        yvel--;
    }

    var nextposx = $("circle").offset().left+xvel/16;
    var nextposy = $("circle").offset().top+yvel/16;

    if(nextposy < 0 || nextposy+20 > $(