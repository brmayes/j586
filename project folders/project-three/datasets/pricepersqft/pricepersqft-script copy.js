var yearASF = [];
var under60 = [];
var range60to69 = [];
var range70to79 = [];
var range80to89 = [];
var range90to99 = [];
var range100to124 = [];
var range125to149 = [];
var range150andover = [];




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
            under60.push(parseInt($row.find('under60').text()));
            range60to69.push(parseInt($row.find('range60to69').text()));
            range70to79.push(parseInt($row.find('range70to79').text()));
            range80to89.push(parseInt($row.find('range80to89').text()));
            range90to99.push(parseInt($row.find('range90to99').text()));
            range100to124.push(parseInt($row.find('range100to124').text()));
            range125to149.push(parseInt($row.find('range125to149').text()));
            range150andover.push(parseInt($row.find('range150andover').text()));
        });
        
        console.log(under60);
        buildChart();
	buildCharts();//finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
    }
    
    /*
    function buildCharts(xml) { //tells how to build chart, but need to add buildChart blah blah in document ready above
        var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'avgsqft-linechart',
            type: 'line'
            },
        title: {
            text: 'Average Square Feet'
            },
        xAxis: {
            categories: years
            },
        yAxis: {
            title: {
            text: 'Square feet'
            }
        },
	plotOptions: {
	    marker: {
                    enabled: false
                }
	    },
        series: [
	    {
            name: 'Northeast',
            data: northeast
            }, {
            name: 'Midwest',
            data: midwest
            }, {
            name: 'South',
            data: south
            }, {
            name: 'West',
            data: west
            }, {
	    name: 'United States',
            data: unitedStates
            }
	    ]
        });
    }*/
    
	function buildChart(xml) {
        var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'pricepersqft',
            type: 'column'
            },
	    title: {
		text: 'Price Per Square Foot'
	    },
	    xAxis: {
		categories: yearASF,
		crosshair: true
	    },
	    yAxis: {
		min: 0,
		title: {
		    text: 'Price per square foot'
		}
	    },
	    tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	    },
	    plotOptions: {
		column: {
		    pointPadding: 0.2,
		    borderWidth: 0
		}
	    },
	    series: [
		{
		name: 'Under $60.00',
		data: under60
		}, {
		name: '$60.00 to $69.99',
		data: range60to69
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
		name: '125.00 to $149.99',
		data: range125to149
		}, {
		name: '$150.00 and over',
		data: range150andover
		},
	    ]
	});
    }
});

