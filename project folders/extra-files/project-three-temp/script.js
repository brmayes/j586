    var unitedStates = [];
    var northeast = [];
    var midwest = [];
    var south = [];
    var west = [];
    
    var us = "";
    var year = [];
    
    
    $(document).ready(function() //runs the functions
      {

        /*$.ajax({ //loads in xml file
		type: "GET",
		url: "myData.xml",
		dataType: "xml",
		success: parseXML
	});*/
	
        $.ajax({ //loads in xml file
		type: "GET",
		url: "datasets/avgsqft.xml",
		dataType: "xml",
		success: parseXML
	});
	
	function parseXML(xml) { 
                    

        $(xml).find('Row').each(function(){ //starts loop to find all people, etc
            var $row = $(this); 
            row = $row.attr("name");
            us = $row.find('UnitedStates').text();
	    
	    year.push(parseInt($row.find('Year').text()));
	    unitedStates.push(parseInt($row.find('UnitedStates').text()));
	    northeast.push(parseInt($row.find('Northeast').text()));
	    midwest.push(parseInt($row.find('Midwest').text()));
	    south.push(parseInt($row.find('South').text()));
	    west.push(parseInt($row.find('West').text()));
            
	    
        });
/*

		    
        $(xml).find('person').each(function(){ //starts loop to find all people, etc
            //console.log("once for every person");
            var $person = $(this); 
            var name = $person.attr("name");
            var description = $person.find('description').text();
            var imageurl = $person.attr('imageurl');
	    otherAwards.push(parseInt($person.find('other-awards').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.

            var html = '<dt> <img class="bioImage" alt="" src="' + imageurl + '" /> </dt>';
            html += '<dd> <span class="loadingPic" alt="Loading" />';
            html += '<p class="name">' + name + '</p>';
            html += '<p> ' + description + '</p>' ;
            html += '</dd>';

            $('dl').append($(html));
            
	    
        });

*/
	console.log(year);
	console.log(us);
	buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
    }
    function buildChart(xml){ //tells how to build chart, but need to add buildChart blah blah in document ready above
	                  
/*	
	var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'line'
        },
        title: {
            text: 'Awards Won'
        },
        xAxis: {
            categories: ['Hearst', 'Marrow', 'Woodward']
        },
        yAxis: {
            title: {
                text: 'Awards'
            }
        },
        series: [{
            name: 'Putlizers',
            data: [1, 0, 4]
        }, {
            name: 'Other',
            data: unitedStates
        }]
    }); */
	
		var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'line'
        },
        title: {
            text: 'Average Square Feet'
        },
        xAxis: {
            //categories: ['Hearst', 'Marrow', 'Woodward']
	    categories: year
        },
        yAxis: {
            title: {
                text: 'Square feet'
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