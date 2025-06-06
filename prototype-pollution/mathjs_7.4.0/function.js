function exploitFunction(config) {
  var mathMod = require("mathjs");
  const mathjs = mathMod.create(mathMod.all);

  mathjs.config(config);

  return {};
}

module.exports = { exploitFunction };