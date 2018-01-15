/*
 * Copyright (c) 2018. Esto está hecho por Alfonso Muñoz Sánchez
 */

var apikey = 'b8187916'
let c;
let page = 1

class Pelicula {
    constructor(poster, title, type, year, ImbdID) {
        this.poster = poster;
        this.title = title;
        this.type = type;
        this.ImbdID = ImbdID;
        this.year = year
        this.foto()
    }

    foto() {
        if (this.poster == "N/A") {
            this.poster = "http://atalgaba.com/img/xatalgaba.jpg.pagespeed.ic.Gx-px_oYWl.jpg"
        }
    }
}

class coleccionPeliculas {
    constructor() {
        this.arrayPeliculas = []
    }

    meterPelicula(pelicula) {
        this.arrayPeliculas.push(pelicula)
    }
}

function vagino() {

    limpiarPeliculas()
    obtenerPeliculas(1)

}

function obtenerPeliculas(paje) {

    var texto = $('input').val()

    $.ajax({
        url: "http://www.omdbapi.com/?s=" + texto + "&apikey=" + apikey + "&page=" + paje,
        success: function (res) {
            var array_res = res;

            crearPeliculas(array_res)
        }
    })
}


function crearPeliculas(peliculas) {
    for (let i = 0; i < peliculas.Search.length; i++) {
        c.meterPelicula(new Pelicula(peliculas.Search[i].Poster, peliculas.Search[i].Title, peliculas.Search[i].Type, peliculas.Search[i].Year, peliculas.Search[i].imdbID))
    }
    enmaquetarPeliculas()


}

function enmaquetarPeliculas() {
    let peliculas = c.arrayPeliculas;
    for (let i = 0; i < peliculas.length; i++) {
        $('#cuerpo').append('<div class="pelicula"><a href="http://www.imdb.com/title/'+peliculas[i].ImbdID+'"><img id="' + peliculas[i].ImdbID + '" src="' + peliculas[i].poster + '"></a><p>' + peliculas[i].title + '</p><p>' + peliculas[i].year + '</p></div>');

    }
}

function limpiarPeliculas() {

    $('#cuerpo').empty()
    c = new coleccionPeliculas()
    console.log(c.arrayPeliculas)
}

c = new coleccionPeliculas();
$(document).ready(function () {
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function () {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            page++
            console.log(page)
            obtenerPeliculas(page)


            ;
        }
    });
});