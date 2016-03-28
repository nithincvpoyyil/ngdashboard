module.exports = function(ngStorage) {

  this.create = function(sessionId, userId, userRole,emailId) {
    this.sessionId = sessionId;
    this.userId = userId;
    this.userRole = userRole;
    this.emailId = emailId;
    this.emailId = emailId;
    ngStorage.set("sessionId", sessionId);
    ngStorage.set("userId", userId);
    ngStorage.set("emailId", emailId);
    ngStorage.set("userRole", userRole);
  };

  this.destroy = function() {
    this.sessionId = null;
    this.userId = null;
    this.emailId = null;
    this.userRole = null;
    ngStorage.set("sessionId", "");
    ngStorage.set("userId", "");
    ngStorage.set("userRole", "");
    ngStorage.set("emailId", "");
  };

  this.getSession = function() {
    return {
      "sessionId": ngStorage.get("sessionId"),
      "userId": ngStorage.get("userId"),
      "userRole": ngStorage.get("userRole"),
      "emailId": ngStorage.get("emailId")
    };
  };

  this.updateSessionUser = function(userId, userRole,emailId) {
    ngStorage.set("userId", userId);
    ngStorage.set("userRole", userRole);
    ngStorage.set("emailId", emailId);
  };

};
