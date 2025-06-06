function exploitFunction(url) {
  const gh = require("github-url-to-object");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    gh(url);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };