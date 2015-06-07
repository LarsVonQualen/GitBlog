"use strict";

angular.module("gitblog").service("RequestService", ["AppStateService", "$http", function (AppStateService, $http) {
  this.get = function (url) {
    AppStateService.busy();

    var request = $http.get(url);

    request.finally(function () {
      AppStateService.available();
    });

    return request;
  };
}])
