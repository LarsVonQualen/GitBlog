"use strict";

angular.module("gitblog").controller("HomeController", ["PostsService", "AppStateService", function (PostsService, AppStateService) {
  this.posts = [], self = this;

  PostsService.all().then(function (posts) {
    self.posts = posts;
  });
}]);
