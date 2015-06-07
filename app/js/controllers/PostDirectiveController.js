angular.module("gitblog").controller("PostDirectiveController", ["PostsService", "$scope", function (PostsService, $scope) {
  var self = this;

  this.post = $scope.post;
  this.markdown = "";

  $scope.$watch("post", function (newValue) {
    if (_.isObject(newValue)) {
      self.post = newValue;

      PostsService.getMarkdown(newValue.file).then(function (markdown) {
        self.markdown = markdown;
      });
    }
  });
}]);
