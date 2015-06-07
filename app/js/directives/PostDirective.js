angular.module("gitblog").directive("post", function () {
  return {
    restrict: "E",
    templateUrl: "components/post.html",
    scope: {
      post: "=post"
    },
    controller: "PostDirectiveController",
    controllerAs: "postDirCtrl"
  };
});
