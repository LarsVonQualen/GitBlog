"use strict";

angular.module("gitblog").directive("gbNavbarLink", function () {
  return {
    restrict: "E",
    scope: {
      state: "@state"
    },
    transclude: true,
    replace: true,
    template: '<li ui-sref-active="active"><a ui-sref="{{state}}"><ng-transclude></ng-transclude></a></li>'
  };
});
