$(function () {
            $('#HouseChart').highcharts({
                title: {
                    text: 'Houses',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['1890', '1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000']
                },
                yAxis: {
                    title: {
                        text: 'Houses'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                 plotOptions: {
                    series: {
                        events: {
                            legendItemClick: function () {
                                var visibility = this.visible ? 'visible' : 'hidden';
                                var series = $('#PeopleChart').highcharts().series[this.index];
                                if (this.visible) series.hide();
                                else series.show();
                                return true;
                            }
                        }
                    }
                },
                series: [{
                    name: 'Barnstable',
                    data: [1000]
                }, {
                    name: 'Bourne',
                    data: [500]
                }, {
                    name: 'Brewster',
                    data: [250]
                }, {
                    name: 'Chatham',
                    data: [750]
                }]
            });
                $('#1900').click(function () {
                var chart = $('#HouseChart').highcharts();
                chart.series[0].addPoint(3052);
                chart.series[1].addPoint(2252);
                chart.series[2].addPoint(1299);
                chart.series[3].addPoint(1784);
            });

            $('#1910').click(function () {
                var chart = $('#HouseChart').highcharts();
                chart.series[0].addPoint(8999);
                chart.series[1].addPoint(5365);
                chart.series[2].addPoint(4560);
                chart.series[3].addPoint(1311);
            });

            $('#1920').click(function () {
                var chart = $('#HouseChart').highcharts();
                chart.series[0].addPoint(15943);
                chart.series[1].addPoint(9428);
                chart.series[2].addPoint(1797);
                chart.series[3].addPoint(12075);
            }); $(function () {
                $('#PeopleChart').highcharts({
                    title: {
                        text: 'Population',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['1890', '1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000']
                    },
                    yAxis: {
                        title: {
                            text: 'Population'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Barnstable',
                        data: [989]
                    }, {
                        name: 'Bourne',
                        data: [395]
                    }, {
                        name: 'Brewster',
                        data: [217]
                    }, {
                        name: 'Chatham',
                        data: [410]
                    }]
                });



                var chart = $('#PeopleChart').highcharts(),
        $button = $('#Bourne');
                $button.click(function () {
                    var series = chart.series[1];
                    if (series.visible) {
                        series.hide();
                        $button.html('Show series');
                    } else {
                        series.show();
                        $button.html('Hide series');
                    }
                });

            });

    
     });