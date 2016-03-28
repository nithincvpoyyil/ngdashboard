module.exports = function() {
  return {
    require: '^tabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
     tabsCtrl.addPane(scope);
    },
    template: require("./partials/ngPane.html"),
    replace: true
  };
};
