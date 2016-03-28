module.exports = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state('login', {
    url: '/',
    controller: require("../modules/login/LoginController"),
    template: require("../modules/login/partials/login.html")
  }).state('home', {
    url: '/home',
    controller: require("../modules/home/HomeController.js"),
    template: require("../modules/home/partials/home.html")
  }).state('home.summary', {
    url: '/summary',
    views: {
      '': {
        controller: require("../modules/home/summary/SummaryController.js"),
        template: require("../modules/home/summary/partials/summary.html")
      },
      'summary-chart@home.summary': {
        template: require("../modules/home/summary/chart-summary/partials/summary.html"),
        controller: require("../modules/home/summary/chart-summary/ChartSummaryController")
      },
      'summary-table@home.summary': {
        template: require("../modules/home/summary/table-summary/partials/summary.html"),
        controller: require("../modules/home/summary/table-summary/tableSummaryController")
      }
    }
  }).state('home.data', {
    url: '/data',
    controller: require("../modules/home/data/DataController.js"),
    template: require("../modules/home/data/partials/data.html")
  });
};
