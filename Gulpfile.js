var gulp = require("gulp"),
    conf = require("./Gulpconf.json"),
    wiredep = require("wiredep").stream;



gulp.task("wiredep", function () {
  gulp.src(conf.paths.index)
    .pipe(wiredep())
    .pipe(gulp.dest(conf.paths.build));
});

gulp.task("default", ["wiredep"]);
