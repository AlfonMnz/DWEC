
function dado() {

    var dado1 = Math.floor(Math.random()*6)+1;
    var dado2 = Math.floor(Math.random()*6)+1;

    return dado1,dado2
}

function contar() {
    var array_res1 = Array(6)
    for (i=0; i<=array_res1.length;i++){
        array_res1[i]= new Array(6).fill(0)
    }

    var array_final_feliz = Array(13).fill(0)
    for (i=0;i<=36000;i++){
        array_final_feliz[dado()]+=1
    }
    return array_final_feliz
}
console.log(contar())