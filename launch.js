require("child_process")
    .exec("jekyll build --watch")
    .stdout.on("data", console.log);
