
var spline = function(data, title, subtitle, divName, exclude, visible, tooltip) {
    visible = typeof visible !== 'undefined' ? visible : true;
    tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
    var options = {
        chart: {
            renderTo: divName,
            type: 'spline'
        },
        title: {
            text: title},
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        xAxis: {
            categories: [{}],
            gridLineWidth: 1
        },
        tooltip: {
            enabled: tooltip
        },
        yAxis: {
            title: {
                text: ''
            }

        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
    };

    /*$.getJSON(url, function(data) {*/
    ajaxRecord = data[0];
    cnt_all = ajaxRecord.datos.length;

    if (exclude !== null)
    {
        cnt = 0;
        for (var i = 0, j = 0; i < ajaxRecord.datos.length; i++) {
            if (ajaxRecord.datos[i].tipo === exclude) {
                cnt = cnt + 1;
            }
        }
    } else
    {
        cnt = ajaxRecord.datos.length;
    }
    var jsonSerie = [];
    for (var i = 0; i < cnt; i++) {
        jsonSerie.push({});
    }
    $.extend(options, {series: jsonSerie});
    options.xAxis.categories = ajaxRecord.categories;
    for (var i = 0, j = 0; i < cnt_all; i++) {
        if (exclude !== null)
        {
            if (ajaxRecord.datos[i].tipo === exclude) {
                options.series[j].data = ajaxRecord.datos[i].values;
                options.series[j].name = ajaxRecord.datos[i].names;
                j = j + 1;
            }
        } else {
            options.series[i].data = ajaxRecord.datos[i].values;
            options.series[i].name = ajaxRecord.datos[i].names;
            options.series[i].visible = visible;
        }

    }
    var chart = new Highcharts.Chart(options);
    /*});*/
};

var stacked_column = function(data, title, subtitle, divName, exclude, visible, tooltip) {
    tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
    visible = typeof visible !== 'undefined' ? visible : true;
    var options = {
        chart: {
            renderTo: divName,
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        xAxis: {
            categories: [{}]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            enabled: tooltip
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
    };

    /*$.getJSON(url, function(data) {*/
    ajaxRecord = data[0];
    cnt_all = ajaxRecord.datos.length;

    if (exclude !== null)
    {
        cnt = 0;
        for (var i = 0, j = 0; i < ajaxRecord.datos.length; i++) {
            if (ajaxRecord.datos[i].tipo === exclude) {
                cnt = cnt + 1;
            }
        }
    } else
    {
        cnt = ajaxRecord.datos.length;
    }
    var jsonSerie = [];
    for (var i = 0; i < cnt; i++) {
        jsonSerie.push({});
    }
    $.extend(options, {series: jsonSerie});
    options.xAxis.categories = ajaxRecord.categories;
    for (var i = 0, j = 0; i < cnt_all; i++) {
        if (exclude !== null)
        {
            if (ajaxRecord.datos[i].tipo === exclude) {
                options.series[j].data = ajaxRecord.datos[i].values;
                options.series[j].name = ajaxRecord.datos[i].names;
                j = j + 1;
            }
        } else {
            options.series[i].data = ajaxRecord.datos[i].values;
            options.series[i].name = ajaxRecord.datos[i].names;
            options.series[i].visible = visible;
        }

    }
    var chart = new Highcharts.Chart(options);
    /*});*/
};

var column = function(data, title, subtitle, divName, exclude, tooltip) {
    tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
    var options = {
        chart: {
            renderTo: divName,
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        xAxis: {
            categories: [{}]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            enabled: tooltip
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
    };

    /*$.getJSON(url, function(data) {*/
    ajaxRecord = data[0];
    cnt_all = ajaxRecord.datos.length;

    if (exclude !== null)
    {
        cnt = 0;
        for (var i = 0, j = 0; i < ajaxRecord.datos.length; i++) {
            if (ajaxRecord.datos[i].tipo === exclude) {
                cnt = cnt + 1;
            }
        }
    } else
    {
        cnt = ajaxRecord.datos.length;
    }
    var jsonSerie = [];
    for (var i = 0; i < cnt; i++) {
        jsonSerie.push({});
    }
    $.extend(options, {series: jsonSerie});
    options.xAxis.categories = ajaxRecord.categories;
    for (var i = 0, j = 0; i < cnt_all; i++) {
        if (exclude !== null)
        {
            if (ajaxRecord.datos[i].tipo === exclude) {
                options.series[j].data = ajaxRecord.datos[i].values;
                options.series[j].name = ajaxRecord.datos[i].names;
                j = j + 1;
            }
        } else {
            options.series[i].data = ajaxRecord.datos[i].values;
            options.series[i].name = ajaxRecord.datos[i].names;
        }

    }
    var chart = new Highcharts.Chart(options);
    /*});*/
};

var line = function(data, title, subtitle, divName, exclude, visible, tooltip) {
    visible = typeof visible !== 'undefined' ? visible : true;
    tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
    var options = {
        chart: {
            renderTo: divName,
            type: 'line'
        },
        title: {
            text: title,
            x: -20 //center
            , style: {
                font: 'arial',
                fontWeight: 'bold'
            }

        },
        subtitle: {
            text: subtitle,
            x: -20,
            style: {
                fontSize: 'large',
                font: 'arial',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: [{}]
            , style: {
                font: 'arial',
                fontWeight: 'bold'
            }
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        tooltip: {
            enabled: tooltip
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        }
    };

    ajaxRecord = data[0];

    cnt_all = ajaxRecord.datos.length;

    if (exclude !== null)
    {
        cnt = 0;
        for (var i = 0, j = 0; i < ajaxRecord.datos.length; i++) {
            if (ajaxRecord.datos[i].tipo === exclude) {
                cnt = cnt + 1;
            }
        }
    } else
    {
        cnt = ajaxRecord.datos.length;
    }
    var jsonSerie = [];
    for (var i = 0; i < cnt; i++) {
        jsonSerie.push({});
    }
    $.extend(options, {series: jsonSerie});
    options.xAxis.categories = ajaxRecord.categories;

    for (var i = 0, j = 0; i < cnt_all; i++) {
        if (exclude !== null)
        {
            if (ajaxRecord.datos[i].tipo === exclude) {
                options.series[j].data = ajaxRecord.datos[i].values;
                options.series[j].name = ajaxRecord.datos[i].names;
                j = j + 1;
            }
        } else {
            options.series[i].data = ajaxRecord.datos[i].values;
            options.series[i].name = ajaxRecord.datos[i].names;
            options.series[i].visible = visible;
        }

    }
    var chart = new Highcharts.Chart(options);
    /*});*/
};

var column_grp = function(url, title, subtitle, divName, visible, tooltip) {
    visible = typeof visible !== 'undefined' ? visible : true;
    tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
    var options = {
        chart: {
            renderTo: divName,
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        xAxis: {
            categories: [{}]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            enabled: tooltip
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
    };


    $.getJSON(url, function(data) {
        ajaxRecord = data[0];
        cnt = ajaxRecord.datos.length;
        var jsonSerie = [];
        for (var i = 0; i < cnt; i++) {
            jsonSerie.push({});
        }
        $.extend(options, {series: jsonSerie});
        options.xAxis.categories = ajaxRecord.categories;
        for (var i = 0; i < cnt; i++) {
            options.series[i].data = ajaxRecord.datos[i].values;
            options.series[i].name = ajaxRecord.datos[i].names;
            options.series[i].stack = ajaxRecord.datos[i].stack;
            options.series[i].visible = visible;
        }
        var chart = new Highcharts.Chart(options);
    });
};

var spider = function(data, title, subtitle, divName) {
    var options = {
        chart: {
            polar: true,
            type: 'line',
            renderTo: divName
        },
        title: {
            text: title

        },
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        pane: {
            size: '80%'
        },
        xAxis: {
            categories: [{}],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    fontSize: 'medium'
                }
            }
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: ' '
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
    };



    ajaxRecord = data[0];
    cnt = ajaxRecord.datos.length;
    var jsonSerie = [];
    for (var i = 0; i < cnt; i++) {
        jsonSerie.push({});
    }
    $.extend(options, {series: jsonSerie});
    options.xAxis.categories = ajaxRecord.categories;
    for (var i = 0; i < cnt; i++) {
        options.series[i].data = ajaxRecord.datos[i].values;
        options.series[i].name = ajaxRecord.datos[i].names;
        options.series[i].stack = ajaxRecord.datos[i].stack;
    }
    var chart = new Highcharts.Chart(options);

};

var combinado = function(data, title, subtitle, divName) {

    var elementos = 17;
    var options = {
        chart: {
            renderTo: divName
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        xAxis: {
            categories: [{}]
        },
    };

    var jsonSerie = [];
    for (var i = 0; i < elementos; i++) {
        jsonSerie.push({
            type: 'column',
            name: '',
            data: []
        });
    }
    jsonSerie.push({type: 'spline',
        name: '',
        data: [],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    });

    var jsonSerie1 = [];
    for (var i = 0; i < elementos; i++) {
        jsonSerie1.push({
            name: '',
            y: 0,
            color: Highcharts.getOptions().colors[i]
        });
    }

    jsonSerie.push({type: 'pie',
        name: 'Total Jurisdiccion',
        data: jsonSerie1,
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    });
    $.extend(options, {series: jsonSerie});

    /*$.getJSON('prueba_chart.php?callback=?', function(data) {*/
    ajaxRecord = data[0];
    cnt = ajaxRecord.datos.length

    options.xAxis.categories = ajaxRecord.categories;
    for (var i = 0; i < cnt; i++) {
        if (i < (elementos + 1)) {
            options.series[i].name = ajaxRecord.datos[i].names;
            options.series[i].data = ajaxRecord.datos[i].values;
        } else {
            options.series[elementos + 1].data[i - elementos - 1].name = ajaxRecord.datos[i].names;
            options.series[elementos + 1].data[i - elementos - 1].y = ajaxRecord.datos[i].values[0];
        }
    }
    var chart = new Highcharts.Chart(options);

};

var pie = function(datadb, title, subtitle, divName,tooltip) {
tooltip = typeof tooltip !== 'undefined' ? tooltip : false;
    var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            renderTo: divName
        },
        title: {
            text: title

        },
        subtitle: {
            text: subtitle,
            style: {
                fontSize: 'large'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y} ({point.percentage:.2f}%)',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        tooltip: {
            //shared:true,
            //pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            //   '<td style="text-align: right"><b>{point.percentage:.2f} %</b></td></tr>',
            enabled: tooltip
        },
    };

    var jsonSerie = [];
    var jsonSerie1 = [];
    for (var i = 0; i < datadb.length; i++) {
        jsonSerie1.push({
            name: '',
            y: 0
        });
    }
    jsonSerie.push({type: 'pie',
        data: jsonSerie1
    });


    $.extend(options, {series: jsonSerie});
    for (var i = 0; i < datadb.length; i++) {
        options.series[0].data[i].y = datadb[i].values;
        options.series[0].data[i].name = datadb[i].names;
    }
    var chart = new Highcharts.Chart(options);
};