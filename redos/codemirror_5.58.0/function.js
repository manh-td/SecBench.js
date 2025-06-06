function exploitFunction(payload) {
  const basicCTypes = [
    "int",
    "long",
    "char",
    "short",
    "double",
    "float",
    "unsigned",
    "signed",
    "void",
    "bool",
  ];

  function cTypes(identifier) {
    // Use a safer method to check if the identifier ends with '_t'
    return (
      basicCTypes.includes(identifier) || identifier.endsWith("_t")
    );
  }

  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;

  let str = genstr(65536, "a");
  let t = measureTime(function () {
    cTypes(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };