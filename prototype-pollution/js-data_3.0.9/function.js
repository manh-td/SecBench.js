function exploitFunction(payload) {
  const { utils } = require("../../utils"); // Adjust the path as needed
  const source = payload;
  utils.deepMixIn({}, source);
}

module.exports = { exploitFunction };