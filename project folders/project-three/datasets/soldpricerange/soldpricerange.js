$(document).ready(function () {
    
    /* PIE CHART THEME */
    Highcharts.theme = {
       /* LINE/BAR/COLUMN/SLICE COLORS - only used for slices for Plex, if we add multiple data sets in future releases, these colors will work with the rendering of other sets */
       colors: ['#DFE9F3', '#B7D6EB', '#8CB8D9', '#6F93B5', '#557193', '#335682', '#203B66'],
	
       /* CHART TITLE */
       title: {
	  style: {
	     color: '#444444',
	     font: '24px "Oswald", Helvetica, Arial, sans-serif'
	  }
       },
    
       /* CHART SUBTITLE */
       subtitle: {
	  style: {
	     color: '#666666',
	     font: '12px "Oswald", Helvetica, Arial, sans-serif'
	  }
       },
	
       /* LINE CHART COLORS */
       plotOptions: {
	   pie: {
	      cursor: 'pointer',
	      borderColor: '#ffffff',
	      borderWidth: 1,
	      shadow: false
	   }
       }    
    }; 
    
    // Apply the theme
    var highchartsOptions = Highcharts.setOptions(Highcharts.theme);       
    
    
//BEGINNING OF CREATING PIE GRAPHS
    
    
    $('#soldpricerange-pie2003').highcharts({
	
	//colors: ['#00000;'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
	legend: {
	    align: 'left',
	    verticalAlign: 'top',
	    layout: 'vertical',
	    x:  55,
	    y: 65
        },
        title: {
            text: '2003' ,
	    style: {
		color: '#FF6839'
	    }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
		showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Sold price range - 2003',
            data: [
		{
                    name: 'Under $149,999',
                    y: 27.2,
                    sliced: true,
                    selected: true
                },
                ['$150,000 to $199,999', 24.3],
                ['$200,000 to $249,999',    13.6],
                ['$250,000 to $299,999',     10.3],
                ['$300,000 to $399,999',    13.1],
                ['$400,000 to $499,999',     5.2],
                ['$500,000 and over',   6.3]
            ]
        }] 
    });
    
    
    
    $('#soldpricerange-pie2008').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2008',
	    style: {
		color: '#FF6839'
	    }
        },
	legend: {
	    align: 'left',
	    verticalAlign: 'top',
	    layout: 'vertical',
	    x:  55,
	    y: 65
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
		showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Sold price range - 2008',
            data: [
		{
                    name: 'Under $149,999',
                    y: 15.9,
                    sliced: true,
                    selected: true
                },
		['$150,000 to $199,999', 21.9],
                ['$200,000 to $249,999',    17.7],
                ['$250,000 to $299,999',     13],
                ['$300,000 to $399,999',    14.2],
                ['$400,000 to $499,999',     7.2],
                ['$500,000 and over',   10.1]
            ]
        }]
    });
    
    
    
    $('#soldpricerange-pie2013').highcharts({
	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2013',
	    style: {
		color: '#FF6839'
	    }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    
        },
	legend: {
	    align: 'left',
	    verticalAlign: 'top',
	    layout: 'vertical',
	    x:  55,
	    y: 65
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
		showInLegend: true
            },
	    point: {
                    events: {
			    click: function(event) {
                            console.log(this);
                            this.update({ color: '#fe5800' }, true, false); }
                    }
                }
        },
        series: [{
            type: 'pie',
            name: 'Sold price range - 2013',
            data: [
		{
                    name: 'Under $149,999',
                    y: 7.9,
                    sliced: true,
                    selected: true
                },
		['$150,000 to $199,999',    18.4],
                ['$200,000 to $249,999',    16.8],
                ['$250,000 to $299,999',     15.6],
                ['$300,000 to $399,999',    19.8],
                ['$400,000 to $499,999',     9.3],
                ['$500,000 and over',   12.1]
            ]
        }]
    });
    
});