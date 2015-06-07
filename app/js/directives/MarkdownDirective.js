angular.module("gitblog").directive("markdown", ["MarkdownService", function (MarkdownService) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      data: "=data"
    },
    link: function ($scope, $element) {
      function render() {
        if (_.isString($scope.data)) {
          var html = MarkdownService.toHtml($scope.data);

          $element.html(html);
        } else {
          $element.html("");
        }
      };

      var unsubscribe = $scope.$watch("data", function () {
        render();
      });

      render();
    }
  };
}])
