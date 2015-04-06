var yearASF = [];
var under69 = [];
var range70to79 = [];
var range80to89 = [];
var range90to99 = [];
var range100to124 = [];
var range125andover = [];




$(document).ready(function() { //runs the function
    
    $.ajax({ //loads in xml file
        type: "GET",
        url: "datasets/pricepersqft/pricepersqft.xml",
        dataType: "xml",
        success: parseXML
    });
    
    function parseXML(xml) { 
        $(xml).find('Row').each(function() { //starts loop to find all people, etc
            var $row = $(this);
            //yearASF = $row.attr("name");
            yearASF.push(parseInt($row.find('Year').text()));
            under69.push(parseInt($row.find('under69').text()));
            range70to79.push(parseInt($row.find('range70to79').text()));
            range80to89.push(parseInt($row.find('range80to89').text()));
            range90to99.push(parseInt($row.find('range90to99').text()));
            range100to124.push(parseInt($row.find('range100to124').text()));
            range125andover.push(parseInt($row.find('range125andover').text()));
        });
        
        buildChart();
	buildCharts();//finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
    }

    
	function buildChart(xml) {
	    var chart = new Highcharts.Chart({
	    chart: {
		renderTo: 'pricepersqft',
		type: 'column'
		},
		title: {
		    text: 'Breakdown of Price Per Square Foot'
		},
		xAxis: {
		    categories: yearASF,
		    crosshair: true
		},
	    yAxis: {
		min: 0,
		title: {
		    text: 'Percent Distribution'
		}
	    },
	    tooltip: {
		pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
		shared: true
	    },
	    plotOptions: {
		column: {
		    stacking: 'percent'
		}
	    },
	    series: [
		{
		name: 'Under $69.99',
		data: under69
		}, {
		name: '$70.00 to $79.99',
		data: range70to79
		}, {
		name: '$80.00 to $89.99',
		data: range80to89
		}, {
		name: '$90.00 to $99.99',
		data: range90to99
		}, {
		name: '$100.00 to $124.99',
		data: range100to124
		}, {
		name: '125.00 and over',
		data: range125andover
		}
	    ]
	});


    }
});

