angular.module("gitblog").service("PostsService", ["RequestService", "$q", function (RequestService, $q) {
  var posts = null, postCache = [], self = this;

  var getPosts = function () {
    return $q(function (resolve, reject) {
      if (posts === null) {
        RequestService.get("posts.json").then(function (response) {
          posts = response.data;

          resolve(posts);
        }, function () {
          reject();
        });
      } else {
        resolve(posts);
      }
    });
  };

  this.all = function () {
    return getPosts();
  };

  this.get = function (slug) {
    return $q(function (resolve, reject) {
      self.all().then(function (posts) {
        var post = _.findWhere(posts, {slug: slug});

        if (post !== undefined && post !== null) {
          resolve(post);
        } else {
          reject();
        }
      }, reject);
    });
  };

  this.getMarkdown = function (file) {
    return $q(function (resolve, reject) {
      if (file !== undefined && file !== null && _.isString(file)) {
        var cachedContent = _.findWhere(postCache, {file: file});

        if (cachedContent !== undefined && cachedContent !== null) {
          resolve(cachedContent.data);
        } else {
          RequestService.get(["posts/", file].join("")).then(function (response) {
            postCache.push({
              file: file,
              data: response.data
            });

            resolve(response.data);
          }, reject);
        }
      } else {
        reject();
      }
    });
  };
}]);
