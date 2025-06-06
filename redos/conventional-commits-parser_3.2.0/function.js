const measureTime = require("../utils").measureTime;

function exploitFunction(payload) {
  const conventionalCommitsParser = require("conventional-commits-parser");
  let t = measureTime(() => {
    conventionalCommitsParser(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };