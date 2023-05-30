am5.ready(function() {
    /**
     * ---------------------------------------
     * This demo was created using amCharts 5.
     * 
     * For more information visit:
     * https://www.amcharts.com/
     * 
     * Documentation is available at:
     * https://www.amcharts.com/docs/v5/
     * ---------------------------------------
     */

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    var colors = am5.ColorSet.new(root, {});


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
        projection: am5map.geoAlbersUsa()
    }));


    // Create polygon series for the world map
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var usaSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow
    }));

    usaSeries.mapPolygons.template.setAll({
        fill: am5.color(0xaaaaaa),
        templateField: "polygonSettings"
    });


    
    // Create point series
    var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {
        latitudeField: "lat",
        longitudeField: "long"
    }));

    pointSeries.bullets.push(function() {
        var circle_yellow = am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0xF3B11C),
            tooltipText: "{name}"
        });

        return am5.Bullet.new(root, {
            sprite: circle_yellow
        });
    });

    pointSeries.data.setAll([
        {
            long: -122.234769,
            lat: 47.213571,
            name: "Sumner, WA"
        },
        {
            long: -122.082657,
            lat: 37.674012,
            name: "Hayward, CA"
        },
        {
            long: -117.462491,
            lat: 34.085692,
            name: `Fontana, CA\nCity of Industry, CA\nOntario, CA\nEastvale, CA`
        },
    ]);


    var pointSeries2 = chart.series.push(am5map.MapPointSeries.new(root, {
        latitudeField: "lat",
        longitudeField: "long"
    }));

    pointSeries2.bullets.push(function() {
        var circle_purple = am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0x7132FF),
            tooltipText: "{name}"
        });

        return am5.Bullet.new(root, {
            sprite: circle_purple
        });
    });

    pointSeries2.data.setAll([
        {
            long: -111.8627,
            lat: 40.76,
            name: "Salt Lake City, UT"
        },
        {
            long: -95.513034,
            lat: 29.607027,
            name: "Missouri City, TX"
        },
        {
            long: -87.619992,
            lat: 41.864665,
            name: "Chicago, IL"
        },
        {
            long: -86.15,
            lat: 39.766667,
            name: "Indianapolis, IN"
        },
    ]);


    var pointSeries3 = chart.series.push(am5map.MapPointSeries.new(root, {
        latitudeField: "lat",
        longitudeField: "long"
    }));

    pointSeries3.bullets.push(function() {
        var circle_pink = am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0xFF007A),
            tooltipText: "{name}"
        });

        return am5.Bullet.new(root, {
            sprite: circle_pink
        });
    });

    pointSeries3.data.setAll([
        {
            long: -83.789534,
            lat: 34.130286,
            name: "Braselton, GA"
        },
        {
            long: -84.2937,
            lat: 33.3618,
            name: "Union City, GA"
        },
        {
            long: -82.505808,
            lat: 28.004875,
            name: "Tampa, FL"
        },
        {
            long: -74.533150,
            lat: 40.324688,
            name: `Cranbury, NJ\nEdison, NJ\nToms River, NJ`
        }
    ]);

}); // end am5.ready()