module.exports = function($scope, $state, Session) {

  /**
   * function to logout from the application
   **/
  $scope.logoutApp = function() {
    Session.destroy();
    $state.go("login");
  };

  // Get session if session exists else goto login
  var sessionDetails = Session.getSession();

  if (sessionDetails.sessionId && sessionDetails.userId && sessionDetails.userRole &&
    sessionDetails.emailId) {
    $state.go("home.summary");
  } else {
    $state.go("login");
  }
};
