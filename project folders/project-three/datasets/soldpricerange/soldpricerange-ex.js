$(function () {
    $('#soldpricerange-pie2003').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Number of New Single-Family Houses Sold by Sales Price Range, 2003'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Sold price range - 2003',
            data: [
                ['Under $125,000',   13.8],
                ['$125,000 to $149,999',       13.4],
		['$150,000 to $199,999', 24.3],
                ['$200,000 to $249,999',    13.6],
                ['$250,000 to $299,999',     10.3],
                ['$300,000 to $399,999',    13.1],
                ['$400,000 to $499,999',     5.2],
                ['$500,000 to $749,999',     4.7],
                ['$750,000 and over',   1.6]
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
            text: 'Number of New Single-Family Houses Sold by Sales Price Range, 2008'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Sold price range - 2008',
            data: [
                ['Under $125,000',   6.4],
                ['$125,000 to $149,999',       9.5],
		['$150,000 to $199,999', 21.9],
                ['$200,000 to $249,999',    17.7],
                ['$250,000 to $299,999',     13],
                ['$300,000 to $399,999',    14.2],
                ['$400,000 to $499,999',     7.2],
                ['$500,000 to $749,999',     6.4],
                ['$750,000 and over',   3.7]
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
            text: 'Number of New Single-Family Houses Sold by Sales Price Range, 2013'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Sold price range - 2013',
            data: [
                ['Under $125,000',   2.1],
                ['$125,000 to $149,999',     5.8],
		['$150,000 to $199,999',    18.4],
                ['$200,000 to $249,999',    16.8],
                ['$250,000 to $299,999',     15.6],
                ['$300,000 to $399,999',    19.8],
                ['$400,000 to $499,999',     9.3],
                ['$500,000 to $749,999',     8.4],
                ['$750,000 and over',   3.7]
            ]
        }]
    });
    
});