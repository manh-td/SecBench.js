function exploitFunction(payload) {
  const us = require("underscore.string");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    var agent = us.unescapeHTML(payload.payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };