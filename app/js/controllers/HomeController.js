angular.module("gitblog").controller("HomeController", ["PostsService", function (PostsService) {
  this.posts = [], self = this;

  PostsService.all().then(function (posts) {
    self.posts = posts;
  });
}]);
