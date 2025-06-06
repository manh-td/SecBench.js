function exploitFunction(payload) {
  const a = require("corenlp-js-prefab");
  try {
    a.process(payload);
  } catch (error) {}
}

module.exports = { exploitFunction };