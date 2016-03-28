module.exports=function($rootScope, $urlRouter,$location,AUTH_EVENTS,$state,$templateCache) {

   $templateCache.put('home-sidebar-template.html', require("../modules/home/partials/sidebar.html"));

   $rootScope.$on('$locationChangeSuccess', function(evt) {
     // Halt state change from even starting
     evt.preventDefault();
     console.warn("locationChangeSuccess",evt,$location.path());
     // Perform custom logic
     var meetsRequirement = true;
     // Continue with the update and state transition if logic allows
     if (meetsRequirement) $urlRouter.sync();
   });

   $rootScope.$on('$stateChangeStart', function(evt) {
     // Halt state change from even starting
     //evt.preventDefault();
     console.warn("StateChange Started",evt,$location.path());
   });

   $rootScope.$on(AUTH_EVENTS.loginSuccess, function(evt) {
     console.info("authentication success",evt,$location.path());
     $state.go("home");
   });

   $rootScope.$on(AUTH_EVENTS.loginFailed, function(evt) {
     console.warn("loginFailed",evt,$location.path());
   });

   $rootScope.$on(AUTH_EVENTS.logoutSuccess, function(evt) {
     // Halt state change from even starting
     //evt.preventDefault();
     console.warn("logoutSuccess",evt,$location.path());
   });

   $rootScope.$on(AUTH_EVENTS.sessionTimeout, function(evt) {
     // Halt state change from even starting
     //evt.preventDefault();
     console.warn("sessionTimeout",evt,$location.path());
   });

   $rootScope.$on(AUTH_EVENTS.notAuthenticated, function(evt) {
     // Halt state change from even starting
     //evt.preventDefault();
     console.warn("notAuthenticated",evt,$location.path());
   });

   $rootScope.$on(AUTH_EVENTS.notAuthorized, function(evt) {
     // Halt state change from even starting
     //evt.preventDefault();
     console.warn("notAuthorized",evt,$location.path());
   });
 }
