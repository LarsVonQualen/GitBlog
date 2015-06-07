angular.module("gitblog").controller("PostController", ["PostsService", "$state", "$scope", function (PostsService, $state, $scope) {
  this.post = {}, this.postReady = false, self = this;

  PostsService.get($state.params.slug).then(function (post) {
    self.post = post;

    PostsService.getMarkdown(self.post.file).then(function (markdown) {
      self.post.markdown = markdown;
    }).finally(function () {
      self.postReady = true;
    });
  }).catch(function () {
    self.postReady = true;
  });
}]);
