angular.module("gitblog", ["ui.router", "ui.bootstrap", "ngSanitize", "ngAnimate", "angular-loading-bar"])
  .config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 100;
  }])
  .run(["ConfigService", "$rootScope", function (ConfigService, $rootScope) {
    ConfigService.get().then(function (config) {
      $rootScope.config = config;
    });
  }]);
