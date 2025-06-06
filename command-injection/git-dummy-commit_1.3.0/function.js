function exploitFunction(command) {
  const gitDummyCommit = require("git-dummy-commit");
  gitDummyCommit(command);
}

module.exports = { exploitFunction };