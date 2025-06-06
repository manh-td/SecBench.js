function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  let hljs = require("highlight.js/lib/core");
  let r = require("highlight.js/lib/languages/r");
  hljs.registerLanguage("r", r);
  let t = measureTime(function () {
    console.log('Highlighting payload:', payload); // Add logging for debugging
    let result = hljs.highlight(payload, true).value;
    console.log('Highlighting result:', result); // Add logging for debugging
    return result;
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };