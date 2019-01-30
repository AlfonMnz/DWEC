google.charts.load('current', {'packages': ['geochart'], 'mapsApiKey': 'AIzaSyDLWKj24fuBdJV0YOkrLdLBfSTALtH7Mpk'})
google.charts.setOnLoadCallback(dibujar_mapa)

function dibujar_mapa() {
    var data = google.visualization.arrayToDataTable([
        ['Pais', 'Numero de visitantes'],
        ['Spain', 619619],
        ['France', 9999]
    ])


    var options = {region: '150'}
    var chart = new google.visualization.GeoChart(document.getElementById("holi"))
    chart.draw(data, options)
}