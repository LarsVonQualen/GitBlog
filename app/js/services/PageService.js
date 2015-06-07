"use strict";

angular.module("gitblog").service("PageService", ["RequestService", "$q", function (RequestService, $q) {
  var self = this, pageCache = [];

  this.getPage = function (page) {
    return $q(function (resolve, reject) {
      var cachedPage = _.findWhere(pageCache, {page: page});

      if (_.isObject(cachedPage)) {
        resolve(cachedPage.data);
      } else {
        RequestService.get(["pages/", page, ".md"].join("")).then(function (response) {
          pageCache.push({
            page: page,
            data: response.data
          });

          resolve(response.data);
        }).finally(function () {
          self.hasData = true;
        });
      }
    });
  };
}]);
