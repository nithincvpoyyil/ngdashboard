module.exports = function($scope, $rootScope, AUTH_EVENTS, AuthService, USER_ROLES) {

  $scope.errorMessage = "";
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;

// setting currrent user function
  $scope.setCurrentUser = function(user) {
    $scope.currentUser = user;
  };

  $scope.credentials = {
    username: '',
    password: ''
  };

  // login function
  $scope.login = function(credentials) {

    AuthService.login(credentials).then(function(user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function() {
      $scope.errorMessage = "Authentication Error";
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
};
