module.exports = function($http, $q, Session) {

  var authService = {};

  authService.login = function(credentials) {

    var deferred = $q.defer();


    if (credentials && credentials.username && credentials.password) {

      $http.get('../mockData/userCredentials.json').then(function(credentialsData) {
        if ((credentials.username === credentialsData.data.username) &&
          (credentials.password === credentialsData.data.password)) {
          $http.get('../mockData/user.json').then(function(res) {
            var responseData = res.data;
            Session.create(responseData.sessionId, responseData.user.id,
              responseData.user.role, responseData.user.emailId);
            deferred.resolve(responseData.user);
          });
        } else {
          deferred.reject("failed");
        }
      });

    } else {
      deferred.reject("failed");
    }
    return deferred.promise;
  };

  authService.isAuthenticated = function() {
    return !!Session.userId;
  };

  authService.isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  return authService;
};
