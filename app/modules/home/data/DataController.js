module.exports = function($scope,Session) {

var sessionDetails=Session.getSession();
  $scope.user = {
    name: sessionDetails.userId,
    email: sessionDetails.emailId,
    gender: "Male"
  };
  $scope.update = function(user) {
      $scope.user = angular.copy(user);
  };

  $scope.reset = function() {
    $scope.user = angular.copy({
      name: sessionDetails.userId,
      email: sessionDetails.emailId,
      gender: "Male"
    });
  };

  $scope.reset();
};
