const HTML = require("html-parse-stringify");

function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  let html = payload;
  let t = measureTime(function () {
    let ast = HTML.parse(html);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };