function exploitFunction(payload) {
  const jsyaml = require("js-yaml");
  try {
    jsyaml.load(payload);
  } catch (error) {}
}

module.exports = { exploitFunction };