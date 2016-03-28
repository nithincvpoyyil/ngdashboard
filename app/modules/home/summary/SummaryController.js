module.exports = function($scope, $q, $http) {

  $scope.plotData = [];

  var deferred = $q.defer();

  $http.get('../mockData/chartData.json').then(function(res) {
    if (res.status == 200) {
      $scope.plotData = res.data;
      deferred.resolve(res.data);
    } else {
      return deferred.reject([]);
    }
  });

  $scope.yData = {
    "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "ticks": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  };
  return deferred.promise;
};
