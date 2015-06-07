"use strict";

angular.module("gitblog").directive("gbNavbar", function () {
  return {
    restrict: "E",
    templateUrl: "components/navbar.html",
    controller: "NavbarController",
    controllerAs: "navbarCtrl"
  };
});
