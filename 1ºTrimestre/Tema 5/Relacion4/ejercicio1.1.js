// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);


function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Partido');
    data.addColumn('number', 'Escaños');
    data.addRows([
        ['PP', 119],
        ['PSOE', 89],
        ['Podemos', 65],
        ['Ciudadanos', 40],
        ['ERC', 9],
        ['DL', 8],
        ['PNV',6],
        ['Grupo Mixto',14]
    ]);

    // Set chart options
    var options = {'title':'Congreso de los diputados',
        'width':800,
        'height':600};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}