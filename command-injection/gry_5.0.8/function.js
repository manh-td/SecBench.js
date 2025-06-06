function exploitFunction(command) {
  const Repo = require("gry");
  const myRepo = new Repo(".");
  myRepo.pull(command, function () {});
}

module.exports = { exploitFunction };