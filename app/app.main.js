
// bootstraping the application
var app = require('angular').module('ngdashboard', [require("ui.router")]);

// defining user roles
app.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
});

// auth events defined
app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

// Routing config
app.config(require("./appModules/app.route"));

// App specific event binding
app.run(require("./appModules/app.runFunction"));

// Common templates are defined
app.run(require("./appModules/app.template"));

// Service for session storage
app.service("ngStorage", require("./appModules/ng.storage"));

// service for session Managment
app.service('Session', require("./appModules/app.sessionService"));

// Authentication services are defined as factory module
app.factory('AuthService', require("./appModules/app.authFactory"));

// Session injector in http requests
app.factory('sessionInjector', require("./appModules/app.sessionInjector"));

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('sessionInjector');
}]);

// New directives are defined for tab
app.directive('tabs', require("./appDirectives/ngTab/ngTab.js"));
app.directive('pane', require("./appDirectives/ngTab/ngPane.js"));
