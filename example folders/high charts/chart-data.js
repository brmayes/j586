//fruits
    $(function () { 
        $('#highcharts').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 9, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            },
            ]
        });
    });

//grades
    $(function () { 
        $('#grades').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'j586 grades'
            },
            xAxis: {
                categories: ['Project 1', 'Project 2']
            },
            yAxis: {
                title: {
                    text: 'Score'
                }
            },
            labels: {
              items: [{
                html: 'This is my label',
                style: {
                        left: '60%',
                        top: '100%'
                }
              }]
            },
            series: [{
                name: 'Brittany',
                data: [92, 93]
            }, {
                name: 'Kaitlyn',
                data: [95, 92]
            } 
            ]
        });
    });

//pie
$(function () {

        // Make monochrome colors and set them as default for all pies
        Highcharts.getOptions().plotOptions.pie.colors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],
                i;
    
            for (i = 0; i < 10; i += 1) {
                // Start out with a darkened base color (negative brighten), and end
                // up with a much brighter color
                colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
            }
            return colors;
        }());
    
        // Build the chart
        $('#piechart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
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
    });
