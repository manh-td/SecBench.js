function exploitFunction(payload) {
  const HTML = require("html-parse-stringify2");
  const measureTime = require("../utils").measureTime;

  const html = payload.html;
  let t = measureTime(function () {
    let ast = HTML.parse(html);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };