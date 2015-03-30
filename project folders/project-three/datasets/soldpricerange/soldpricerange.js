var pr1 = [];
var pr2 = [];
var pr3 = [];
var pr4 = [];
var pr5 = [];
var pr6 = [];
var pr7 = [];
var pr8 = [];
var pr9 = [];
var year = [];


$(document).ready(function() { //runs the function
    
    $.ajax({ //loads in xml file
        type: "GET",
        url: "datasets/soldpricerange/soldpricerange.xml",
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
            renderTo: 'soldpricerange-pie2003',
            type: 'pie'
            },
        title: {
            text: 'Sold Price Range'
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
        /*series: [{
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
        */
	
	series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
	});
	
    }	
});