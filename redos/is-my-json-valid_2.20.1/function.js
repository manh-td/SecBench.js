function exploitFunction(payload) {
  const imjv = require("is-my-json-valid");
  const validate = imjv({
    maxLength: 100,
    format: "style",
  });

  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    validate(payload);
  });

  let time = t[0] + t[1] / 1000000000;

  return time;
}

module.exports = { exploitFunction };