function exploitFunction(payload) {
  const genstr = require("../utils").genstr;
  const string = require("string");

  const inputString = genstr(payload.length, payload.genstr);
  return string(inputString).underscore();
}

module.exports = { exploitFunction };