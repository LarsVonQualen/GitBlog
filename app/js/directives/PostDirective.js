"use strict";

angular.module("gitblog").directive("post", function () {
  return {
    restrict: "E",
    templateUrl: "components/post.html",
    scope: {
      post: "=post"
    },
    replace: true
  };
});
