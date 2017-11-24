// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
function aleatorio() {
    
}

function drawChart() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños', {role: 'style'}],
        ['PP', 119, "blue"],
        ['PSOE', 89, "red"],
        ['Podemos', 65,"purple"],
        ['Ciudadanos', 40, "orange"],
        ['ERC', 9,"green"],
        ['DL', 8, "yellow"],
        ['PNV', 6, "Black"],
        ['Grupo Mixto', 14, "pink"]
    ])
    // var data = new google.visualization.DataTable();
    // data.addColumn('string', 'Partido');
    // data.addColumn('number', 'Escaños');
    // data.addRows([

    // ]);

    // Set chart options
    var options = {
        'title': 'Congreso de los diputados',
        'width': 800,
        'height': 600

    };


    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
    chart.draw(data, options);
}