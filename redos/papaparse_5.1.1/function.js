function exploitFunction(input) {
  const measureTime = require("../utils").measureTime;
  const Papa = require("papaparse");
  const options = { dynamicTyping: true };
  let t = measureTime(function () {
    Papa.parse(input, options);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };