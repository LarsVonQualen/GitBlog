var cli = require("cli"),
    _ = require("lodash"),
    config = require("./config.json"),
    inquirer = require("inquirer"),
    js = require("jsonfile");

cli.parse(null, {
  publish: ["Publish a new post"]
});

var commands = {
  publish: function () {
    if (!_.isString(cli.args[0])) {
      cli.fatal("Specify a filename.");
      return;
    }

    var postslist = require(config.files.postslist)
        newPost = {
          "title": "",
          "slug": "",
          "file": cli.args[0],
          "author": "",
          "publishedAt": ""
        };

    if (!_.isArray(postslist)) {
      cli.fatal("Herp derp has to be a list");
      return;
    }

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
          })
        }
      });
    });
  }
};

if (commands[cli.command] !== undefined && _.isFunction(commands[cli.command])) {
  commands[cli.command]();
} else {
  cli.fatal("Unknown command.")
}
