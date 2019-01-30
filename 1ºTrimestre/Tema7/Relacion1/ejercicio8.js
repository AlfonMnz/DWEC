// language=JQuery-CSS
var noticia1 = $('div#noticia1');
var noticia2 = $('div#noticia2');
var noticia3 = $('div#noticia3');

function cambiar_letra() {
    noticia1.css({'font-family': 'Comic Sans MS'});
    noticia2.css({'font-family': 'Algerian'});
    noticia3.css({'font-family': 'Times New Roma'});
}

function iniciarEventos() {
    noticia1.find('h1').click(function () {
        $(this).parent().find('div:not(:hidden)').hide(1500);
        $(this).parent().find('div:hidden').show(1500);
    });
    noticia2.find('h1').click(function () {
        $(this).parent().find('div:not(:hidden)').hide(1500);
        $(this).parent().find('div:hidden').show(1500);

    });
    noticia3.find('h1').click(function () {
        $(this).parent().find('div:not(:hidden)').hide(1500);
        $(this).parent().find('div:hidden').show(1500);
    });

}

function hover() {
    noticia1.mouseenter(function () {
        noticia1.css({"background-color": "blue"})
        console.log("holi")
    });
    noticia1.mouseleave(function () {
        noticia1.css({"background-color": "white"})
    });
    noticia2.mouseenter(function () {
        noticia2.css({"background-color": "blue"})
    });
    noticia2.mouseleave(function () {
        noticia2.css({"background-color": "white"})
    });
    noticia3.mouseenter(function () {
        noticia3.css({"background-color": "blue"})
    });
    noticia3.mouseleave(function () {
        noticia3.css({"background-color": "white"})
    })

}

cambiar_letra();
iniciarEventos();
hover()