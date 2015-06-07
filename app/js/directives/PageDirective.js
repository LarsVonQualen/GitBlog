angular.module("gitblog").directive("page", function () {
  return {
    restrict: "E",
    templateUrl: "components/page.html",
    scope: {
      page: "@page"
    },
    controller: ["RequestService", "$scope", function (RequestService, $scope) {
      this.pageData = "", self = this;

      RequestService.get(["pages/", $scope.page].join("")).then(function (response) {
        self.pageData = response.data;
      });
    }],
    controllerAs: "pageCtrl"
  }
});
