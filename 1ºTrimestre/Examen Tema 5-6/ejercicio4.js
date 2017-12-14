// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var dato1 = 1452;
    var dato2 = 2360;
    var dato3 = 4021;
    var dato4 = 1300;
    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Población', {role: 'style'}],
        [2011, 0, 'color: Blue; opacity:0.1'],
        [2012, 0, 'color: Red; opacity:0.5'],
        [2013, 0, 'color : Pink; opacity:0.9'],
        [2014, 0, 'color :Yellow;opacity:1']
    ]);
    // var data = new google.visualization.DataTable();
    // data.addColumn('string', 'Partido');
    // data.addColumn('number', 'Escaños');
    // data.addRows([

    // ]);

    // Set chart options
    var options = {
        'title': 'Evolución de la población zurda en Badajoz',
        'width': 800,
        'height': 600,
        'chartArea': {backgroundColor: 'grey'}

    };


    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
    chart.draw(data, options);
}