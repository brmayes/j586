var unitedStates = [];
var northeast = [];
var midwest = [];
var south = [];
var west = [];
var year = [];


$(document).ready(function() { //runs the function
    
    $.ajax({ //loads in xml file
        type: "GET",
        url: "datasets/avqsqft/avgsqft.xml",
        dataType: "xml",
        success: parseXML
    });
    
    function parseXML(xml) { 
        $(xml).find('Row').each(function() { //starts loop to find all people, etc
            var $row = $(this); 	    
            year.push(parseInt($row.find('Year').text()));
            unitedStates.push(parseInt($row.find('UnitedStates').text()));
            northeast.push(parseInt($row.find('Northeast').text()));
            midwest.push(parseInt($row.find('Midwest').text()));
            south.push(parseInt($row.find('South').text()));
            west.push(parseInt($row.find('West').text()));
        });
        
        //console.log(year);
        buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
    }
    
    function buildChart(xml) { //tells how to build chart, but need to add buildChart blah blah in document ready above
        var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'avgsqft-linechart',
            type: 'line'
            },
        title: {
            text: 'Average Square Feet'
            },
        xAxis: {
            categories: year
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
        series: [{
            name: 'United States',
            data: unitedStates
            }, {
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
            }]
        });
    }	
});