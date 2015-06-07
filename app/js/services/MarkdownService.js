angular.module("gitblog").service("MarkdownService", ["$sanitize", function ($sanitize) {
  this.toHtml = function (markdown) {
    var rendered = marked(markdown, {
      highlight: function (code, lang, callback) {
        return hljs.highlightAuto(code).value;
      }
    });

    var sanitized = $sanitize(rendered);

    return rendered;
  };
}]);
