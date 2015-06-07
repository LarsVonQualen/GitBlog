angular.module("gitblog").service("ConfigService", ["RequestService", "$q", function (RequestService, $q) {
  var conf = null, self = this;

  this.get = function () {
    return $q(function (resolve, reject) {
      if (conf === null) {
        RequestService.get("config.json").then(function (response) {
          conf = response.data;

          resolve(conf);
        }, function () {
          reject();
        });
      } else {
        resolve(conf);
      }
    });
  };
}])
