function exploitFunction(jsonInput) {
  const dJSON = require("dirty-json");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    dJSON.parse(jsonInput);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };