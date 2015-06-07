"use strict";

angular.module("gitblog").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "views/home.html",
      controller: "HomeController",
      controllerAs: "homeCtrl"
    })
    .state("about", {
      url: "/about",
      templateUrl: "views/about.html"
    })
    .state("post", {
      url: "/post/:slug",
      templateUrl: "views/post.html",
      controller: "PostController",
      controllerAs: "postCtrl"
    });
}]);
