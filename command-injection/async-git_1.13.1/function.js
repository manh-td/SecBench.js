async function exploitFunction(payload) {
  const git = require("async-git");

  try {
    await git.reset(payload);
  } catch (e) {}
}

module.exports = { exploitFunction };