angular.module("gitblog").service("AppStateService", ["$rootScope", function ($rootScope) {
  var busyCount = 0;

  this.busy = function () {
    busyCount++;

    $rootScope.busy = true;
  };

  this.available = function () {
    busyCount--;

    if (busyCount === 0) {
      $rootScope.busy = false;
    }
  };

  this.handleHttpError = function () {
    console.error("HttpError", arguments);
  };
}]);
