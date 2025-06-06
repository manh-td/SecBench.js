const sanitize = require("sanitize");

function exploitFunction(payload) {
  const sanitizer = sanitize();
  const t = require("../utils").measureTime(() => {
    sanitizer.my.url(payload);
  });
  const time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };