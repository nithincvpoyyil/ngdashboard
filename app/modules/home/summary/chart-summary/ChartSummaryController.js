module.exports = function($scope) {

  var d3 = require('d3');
  window.d3 = d3;
  var nv=require("nvd3");
  nv.addGraph(function() {
    var chart = nv.models.lineChart()
      .options({
        transitionDuration: 500,
        useInteractiveGuideline: true
      })
      .margin({
        left: 100
      })
      .showLegend(true) //Show the legend.
      .showYAxis(true) //Show the y-axis
      .showXAxis(true) //Show the x-axis
    ;

    chart.yAxis
      .axisLabel('Sales(In millions)')
      .tickFormat(d3.format('.02f'));

    chart.xAxis
      .axisLabel('Months')
      .tickValues($scope.yData.ticks)
      .tickFormat(function(d) {
        return $scope.yData.months[d]
      });


    d3.select('#summary-chart-home svg') //Select the <svg> element you want to render the chart in.
      .datum($scope.plotData)
      .transition().duration(500)
      .call(chart);

    //Update the chart when window resizes.
    nv.utils.windowResize(function() {
      chart.update()
    });
    return chart;
  });



};
