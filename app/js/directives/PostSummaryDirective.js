angular.module("gitblog").directive("postSummary", function () {
  return {
    restrict: "E",
    templateUrl: "components/post-summary.html",
    scope: {
      post: "=post"
    },
    replace: true
  };
});
