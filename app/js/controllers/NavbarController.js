"use strict";

angular.module("gitblog").controller("NavbarController", ["ConfigService", function (ConfigService) {
  var self = this;

  ConfigService.get().then(function (config) {
    self.brand = config.brand;
  });
}]);
