var gulp = require("gulp"),
    wiredep = require("wiredep").stream,
    minimist = require("minimist"),
    config = require("./config.json"),
    cli = require("cli"),
    inquirer = require("inquirer"),
    js = require("jsonfile"),
    _ = require("lodash");

var knownOptions = [
  {
    string: 'file'
  }
];

var args = minimist(process.argv.slice(2), knownOptions);

gulp.task("publish", function (done) {
  var postslist = require(config.files.postslist)
      newPost = {
        "title": "",
        "slug": "",
        "file": args.file,
        "author": "",
        "publishedAt": ""
      };

  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What's the post title?"
    },
    {
      type: "input",
      name: "slug",
      message: "What's the post slug?"
    },
    {
      type: "input",
      name: "author",
      message: "Who's the author?"
    }
  ], function (answers) {
    newPost.title = answers.title;
    newPost.slug = answers.slug;
    newPost.author = answers.author;
    newPost.publishedAt = Date.now();

    console.log(newPost);
    console.log("\r\n");

    inquirer.prompt([{
      type: "confirm",
      name: "confirmation",
      message: "Does this look okay?"
    }], function (confirmations) {
      if (confirmations.confirmation) {
        cli.spinner("Publishing...");

        postslist.push(newPost);

        postslist.sort(function (a, b) {
          return b.publishedAt - a.publishedAt;
        });

        js.writeFile(config.files.postslist, postslist, function (err) {
          if (err) {
            cli.spinner("Publishing... Error!", true);
            cli.fatal(err);
          } else {
            cli.spinner("Publishing... Done!", true);
          }

          done();
        });
      }
    });
  });
});

gulp.task("unpublish", function (done) {
  var postslist = require(config.files.postslist),
      post = _.findWhere(postslist, {file: args.file});

  if (post === undefined || post === null) {
    cli.fatal("Unable to locate post.");
    done();
    return;
  }

  console.log(post);
  console.log("\r\n");

  inquirer.prompt([{
    type: "confirm",
    name: "confirmUnpublish",
    message: "Are you sure you want to unpublish this post?"
  }], function (answers) {
    cli.spinner("Unpublishing...");

    postslist = postslist.splice(postslist.indexOf(post), 0);

    js.writeFile(config.files.postslist, postslist, function (err) {
      if (err) {
        cli.spinner("Unpublishing... Error!", true);
        cli.fatal(err);
      } else {
        cli.spinner("Unpublishing... Done!", true);
      }

      done();
    });
  });
});

gulp.task("default", ["wiredep"]);
