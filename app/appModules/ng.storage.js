module.exports = function($window, $injector) {

  var localStorageAvailable;

  // If localStorage defined use localStorage else use cookies
  if ($window && $window.localStorage) {
    localStorageAvailable = true;
  } else {
    localStorageAvailable = false;
  }

  if (localStorageAvailable) {
    this.set = function(what, value) {
      return $window.localStorage.setItem(what, value);
    };

    this.get = function(what) {
      return $window.localStorage.getItem(what);
    };

    this.remove = function(what) {
      return $window.localStorage.removeItem(what);
    };

    this.clear = function() {
      $window.localStorage.clear();
    };
  } else {
    var cookieStorage = $injector.get('cookieStorage');
    this.set = cookieStorage.set;
    this.get = cookieStorage.get;
    this.remove = cookieStorage.remove;
  }
}
