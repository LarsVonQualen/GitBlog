angular.module("gitblog").controller("PostController", ["PostsService", "$state", "$scope", function (PostsService, $state, $scope) {
  this.post = {}, self = this;

  PostsService.get($state.params.slug).then(function (post) {
    self.post = post;
  });
}]);
