angular.module("gitblog").directive("page", function () {
  return {
    restrict: "E",
    templateUrl: "components/page.html",
    scope: {
      page: "@page"
    },
    controller: ["PageService", "$scope", function (PageService, $scope) {
      this.pageData = "", this.hasData = false, self = this;

      PageService.getPage($scope.page).then(function (pageData) {
        self.pageData = pageData;
      }).finally(function () {
        self.hasData = true;
      });
    }],
    controllerAs: "pageCtrl"
  }
});
