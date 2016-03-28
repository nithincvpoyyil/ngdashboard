module.exports = function(Session) {
  var sessionInjector = {
    request: function(config) {
      config.headers['x-auth-token'] = Session.getSession().sessionId;
      return config;
    }
  };
  return sessionInjector;
}
