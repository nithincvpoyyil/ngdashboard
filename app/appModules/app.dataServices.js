
module.exports = function($scope) {

  $scope.dataArray=[];

  this.getSummaryData = function() {
    return $scope.dataArray;
  };

  this.addData = function(data) {
    $scope.dataArray.push(data);
  };

};
