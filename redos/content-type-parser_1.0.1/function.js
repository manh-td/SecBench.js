const measureTime = require("../utils").measureTime;
const contentTypeParser = require("content-type-parser");

function exploitFunction(payload) {
  let t = measureTime(function () {
    contentTypeParser(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };