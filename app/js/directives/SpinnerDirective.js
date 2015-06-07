"use strict";

angular.module("gitblog").directive("spinner", function () {
  return {
    restrict: "E",
    scope: {
      icon: "@icon"
    },
    transclude: true,
    replace: true,
    template: '<div class="text-center"><ng-transclude></ng-transclude><i class="fa fa-{{icon}} fa-spin"></i></div>'
  };
});
